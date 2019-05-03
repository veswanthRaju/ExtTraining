Ext.define('YelpExtplorer.view.main.Routes', {
    extend: 'Ext.Mixin',
    processRoute: function(tab, city, category) {
        // React to changes in the route
        // If there's a city in the route, use it in the VM
        if (city) {
           this.getViewModel().set('city', decodeURI(city));
        }
        // If there's a category in the route, use it in the VM
        if (category) {
           this.getViewModel().set('category', decodeURI(category));
        }
        tab = Ext.Array.contains(['map', 'view', 'grid', 'chart'], tab) ? tab : 'map';
        //Reference config given in tabePanel...
        this.lookup('businessestabpanel').setActiveItem(tab);
     },
     
    //to listen tab changes in url
    onBusinessesTabChange: function (tabpanel, card) {
        this.updateHash();
    },
    updateHash: function() {
        var tab = this.lookup('businessestabpanel').getActiveTab().getItemId();
        var city = this.getViewModel().get('city');
        var category = this.getViewModel().get('category');
        var hash = tab + '/' + city + '/' + category;
        this.redirectTo(encodeURI(hash));
     }
});