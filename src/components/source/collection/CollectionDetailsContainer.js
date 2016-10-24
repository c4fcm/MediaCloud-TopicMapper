import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import { select, fetchCollectionDetails } from '../../../actions/sourceActions';
import composeAsyncContainer from '../../common/AsyncContainer';
import CollectionBasicInfo from './CollectionBasicInfo';
import SourceList from './SourceList';
import CollectionSentenceCountContainer from './CollectionSentenceCountContainer';
import CollectionTopWordsContainer from './CollectionTopWordsContainer';
import CollectionGeographyContainer from './CollectionGeographyContainer';

const localMessages = {
  searchNow: { id: 'collection.basicInfo.searchNow', defaultMessage: 'Search Now' },
  collectionDetailsTitle: { id: 'collection.details.title', defaultMessage: 'Collection: {name}' },
  collectionDetailsSourcesTitle: { id: 'collection.details.sources.title', defaultMessage: 'Sources' },
  collectionDetailsSourcesIntro: { id: 'collection.details.sources.intro',
    defaultMessage: 'This collection includes {count, plural,\n =0 {no media sources} \n =1 {one media source} \n other {# media sources}\n}.',
  },
  collectionDetailsTopWordsInfo: { id: 'collection.details.words.info',
    defaultMessage: 'This wordcloud shows you the most commonly used words in the Collection - {name} (based on a sample of sentences). Click a word to load a Dashboard search showing you how {name} writes about it.' },
  collectionDetailsMapInfo: { id: 'collection.details.map.info',
    defaultMessage: 'Here is a heatmap of countries mentioned by {name} (based on a sample of sentences). Darker countried are mentioned more. Click a country to load a Dashboard search showing you how the {name} covers it.' },
};

const CollectionDetailsContainer = (props) => {
  const { collectionId, collection, handleDashboardClick, handleWordCloudClick, handleCountryClick } = props;
  const { formatMessage } = props.intl;
  const filename = `SentencesOverTime-Collection-${collectionId}`;
  return (
    <Grid className="details collection-details">
      <Row>
        <Col lg={8}>
          <h1>
            <FormattedMessage {...localMessages.collectionDetailsTitle} values={{ name: collection.label }} />
            <small className="id-number">#{collection.id}</small>
          </h1>
        </Col>
        <Col lg={4}>
          <RaisedButton
            style={{ float: 'right' }}
            label={formatMessage(localMessages.searchNow)}
            primary
            onClick={handleDashboardClick}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8} md={8} sm={12}>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <CollectionBasicInfo collection={collection} />
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <CollectionSentenceCountContainer collectionId={collectionId} filename={filename} />
            </Col>
          </Row>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <SourceList
            title={formatMessage(localMessages.collectionDetailsSourcesTitle)}
            intro={formatMessage(localMessages.collectionDetailsSourcesIntro, {
              name: collection.name,
              count: collection.media.length,
            })}
            sources={collection.media}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <CollectionTopWordsContainer
            collectionId={collectionId}
            intro={formatMessage(localMessages.collectionDetailsTopWordsInfo, { name: collection.label })}
            onWordClick={handleWordCloudClick}
          />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <CollectionGeographyContainer
            collectionId={collectionId}
            intro={formatMessage(localMessages.collectionDetailsMapInfo, { name: collection.label })}
            onCountryClick={handleCountryClick}
          />
        </Col>
      </Row>
    </Grid>
  );
};

CollectionDetailsContainer.propTypes = {
  intl: React.PropTypes.object.isRequired,
  // from context
  params: React.PropTypes.object.isRequired,       // params from router
  collectionId: React.PropTypes.number.isRequired,
  // from dispatch
  asyncFetch: React.PropTypes.func.isRequired,
  handleDashboardClick: React.PropTypes.func.isRequired,
  handleWordCloudClick: React.PropTypes.func.isRequired,
  handleCountryClick: React.PropTypes.func.isRequired,
  // from state
  fetchStatus: React.PropTypes.string.isRequired,
  collection: React.PropTypes.object,
};

CollectionDetailsContainer.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  // filters: state.sources.selected.filters,
  collectionId: parseInt(ownProps.params.collectionId, 10),
  fetchStatus: state.sources.selected.details.collectionDetailsReducer.collectionDetails.fetchStatus,
  collection: state.sources.selected.details.collectionDetailsReducer.collectionDetails.object,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  asyncFetch: () => {
    dispatch(select(ownProps.params.collectionId));
    dispatch(fetchCollectionDetails(ownProps.params.collectionId));
  },
});

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    handleCountryClick: () => {
      // console.log(country);
    },
    handleDashboardClick: () => {
      const { collection } = stateProps;
      window.location = `https://dashboard.mediacloud.org/#query/["*"]/[{"sets":[${ownProps.params.collectionId}]}]/[]/[]/[{"uid":1,"name":"${collection.label}","color":"55868A"}]`;
    },
    handleWordCloudClick: (word) => {
      const { collection } = stateProps;
      const searchStr = `${word.stem}*`;
      window.location = `https://dashboard.mediacloud.org/#query/["${searchStr}"]/[{"sources":[${ownProps.params.collectionId}]}]/["${collection.health.start_date.substring(0, 10)}"]/["#{collection.health.end_date.substring(0, 10)}"]/[{"uid":3,"name":"${collection.name}","color":"55868A"}]`;
    },
  });
}

export default
  injectIntl(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(
      composeAsyncContainer(
        CollectionDetailsContainer
      )
    )
  );
