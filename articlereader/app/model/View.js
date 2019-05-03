Ext.define('ArticleReader.model.View', {
    extend: 'Ext.data.Model',
    xtype: 'view',

    proxy: {
        type: 'ajax',
        url: 'resources/data/views.json',
        reader: {
            type: 'json',
            rootProperty : 'views'
        }
    }
});

