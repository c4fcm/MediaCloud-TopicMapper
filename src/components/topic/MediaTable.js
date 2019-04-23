import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import messages from '../../resources/messages';
import LinkWithFilters from './LinkWithFilters';
import { googleFavIconUrl } from '../../lib/urlUtil';
import StorySearchFilterMediaWarning from './StorySearchFilterMediaWarning';
import SafelyFormattedNumber from '../common/SafelyFormattedNumber';

const ICON_STYLE = { margin: 0, padding: 0, width: 12, height: 12 };

class MediaTable extends React.Component {
  sortableHeader = (sortKey, textMsg) => {
    const { onChangeSort, sortedBy } = this.props;
    const { formatMessage } = this.props.intl;
    let content;
    if (onChangeSort) {
      if (sortedBy === sortKey) {
        // currently sorted by this key
        content = (
          <a>
            <b><FormattedMessage {...textMsg} /></b>
            <ArrowDropDownIcon style={ICON_STYLE} />
          </a>
        );
      } else {
        // link to sort by this key
        content = (
          <a
            href={`#${formatMessage(textMsg)}`}
            onClick={(e) => { e.preventDefault(); onChangeSort(sortKey); }}
            title={formatMessage(textMsg)}
          >
            <FormattedMessage {...textMsg} />
          </a>
        );
      }
    } else {
      // not sortable
      content = <FormattedMessage {...textMsg} />;
    }
    return content;
  }

  render() {
    const { media, topicId, includeMetadata, showTweetCounts } = this.props;
    const tweetHeader = showTweetCounts ? <th className="numeric">{this.sortableHeader('twitter', messages.tweetCounts)}</th> : null;
    return (
      <div className="media-table">
        <StorySearchFilterMediaWarning />
        <table>
          <tbody>
            <tr>
              <th colSpan="2"><FormattedMessage {...messages.mediaName} /></th>
              <th><FormattedMessage {...messages.storyPlural} /></th>
              <th className="numeric">{this.sortableHeader('inlink', messages.mediaInlinks)}</th>
              <th className="numeric"><FormattedMessage {...messages.outlinks} /></th>
              <th className="numeric">{this.sortableHeader('facebook', messages.facebookShares)}</th>
              {tweetHeader}
              {(includeMetadata !== false) && (
                <React.Fragment>
                  <th><FormattedMessage {...messages.mediaType} /></th>
                  <th><FormattedMessage {...messages.primaryLanguage} /></th>
                  <th><FormattedMessage {...messages.pubCountry} /></th>
                  <th><FormattedMessage {...messages.pubState} /></th>
                  <th><FormattedMessage {...messages.countryOfFocus} /></th>
                </React.Fragment>
              )}
            </tr>
            {media.map((m, idx) => (
              <tr key={m.media_id} className={(idx % 2 === 0) ? 'even' : 'odd'}>
                <td>
                  <img src={googleFavIconUrl(m.url)} alt={m.name} />
                </td>
                <td>
                  <LinkWithFilters to={`/topics/${topicId}/media/${m.media_id}`}>
                    {m.name}
                  </LinkWithFilters>
                </td>
                <td className="numeric"><FormattedNumber value={m.story_count !== undefined ? m.story_count : '?'} /></td>
                <td className="numeric"><FormattedNumber value={m.media_inlink_count !== undefined ? m.media_inlink_count : '?'} /></td>
                <td className="numeric"><FormattedNumber value={m.outlink_count !== undefined ? m.outlink_count : '?'} /></td>
                <td className="numeric"><FormattedNumber value={m.facebook_share_count !== undefined ? m.facebook_share_count : '?'} /></td>
                { showTweetCounts && (
                  <td className="numeric"><SafelyFormattedNumber value={m.simple_tweet_count} /></td>
                )}
                {(includeMetadata !== false) && (
                  <React.Fragment>
                    <td>{m.metadata.media_type ? m.metadata.media_type.label : '?'}</td>
                    <td>{m.metadata.language ? m.metadata.language.label : '?'}</td>
                    <td>{m.metadata.pub_country ? m.metadata.pub_country.label : '?'}</td>
                    <td>{m.metadata.pub_state ? m.metadata.pub_state.label : '?'}</td>
                    <td>{m.metadata.about_country ? m.metadata.about_country.label : '?'}</td>
                  </React.Fragment>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

MediaTable.propTypes = {
  media: PropTypes.array.isRequired,
  showTweetCounts: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  topicId: PropTypes.number.isRequired,
  onChangeSort: PropTypes.func,
  sortedBy: PropTypes.string,
  includeMetadata: PropTypes.bool, // default true
};

export default injectIntl(MediaTable);
