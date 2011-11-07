//FirstView Component Constructor
function FirstView() {
	//ensure dependencies are loaded and locally accessible
	var Observable = require('lib/Observable');
	
	//create object instance, a parasitic subclass of Observable
	var self = new Observable();
	
	//Construct UI
	self.view = Ti.UI.createView();
	
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.view.add(label);
	
	//Add behavior
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	return self;
};

//add object to public module interface
exports.FirstView = FirstView;
