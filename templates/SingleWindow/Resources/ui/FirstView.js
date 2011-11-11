//FirstView Component Constructor
exports.FirstView = function() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	//Add behavior
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	return self;
};
