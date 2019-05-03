/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TunesClassic.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'TunesClassic.store.Tunes',
        'TunesClassic.model.Tune',
    ],
    data : {
        record : null
    },
    stores: {
        entries: {
            type: 'tunes',
            autoLoad: true,
            model: 'TunesClassic.model.Tune',
            sorters: [{
                property: 'artist',
                direction: 'ASC'
            }, {
                property: 'title',
                direction: 'ASC'
            }]
        }
    }
});

