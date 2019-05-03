/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ArticleReader.view.left.LeftView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'ArticleReader.view.left.treepanel.TreePanelView',
        'ArticleReader.view.left.Administration'
    ],
    xtype: 'leftview',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    defaults: {
        // frame: true,
        bodyPadding: 10
    },

    items: [
        {
            xtype: 'treepanelview',
            margin: '0 0 10 0',
            flex: 1,
            bind : {
                selection : '{record}'
            }
        },
        {
            xtype: 'administration',
            title: 'Administration',
            flex: 1
        }
    ]
});
