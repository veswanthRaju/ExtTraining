
Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',

    requires: [
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

    xtype: 'main',
    html: 'Hello, World!!'
});
