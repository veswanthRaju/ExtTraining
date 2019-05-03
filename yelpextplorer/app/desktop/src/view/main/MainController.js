Ext.define('YelpExtplorer.view.main.MainController', {
    mixins: ['YelpExtplorer.view.main.Routes'],
    extend: 'YelpExtplorer.view.main.BaseController',    
    alias: 'controller.main-main',
    routes: {
        // ':tab': 'processRoute',
        // ':tab/:city': 'processRoute',
        ':tab/:city/:category':'processRoute'
    },
    initViewModel: function(vm){
        this.callParent(arguments);
        vm.bind('{city}', this.updateHash, this);
        vm.bind('{category}', this.updateHash, this);
    }
});
