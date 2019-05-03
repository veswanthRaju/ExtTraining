/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ArticleReader.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.plugin.Viewport',
        'ArticleReader.view.main.MainController',
        'ArticleReader.view.main.MainModel',
        'ArticleReader.view.left.LeftView',
        'ArticleReader.view.left.TopView',
        'ArticleReader.view.center.CenterView'
    ],

    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    dockedItems: [{
        xtype: 'topview',
        dock: 'top',
        height: 55
    }],

    defaults: {
        split: true
    },

    layout: 'border',
    items: [{
        xtype: 'leftview',
        region: 'west',
        width: 250,
        minWidth: 100,
        maxWidth: 350,
    }, {
        xtype: 'centerview',
        region: 'center'
    }]
});
