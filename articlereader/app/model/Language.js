Ext.define('ArticleReader.model.Language', {
    extend: 'Ext.data.Model',
    xtype: 'language',

    proxy: {
        type: 'ajax',
        url: 'resources/data/languages.json',
        reader: {
            type: 'json',
            rootProperty : 'languages'
        }
    }
});

