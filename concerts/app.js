Ext.application({
	requires:[
		'Concerts.view.main.Main',
		'Ext.plugin.Viewport'  // for build production..
	],
    name: 'Concerts',
    mainView: 'Concerts.view.main.Main'
});