//Detail View Component Constructor
function DetailView() {
	//declare module dependencies
	var Observable = require('lib/Observable');
		
	//create object instance, parasitic subclass of Observable
	var self = new Observable();
	
	self.view = Ti.UI.createView({
		backgroundColor:'red'
	});
	
	return self;
};

//add object to public module interface
exports.DetailView = DetailView;
