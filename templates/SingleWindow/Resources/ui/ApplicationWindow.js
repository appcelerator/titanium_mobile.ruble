//Application Window Component Constructor
function ApplicationWindow() {
	//declare module dependencies
	var Observable = require('lib/Observable')
		FirstView = require('ui/FirstView');
		
	//create object instance, parasitic subclass of Observable
	var self = new Observable();
	
	//public property on the object, a window UI object
	self.window = Ti.UI.createWindow({
		title:'New Application',
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var firstView = new FirstView();
	self.window.add(firstView.view);
	
	return self;
};

//add object to public module interface
exports.ApplicationWindow = ApplicationWindow;
