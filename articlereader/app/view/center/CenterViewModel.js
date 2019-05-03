Ext.define('ArticleReader.view.center.CenterViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.centerviewmodel',

    data : {
        articleRecord : null,
        selectedRecord : 'ListView'
    },

    stores: {
        articles: {
            model: 'ArticleReader.model.Article',
            proxy: {
                type: 'jsonp',
                url : 'http://touchdemo.walkingtree.in/Training/?json=get_posts{nodeUrl}',
                reader: {
                   rootProperty: 'posts',
                   type: 'json'
                }
             },
            autoLoad: true
        },
        views: {
            model: 'ArticleReader.model.View',
            autoLoad: true
        }
    }
});
