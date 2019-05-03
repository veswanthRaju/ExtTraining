Ext.define('ArticleReader.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    mixins: [
        'ArticleReader.view.main.Routes'
    ],

    routes: {
        ':ref': 'makeActiveTab'
    },

    makeActiveTab: function (ref) {
        if (ref != null) {
            var centerView = this.lookup('centerview');
            var cmp = centerView.lookup(ref);
            
            if (cmp != null) {
                centerView.setActiveTab(cmp);
            }
        }
    },

    initViewModel: function (vm) {
        vm.bind('{record}', 'onNodeSelection', this);
    },
    
    onNodeSelection: function (record) {

        if (record != null) {

            var centerView = this.lookup('centerview');
            var activeTab = null;
            var ref = '';
            var cmp = null;

            if (record.isLeaf()) {
                ref = 'article' + record.get('post_id');
            } else if (record.isRoot()) {
                ref = 'root';
            } else {
                ref = 'category' + record.get('id');
            }

            activeTab = centerView.lookup(ref);

            if (activeTab == null) {

                if (record.isLeaf()) {
                    cmp = centerView.add({
                        xtype: 'contentview',
                        title: 'Article (' + record.data.title + ' )',
                        closable: true,
                        reference: ref
                    });
                } else {
                    //ArticleReader.model.Article.getProxy().setUrl(url);
                    cmp = centerView.add({
                        xtype: 'articleswitcher',
                        title: 'Category (' + record.data.title + ')',
                        closable: true,
                        reference: ref
                    });
                }
                //To active the new tab..
                centerView.setActiveTab(cmp)
                // centerView.setActiveTab(centerView.items.length - 1);
            } else {
                // To active the already opened tab..
                // centerView.setActiveTab(record.data.id);                
                centerView.setActiveTab(activeTab);
            }
        }
    }
});
