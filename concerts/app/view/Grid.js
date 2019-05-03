Ext.define('Concerts.view.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'concertsgrid',
    columns: [{
      xtype: 'datecolumn',
      text: 'Time',
      dataIndex: 'dateOfShow',
      format: 'F j, Y \\a\\t H:i',
      flex: 0.5
    }, {
      text: 'Group Name',
      dataIndex: 'userGroupName',
      width: 340
    }, {
      text: 'Event Name',
      dataIndex: 'name',
      width: 340
    }, {
      text: 'Event Hall Name',
      dataIndex: 'eventHallName',
      flex: 0.5
    }]
});