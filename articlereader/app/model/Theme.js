Ext.define('ArticleReader.model.Theme', {
    extend: 'Ext.data.Model',
    xtype: 'Theme',

    proxy: {
        type: 'ajax',
        url: 'resources/data/themes.json',
        reader: {
            type: 'json',
            rootProperty : 'themes'
        }
    }
});
