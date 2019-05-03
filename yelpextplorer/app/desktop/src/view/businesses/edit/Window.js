Ext.define("YelpExtplorer.view.business.edit.Window", {
    extend: 'Ext.window.Window',
    xtype: 'editbusinesswindow',
    requires: [
        'YelpExtplorer.view.business.edit.WindowController',
        'Ext.form.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.column.Widget',
        'Ext.ux.rating.Picker',
        'Ext.grid.column.Template'
    ],
    controller: 'business-edit-window',
    resizable: false,
    bodyPadding: 8,
    modal: true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        reference: 'form',
        modelValidation: true,
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Name',
                bind: {
                    value: '{business.name}'
                }
            }, {
                xtype: 'rating',
                rounding: 0.5,
                minimum: 1, // Yelp ratings go from 1 - 5
                maximum: 5,
                selectedStyle: 'color: #ff4444',  // Pale red
                overStyle: 'color: #ff0000', // Red
                bind: { 
                    value: '{business.rating}' 
                }
            }
        ],
        buttons: [{
            text: 'Save',
            handler: 'onSaveClick',
            formBind: true
        }, {
            text: 'Cancel',
            handler: 'onCancelClick'
        }]
    }],
    listeners: {
        close: function (button) {
            console.log("closed");
            // this.getViewModel().get('business').reject();
            // this.getView().close();
        }
    }
});
