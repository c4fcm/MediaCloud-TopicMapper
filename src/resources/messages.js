
const messages = {

  suiteName: { id: 'suite.name', defaultMessage: 'Media Cloud' },

  blogToolName: { id: 'app.blog.name', defaultMessage: 'Blog' },
  blogToolDescription: { id: 'app.blog.description', defaultMessage: 'Read updates on our research, projects, and ideas from us and our partners' },
  sourcesToolName: { id: 'app.sources.name', defaultMessage: 'Source Manager' },
  sourcesToolDescription: { id: 'app.sources.description', defaultMessage: 'Check the breadth of our global coverage by browsing the media sources and collections in our database, and suggesting more to add.' },
  topicsToolName: { id: 'app.topics.name', defaultMessage: 'Topic Mapper' },
  topicsToolDescription: { id: 'app.topics.description', defaultMessage: 'Dive deeply into coverage of an issue by collecting more stories, analyzing influence, and slicing and dicing the stories to discover narratives.' },
  toolsToolName: { id: 'app.tools.name', defaultMessage: 'Tools' },
  toolsToolDescription: { id: 'app.tools.description', defaultMessage: 'Support for MediaCloud, including FAQs, tools and how to use them' },
  explorerToolName: { id: 'app.explorer.name', defaultMessage: 'Explorer' },
  explorerToolDescription: { id: 'app.explorer.description', defaultMessage: 'Get a quick overview of how your topic of interest is covered by digital news media by exploring attention, language, and entities.' },
  readGuide: { id: 'app.readGuide', defaultMessage: 'Read User Guide' },

  c4cmName: { id: 'c4cm.name', defaultMessage: 'MIT Center for Civic Media' },
  berkmanName: { id: 'berkman.name', defaultMessage: 'Berkman Klein Center for Internet and Society at Harvard University' },
  userLogin: { id: 'user.login', defaultMessage: 'Login' },
  userLogout: { id: 'user.logout', defaultMessage: 'Logout' },
  unlimited: { id: 'user.unlimited', defaultMessage: 'Unlimited' },
  userProfile: { id: 'user.profile', defaultMessage: 'Profile' },
  userConsent: { id: 'user.consent', defaultMessage: 'I have read and agree to Media Cloud\'s <a href="https://mediacloud.org/terms-of-use">Terms of Use</a> and <a href="https://mediacloud.org/privacy-policy">Privacy Policy</a>' },
  user3rdPersonConsent: { id: 'user.consent', defaultMessage: 'User has read and agrees to Media Cloud\'s <a href="https://mediacloud.org/terms-of-use">Terms of Use</a> and <a href="https://mediacloud.org/privacy-policy">Privacy Policy</a>' },
  topicName: { id: 'topic.title.default', defaultMessage: 'Topic' },
  topicSnapshot: { id: 'topic.snapshot', defaultMessage: 'Snapshot' },
  topicTimespan: { id: 'topic.timespan', defaultMessage: 'Timespan' },
  createNewTopic: { id: 'topics.create', defaultMessage: 'Create a New Topic' },
  createNewVersion: { id: 'topics.version.update', defaultMessage: 'Create a New Version' },
  runThisVersion: { id: 'topics.version.runThisVersion', defaultMessage: 'Generate This Version' },

  topicNameProp: { id: 'topic.prop.name', defaultMessage: 'Name' },
  topicDescriptionProp: { id: 'topic.prop.description', defaultMessage: 'Description' },
  topicStartDateProp: { id: 'topic.prop.startDate', defaultMessage: 'Start Date' },
  topicEndDateProp: { id: 'topic.prop.endDate', defaultMessage: 'End Date' },
  topicQueryProp: { id: 'topic.prop.query', defaultMessage: 'Search Terms' },
  topicSourceCollectionsProp: { id: 'topic.prop.query', defaultMessage: 'Media Sources and Collections' },
  topicValidationProp: { id: 'topic.prop.validationPattern', defaultMessage: 'Validation Pattern' },
  topicIterationsProp: { id: 'topic.prop.iteration', defaultMessage: 'Iterations' },
  toicSkipSolrQueryProp: { id: 'topic.prop.public', defaultMessage: 'Skip SOLR Query' },
  topicPublicProp: { id: 'topic.prop.public', defaultMessage: 'Public' },
  searchByRedditChannel: { id: 'topic.prop.reddit.channel', defaultMessage: 'Search By Subreddit (comma separated list)' },
  searchByTwitterChannel: { id: 'topic.prop.twitter.source', defaultMessage: 'Search By Twitter Source' },


  entityName: { id: 'entity.title.default', defaultMessage: 'Entity' },
  entityPerson: { id: 'entity.title.person', defaultMessage: 'Person' },
  entityOrg: { id: 'entity.title.org', defaultMessage: 'Organization' },
  entityPercentage: { id: 'entity.title.default', defaultMessage: 'Percentage' },
  entityPeople: { id: 'entity.title.people', defaultMessage: 'People' },
  entityOrganizations: { id: 'entity.title.orgs', defaultMessage: 'Organizations' },
  entityLocations: { id: 'entity.title.locations', defaultMessage: 'Places' },

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
  scrapeForFeeds: { id: 'source.details.feeds.scrape', defaultMessage: 'Scrape for New Feeds' },
  sourceScraping: { id: 'source.deatils.feeds.scraping', defaultMessage: 'We\'ve started to scrape this source' },
  sourceScrapeFailed: { id: 'source.deatils.feeds.failed', defaultMessage: 'Sorry, for some reason we couldn\'t start the scraping job' },
  sourceScrapeStatus: { id: 'source.deatils.feeds.scrapeStatus', defaultMessage: 'Feed Scrape Status' },
  removeSourceError: { id: 'source.remove.error', defaultMessage: 'We failed to remove a source from this collection' },

  favoritedCollectionsTitle: { id: 'favorited.collections.title', defaultMessage: 'My Starred Collections' },
  favoritedSourcesTitle: { id: 'favorited.souces.title', defaultMessage: 'Starred Sources' },
  exploreFavorites: { id: 'favorited.explore', defaultMessage: 'View Starred Sources And Collections' },

  feedName: { id: 'feed.name', defaultMessage: 'Name' },
  feedUrl: { id: 'feed.url', defaultMessage: 'URL' },
  feedType: { id: 'feed.type', defaultMessage: 'Type' },
  feedIsActive: { id: 'feed.active', defaultMessage: 'Active' },

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
  tweetCounts: { id: 'common.tweetCounts', defaultMessage: 'Tweet Count' },
  public: { id: 'common.public', defaultMessage: 'Public' },
  private: { id: 'common.private', defaultMessage: 'Private' },
  language: { id: 'common.language', defaultMessage: 'Language' },
  unknown: { id: 'common.Unknown', defaultMessage: 'Unknown' },

  notEnoughCoverage: { id: 'common.themes.notEnoughCoverage',
    defaultMessage: '<b>Not enough data to show.</b><br /><i>Only {pct} of your stories have been processed for themes, people, organizations and geographic places.  We don\'t want to show you data that isn\'t representative, so we won\'t show partial results here. This percentage might be low because we only process English stories for this data, and your query might be in other languages. It also could be that your query is using older stories that were collected before we added this processing.</i>',
  },

  startDate: { id: 'common.startDate', defaultMessage: 'Start Date' },
  endDate: { id: 'common.endDate', defaultMessage: 'End Date' },

  topWords: { id: 'topWords', defaultMessage: 'Top Words' },
  wordcloudHelpText: { id: 'wordcloud.help.text',
    defaultMessage: '<p>This is an ordered word cloud. The words that show up more often appear bigger, and show up first in the list.  This is based on a sample of the stories, not all of them. We have validated that the sample size is representative of the entire set of results.</p><p>You can download a CSV file of word counts (from a larger sample of stories). You can also download CSV files listing the bigrams (two-word phrases) or trigrams (three-word phrases) used most often.</p><p>Use the view options to render a more standard, unordered, word cloud.</p><p>We count words based on their stem, but show you the most commonly used stem within the sample.  That means if you see a word like "education" as the top word, that includes any variations of the "educ" stem (ie. educated, education, etc).We have removed common english stop-words (ie. "if", "the", etc.), but you might see words in other languages that we don\'t have stop-word lists for.</p><p>',
  },

  wordSpaceLayoutHelp: { id: 'wordSpace.help', defaultMessage: '<p><b>Reading the Word Space</b></p><p>This chart highlight the parts of the general news conversations that match your queries. Learn more about it in <A href="https://mediacloud.org/news/2018/5/23/word-spaces-visualizing-word2vec-to-support-media-analysis">our recent blog post</a>. Words that are close together have a high probability of showing up in similar contexts in the news. Words that are farther apart are very unlikely to be used in similar contexts.</p><p>Like a standard word cloud, the and size of a word tells you how often it is used; bigger and darker words are used more often.</p><p>When you hover over a word with your mouse, it changes color to make it easier to read. Words that are used in similar phrases also change color, and are highlighted inside a light cone. This "similarity" is based on an algorithmic analysis of how all the words are used together.</p><p>You can Double-click to zoom in to a specific area of the chart; double-click again to zoom out.</p><p><b>Data Source</b></p><p>The layout of words is based on a word2vec machine learning model, which uses neural networks to build a model of how likely a word is to show up in phrases, and how likely phrases are to contain a word. We have integrated the pretrained word2vec model from the Google News project (<a href="https://code.google.com/archive/p/word2vec/">code</a>, <a href="https://arxiv.org/pdf/1310.4546.pdf">citation</a>). This was built based on the patterns of use in a huge corpus of English language news reporting, and thus reflects biases and narratives that are commonly seen there.</p>' },

  wordCloudTopicWord2VecLayoutHelp: { id: 'wordcloud.topicWord2VecHelp', defaultMessage: '<b>About this Custom word2vec Model</b></p><p>The layout of words is based on a word2vec machine learning model, which uses neural networks to build a model of how likely a word is to show up in phrases, and how likely phrases are to contain a word. We have created a custom model for this word2vec topic based solely on the stories it contains (unlike in Explorer, where we use the Google News public model).</p>' },

  media: { id: 'media', defaultMessage: 'Media Source' },
  mediaPlural: { id: 'media.plural', defaultMessage: 'Media Sources' },
  mediaName: { id: 'media.name', defaultMessage: 'Name' },

  mediaPickerHelpText: { id: 'mediaPicker', defaultMessage: 'Media Picker Help' },
  allMedia: { id: 'allMedia', defaultMessage: 'All Media' },
  allMediaNotAdvised: { id: 'allMediaNA', defaultMessage: 'All Media (Not Advised)' },
  noMedia: { id: 'noMedia', defaultMessage: 'No Media' },

  focus: { id: 'focus', defaultMessage: 'Subtopic' },
  focusHeader: { id: 'focus', defaultMessage: 'Subtopics' },
  focusCreate: { id: 'focus.create', defaultMessage: 'create a new Subtopic' },
  backToTopic: { id: 'backToTopic', defaultMessage: 'back to Topic' },
  addFocus: { id: 'focus.add', defaultMessage: 'Add a New Subtopic' },
  manageFoci: { id: 'focus.manage', defaultMessage: 'Manage Subtopics' },

  platform: { id: 'platform', defaultMessage: 'Platform' },
  platformHeader: { id: 'platform.header', defaultMessage: 'Platforms' },
  addPlatform: { id: 'platform.add', defaultMessage: 'Add A New Platform' },
  managePlatforms: { id: 'platform.manage', defaultMessage: 'Manage Platforms' },
  platformSource: { id: 'platform.source', defaultMessage: 'Source' },
  incompletePlatform: { id: 'platform.incompletePlatform', defaultMessage: 'You need to set up a platform for your topic!' },


  story: { id: 'story', defaultMessage: 'Story' },
  storyPlural: { id: 'stories', defaultMessage: 'Stories' },
  storyTitle: { id: 'story.title', defaultMessage: 'Title' },
  storyDescription: { id: 'story.description', defaultMessage: 'Description' },
  storyUrl: { id: 'story.url', defaultMessage: 'URL' },
  storyDate: { id: 'story.date', defaultMessage: 'Published' },
  storyCustomDate: { id: 'story.customDate', defaultMessage: 'Custom Date?' },
  storyUndateable: { id: 'story.undateable', defaultMessage: 'Undateable?' },
  storiesTableHelpTitle: { id: 'stories.help.title', defaultMessage: 'About Stories' },
  storiesTableHelpText: { id: 'stories.help.text',
    defaultMessage: '<p>This table has one row for each Story.  The column currently being used to sort the results has a little down arrow next to it.  Click one of the green column headers to change how it is sorted.  Here is a summary of the columns:</p><ul><li>Title: the title of the story; click to see details about this story</li><li>Media Source: the name of the Media Source; click to see details about this source\'s content within this Topic</li><li>Publish Date: our best guess of the date and time this content was published</li><li>Media Inlinks: how many unique other Media Sources have links to this content in the Topic</li><li>Outlinks: the number of links in this story to other stories</li><li>Facebook Shares: the number of times this story was shared on Facebook</li></ul><p>Click the download button in the top right to download a CSV of the full list of stories</p>',
  },
  pubDateTableHelpTitle: { id: 'stories.help.publicationdate.title', defaultMessage: 'How We Guess Story Publication Dates' },
  pubDateTableHelpText: { id: 'stories.help.publicationdate.text',
    defaultMessage: '<p>Story dates sometimes come from structured sources that are easy to find (like an RSS feed), but other times we have discover and guess dates from unstructured HTML. Note that we assume timezones don\'t exist and just save whatever date we find into our database. Our advice - don\'t use it at any higher granularity than a day.</p><p>Guessing the date of publication for an arbitrary webpage is actually pretty hard. We guess dates from a variety of methods, using <a href="https://github.com/mitmedialab/date_guesser">our custom built open source Date Guesser library</a>. A few things worth noting:<br /><ul><li>If we find a date, but are unsure if the date is reliable or not, it shows up in italics with a question mark after it. This could be situations like content that is embedded that has a date.</li><li>Some content is deemed undateable, like Wikipedia entries or webpages that don\'t look like news articles. We mark those as "Undateable".</li><li>If we are confident about the date, it shows up in normal text.</li><li>Sometimes we fallback to using the date of the first story that linked to it.</li></ul>You can click on a story to learn more about how we guessed the date it was published.</p>',
  },
  heatMapHelpText: { id: 'heatmap.help.text',
    defaultMessage: '<p>The country map shows you an intensity of how often countries are the main focus of stories. This uses our <a href="https://cliff.mediacloud.org" target="_top">CLIFF-CLAVIN</a> geolocation engine to determine which countries each story is about (based on the places mentioned). The darker the color, the more a country was focused on. Note that this is using a sampling of the stories, not all of them. If you download a CSV of the results, the counts you see are also based on this sampling.</p><p>We have been tagging all english language stories with the places they mention since June 1, 2016.</p>',
  },
  supportOptions: { id: 'app.supportOptions', defaultMessage: 'Need help? Join our <a href="https://support">discussion group</a> or fill out the  <a href="https://mediacloud.org/support-form">support form</a>.' },
  word: { id: 'word', defaultMessage: 'Word' },
  score: { id: 'score', defaultMessage: 'Score' },
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
  create: { id: 'create', defaultMessage: 'Create' },
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
  view: { id: 'view', defaultMessage: 'View' },
  downloadSVG: { id: 'downloadSVG', defaultMessage: 'Download a SVG' },
  downloadCSV: { id: 'downloadCSV', defaultMessage: 'Download a CSV' },
  downloadOptions: { id: 'downloadOptions', defaultMessage: 'Download Options...' },
  options: { id: 'options', defaultMessage: 'Options...' },
  viewOptions: { id: 'viewOptions', defaultMessage: 'View Options...' },
  viewSampleOptions: { id: 'viewSampleOptions', defaultMessage: 'Change Sample Sizes...' },
  favorite: { id: 'favorite', defaultMessage: 'Star' },
  unfavorite: { id: 'unfavorite', defaultMessage: 'Un-star' },
  explore: { id: 'explore', defaultMessage: 'Explore' },
  nextPage: { id: 'paging.next', defaultMessage: 'Next Page' },
  previousPage: { id: 'paging.previous', defaultMessage: 'Previous Page' },
  readItNow: { id: 'readItNow', defaultMessage: 'Read It Now' },
  tryItNow: { id: 'tryItNow', defaultMessage: 'Try It Now' },
  moreOptions: { id: 'moreOptions', defaultMessage: 'More Options' },
  filter: { id: 'filter', defaultMessage: 'Filter' },
  query: { id: 'query', defaultMessage: 'Query' },
  upload: { id: 'upload', defaultMessage: 'Upload' },
  other: { id: 'other', defaultMessage: 'Other' },
  home: { id: 'home', defaultMessage: 'Home' },
  required: { id: 'required', defaultMessage: 'Required' },
  unimplemented: { id: 'unimplemented', defaultMessage: 'Unimplemented' },
  downloadDataCsv: { id: 'downloadDataCsv', defaultMessage: 'Download {name} list CSV' },
  downloadDataSvg: { id: 'downloadDataSvg', defaultMessage: 'Download {name} list SVG' },
  play: { id: 'play', defaultMessage: 'Play' },
  pause: { id: 'pause', defaultMessage: 'Pause' },
  skipNext: { id: 'skipNext', defaultMessage: 'Next' },
  skipPrevious: { id: 'skipPrevious', defaultMessage: 'Previous' },

  topicFavorited: { id: 'topics.favorited', defaultMessage: 'Starred this topic.' },
  topicUnfavorited: { id: 'topics.unfavorited', defaultMessage: 'Unstarred this topic.' },

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
  userPermissions: { id: 'user.permissions', defaultMessage: 'Permissions' },
  passwordsMismatch: { id: 'user.mismatchPassword', defaultMessage: 'Passwords do not match.' },
  passwordTooShort: { id: 'user.passwordTooShort', defaultMessage: 'Passwords must be at least 8 characters long.' },

  currentlyDownloadingCsv: { id: 'download.csv.downloading', defaultMessage: 'Your CSV is downloading.' },
  learnMoreAboutColumnsCsv: { id: 'download.csv.learnMore', defaultMessage: 'Learn more about the columns' },
  doesNotIncludeUndateable: { id: 'attentionChart.help.text.noUndateable', defaultMessage: '<p>This chart does not include stories that we have marked as "undateable".</p>' },
  attentionChartHelpText: { id: 'attentionChart.help.text',
    defaultMessage: '<p>The vertical axis shows the number of stories that are about the topic in the stories we have collected.</p><p>Roll over the line chart to see the stories per day in each timespan shown on the graph.</p><p>Click the download button in the top right to download the raw counts in a CSV spreadsheet.  Click the three lines in the top right of the chart to export the chart as an image file.</p>',
  },

  wordTreeHelpText: { id: 'wordTree.help.text',
    defaultMessage: '<p>This "word tree" visualization lets you explore the use of this word in context.  Revealing the words it is used with can be far more revealing than the simple word cloud presented.  The word is at the center, with the words that are most often used just before it on the left, and the words used most often just after on the right.</p><p>Notes:</p><ul><li>This is based on a random sample of 1000 sentence fragments, which we haven\'t exhaustively tested to see if is a representative sample (but seems to work well).</li><li>This only includes the 5 words before and after the use of the keyword you are looking at (due to copywrite sensitivities).</li><li>This uses the term, not the stem.</li></ul><p>Those caveat noted, it can still be useful to get a sense of <b>how</b> this word is being used.</p>',
  },

  totalStoriesStat: { id: 'totalStories', defaultMessage: 'Total Stories' },
  totalDownloadsStat: { id: 'totalDownloads', defaultMessage: 'Total Downloads' },
  totalSentencesStat: { id: 'totalSentences', defaultMessage: 'Total Sentences' },
  crawledMediaStat: { id: 'crawledMedia', defaultMessage: 'Media Crawled Daily' },
  crawledFeedsStat: { id: 'crawledFeeds', defaultMessage: 'Active Crawled Feeds' },
  dailyStoriesStat: { id: 'dailyStories', defaultMessage: 'Stories Added Daily' },
  dailyDownloadsStat: { id: 'dailyDownloads', defaultMessage: 'Daily Downloads' },

  entityHelpTitle: { id: 'geo.help.title', defaultMessage: 'About Our Entity Detection' },
  entityHelpContent: { id: 'geo.help.content', defaultMessage: 'We automatically detect the people, organizations, and places in articles using our <a href="https://cliff.mediacloud.org/" target="_top">CLIFF-CLAVIN engine</a>. This tags each story with the people and organizations that it mentions.  We do additional processing and disambiguation to tag stories with the country and state that our custom heuristic algorithm thinks they are about (ie. not each country/state mentioned).' },

  nytThemeHelpDetails: { id: 'nytTheme.help.deatils', defaultMessage: '<p>We run all our english stories through set of trained models to predict what themes they focus on.  To build these models we took the approach of transfer learning - starting with the <a href="https://code.google.com/archive/p/word2vec/" target="_blank">Google News word2vec</a> models and then adapting them to produce based on the <a href="https://catalog.ldc.upenn.edu/ldc2008t19" target="_blank">New York Times annotated corpus</a>.  We score each story against <a href="https://mediacloud.org/support/theme-list" target="_blank">the list of the 600 most used descriptors</a> from the NYT corpus.  Any descriptors that score above 0.2 probability are counted as themes this story focuses on.</p>' },

  mediaTypeHelpTitle: { id: 'mediaType.help.title', defaultMessage: 'About Media Type' },
  mediaTypeHelpContent: { id: 'mediaType.help.content', defaultMessage: `
      <p>Each media source can be assigned a "media type".  This indicates what kind of a source it is, and can be helpful for comparative analysis between types of sources.</p>
      <p><b>Print Native</b>: This source is primarly a print publication. Use this for newspapers and magazines. Examples: New York Times, The Economist.</p>
      <p><b>Digital Native</b>: This source is internet based. Use this for news sources that began on the internet first, organizational websites, and blogs. Examples: CDC, Vox, Scroll.in.</p>
      <p><b>Video Broadcast</b>: This source is primarily a broadcast TV station (ie. video transcriptions or closed captions). Examples: CNN, FoxNews.</p>
      <p><b>Audio Broadcast</b>: This source is primarily a broadcast radio station or podcast (ie. audio transcriptions). Examples: NPR.</p>
      <p><b>Other</b>: This source doesn't fit in any of the other categories. Examples: AP, Reuters.</p>
    `,
  },

  entityHelpDetails: { id: 'explorer.entities.help.text',
    defaultMessage: '<p>We identify people using <a href="https://nlp.stanford.edu/software/CRF-NER.shtml">Stanford\'s Named Entity Recognizer</a>. Every story is passed through out <a href="http://cliff.mediacloud.org" target="_top">CLIFF-CLAVIN engine</a> to extract all the entities.  Each story is then tagged with the people it mentions, the organizations it mentions, and the countries and states it is about. These results are are based on a sample of up to 5,000 stories.</p>',
  },
  rename: { id: 'explorer.dialog.rename', defaultMessage: 'Rename' },

  top5: { id: 'top5', defaultMessage: 'Top 5' },
  top10: { id: 'top10', defaultMessage: 'Top 10' },
  top15: { id: 'top15', defaultMessage: 'Top 15' },
  top20: { id: 'top20', defaultMessage: 'Top 20' },
  top25: { id: 'top25', defaultMessage: 'Top 25' },

  recentNews: { id: 'recentNews.title', defaultMessage: 'Recent Changes' },

  attention: { id: 'attention', defaultMessage: 'Attention' },
  storiesPerDay: { id: 'source.storiesPerDay', defaultMessage: 'Stories per Day' },
  sourceStartDate: { id: 'source.startDate', defaultMessage: 'First Story' },
  representation: { id: 'representation', defaultMessage: 'Entities' },
  influence: { id: 'influence', defaultMessage: 'Influence' },

  countsVsPercentageHelp: { id: 'explorer.countsVsPercentageHelp', defaultMessage: '<p><b>Counts vs. Percentage</b><br />You can view the attention devoted to your issue in terms of absolute counts or as percentages.  Absolute counts suffer from weekly ebbs and flows, and while searching collections don\'t reflect when we add more sources.  You can switch to view percentages in order to see normalized results that you can compare across sources and collections. To generate the normalization we run each query again without the keywords.</p>' },

  frequentlyUsed: { id: 'metadata.frequentlyUsed', defaultMessage: 'Frequently Used' },
  pubCountry: { id: 'source.pubCountry', defaultMessage: 'Publication Country' },
  pubState: { id: 'source.pubState', defaultMessage: 'Publication State' },
  mediaType: { id: 'source.pubState', defaultMessage: 'Media Type' },
  primaryLanguage: { id: 'source.primaryLanguage', defaultMessage: 'Primary Language' },
  countryOfFocus: { id: 'source.countryOfFocus', defaultMessage: 'Country of Focus' },
  pubCountryShort: { id: 'source.pubCountryShort', defaultMessage: 'Pub Country' },
  pubStateShort: { id: 'source.pubStateShort', defaultMessage: 'Pub State' },
  mediaTypeShort: { id: 'source.pubStateShort', defaultMessage: 'Media Type' },
  languageShort: { id: 'source.primaryLanguageShort', defaultMessage: 'Language' },
  countryShort: { id: 'source.countryOfFocusShort', defaultMessage: 'About Country' },
  languageHelpContent: { id: 'source.details.language.help.content', defaultMessage: '<p>We automatically guess the langauge of stories in our system. This language is the one most used by this source based on the automatic detection.</p>' },
  geoHelpDetailedContent: { id: 'source.details.geo.title', defaultMessage: '<p>This is the country this source writes about most.</p>' },

  queryHelpLink: { id: 'explorer.queryBuilder.query.descLink', defaultMessage: 'Learn more about writing boolean search queries.' },

};

export default messages;
