Ext.define('ArticleReader.view.center.CenterView', {
    extend: 'Ext.tab.Panel',

    requires: [
        'ArticleReader.view.center.articleswitcher.ContentView',
        
    ],
    
    xtype: 'centerview',
    reference: 'centerview',
    referenceHolder: true,
    
    listeners : {
        tabchange : 'onTabChange' 
    }
});
