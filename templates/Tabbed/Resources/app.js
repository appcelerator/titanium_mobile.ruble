//add a single variable to the global scope to which we may choose to
//intentionally add items to
var globals = {};

//create a private scope to prevent further polluting the global object
(function() {
	var AppTabGroup = require('ui/AppTabGroup').AppTabGroup,
		AppWindow = require('ui/AppWindow').AppWindow;
	
	//create our global tab group	
	globals.tabs = new AppTabGroup(
		{
			title: L('home'),
			icon: 'images/KS_nav_ui.png',
			window: new AppWindow({title:L('home'),backgroundColor:'white'})
		},
		{
			title: L('settings'),
			icon: 'images/KS_nav_views.png',
			window: new AppWindow({title:L('settings'),backgroundColor:'white'})
		}
	);
	
	globals.tabs.open();
})();	
