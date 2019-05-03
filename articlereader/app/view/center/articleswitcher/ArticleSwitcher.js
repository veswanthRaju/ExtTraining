Ext.define('ArticleReader.view.center.articleswitcher.ArticleSwitcher', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Card',
        'ArticleReader.view.center.articleswitcher.ThumbnailView',
        'ArticleReader.view.center.articleswitcher.ListView',
        'ArticleReader.view.center.CenterViewModel',
        'ArticleReader.view.center.articleswitcher.SwitchView',
        'ArticleReader.view.center.ArticleSwitcherController'
    ],
    xtype: 'articleswitcher',

    layout: 'card',
    width: 500,
    height: 400,
    bodyPadding: 15,

    viewModel : {
        type : 'centerviewmodel'
    },

    controller : 'articleswitchercontroller',

    defaults: {
        border:false
    },

    bind : {
        activeItem : '{selectedRecord}'
    },

    tbar: ['->',
        { //combobox
            xtype : 'switchview',
            bind : {
                value : '{selectedRecord}'
            },
            // listeners : {
            //     select : 'switchView'
            // }
        }
    ],

    items: [
        {
            //listview
            xtype : 'listview',
            scrollable : true,
            bind: {
                store: '{articles}',
                selection : '{articleRecord}'
            }
        },
        {
            //thumbnail view
            xtype : 'thumbnailview',
            bind: {
                store: '{articles}',
                selection : '{articleRecord}'
            }
        }
    ]
});


