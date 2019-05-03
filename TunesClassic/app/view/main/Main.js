/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TunesClassic.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'TunesClassic.view.main.MainController',
        'TunesClassic.view.main.MainModel',        
        'TunesClassic.view.thumbnail.Thumbnail'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },
    reference : 'mainview',
    layout: 'border',
    items: [{
        region: 'center',
        xtype: 'thumbnailview',
        bind: {
            store: '{entries}',
            selection : '{record}'
        }
    }]

});
