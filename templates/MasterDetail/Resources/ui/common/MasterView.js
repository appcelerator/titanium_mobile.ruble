//Master View Component Constructor
function MasterView() {
	//declare module dependencies
	var Observable = require('lib/Observable');
		
	//create object instance, parasitic subclass of Observable
	var self = new Observable();
	
	self.view = Ti.UI.createView({
		backgroundColor:'green'
	});
	
	return self;
};

//add object to public module interface
exports.MasterView = MasterView;
