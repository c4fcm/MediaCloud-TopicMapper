import React from 'react';
import Title from 'react-title-component';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MediaTable from '../MediaTable';
import { fetchTopicInfluentialMedia, sortTopicInfluentialMedia } from '../../../actions/topicActions';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import FlatButton from 'material-ui/FlatButton';
import DownloadButton from '../../common/DownloadButton';
import messages from '../../../resources/messages';
import DataCard from '../../common/DataCard';
import composeAsyncContainer from '../../common/AsyncContainer';
import { pagedAndSortedLocation } from '../../util/paging';

const localMessages = {
  title: { id: 'topic.influentialMedia.title', defaultMessage: 'Influential Media' },
};

class InfluentialMediaContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { fetchData, filters, sort } = this.props;
    if ((nextProps.filters.timespanId !== filters.timespanId) || (nextProps.sort !== sort)) {
      fetchData(nextProps);
    }
  }
  onChangeSort = (newSort) => {
    const { sortData } = this.props;
    sortData(newSort);
  }
  previousPage = () => {
    const { fetchPagedData, links } = this.props;
    fetchPagedData(this.props, links.previous);
  }
  nextPage = () => {
    const { fetchPagedData, links } = this.props;
    fetchPagedData(this.props, links.next);
  }
  downloadCsv = () => {
    const { topicId, filters, sort } = this.props;
    const url = `/api/topics/${topicId}/media.csv?snapshotId=${filters.snapshotId}&timespanId=${filters.timespanId}&sort=${sort}`;
    window.location = url;
  }
  render() {
    const { media, sort, topicId, links } = this.props;
    const { formatMessage } = this.props.intl;
    let previousButton = null;
    const titleHandler = parentTitle => `${formatMessage(localMessages.title)} | ${parentTitle}`;
    if ((links !== undefined) && links.hasOwnProperty('previous')) {
      previousButton = <FlatButton label={formatMessage(messages.previousPage)} primary onClick={this.previousPage} />;
    }
    let nextButton = null;
    if ((links !== undefined) && links.hasOwnProperty('next')) {
      nextButton = <FlatButton label={formatMessage(messages.nextPage)} primary onClick={this.nextPage} />;
    }
    return (
      <Grid>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Title render={titleHandler} />
            <DataCard border={false}>
              <div className="actions">
                <DownloadButton tooltip={formatMessage(messages.download)} onClick={this.downloadCsv} />
              </div>
              <h2><FormattedMessage {...localMessages.title} /></h2>
              <MediaTable media={media} topicId={topicId} onChangeSort={this.onChangeSort} sortedBy={sort} />
              { previousButton }
              { nextButton }
            </DataCard>
          </Col>
        </Row>
      </Grid>
    );
  }
}

InfluentialMediaContainer.ROWS_PER_PAGE = 50;

InfluentialMediaContainer.propTypes = {
  fetchStatus: React.PropTypes.string.isRequired,
  sort: React.PropTypes.string.isRequired,
  media: React.PropTypes.array.isRequired,
  topicId: React.PropTypes.number.isRequired,
  topicInfo: React.PropTypes.object.isRequired,
  fetchData: React.PropTypes.func.isRequired,
  fetchPagedData: React.PropTypes.func.isRequired,
  sortData: React.PropTypes.func.isRequired,
  intl: React.PropTypes.object.isRequired,
  filters: React.PropTypes.object.isRequired,
  links: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  fetchStatus: state.topics.selected.media.fetchStatus,
  sort: state.topics.selected.media.sort,
  media: state.topics.selected.media.media,
  links: state.topics.selected.media.link_ids,
  filters: state.topics.selected.filters,
  topicId: state.topics.selected.id,
  topicInfo: state.topics.selected.info,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: (props, linkId) => {
    const params = {
      ...props.filters,
      sort: props.sort,
      limit: InfluentialMediaContainer.ROWS_PER_PAGE,
      linkId,
    };
    dispatch(fetchTopicInfluentialMedia(props.topicId, params))
      .then((results) => {
        dispatch(push(pagedAndSortedLocation(ownProps.location, results.link_ids.current, props.sort)));
      });
  },
  sortData: (sort) => {
    dispatch(push(pagedAndSortedLocation(ownProps.location, null, sort)));
    dispatch(sortTopicInfluentialMedia(sort));
  },
});

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    asyncFetch: () => {
      dispatchProps.fetchData(stateProps);
    },
    fetchPagedData: (props, linkId) => {
      dispatchProps.fetchData(props, linkId);
    },
  });
}

export default
  injectIntl(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(
      composeAsyncContainer(
        InfluentialMediaContainer
      )
    )
  );
