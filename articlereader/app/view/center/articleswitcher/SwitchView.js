Ext.define('ArticleReader.view.center.articleswitcher.SwitchView', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'switchview',

    bind: {
        store: '{views}'
    },

    labelAlign: 'right',
    displayField: 'name',
    valueField: 'id',
    editable: false,
    fieldLabel: 'Switch View:'
});
