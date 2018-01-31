
const messages = {

  suiteName: { id: 'suite.name', defaultMessage: 'Media Cloud' },

  blogToolName: { id: 'app.blog.name', defaultMessage: 'Blog' },
  blogToolDescription: { id: 'app.blog.description', defaultMessage: 'Read updates on our research, projects, and ideas from us and our partners' },
  dashboardToolName: { id: 'app.dashboard.name', defaultMessage: 'Dashboard' },
  dashboardToolDescription: { id: 'app.dashboard.description', defaultMessage: 'Get a quick overview of how your topic of interest is covered by digital news media' },
  sourcesToolName: { id: 'app.sources.name', defaultMessage: 'Source Manager' },
  sourcesToolDescription: { id: 'app.sources.description', defaultMessage: 'Browse the media sources and collections in our database, and suggest more to add' },
  topicsToolName: { id: 'app.topics.name', defaultMessage: 'Topic Mapper' },
  topicsToolDescription: { id: 'app.topics.description', defaultMessage: 'Investigate a specific media topic in-depth, seeing the most influential sources, stories, and how language is used' },
  toolsAppName: { id: 'app.tools.name', defaultMessage: 'Tools' },
  toolsAppDescription: { id: 'app.tools.description', defaultMessage: 'Find out more about our tools and how to use them' },
  explorerToolName: { id: 'app.explorer.name', defaultMessage: 'Explorer' },
  explorerToolDescription: { id: 'app.explorer.description', defaultMessage: 'Get a quick overview of how your topic of interest is covered by digital news media' },

  c4cmName: { id: 'c4cm.name', defaultMessage: 'MIT Center for Civic Media' },
  berkmanName: { id: 'berkman.name', defaultMessage: 'Berkman Klein Center for Internet and Society at Harvard University' },
  userLogin: { id: 'user.login', defaultMessage: 'Login' },
  userLogout: { id: 'user.logout', defaultMessage: 'Logout' },
  unlimited: { id: 'user.unlimited', defaultMessage: 'Unlimited' },
  userProfile: { id: 'user.profile', defaultMessage: 'Profile' },

  topicName: { id: 'topic.title.default', defaultMessage: 'Topic' },
  topicSnapshot: { id: 'topic.snapshot', defaultMessage: 'Snapshot' },
  topicTimespan: { id: 'topic.timespan', defaultMessage: 'Timespan' },
  createNewTopic: { id: 'topics.create', defaultMessage: 'Create a New Topic' },

  topicNameProp: { id: 'topic.prop.name', defaultMessage: 'Name' },
  topicDescriptionProp: { id: 'topic.prop.description', defaultMessage: 'Description' },
  topicStartDateProp: { id: 'topic.prop.startDate', defaultMessage: 'Start Date' },
  topicEndDateProp: { id: 'topic.prop.endDate', defaultMessage: 'End Date' },
  topicQueryProp: { id: 'topic.prop.query', defaultMessage: 'Query' },
  topicSourceCollectionsProp: { id: 'topic.prop.query', defaultMessage: 'Sources and Collections' },
  topicValidationProp: { id: 'topic.prop.validationPattern', defaultMessage: 'Validation Pattern' },
  topicIterationsProp: { id: 'topic.prop.iteration', defaultMessage: 'Iterations' },
  toicSkipSolrQueryProp: { id: 'topic.prop.public', defaultMessage: 'Skip SOLR Query' },
  topicPublicProp: { id: 'topic.prop.public', defaultMessage: 'Public' },

  entityName: { id: 'entity.title.default', defaultMessage: 'Entity' },
  entityPerson: { id: 'entity.title.person', defaultMessage: 'Person' },
  entityOrg: { id: 'entity.title.org', defaultMessage: 'Organization' },
  entityPercentage: { id: 'entity.title.default', defaultMessage: 'Percentage' },

  snapshotAge: { id: 'topic.snapshot.age', defaultMessage: 'Snapshot taken {age}' },
  snapshotChange: { id: 'topic.snapshot.change', defaultMessage: 'pick a different Snapshot' },
  snapshotGenerate: { id: 'needSnapshot.generate', defaultMessage: 'Generate Snapshot' },
  snapshotGenerating: { id: 'topic.snapshot.generating', defaultMessage: 'We are generating a new Snapshot; it could take a few minutes.' },

  sourceName: { id: 'source.title.default', defaultMessage: 'Media Source' },
  sourceNameProp: { id: 'source.prop.name', defaultMessage: 'Name' },
  sourceUrlProp: { id: 'source.prop.url', defaultMessage: 'URL' },
  sourceDescription: { id: 'source.description.default', defaultMessage: 'Description' },
  sourceLink: { id: 'source.link.default', defaultMessage: 'Media Source Link' },
  sourceIcon: { id: 'source.icon.default', defaultMessage: 'Logo' },

  favoritedCollectionsTitle: { id: 'favorited.collections.title', defaultMessage: 'Starred Collections' },
  favoritedSourcesTitle: { id: 'favorited.souces.title', defaultMessage: 'Starred Sources' },
  exploreFavorites: { id: 'favorited.explore', defaultMessage: 'View Starred Sources And Collections' },

  feedName: { id: 'feed.name', defaultMessage: 'Name' },
  feedUrl: { id: 'feed.url', defaultMessage: 'URL' },
  feedType: { id: 'feed.type', defaultMessage: 'Type' },
  feedStatus: { id: 'feed.status', defaultMessage: 'Status' },

  timespan: { id: 'common.timespan', defaultMessage: 'Timespan' },

  collectionName: { id: 'collection.title.default', defaultMessage: 'Collection' },
  collectionNameProp: { id: 'collection.prop.name', defaultMessage: 'Name' },
  collectionDescriptionProp: { id: 'collection.prop.description', defaultMessage: 'Description' },

  inlinks: { id: 'common.inlinks', defaultMessage: 'Inlinks' },
  sortByMediaInlinks: { id: 'common.sortByMediaInlinks', defaultMessage: 'sort by media inlinks' },
  mediaInlinks: { id: 'common.mediaInlinks', defaultMessage: 'Media Inlinks' },
  outlinks: { id: 'common.outlinks', defaultMessage: 'Outlinks' },
  clicks: { id: 'common.clicks', defaultMessage: 'Clicks' },
  facebookShares: { id: 'common.facebookShares', defaultMessage: 'Facebook Shares' },
  publishDate: { id: 'common.publishDate', defaultMessage: 'Publish Data' },
  public: { id: 'common.public', defaultMessage: 'Public' },
  private: { id: 'common.private', defaultMessage: 'Private' },
  language: { id: 'common.language', defaultMessage: 'Language' },
  unknown: { id: 'common.Unknown', defaultMessage: 'Unknown' },

  startDate: { id: 'common.startDate', defaultMessage: 'Start Date' },
  endDate: { id: 'common.endDate', defaultMessage: 'End Date' },

  topWords: { id: 'topWords', defaultMessage: 'Top Words' },
  wordcloudHelpText: { id: 'wordcloud.help.text',
    defaultMessage: '<p>This is an ordered word cloud. The words that show up more often appear bigger, and show up first in the list.  This is based on a sample of the stories, not all of them. We have done extensive testing to validate that the sample size is representative of the entire set of results.</p><p>You can click the download button to download a CSV file of word counts from a larger sample of stories.</p><p>We count words based on their stem, but show you the most commonly used stem within the sample.  To be concrete, that means if you see a word like "education" as the top word, that includes any variations of the "educ" stem (ie. educated, education, etc).</p><p>We have removed common english stop-words (ie. "if", "the", etc.), but you might see words in other languages that we don\'t have stop-word lists for.</p>',
  },
  wordCloudWord2VecLayoutHelp: { id: 'wordcloud.word2VecHelp', defaultMessage: '<p><b>About the Word2Vec 2D Views</b></p><p>The Word2Vec Map shows you how the most common words are used together. Each word is bigger and darker if it is used more, and it is positioned next to other words it is used with. This "Goolgle News" map is based on a pretrained model of vectors from the Google News project (<a href="https://code.google.com/archive/p/word2vec/">code</a>, <a href="https://arxiv.org/pdf/1310.4546.pdf">citation</a>). On this view, words that are used together more often in general news reporting show up closer together on the map. Looking at physical clusters of words can help you identify potential subtopics that capture different takes on your issue.</p>' },
  wordCloudTopicWord2VecLayoutHelp: { id: 'wordcloud.topicWord2VecHelp', defaultMessage: '<p>On the Topic-specific map, words that are used together more often in the topic show up closer together on this map. The difference between the two maps can reveal how reporting on this topic is different than more general news reporting.</p>' },

  media: { id: 'media', defaultMessage: 'Media Source' },
  mediaPlural: { id: 'media.plural', defaultMessage: 'Media Sources' },
  mediaName: { id: 'media.name', defaultMessage: 'Name' },

  mediaPickerHelpText: { id: 'mediaPicker', defaultMessage: 'Media Picker Help' },

  focus: { id: 'focus', defaultMessage: 'Subtopic' },
  focusHeader: { id: 'focus', defaultMessage: 'Subtopics' },
  focusCreate: { id: 'focus.create', defaultMessage: 'create a new Subtopic' },
  backToTopic: { id: 'backToTopic', defaultMessage: 'back to Topic' },
  addFocus: { id: 'focus.add', defaultMessage: 'Add a New Subtopic' },
  manageFoci: { id: 'focus.manage', defaultMessage: 'Manage Subtopics' },

  story: { id: 'story', defaultMessage: 'Story' },
  storyPlural: { id: 'stories', defaultMessage: 'Stories' },
  storyTitle: { id: 'story.title', defaultMessage: 'Title' },
  storyDescription: { id: 'story.description', defaultMessage: 'Description' },
  storyUrl: { id: 'story.url', defaultMessage: 'URL' },
  storyDate: { id: 'story.date', defaultMessage: 'Publish Data' },
  storyCustomDate: { id: 'story.customDate', defaultMessage: 'Custom Date?' },
  storyUndateable: { id: 'story.undateable', defaultMessage: 'Undateable?' },
  storiesTableHelpTitle: { id: 'stories.help.title', defaultMessage: 'About Stories' },
  storiesTableHelpText: { id: 'stories.help.text',
    defaultMessage: '<p>This table has one row for each Story.  The column currently being used to sort the results has a little down arrow next to it.  Click one of the green column headers to change how it is sorted.  Here is a summary of the columns:</p><ul><li>Title: the title of the story; click to see details about this story</li><li>Media Source: the name of the Media Source; click to see details about this source\'s content within this Topic</li><li>Publish Date: our best guess of the date and time this content was published</li><li>Media Inlinks: how many unique other Media Sources have links to this content in the Topic</li><li>Outlinks: the number of links in this story to other stories</li><li>Bit.ly Clicks: the number of clicks on links to this story shortened using the Bit.ly URL shortening service</li><li>Facebook Shares: the number of times this story was shared on Facebook</li></ul><p>Click the download button in the top right to download a CSV of the full list of stories</p>',
  },
  heatMapHelpText: { id: 'heatmap.help.text',
    defaultMessage: '<p>The country map shows you an intensity of how often countries are the main focus of stories. This uses our <a href="https://cliff.mediacloud.org" target="_top">CLIFF-CLAVIN</a> geolocation engine to determine which countries each story is about (based on the places mentioned). The darker the color, the more a country was focused on. Note that this is using a sampling of the sentences, not all of them. If you download a CSV of the results, the counts you see are also based on this sampling.</p><p>We have been tagging all english language stories with the places they mention since June 1, 2016.</p>',
  },
  word: { id: 'word', defaultMessage: 'Word Source' },
  ok: { id: 'ok', defaultMessage: 'OK' },
  apply: { id: 'apply', defaultMessage: 'Apply' },
  cancel: { id: 'cancel', defaultMessage: 'Cancel' },
  reset: { id: 'reset', defaultMessage: 'Reset' },
  error: { id: 'error', defaultMessage: 'Error' },
  details: { id: 'details', defaultMessage: 'Details' },
  search: { id: 'search', defaultMessage: 'Search' },
  edit: { id: 'edit', defaultMessage: 'Edit' },
  settings: { id: 'settings', defaultMessage: 'Settings' },
  searchByKeywords: { id: 'source.title.query', defaultMessage: 'Search By Keywords' },
  next: { id: 'next', defaultMessage: 'Next' },
  previous: { id: 'previous', defaultMessage: 'Previous' },
  manage: { id: 'manage', defaultMessage: 'manage' },
  help: { id: 'help', defaultMessage: 'Help' },
  delete: { id: 'delete', defaultMessage: 'Delete' },
  save: { id: 'save', defaultMessage: 'Save' },
  done: { id: 'done', defaultMessage: 'Done' },
  preview: { id: 'preview', defaultMessage: 'Preview' },
  confirm: { id: 'confirm', defaultMessage: 'Confirm' },
  remove: { id: 'remove', defaultMessage: 'Remove' },
  add: { id: 'add', defaultMessage: 'Add' },
  open: { id: 'open', defaultMessage: 'Open' },
  close: { id: 'close', defaultMessage: 'Close' },
  yes: { id: 'yes', defaultMessage: 'Yes' },
  no: { id: 'no', defaultMessage: 'No' },
  monitored: { id: 'monitored', defaultMessage: 'Monitored' },
  none: { id: 'none', defaultMessage: 'None' },
  editWordCloud: { id: 'editWordCloud', defaultMessage: 'Edit this Word Cloud' },
  viewWordCloud: { id: 'viewWordCloud', defaultMessage: 'View this Word Cloud' },
  download: { id: 'download', defaultMessage: 'Download' },
  downloadSVG: { id: 'downloadSVG', defaultMessage: 'Download a SVG' },
  downloadCSV: { id: 'downloadCSV', defaultMessage: 'Download a CSV' },
  downloadOptions: { id: 'downloadOptions', defaultMessage: 'Download Options...' },
  viewOptions: { id: 'viewOptions', defaultMessage: 'View Options...' },
  favorite: { id: 'favorite', defaultMessage: 'Star' },
  unfavorite: { id: 'unfavorite', defaultMessage: 'Un-star' },
  explore: { id: 'explore', defaultMessage: 'Explore' },
  nextPage: { id: 'paging.next', defaultMessage: 'Next Page' },
  previousPage: { id: 'paging.previous', defaultMessage: 'Previous Page' },
  readItNow: { id: 'readItNow', defaultMessage: 'Read It Now' },
  moreOptions: { id: 'moreOptions', defaultMessage: 'More Options' },
  filter: { id: 'filter', defaultMessage: 'Filter' },
  query: { id: 'query', defaultMessage: 'Query' },
  upload: { id: 'upload', defaultMessage: 'Upload' },
  other: { id: 'other', defaultMessage: 'Other' },
  home: { id: 'home', defaultMessage: 'Home' },
  required: { id: 'required', defaultMessage: 'Required' },
  unimplemented: { id: 'unimplemented', defaultMessage: 'Unimplemented' },
  downloadDataCsv: { id: 'downloadDataCsv', defaultMessage: 'Download {name} data CSV' },
  play: { id: 'play', defaultMessage: 'Play' },
  pause: { id: 'pause', defaultMessage: 'Pause' },
  skipNext: { id: 'skipNext', defaultMessage: 'Next' },
  skipPrevious: { id: 'skipPrevious', defaultMessage: 'Previous' },

  topicFavorited: { id: 'topics.favorited', defaultMessage: 'Starred this topic.' },
  topicUnfavorited: { id: 'topics.unfavorited', defaultMessage: 'Unstarred this topic.' },

  focusPick: { id: 'focus.pick', defaultMessage: 'Pick a Subtopic' },
  removeFocus: { id: 'focus.pick', defaultMessage: 'Don\'t use any Subtopic' },

  menuOpenTooltip: { id: 'menu.open.tooltip', defaultMessage: 'Open Main Menu' },
  menuTitle: { id: 'menu.title', defaultMessage: 'Main Menu' },
  menuAbout: { id: 'menu.about', defaultMessage: 'About' },

  userEmail: { id: 'user.email', defaultMessage: 'Email' },
  userPassword: { id: 'user.password', defaultMessage: 'Password' },
  userOldPassword: { id: 'user.oldpPassword', defaultMessage: 'Old Password' },
  userNewPassword: { id: 'user.newPassword', defaultMessage: 'New Password' },
  userConfirmPassword: { id: 'user.confirmPassword', defaultMessage: 'Confirm Password' },
  userChangePassword: { id: 'user.changePassword', defaultMessage: 'Change Password' },
  userRecoverPassword: { id: 'user.recoverPassword', defaultMessage: 'Recover Password' },
  userSignup: { id: 'user.signup', defaultMessage: 'Sign Up' },
  userFullName: { id: 'user.fullName', defaultMessage: 'Full Name' },
  userNotes: { id: 'user.notes', defaultMessage: 'Notes' },
  passwordsMismatch: { id: 'user.mismatchPassword', defaultMessage: 'Passwords do not match.' },
  passwordTooShort: { id: 'user.passwordTooShort', defaultMessage: 'Passwords must be at least 8 characters long.' },

  attentionChartHelpText: { id: 'attentionChart.help.text',
    defaultMessage: '<p>This chart shows sentences over time. The vertical axis shows the number of sentences that are about the topic in the stories we have collected.</p><p>Roll over the line chart to see the sentences per day in each timespan shown on the graph.</p><p>Click the download button in the top right to download the raw counts in a CSV spreadsheet.  Click the three lines in the top right of the chart to export the chart as an image file.</p>',
  },

  wordTreeHelpText: { id: 'wordTree.help.text',
    defaultMessage: '<p>This "word tree" visualization lets you explore the use of this word in context.  Revealing the words it is used with can be far more revealing than the simple word cloud presented.  The word is at the center, with the words that are most often used just before it on the left, and the words used most often just after on the right.</p><p>Notes:</p><ul><li>This is based on a random sample of 1000 sentences fragments, which we haven\'t exhaustively tested to see if is a representative sample (but seems to work well).</li><li>This only includes the 5 words before and after the use of the keyword you are looking at (due to copywrite sensitivities).</li><li>This uses the term, not the stem.</li></ul><p>Those caveat noted, it can still be useful to get a sense of <b>how</b> this word is being used.</p>',
  },

  totalStoriesStat: { id: 'totalStories', defaultMessage: 'Total Stories' },
  totalDownloadsStat: { id: 'totalDownloads', defaultMessage: 'Total Downloads' },
  totalSentencesStat: { id: 'totalSentences', defaultMessage: 'Total Sentences' },
  crawledMediaStat: { id: 'crawledMedia', defaultMessage: 'Active Crawled Media' },
  crawledFeedsStat: { id: 'crawledFeeds', defaultMessage: 'Active Crawled Feeds' },
  dailyStoriesStat: { id: 'dailyStories', defaultMessage: 'Daily Stories' },
  dailyDownloadsStat: { id: 'dailyDownloads', defaultMessage: 'Daily Downloads' },

  word2vecChartHelpText: { id: 'word2vecChart.help.text', defaultMessage: '<p>This data is generated by querying the Google News word2vec model.  This turns each word into a vector telling us information about other words it is commonly used with in the online news shown by Google News. We take that information and turn it into a 2d representation to show how the words in your query are used together in common news reporting.<p>' },

  entityHelpTitle: { id: 'geo.help.title', defaultMessage: 'About Our Entity Detection' },
  entityHelpContent: { id: 'geo.help.content', defaultMessage: 'We automatically detect the people, organizations, and places in articles using our <a href="https://cliff.mediacloud.org/" target="_top">CLIFF-CLAVIN engine</a>. This tags each story with the people and organizations that it mentions.  We do additional processing and disambiguation to tag stories with the country and state that our custom heuristic algorithm thinks they are about (ie. not each country/state mentioned).' },

  mediaTypeHelpTitle: { id: 'mediaType.help.title', defaultMessage: 'About Media Type' },
  mediaTypeHelpContent: { id: 'mediaType.help.content', defaultMessage: `
      <p><b>Print Native</b>: This source is primarly a print publication. Use this for newspapers and magazines. Examples: New York Times, The Economist.</p>
      <p><b>Digital Native</b>: This source is internet based. Use this for news sources that began on the internet first, organizational websites, and blogs. Examples: CDC, Vox, Scroll.in.</p>
      <p><b>Video Broadcast</b>: This source is primarily a broadcast TV station (ie. video transcriptions or closed captions). Examples: CNN, FoxNews.</p>
      <p><b>Audio Broadcast</b>: This source is primarily a broadcast radio station or podcast (ie. audio transcriptions). Examples: NPR.</p>
      <p><b>Other</b>: This source doesn't fit in any of the other categories. Examples: AP, Reuters.</p>
    `,
  },

  entityHelpDetails: { id: 'explorer.entities.help.text',
    defaultMessage: '<p>We identify people using <a href="https://nlp.stanford.edu/software/CRF-NER.shtml">Stanford\'s Named Entity Recognizer</a>. Every story is passed through out <a href="http://cliff.mediacloud.org" target="_top">CLIFF engine</a> to extract all the entities.  Each story is then tagged with the people it mentions, the organizations it mentions, and the countries and states it is about.</p>',
  },

  top5: { id: 'top5', defaultMessage: 'Top 5' },
  top10: { id: 'top10', defaultMessage: 'Top 10' },
  top15: { id: 'top15', defaultMessage: 'Top 15' },
  top20: { id: 'top20', defaultMessage: 'Top 20' },
  top25: { id: 'top25', defaultMessage: 'Top 25' },

};

export default messages;
