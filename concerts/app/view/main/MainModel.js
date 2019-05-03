Ext.define('Concerts.view.main.MainModel', {

    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    
    data : {
        myTitle : 'Veswanth',
        gridTitle : 'Kiran',
        record : null
    },

    stores: {
        concerts: {
            model: 'Ext.data.Model',
            sorters: ['dateOfShow'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url:'https://apis.is/concerts',
                reader: {
                    rootProperty: 'results'
                }
            }
        }
    }
 });