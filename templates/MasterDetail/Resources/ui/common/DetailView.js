//Detail View Component Constructor
exports.DetailView = function() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	var lbl = Ti.UI.createLabel({
		text:'Please select an item',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(lbl);
	
	self.addEventListener('itemSelected', function(e) {
		lbl.text = e.name+': $'+e.price;
	});
	
	return self;
};
