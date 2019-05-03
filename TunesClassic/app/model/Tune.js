Ext.define('TunesClassic.model.Tune', {
   extend: 'Ext.data.Model',

   fields: [{
      name: 'id', // Video Id
      mapping: 'id.attributes["im:id"]'
   }, {
      name: 'title', // Title of the song
      mapping: '["im:name"].label'
   }, {
      name: 'image', // Image of the video preview
      mapping: '["im:image"][2].label'
   }, {
      name: 'artist', // Artist name
      mapping: '["im:artist"].label'
   }, {
      name: 'itunesstore', // Link to the itunes store to buy the video
      mapping: 'link[0].attributes.href'
   }, {
      name: 'preview', // Link to play the video preview
      mapping: 'link[1].attributes.href'
   }],

   proxy: {
      type: 'jsonp',
      url: 'https://itunes.apple.com/us/rss/topmusicvideos/limit=50/json',
      reader: {
         rootProperty: 'feed.entry',
         type: 'json'
      }
   }
});


