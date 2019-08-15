import PropTypes from 'prop-types';
import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { DeleteButton } from './IconButton';
import { stringifyTags } from '../../lib/explorerUtil';
import { emptyString } from '../../lib/formValidators';

const localMessages = {
  searchWithKeyword: { id: 'explorer.mediaPicker.search', defaultMessage: 'Custom Collection<br /> &nbsp;Name: "{keyword}" <br /> {values}' },
  search: { id: 'explorer.mediaPicker.search', defaultMessage: 'Custom Collection: <br /> {values} ' },

};

const SourceOrCollectionOrSearchWidget = ({ object, onDelete, onClick, link, formatMessage }) => {
  const isSearch = object.customColl === true;
  const isCollection = object.tags_id !== undefined;
  if (!isSearch && !object.selected) return null;

  let typeClass = 'source';
  let objectId = object.media_id;
  let name = (object.name || object.label || object.url);
  let metadataSearch = '';
  if (isCollection) {
    typeClass = 'collection';
    objectId = object.tags_id;
    name = (object.name || object.label || object.tag);
  } else if (isSearch) {
    typeClass = 'search';
    objectId = 'custom'; // maybe create a unique id
    metadataSearch = stringifyTags(object.tags, formatMessage);
    if (metadataSearch.length > 0) {
      if (emptyString(object.mediaKeyword)) {
        metadataSearch = <FormattedHTMLMessage {...localMessages.search} values={{ values: metadataSearch }} />;
      } else {
        metadataSearch = <FormattedHTMLMessage {...localMessages.searchWithKeyword} values={{ keyword: object.mediaKeyword, values: metadataSearch }} />;
      }
    }
  }
  // link the text if there is a click handler defined
  let text;
  if (link) {
    text = (<a href={link} target="_blank" rel="noopener noreferrer">{name}</a>);
  } else if (onClick) {
    text = (<a href="#" onClick={onClick}>{name}</a>);
  } else {
    text = name;
  }
  return (
    <span
      className={`media-widget ${typeClass}`}
      key={`media-widget${objectId}`}
    >
      {text}
      {onDelete && <DeleteButton onClick={onDelete} />}
      {metadataSearch}
    </span>
  );
};

SourceOrCollectionOrSearchWidget.propTypes = {
  object: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.node,
  formatMessage: PropTypes.func.isRequired,
  link: PropTypes.string,
};

export default SourceOrCollectionOrSearchWidget;
