/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'TunesClassic.Application',

    name: 'TunesClassic',

    requires: [
        // This will automatically load all classes in the TunesClassic namespace
        // so that application classes do not need to require each other.
        'TunesClassic.view.main.MainController'
    ],

    // The name of the initial view to create.
    mainView: 'TunesClassic.view.main.Main'
});
