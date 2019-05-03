Ext.define('YelpExtplorer.view.business.Detail', {
    extend: 'Ext.panel.Panel',
    xtype: 'businessdetail',
    requires : [
        'YelpExtplorer.view.business.DetailController'
    ],
    controller:'businessdetail',
    tpl: [
        '<tpl if="this.isData(values)">',
        '<b>{name}</b><br/>',
        '{[Ext.Array.map(values.categories, function(item){return item[0];}).join("<br/>")]}<br/><br/>',
        '<img src="resources/images/stars_{rating}.png" /><br/>',
        '<img src="{image_url}" style="width : 100%; margin: 8px 4px 0 4px;" /><br/><br/>',
        'Reviews: {review_count}<br/><br/>',
        '{[values.location.display_address.join("<br/>")]}<br/><br/>',
        '<a href="{url}" target="_blank"><img src="resources/images/Yelp.png" width="100" height="64"/></a>',
        '</tpl>', {
            isData: function(data) {
                return !Ext.Object.isEmpty(data);
            }
        }
    ],
    tbar : [{
        text: 'Edit',
        disabled: true,
        bind: {
            disabled: '{!business}'
        },
        handler : 'onEditClick'
    }],    
    bodyPadding : 6,
    
});