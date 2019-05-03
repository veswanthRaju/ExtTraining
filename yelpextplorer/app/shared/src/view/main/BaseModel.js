Ext.define('YelpExtplorer.view.main.BaseModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'YelpExtplorer.model.Business'
    ],
    stores: {
        businesses: {
            model: 'YelpExtplorer.model.Business',
            pageSize: 20, // Yelp limits results to 20 at a time
            sorters: ['name']
        },
        sortableBusinesses: {	
            source: '{businesses}'
        }
    },
    data: {
        city: 'Madison, Wisconsin',
        category: 'coffee',
        business: null
    }
});
