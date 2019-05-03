Ext.define("TunesClassic.view.modal.Window", {
    extend: 'Ext.window.Window',
    xtype: 'modalwindow',
    requires: [
        'TunesClassic.view.modal.WindowController',
        'Ext.ux.desktop.Video'
    ],
    resizable: false,
    bodyPadding: 8,
    modal: true,
    draggable : false,
    layout: 'fit',
    bind : {
        data : '{record.data}'
    },
    tpl : [
       '<video width="320" height="240" autoplay>',
            '<source src = "{preview}" type="video/mp4" />',
        '</video>',
        '<a href = "{itunesstore}">',
        '<img src = "resources/images/get-it-itunes.svg"/>',
        '</a>'
    ]
});
