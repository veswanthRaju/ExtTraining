Ext.define('Concerts.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    onSelect: function (view, record, index, eOpts) {
        console.log("Record", record);
        var data = record.data;
        var time = Ext.Date.format(data.dateOfShow, 'F j, g:i a');
        var eventHallName = data.eventHallName;
        var name = data.name;
        var s = name + ' Concert at ' + eventHallName + '.';
        Ext.toast(s, time, 't');
    }
});