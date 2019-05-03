Ext.define('ArticleReader.view.top.TopViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.topviewmodel',

    stores: {
        languages: {
            autoLoad: true,
            model: 'ArticleReader.model.Language'
        },
        themes: {
            autoLoad: true,
            model: 'ArticleReader.model.Theme'
        }
    }
});
