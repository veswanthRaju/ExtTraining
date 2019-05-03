Ext.define('ArticleReader.view.left.treepanel.TreePanelViewModel', {
    extend: 'Ext.app.ViewModel',
    
    alias: 'viewmodel.treepanelviewmodel',

    stores: {
       treeStore : {
           type : 'tree',
           model : 'ArticleReader.model.Category',
           expanded : true,
           defaultRootProperty : 'categories'
       }
    }
});
