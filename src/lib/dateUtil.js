import moment from 'moment';

export const STORY_PUB_DATE_UNDATEABLE = 'undateable';

const SOLR_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ssZ';

const GAP_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ssZ';

const STORY_PUBLISH_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const SOURCE_SUGGESTION_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const JOB_STATUS_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const TOPIC_DATE_FORMAT = 'YYYY-MM-DD';

// "2017-04-13 12:26:59.649513"
const SNAPSHOT_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSSSSS';

export function topicDateToMoment(topicDate, strict = true) {
  return moment(topicDate, TOPIC_DATE_FORMAT, strict);
}

export function snapshotDateToMoment(snapshotDateStr, strict = false) {
  return moment(snapshotDateStr, SNAPSHOT_DATE_FORMAT, strict);
}

export function jobStatusDateToMoment(statusDate, strict = true) {
  return moment(statusDate, JOB_STATUS_DATE_FORMAT, strict);
}

export function sourceSuggestionDateToMoment(suggestionDate, strict = true) {
  return moment(suggestionDate.substring(0, SOURCE_SUGGESTION_DATE_FORMAT.length),
    SOURCE_SUGGESTION_DATE_FORMAT, strict);
}

function solrDateToMoment(solrDateString, strict = true) {
  return moment(solrDateString, SOLR_DATE_FORMAT, strict);
}

export function storyPubDateToMoment(solrDateString, strict = true) {
  return moment(solrDateString, STORY_PUBLISH_DATE_FORMAT, strict);
}

export function storyPubDateToTimestamp(solrDateString, strict = true) {
  return storyPubDateToMoment(solrDateString, strict).valueOf();
}

function gapDateToMomemt(gapDateString, strict = true) {
  return moment(gapDateString, GAP_DATE_FORMAT, strict);
}


// Helper to change solr dates (2015-12-14T00:00:00Z) into javascript date ojects
export function calcSentences(countsMap) {
  let sentenceCount = 0;
  Object.keys(countsMap).forEach((k) => {
    if (k !== 'end' && k !== 'gap' && k !== 'start') {
      const v = countsMap[k];
      sentenceCount += v;
    }
  });
  return sentenceCount;
}
// Helper to change solr dates (2015-12-14T00:00:00Z) into javascript date ojects
export function cleanDateCounts(countsMap) {
  const countsArray = [];
  Object.keys(countsMap).forEach((k) => {
    if (k !== 'end' && k !== 'gap' && k !== 'start') {
      const v = countsMap[k];
      const timestamp = solrDateToMoment(k).valueOf();
      countsArray.push({ date: timestamp, count: v });
    }
  });
  return countsArray.sort((a, b) => a.date - b.date);
}

// Turn a gap list into a list of objects with from/to/color attributes, suitable for use as plot bands in HighCharts
export function cleanCoverageGaps(gapList) {
  let plotBands = [];
  if (gapList === null) {
    return plotBands;
  }
  plotBands = gapList.map((gap) => {
    const weekStart = gapDateToMomemt(gap.stat_week).valueOf();
    const weekEnd = weekStart + (604800 * 1000);    // + one week
    return {
      from: weekStart,
      to: weekEnd,
      color: 'rgba(255, 0, 0, .6)',
    };
  });
  return plotBands;
}
