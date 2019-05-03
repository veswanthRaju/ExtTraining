Ext.define('ArticleReader.view.center.articleswitcher.ThumbnailView', {
    extend: 'Ext.view.View',
    requires: [
        'ArticleReader.view.center.CenterController'
    ],
    xtype: 'thumbnailview',

    scrollable: true,
    controller: 'centercontroller',
    
    itemId : 'ThumbnailView',

    bind : {
        selection : '{articleRecord}'
    },

    itemTpl: '<figure><img src="resources/images/wttlogo.png"><figcaption>{author}</figcaption></figure>',
    itemCls: 'thumbnailview',
    overItemCls: 'over',
    selectedItemCls: 'selected'
});
