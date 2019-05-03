Ext.define('ArticleReader.view.left.Administration', {
    extend: 'Ext.panel.Panel',

    xtype: 'administration',

    defaults: {
        // frame: true,
        bodyPadding: 10
    },

    items: [
        {
            xtype: 'button',
            text : 'Stats',
            width : 100,
            scale : 'medium'
        }
    ]
});
