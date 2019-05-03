Ext.define('ArticleReader.view.left.treepanel.TreePanelView', {
    extend: 'Ext.tree.Panel',
    requires: [
        'ArticleReader.view.left.treepanel.TreePanelViewModel'
    ],
    viewConfig : {
        plugins : [
            'treeviewdragdrop'
        ]
    },
    xtype: 'treepanelview',

    viewModel: {
        type: 'treepanelviewmodel'
    },

    scrollable: false,
    root: {
        title: 'All Articles',
        expanded : true
    },

    displayField: 'title',
    bind: {
        store: '{treeStore}'
    }
});
