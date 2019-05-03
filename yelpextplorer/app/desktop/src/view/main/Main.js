Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.plugin.Viewport',
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel', 
        'YelpExtplorer.view.Banner',
        'YelpExtplorer.view.businesses.Filter',
        'YelpExtplorer.view.businesses.TabPanel',
        'YelpExtplorer.view.business.Detail'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

    xtype: 'main',

    dockedItems: [{
        xtype: 'banner',
        dock: 'top'
    },
    {
        dock: 'top',
        xtype: 'businessesfilter'
    }],
    layout: 'border',
    items: [{
        region: 'center',
        xtype: 'businessestabpanel',
        listeners : {
            tabChange : 'onBusinessesTabChange'
        },
    }, {
        region: 'east',
        xtype: 'businessdetail',
        bind: {
            data: {
                bindTo: '{business}',
                deep : true // it is by default true..
            }
        },
        width: 250
    }]    
});
