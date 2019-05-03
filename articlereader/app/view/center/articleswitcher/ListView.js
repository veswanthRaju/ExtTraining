Ext.define('ArticleReader.view.center.articleswitcher.ListView', {
    extend: 'Ext.grid.Panel',
    requires: [
        'ArticleReader.view.center.CenterController'
    ],
    xtype: 'listview',

    controller: 'centercontroller',

    fixed : true,

    reference : 'listview',

    itemId : 'ListView',
    columns: [
        {
            text: 'Author',
            dataIndex: 'author',
            width: '10%'
        },
        {
            header: 'Title',
            dataIndex: 'title',
            width: '30%'
        },        
        {
            header: 'Summary',
            dataIndex: 'excerpt',
            width: '50%',
            cellWrap : true
        },
        {
            text: 'Date',
            xtype: 'datecolumn',
            format: 'Y-m-d',
            dataIndex: 'date',
            width: '10%'
        }
    ]
});
