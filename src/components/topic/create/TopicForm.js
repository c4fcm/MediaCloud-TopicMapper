import PropTypes from 'prop-types';
import React from 'react';
import { reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid/lib';
import AppButton from '../../common/AppButton';
import composeIntlForm from '../../common/IntlForm';
import TopicDetailForm from './TopicDetailForm';
import MediaPickerDialog from '../../common/mediaPicker/MediaPickerDialog';
import SourceCollectionsMediaForm from '../../common/form/SourceCollectionsMediaForm';
import { emptyString, invalidDate, validDate } from '../../../lib/formValidators';
import { isMoreThanAYearInPast } from '../../../lib/dateUtil';
import { fetchTopicSearchResults } from '../../../actions/topicActions';
import { assetUrl } from '../../../lib/assetUtil';

export const TOPIC_FORM_MODE_EDIT = 'TOPIC_FORM_MODE_EDIT';
export const TOPIC_FORM_MODE_CREATE = 'TOPIC_FORM_MODE_CREATE';

const localMessages = {
  nameError: { id: 'topic.form.detail.name.error', defaultMessage: 'Your topic needs a name.' },
  nameInUseError: { id: 'topic.form.detail.name.errorInUse', defaultMessage: 'That topic name is already taken. Please use a different one.' },
  descriptionError: { id: 'topic.form.detail.desciption.error', defaultMessage: 'Your topic need a description.' },
  seedQueryError: { id: 'topic.form.detail.seedQuery.error', defaultMessage: 'You must give us a seed query to start this topic from.' },
  createTopic: { id: 'topic.form.detail.create', defaultMessage: 'Create' },
  dateError: { id: 'topic.form.detail.date.error', defaultMessage: 'Please provide a date in YYYY-MM-DD format.' },
  startDateWarning: { id: 'topic.form.detail.startdate.warning', defaultMessage: "For older dates we find that spidering doesn't work that well due to link-rot (urls that don't work anymore). We advise not going back more than 12 months." },
  sourceCollectionsError: { id: 'topic.form.detail.sourcesCollections.error', defaultMessage: 'You must select at least one Source or one Collection to seed this topic.' },
  downloadUserGuide: { id: 'topic.create.downloadUserGuide', defaultMessage: 'Downlod the Topic Creation Guide' },
  selectSandC: { id: 'topic.create.selectSAndC', defaultMessage: 'Select media' },
  SandC: { id: 'topic.create.sAndC', defaultMessage: 'Media' },
};

const TopicForm = (props) => {
  const { topicId, onSubmit, handleSubmit, pristine, submitting, asyncValidating, initialValues, title, intro, mode, onMediaChange } = props;
  const { formatMessage } = props.intl;
  const emptyArray = [initialValues];
  let mediaPicker = null;
  let mediaLabel = <label htmlFor="sources"><FormattedMessage {...localMessages.SandC} /></label>;
  mediaPicker = <MediaPickerDialog initMedia={emptyArray} onConfirmSelection={selections => onMediaChange(selections)} />;
  mediaLabel = <label htmlFor="sources"><FormattedMessage {...localMessages.selectSandC} /></label>;

  return (
    <form className="create-topic" name="topicForm" onSubmit={handleSubmit(onSubmit.bind(this))}>
      <input type="hidden" name="topicId" value={topicId} />
      <Row><Col lg={12}><hr /></Col></Row>
      <Row>
        <Col lg={10}>
          <TopicDetailForm
            initialValues={initialValues}
            mode={mode}
          />
        </Col>
        <Col lg={2}>
          <a target="_new" href="http://bit.ly/creating-topics-guide">
            <figure className="document-download">
              <img alt={formatMessage(localMessages.downloadUserGuide)} src={assetUrl('/static/img/topic-mapper-user-guide.png')} height="160" />
              <figcaption><FormattedMessage {...localMessages.downloadUserGuide} /></figcaption>
            </figure>
          </a>
        </Col>
      </Row>
      <Row><Col lg={12}><hr /></Col></Row>
      <Row><Col lg={6}>
        <div className="media-field-wrapper">
          {mediaLabel}
          <SourceCollectionsMediaForm
            title={title}
            intro={intro}
            className="query-field"
            form="topicForm"
            destroyOnUnmount={false}
            enableReinitialize
            // onDelete={onMediaDelete}
            initialValues={initialValues}
            allowRemoval={mode === TOPIC_FORM_MODE_CREATE}
          />
          {mediaPicker}
        </div>
      </Col></Row>
      <Row><Col lg={12}><hr /></Col></Row>
      <Row>
        <Col lg={12}>
          <AppButton
            style={{ marginTop: 30 }}
            type="submit"
            disabled={pristine || submitting || asyncValidating === true}
            label={initialValues.buttonLabel}
            primary
          />
        </Col>
      </Row>

    </form>
  );
};

TopicForm.propTypes = {
  // from compositional chain
  intl: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  // from parent
  topicId: PropTypes.number,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  error: PropTypes.string,
  asyncValidating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  submitting: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  topicNameSearch: PropTypes.object,
  mode: PropTypes.string.isRequired,  // one of the TOPIC_FORM_MODE_ constants - needed to show warnings while editing
  onMediaChange: PropTypes.func.isRequired,
};

function validate(values, props) {
  const errors = {};
  const { formatMessage } = props.intl;
  if (emptyString(values.name)) {
    errors.name = localMessages.nameError;
  }
  if (emptyString(values.description)) {
    errors.description = localMessages.descriptionError;
  }
  if (emptyString(values.solr_seed_query)) {
    errors.solr_seed_query = localMessages.seedQueryError;
  }
  if (invalidDate(values.start_date)) {
    errors.start_date = localMessages.dateError;
  }
  if (invalidDate(values.end_date)) {
    errors.end_date = localMessages.dateError;
  }
  // not triggered if empty so we have to force a check
  if ((values.name && values.solr_seed_query && !values.sourcesAndCollections) || (values.sourcesAndCollections && values.sourcesAndCollections.length < 1)) {
    // errors.sourcesAndCollections = localMessages.sourceCollectionsError;
    const msg = formatMessage(localMessages.sourceCollectionsError);
    errors.sourcesAndCollections = { _error: msg };
  }
  return errors;
}

const asyncValidate = (values, dispatch) => (
  dispatch(fetchTopicSearchResults(values.name))
    .then((results) => {
      if (results.topics && (results.topics.length !== 0) &&
        (results.topics[0].name.toLowerCase() === values.name.toLowerCase()) &&
        (!values.topicId || (values.topicId && (results.topics[0].topics_id !== values.topicId)))) {
        const error = { name: localMessages.nameInUseError };
        throw error;
      }
    })
);

const warn = (values) => {
  const warnings = {};
  if (validDate(values.start_date) && isMoreThanAYearInPast(values.start_date)) {
    warnings.start_date = localMessages.startDateWarning;
  }
  return warnings;
};

const reduxFormConfig = {
  form: 'topicForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['name'],
  warn,
  // so the create wizard works
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
};

export default
  composeIntlForm(
    reduxForm(reduxFormConfig)(
      TopicForm
    )
  );
