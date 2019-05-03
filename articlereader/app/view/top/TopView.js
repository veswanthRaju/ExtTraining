/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ArticleReader.view.left.TopView', {
    extend: 'Ext.toolbar.Toolbar',
    requires : [
        'ArticleReader.view.top.TopViewModel'
    ],
    xtype: 'topview',

    viewModel : {
        type : 'topviewmodel'
    },

    layout: {
        type: 'hbox'
    },

    defaults: {
        bodyPadding: 10
    },

    items: [
        {
            xtype : 'image',
            src : 'resources/images/wttlogo.png',
            width : 38
        },
        {
            xtype : 'tbtext',
            html : '<h1 style = "margin: 10px 0 0 0;">Article Reader</h1>'
        },
        '->',
        {
            xtype : 'combobox',
            fieldLabel : 'Switch Theme:',
            displayField: 'name',
            // valueField : ''
            labelAlign : 'right',
            emptyText: 'Select Theme',
            bind : {
                store : '{themes}'
            }
        },
        {
            xtype : 'combobox',
            fieldLabel : 'SwitchLanguage:',
            displayField: 'name',
            value: 'English',
            emptyText: 'Select Language',
            bind : {
                store : '{languages}'
            }
        }
    ]
});
