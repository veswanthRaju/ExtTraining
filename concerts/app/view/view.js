Ext.define('Concerts.view.View', {
  extend: 'Ext.view.View',
  xtype: 'concertsview',
  scrollable: true,
  itemTpl: '<figure><img src="{imageSource}"><figcaption>{userGroupName}</figcaption></figure>',
  itemCls: 'thumb-nail',
  overItemCls: 'over',
  selectedItemCls: 'selected'
});