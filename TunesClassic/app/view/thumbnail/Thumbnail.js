Ext.define('TunesClassic.view.thumbnail.Thumbnail', {
    extend: 'Ext.view.View',
    xtype: 'thumbnailview',
    scrollable: true,
    itemTpl: '<figure><img src="{image}"><figcaption>{title}</figcaption><figcaption>{artist}</figcaption></figure>',
    itemCls: 'thumbnailview',
    overItemCls: 'over',
    selectedItemCls: 'selected',
    listeners: {
        // itemclick: 'onItemClick'
        select: 'onItemClick'
    }
});
