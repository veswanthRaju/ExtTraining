Ext.define('ArticleReader.model.Article', {
   extend: 'Ext.data.Model',
   xtype: 'article',

   fields: [{
      name: 'firstName',
      mapping: 'author.first_name'
   }, {
      name: 'lastName',
      mapping: 'author.last_name'
   },
   {
      name: 'author',
      calculate: function (data) {
         return data.firstName + ' ' + data.lastName;
      }
   }
   ],

   // proxy: {
   //    type: 'jsonp',
   //    url : '',
   //    //url: 'http://touchdemo.walkingtree.in/Training/?json=get_posts&cat=481',
   //    // url = 'http://touchdemo.walkingtree.in/Training/?json=get_posts',
   //    reader: {
   //       rootProperty: 'posts',
   //       type: 'json'
   //    }
   // }
});