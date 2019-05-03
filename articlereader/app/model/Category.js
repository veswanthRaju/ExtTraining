Ext.define('ArticleReader.model.Category', {
    extend: 'Ext.data.TreeModel',
    xtype: 'category',

    proxy: {
        type: 'ajax',
        url: 'resources/data/category.json',
        reader: {
            type: 'json'
        }
    }
});


