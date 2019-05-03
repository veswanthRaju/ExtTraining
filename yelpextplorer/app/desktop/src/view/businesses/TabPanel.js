Ext.define("YelpExtplorer.view.businesses.TabPanel", {
    extend: "Ext.tab.Panel",
    xtype: 'businessestabpanel',
    requires : [
        'YelpExtplorer.view.businesses.Map',
        'YelpExtplorer.view.businesses.View',
        'YelpExtplorer.view.businesses.Grid'
    ],
    reference:'businessestabpanel',
    
    items: [{
        title: 'Map',
        xtype: 'businessesmap',
        bind: {
            location: '{location}',
            store: '{businesses}',
            selection: '{business}'
        },
        itemId : 'map'
    }, {
       title: 'View',
       xtype : 'businessesview',
       bind : {
        store: '{businesses}',
        selection: '{business}'
       },
       itemId : 'view'
    //    html: 'businessesview'
    }, {
       title: 'Grid',
       xtype : 'businessesgrid',
       bind : {
        store: '{sortableBusinesses}',
        selection: '{business}'
       },
       itemId : 'grid'
       //html: 'businessesgrid'
    }]
 });
 