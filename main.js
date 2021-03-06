/******************************/
// Globals
/******************************/
const videos = [];
const users = [];
const CE = createElement;
let currentUser = 1;
let query = '';

/******************************/
// Class Definitions
/******************************/
class Video {
  constructor([title, channel, channelicon, description, views, categories, thumbnail, embed]) {
    this.title = title || '';
    this.channel = channel || '';
    this.channelicon = channelicon || '';
    this.description = description || '';
    this.views = views || '';
    this.categories = categories || '';
    this.comments = [];
    this.thumbnail = thumbnail || '';
    this.embed = embed || '';
  }
  addComment(comment) {
    this.comments.unshift(comment);
  }
  addCategory(category) {
    if (!this.categories.includes(category)) {
      this.categories.push(category);
    }
  }
  removeCategory(category) {
    if (this.categories.includes(category)) {
      this.categories.splice(category, 1);
    }
  }
}

class User {
  constructor([name, icon]) {
    this.name = name || '';
    this.icon = icon || '';
    this.subscribed = [];
  }
  addSubscribed(channel) {
    if (!this.subscribed.includes(channel)) {
      this.subscribed.push(channel);
    }
  }
  removeSubscribed(channel) {
    if (this.subscribed.includes(channel)) {
      this.subscribed.splice(channel, 1);
    }
  }
}

/******************************/
// Building a database
/******************************/
videos.push(new Video([
  'A Message from President-Elect Donald J. Trump',
  'Transition 2017',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "The President-elect shares an update on the Presidential Transition," +
    " an outline of some of his policy plans for the first 100 days, and his day one executive actions.",
  '1,341,158',
  ['election', 'trump'],
  'https://i.ytimg.com/vi/7xX_KaStFT8/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=sSuKCtqF5viHrZPjm2RfTsPvqNs',
  'https://www.youtube.com/embed/7xX_KaStFT8?autoplay=1'
]));
videos.push(new Video([
  'Cars 3 Official US Teaser Trailer',
  'Disney-Pixar',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "From this moment, everything will change.\n\nDisney/Pixar's Cars 3 opens in US theatres" +
    " in 3D June 16, 2017.\n\nBlindsided by a new generation of blazing-fast races, the legendary Lightning McQueen (voice of Owen" +
    " Wilson) is suddenly pushed out of the sport he loves. To get back in the game, he will need the help of" +
    " an eager young race technician, Cruz Ramirez, with her own plan to win, plus inspiration from the late Fabulous" +
    " Hudson Hornet and a few unexpected turns.",
  '3,258,307',
  ['disney', 'cars', 'trailer'],
  'https://i.ytimg.com/vi/E4K7JgPJ8-s/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=DEWWRQJ38bHkSaBCT19c7Xeimnw',
  'https://www.youtube.com/embed/E4K7JgPJ8-s?autoplay=1'
]));
videos.push(new Video([
  'Flip Edition | Dude Perfect',
  'Dude Perfect',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "It's time to flip some stuff!\nThanks to Fantasitc Gymnastics by Hasbro Gaming for sponsoring" +
    " this video! Go to http://bit.ly/FantasticGymnasticsDP to get Fantastic Gymnastics for yourself!",
  '4,460,870',
  ['flip', 'cool', 'action'],
  'https://i.ytimg.com/vi/8YydogFXCPM/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=MzABtab1-7LFj6m97B5xOS-lCgk',
  'https://www.youtube.com/embed/8YydogFXCPM?autoplay=1'
]));
videos.push(new Video([
  'Billy on the Street: DEATH ROGEN! With Seth Rogen',
  'billyonthestreettv',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "New from Billy on the Street! Watch Billy hit the street with SETH ROGEN in disguise, tell" +
    " people that Seth has died and get their reactions! We call this DEATH ROGEN. Watch full episodes of Billy on the Street Tuesdays at 10:30/9:30c on @TruTV!",
  '364,533',
  ['comedy'],
  'https://i.ytimg.com/vi/A2R2iBc8udc/hqdefault.jpg?custom=true&w=168&h=94&stc=true&jpg444=true&jpgq=90&sp=68&sigh=j7ivnsDvrCl-ucJWKLoscivhtrs',
  'https://www.youtube.com/embed/diN92St7FA8?autoplay=1'
]));
videos.push(new Video([
  'Bullets vs Propeller in Slow Motion - The Slow Mo Guys',
  'The Slow Mo Guys',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "Gary and Dan venture out to the desert to film some bullets. Make sure you watch in HD for maximum bullet" +
    " shockwave action!\nCheers to EA for sponsoring this video. Check out the game at http://www.battlefield.com\n" +
    "Follow Gav on Twitter - https://twitter.com/GavinFree\nFollow Dan on Twitter - https://twitter.com/DanielGruchy",
  '1,466,322',
  ['cool', 'action'],
  'https://i.ytimg.com/vi/ysB-SH19WRQ/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=9OEQLS6JSWBMQ8sCrd0yZt58lJ8',
  'https://www.youtube.com/embed/ysB-SH19WRQ?autoplay=1'
]));
videos.push(new Video([
  'The Voice 2016 Billy Gilman - Top 11: "All I Ask"',
  'The Voice',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "Billy Gilman showcases his vocal talent with a powerful rendition of 'All I Ask' by Adele.\n\n" +
    "NBC's The Voice follows the strongest vocalists from across the country and invites them to compete in" +
    " this season's blockbuster vocal competition.",
  '213,615',
  ['cool', 'singing'],
  'https://i.ytimg.com/vi/RswuJVHVw_0/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=6lmdPt82bEpmKOw202Zi67Iwk7U',
  'https://www.youtube.com/embed/RswuJVHVw_0?autoplay=1'
]));
videos.push(new Video([
  'The iPhone 8 Will Be Incredible!',
  'EverythingApplePro',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "iPhone 8 & 8 Plus Rumors & Leaks Have Begun! New Features To Expect & Rumor Roundup With Sources!",
  '693,167',
  ['technology', 'tech', 'apple', 'iphone'],
  'https://i.ytimg.com/vi/MZqyfeUi7As/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=HDgDRvuiwhCcMHXVT0Gm9eukqU8',
  'https://www.youtube.com/embed/MZqyfeUi7As?autoplay=1'
]));
videos.push(new Video([
  '10 Disney Crossover Easter Eggs That You\'ve Never Seen',
  'Screen Rant',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "Animated movies are a right of passage for most children, and nobody does them better than Disney. Every child remembers watching Snow White and" +
    " The Little Mermaid for the first time, and most of us are still heading to theatres whenever a new Pixar film comes out. But we don't always catch the Easter" +
    " eggs left there by mischievious animators, or the cameos that some Disney characters make in movies that aren't their own.",
  '260,853',
  ['disney', 'cool'],
  'https://i.ytimg.com/vi/KBTwUOsO4d0/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=Ue_RmuQ0uggRmpbxvxQAiC-w060',
  'https://www.youtube.com/embed/KBTwUOsO4d0?autoplay=1'
]));
videos.push(new Video([
  'Disney Pixar Cars | The Die-cast Series Ep. 2 | Takes on the Washroom',
  'Disney-Pixar',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "Get ready to watch your favorite Disney Pixar Cars die-cast vehicles race to the finish in awesome real world environments. Tune " +
    "in each week to see your favorite die-cast vehicles speed, drift and jump through new locations and crazy obstacles on their way to the finish line.",
  '282,667',
  ['disney', 'short', 'cars'],
  'https://i.ytimg.com/vi/-6rCTa9DBx0/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=OFObaw7I2mU4ost9g3mmfN_Amd8',
  'https://www.youtube.com/embed/-6rCTa9DBx0?autoplay=1'
]));
videos.push(new Video([
  'Apple - Introducing iPhone 7',
  'Apple',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "With new camera systems, stereo speakers, and the most powerful chip ever in a smartphone, iPhone 7 and iPhone 7 Plus make " +
    "the things you do most even better. Two new finishes highlight the seamless design.",
  '22,191,734',
  ['technology', 'tech', 'apple', 'iphone'],
  'https://i1.ytimg.com/vi/Q6dsRpVyyWs/hqdefault.jpg',
  'https://www.youtube.com/embed/Q6dsRpVyyWs?autoplay=1'
]));

users.push(new User([
  'User1',
  'http://simpleicon.com/wp-content/uploads/user1.png'
]));
users.push(new User([
  'User2',
  'https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png'
]));
users.push(new User([
  'User3',
  'http://downloadicons.net/sites/default/files/women-business-user-icon-44928.png'
]));
users.push(new User([
  'User4',
  'https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png'
]));

/******************************/
// DOM Related Objects
/******************************/
// Display object for any elements on the homepage
const frontPage = {

  init: function() {
    this.cacheDOM();
    this.buildFeatured();
  },

  cacheDOM: function() {
    this.$featured = document.getElementById('featured');
  },

  // Build the Featured videos display area
  buildFeatured: function() {
    const featuredList = [];
    const $featureBlock =
      CE('div', {'id': 'featureblock'}, [
        CE('div', {'class': 'feature-top'}, [
          CE('div', {'class': 'header'}, ['Featured'])
        ])
      ]);
    const $featureBottom = CE('div', {'class': 'feature-bottom'}, []);
    const $featureList = CE('ul', {'class': 'feature-list'}, []);

    // Build a list of four randomized video indexes
    while (featuredList.length < 4) {
      const random = Math.floor(Math.random() * videos.length);
      if (!featuredList.includes(random)) featuredList.push(random);
    }

    // Add the video details of the four randomized videos
    featuredList.map((index) => {
      let $featureCol =
        CE('li', {'class': 'col'}, [
          CE('div', {'class': 'col-wrap'}, [
            CE('a', {'href': '#'}, [
              CE('img', {'class': 'videoimg', 'src': videos[index].thumbnail, 'data-embed': videos[index].embed}, [])
            ]),
            CE('a', {'href': '#'}, [
              CE('p', {'class': 'videotitle', 'data-embed': videos[index].embed}, [videos[index].title])
            ]),
            CE('div', {'class': 'videochannel'}, [videos[index].channel]),
            CE('div', {'class': 'videoviews'}, [videos[index].views + ' views'])
          ])
        ]);

        $featureList.appendChild($featureCol);
    });

    $featureBottom.appendChild($featureList);
    $featureBlock.appendChild($featureBottom);
    this.$featured.appendChild($featureBlock);
  }

};

// Display object for populating relevant video search results
const searchResults = {

  init: function() {
    this.cacheDOM();
  },

  cacheDOM: function() {
    this.$videos = document.getElementById('videos');
    this.$filter = document.getElementById('filter');
  },

  // Build video search results list
  buildVideoList: function(elements) {
    let $videoBlock;
    const $filterResults = document.querySelector('#filterblock .filter-results');
    const $exists = document.getElementById('videoblock');

    // Check if the video results DOM object exists in memory already
    if (!$exists) {
      $videoBlock = CE('div', {'id': 'videoblock'}, []);
    }
    else {
      $videoBlock = $exists;
    }

    // Append the video results display area
    this.$videos.appendChild($videoBlock);

    // Append # of results to results header
    $filterResults.textContent = 'About ' + elements.length + ' results';

    // Append all video elements to the search results area
    elements.map((element) => {
      let $videoDetails =
        CE('div', {'class': 'videodetails', 'data-embed': element.embed}, [
          CE('a', {'href': '#'}, [
            CE('img', {'class': 'videoimg', 'src': element.thumbnail, 'data-embed': element.embed}, [])
          ]),
            CE('a', {'href': '#'}, [
              CE('h4', {'class': 'videotitle', 'data-embed': element.embed}, [element.title])
          ]),
          CE('p', {'class': 'videochannel'}, [element.channel]),
          CE('p', {'class': 'videoviews'}, [element.views + ' views']),
          CE('p', {'class': 'videodesc'}, [element.description])
        ]);

      $videoBlock.appendChild($videoDetails);
    });
  },

  // Build the filter and it's associated filter options
  buildFilter: function() {
    const $exists = document.getElementById('filterblock');

    // Check if the filter results DOM object exists in memory already
    if ($exists) return;
    else {
      // Populate filter & filter options
      const $filterBlock = CE('div', {'id': 'filterblock'}, []);

      const $filter =
        CE('div', {'id': 'top-filter'}, [
          CE('button', {'class': 'filter-button'}, [
            CE('span', {'class': 'filter-text'}, ["Filters"]),
            CE('span', {'class': 'filter-icon'}, [
              CE('i', {'class': 'fa fa-caret-down filter', 'aria-hidden': 'true'}, [])
            ])
          ]),
          CE('span', {'class': 'filter-results'}, [])
        ]);

      const $filterOptions =
        CE('div', {'id': 'bottom-filter', 'class': 'hidden'}, [
          CE('div', {'class': 'option-block'}, [
            CE('span', {'class': 'option toggle', 'data-opt': 0}, ['Relevance']),
            CE('span', {'class': 'option', 'data-opt': 1}, ['Most Viewed']),
            CE('span', {'class': 'option', 'data-opt': 2}, ['Subscribed'])
          ])
        ]);

      this.$filter.appendChild($filterBlock);
      $filterBlock.appendChild($filter);
      $filterBlock.appendChild($filterOptions);
    }
  },

  // Filter search results based on the selected results filter
  filterVideos: function(option) {
    const $invalid = document.getElementById('invalidsearch');
    const $videoBlock = document.getElementById('videoblock');

    // If the invalid search message element exists, hide it
    if ($invalid) hide($invalid);

    // Check that the user has previously entered a valid search
    if (query) {
      const videoList = this.findMatch();

      // Ensure that the previous search results are cleared out
      if ($videoBlock) deleteChild($videoBlock);

      // Show invalid search message if there are no results
      if (videoList.length <= 0) {
        if (!$invalid) {
          const $invalidSearch = CE('h2', {'id': 'invalidsearch'}, ['No results found for: ' + query + '.']);
          this.$filter.appendChild($invalidSearch);
        }
        else {
          $invalid.textContent = 'No results found for: ' + query + '.';
          show($invalid);
        }

        const $filterResults = document.querySelector('#filterblock .filter-results');

        hide(this.$videos);
        $filterResults.textContent = 'About 0 results';
      }
      // Otherwise, search has some hits
      else {
        show(this.$videos);

        // Relevance filter
        if (option === '0') {
          this.buildVideoList(videoList);
        }
        // Most Viewed filter
        else if (option === '1') {
          // Build a list of videos sorted from highest to lowest view count
          const sorted =
            videoList.map(video => {
              let index = findVideo(video.embed);
              let views = parseInt(video.views.replace(/,/g, ''));
              return [index, views];
            })
            .sort((video1, video2) => {
              if (video1[1] < video2[1]) return 1;
              else return 0;
            });

          // Grab all the indexes of the resorted videos
          const mostViews = sorted.map(video => videos[video[0]]);

          // Redraw the video results list
          this.buildVideoList(mostViews);
        }
        // Subscribed filter
        else if (option === '2') {
          // Find all of the videos that the user is currently subscribed to
          const sorted = videoList.filter(video => users[currentUser].subscribed.includes(video.channel));

          // Redraw the video results list
          this.buildVideoList(sorted);
        }
      }
    }
  },

  // Find videos in the database that match the search query
  findMatch: function() {
    const videoList = [];
    const videoScores = [];
    const searchWords = query.split(' ');
    let channel, title, description, subscribed, category, score = 0;

    // Check all of the space separated user search terms against the database
    for (let index = 0; index < searchWords.length; index++) {
      let search = searchWords[index].toLowerCase().replace(/[^A-Za-z0-9\s]/g,'');

      // Ensure that the user input is valid
      if (search) {
        // Cycle through the video database and compare the search query against video properties
        videos.map((video, index) => {
          subscribed = false;
          channel = video.channel.toLowerCase().replace(/[^A-Za-z0-9\s]/g,'').includes(search);
          title = video.title.toLowerCase().replace(/[^A-Za-z0-9\s]/g,'').includes(search);
          description = video.description.toLowerCase().replace(/[^A-Za-z0-9\s]/g,'').includes(search);
          category = video.categories.indexOf(search) > -1;

          // Check to see if the search query has at least 1 hit
          if (channel || title || description || category) {
            // Get the current relevance score of the video
            score = this.getScore(videoScores, index);

            // Check for pre-existing relevance scores
            if (score < 0) {
              videoScores.push([index, 0]);
              score = 0;
            }
            // Check if the user is currently subscribed to the video
            if (users[currentUser].subscribed.includes(video.channel)) subscribed = true;

            // Subscribed videos should rank higher than non-subscribed videos
            if (subscribed) {
              if (channel) score += 1000;
              if (title) score += 200;
              if (category) score += 50;
              if (description) score += 0.5;
            }
            else {
              if (channel) score += 30;
              if (title) score += 2;
              if (category) score += 1;
              if (description) score += 0.1;
            }
            // Update the relevance score for that video
            this.setScore(videoScores, index, score);
          }
        });
      }
    }

    // Sort videos from highest to lowest view count
    videoScores.sort((video1, video2) => {
      if (video1[1] < video2[1]) return 1;
      else return 0;
    })
    .map(video => {
      videoList.push(videos[video[0]]);
    });

    return videoList;

  },

  // Helper function to return the search score for the indexed video, if there is one
  getScore: function(list, video) {
    const score = list.filter(item => item[0] === video);

    if (score.length > 0) return score[0][1];
    else return -1;
  },

  // Helper function to update the search score for the indexed video
  setScore: function(list, video, score) {
    for (let index = 0; index < list.length; index++) {
      if (list[index][0] === video) {
        list[index][1] = score;
        return;
      }
    }
  },

};

// Display object for video player and associated user comments
const videoPlayer = {

  init: function() {
    this.cacheDOM();
  },

  cacheDOM: function() {
    this.$videos = document.getElementById('videos');
    this.$filter = document.getElementById('filter');
    this.$exists = document.getElementById('usercomments');
    this.$commentHeader = document.querySelector('#addcomments .header');
    this.$input = document.querySelector('#addcomments .input');
  },

  // Build the video viewing area
  buildViewingArea: function(embed) {
    const index = findVideo(embed);

    hide(this.$filter);
    this.buildVideoArea(embed);
    this.buildVideoDetails(index);
    this.buildCommentsArea();
    this.buildUserComments(index);
  },

  // Helper function to build the embedded video display
  buildVideoArea: function(embed) {
    const $viewingArea = CE('div', {'id': 'viewingarea'}, []);

    this.$videos.appendChild($viewingArea);

    var $embed =
      CE('div', {'id': 'embed'}, [
        CE('iframe', {'id': 'uservideo', 'height': '480px', 'width': '854px', 'src': embed, 'frameborder': 0, 'allowfullscreen': ''}, [])
      ]);

    $viewingArea.appendChild($embed);
  },

  // Helper function to build the embedded video's associated details
  buildVideoDetails: function(index) {
    // Check to see if the user is subscribed to the current video
    const subscribed = users[currentUser].subscribed.includes(videos[index].channel);

    const $channelbox =
        CE('div', {'id': 'channelbox'}, [
          CE('img', {'class': 'videoicon', 'src': videos[index].channelicon}, []),
          CE('div', {'class': 'channelwrap'}, [
            CE('p', {'class': 'channel'}, [videos[index].channel]),
            CE('button', {'id': 'subscribe', 'class': subscribed ? 'yes' : 'no'}, [subscribed ? '✓ Subscribed' : 'Subscribe'])
          ])
        ]);

    const $titlebox =
      CE('div', {'id': 'titlebox'}, [
        CE('h2', {'class': 'title'}, [videos[index].title])
      ]);

    const $videoinfo =
      CE('div', {'id': 'videoinfo'}, [
        $titlebox, $channelbox,
        CE('p', {'class': 'views'}, [videos[index].views + ' views']),
        CE('p', {'class': 'desc'}, [videos[index].description])
      ]);

    this.$videos.appendChild($videoinfo);
  },

  // Helper function to build the Add Comments area
  buildCommentsArea: function() {
    const $author =
      CE('span', {'class': 'author'}, [
        CE('img', {'class': 'icon', 'src': users[currentUser].icon}, [])
      ]);

    const $commentWrap =
      CE('div', {'class': 'wrap'}, [
        CE('form', {'action': ''}, [
          CE('textarea', {'class': 'input', 'type': 'text', 'placeholder': 'Add a public comment...', 'name': 'comment'}, [])
        ]),
        CE('div', {'class': 'buttonwrap'}, [
          CE('button', {'class': 'submitcomment'}, ['Comment']),
          CE('button', {'class': 'cancelcomment'}, ['Cancel'])
        ])
      ]);

    const $addComments =
      CE('div', {'id': 'addcomments'}, [
        CE('h4', {'class': 'header'}, []),
        $author,
        $commentWrap
      ]);

    this.$videos.appendChild($addComments);
  },

  // Helper function to build the User Comments area
  buildUserComments: function(index) {
    const numComments = videos[index].comments.length;
    const $commentHeader = document.querySelector('#addcomments .header');

    $commentHeader.textContent = 'COMMENTS • ' + numComments;

    // Build comments area if there is at least one associated video comment
    if (numComments > 0) {
      const $exists = document.getElementById('usercomments');

      // Check if the user comments area has already been built
      if ($exists) {
        deleteChild($exists);
        this.populate(index, $exists, numComments);
      }
      else {
        const $userComments = CE('div', {'id': 'usercomments'}, []);
        this.$videos.appendChild($userComments);
        this.populate(index, $userComments, numComments);
      }
    }
  },

  // Helper function to populate the User Comments section
  populate: function(video, $element, numComments) {
    for (let index = 0; index < numComments; index++) {
      let $userComment =
        CE('div', {'class': 'block'}, [
          CE('span', {'class': 'author'}, [
            CE('img', {'class': 'icon', 'src': videos[video].comments[index].icon}, [])
          ]),
          CE('div', {'class': 'wrap'}, [
            CE('p', {'class': 'user'}, [videos[video].comments[index].user]),
            CE('p', {'class': 'comment'}, [videos[video].comments[index].comment])
          ])
        ]);

      $element.appendChild($userComment);
    }
  },

  // Add comments to the user comments area
  addComment: function(index) {
    const $input = document.querySelector('#addcomments .input');
    const input = $input.value.trim();

    // Ensure that the user comment is valid
    if (input) {
      const comment = new Comment(users[currentUser].name, users[currentUser].icon, 40, input);

      videos[index].comments.unshift(comment);
      $input.value = '';
      this.buildUserComments(index);
    }
  }

};

/******************************/
// Helper Functions
/******************************/
// Deletes all of the children associated with the provided element ID.
function deleteChild(element) {
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }
}

// Create elements with the given attributes & child nodes
function createElement(tagName, attributes, children) {
  let element = document.createElement(tagName);

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  for (let index = 0; index < children.length; index++) {
    let child = children[index];

    if (child instanceof Element) {
      element.appendChild(child);
    }
    else {
      element.appendChild(document.createTextNode(child));
    }
  }
  return element;
}

// Set a hidden object to active
function show($element) {
  $element.classList.add('active');
  $element.classList.remove('hidden');
}

// Set an active object to hidden
function hide($element) {
  $element.classList.add('hidden');
  $element.classList.remove('active');
}

// Comment object constructor
function Comment(user, icon, age, comment) {
  this.user = user;
  this.icon = icon;
  this.age = age;
  this.comment = comment;
}

// Returns index of target video in video database
function findVideo(embed) {
  for (var index = 0; index < videos.length; index++) {
    if (videos[index].embed === embed) {
      return index;
    }
  }
}

/******************************/
// Event Listeners
/******************************/
// Search query submit event
document.addEventListener('submit', event => {

  event.preventDefault();

  query = document.getElementById('searchbar').value.trim();

  // Ensure that the search query is valid
  if (query) {
    const $videos = document.getElementById('videos');
    const $filter = document.getElementById('filter');
    const $featured = document.getElementById('featured');

    searchResults.buildFilter();
    show($filter);
    hide($featured);

    const $options = document.querySelector('#filterblock .option-block').getElementsByClassName('toggle')[0];

    deleteChild($videos);
    searchResults.filterVideos($options.getAttribute('data-opt'));
  }

}, true);

// Global click event
document.addEventListener('click', event => {

  const $target = event.target;

  // User wants to navigate back to the homepage
  if ($target.id === 'logo') {
    const $videos = document.getElementById('videos');
    const $filter = document.getElementById('filter');
    const $featured = document.getElementById('featured');

    show($featured);
    hide($filter);
    hide($videos);
    deleteChild($videos);
    deleteChild($featured);
    frontPage.buildFeatured();
  }
  // User wants to view a video
  if ($target.className === 'videoimg' || $target.className === 'videotitle') {
    const $featured = document.getElementById('featured');
    const $videos = document.getElementById('videos');
    const embedURL = $target.getAttribute('data-embed');

    event.preventDefault();

    hide($featured);
    deleteChild($videos);
    videoPlayer.buildViewingArea(embedURL);
    show($videos);
  }
  // User wants to submit a comment
  if ($target.className === 'submitcomment') {
    const embedURL = document.getElementById('uservideo').getAttribute('src');
    videoPlayer.addComment(findVideo(embedURL));
  }
  // User wants to cancel a comment entry
  if ($target.className === 'cancelcomment') {
    document.querySelector('#addcomments .input').value = '';
  }
  // User wants to subscribe to a video
  if ($target.id === 'subscribe') {
    const channel = document.querySelector('#videoinfo .channel').textContent;

    if ($target.className === 'yes') {
      $target.setAttribute('class', 'no');
      $target.textContent = 'Subscribe';
      users[currentUser].subscribed.splice(users[currentUser].subscribed.indexOf(channel), 1);
    }
    else {
      $target.setAttribute('class', 'yes');
      $target.textContent = '✓ Subscribed';
      users[currentUser].subscribed.push(channel);
    }
  }
  // User wants to select from a number of search result filter options
  if ($target.className.includes('filter')) {
    let $filterBlock = document.getElementById('filterblock').getElementsByClassName('hidden')[0];

    if ($filterBlock) {
      show($filterBlock);
    }
    else {
      $filterBlock = document.getElementById('filterblock').getElementsByClassName('active')[0];
      hide($filterBlock);
    }
  }
  // User wants to specify a search result filter
  if ($target.className.includes('option') && !$target.className.includes('toggle')) {
    const $options = $target.parentElement.getElementsByClassName('option');

    for (let index = 0; index < $options.length; index++) {
      if ($options.item(index).className.includes('toggle')) {
        $options.item(index).classList.remove('toggle');
      }
    }
    $target.classList.add('toggle');
    searchResults.filterVideos($target.getAttribute('data-opt'));
  }

}, true);

frontPage.init();
searchResults.init();
videoPlayer.init();
