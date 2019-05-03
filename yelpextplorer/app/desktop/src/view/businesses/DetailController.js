Ext.define('YelpExtplorer.view.business.DetailController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.businessdetail',
    onEditClick: function(button) {
        // this.getView().add(Ext.create('YelpExtplorer.view.business.edit.Window'));
        this.getView().add(Ext.create({
            xtype: 'editbusinesswindow',
            title: 'Business',
            autoShow: true
        }));
    }
});