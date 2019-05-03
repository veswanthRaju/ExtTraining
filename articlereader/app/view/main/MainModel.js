Ext.define('ArticleReader.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        record: null
    },
    
    formulas : {
        nodeUrl : {
            bind : '{record}',
            get : function(record) {
                var url = '';
                if(record != null && !record.isRoot()){
                    url = '&cat=' + record.id;
                }
                return url;
            }
        }
    }
});
