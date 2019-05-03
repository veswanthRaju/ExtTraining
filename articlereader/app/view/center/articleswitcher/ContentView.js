Ext.define('ArticleReader.view.center.articleswitcher.ContentView', {
    extend: 'Ext.view.View',
    requires: [
        'ArticleReader.view.center.CenterViewModel'
    ],
    xtype: 'contentview',

    viewModel : {
        type : 'centerviewmodel'
    },

    layout: 'border',
    width: 500,
    height: 400,
    bodyPadding: 15,

    defaults: {
        border:false
    },
    scrollable : true,
    
    bind : {
        store : '{articles}'
    },
    itemTpl: '{content}'

});


