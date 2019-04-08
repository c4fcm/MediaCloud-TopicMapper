import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';

const localMessages = {
  intro: { id: 'focus.create.confirm.nytTheme.intro', defaultMessage: 'We will create 5 subtopics:' },
};

const NytThemeSummary = (props) => {
  const { counts } = props;
  return (
    <React.Fragment>
      <p><FormattedMessage {...localMessages.intro} /></p>
      <ul>
        {counts.map(ctry => <li>{ctry.label}</li>)}
      </ul>
    </React.Fragment>
  );
};

NytThemeSummary.propTypes = {
  // from parent
  topicId: PropTypes.number.isRequired,
  formValues: PropTypes.object.isRequired,
  counts: PropTypes.object.isRequired,
  // form context
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  fetchStatus: state.topics.selected.focalSets.create.nytThemeStoryCounts.fetchStatus,
  counts: state.topics.selected.focalSets.create.nytThemeStoryCounts.story_counts,
});

export default
injectIntl(
  connect(mapStateToProps)(
    NytThemeSummary
  )
);
