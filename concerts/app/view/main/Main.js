Ext.define('Concerts.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
      'Concerts.view.Grid',
      'Concerts.view.View',
      'Concerts.view.main.MainModel',
      'Concerts.view.main.MainController'
    ],
    xtype: 'main',
    controller : 'main',
    viewModel:{
      type: 'main'
    },
    layout: 'border',
    // title: 'Concerts in Iceland',
    bind : {
      title : '{myTitle}'      
    },
    items: [
      { //thumbnail view
        xtype: 'concertsview',
        region : 'north',
        height : 300,
        bind : {
          store : '{concerts}',
          selection : '{record}'
        },
        listeners: {
          select: 'onSelect'
        }
      },
      { // Grid view
        xtype: 'concertsgrid',
        region: 'center',
        bind : {
          store : '{concerts}',
          title : '{gridTitle}',
          selection : '{record}'
        }
      }
    ]
});
