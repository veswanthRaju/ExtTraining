/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TunesClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires : [
        'TunesClassic.view.modal.Window'
    ],
    onItemClick : function (v, record, item, index, e, eOpts) {
        
        debugger;
        var thumbnail = this.getView();
        console.log(thumbnail);
        thumbnail.add(Ext.create({
            xtype : 'modalwindow',
            autoShow: true
        }));
        
        // Ext.create('TunesClassic.view.modal.Window', {
        //     title: record.data.artist + ',' + record.data.title,
        //     autoShow: true,
        //     data : record.data
        // });
    }
});
