Ext.define('ArticleReader.view.center.ArticleSwitcherController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.articleswitchercontroller',

    // switchView: function (combo, record) {
    //     combo.up('panel').setActiveItem(record.data.id);
    // },

    initViewModel: function (vm) {
        vm.bind('{articleRecord}', 'onCellSelection', this);
    },

    onCellSelection: function (record) {
        
        var centerView  = this.getView().up('panel');
        if(record!= null) {
            cmp = centerView.add({
                xtype: 'contentview',
                title: 'Acrticle (' + record.data.title + ' )',
                closable: true,
                reference : 'article' + record.get('post_id')
            });
            centerView.setActiveTab(cmp);
        }        
    }
});