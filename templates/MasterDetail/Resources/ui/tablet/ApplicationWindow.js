//Application Window Component Constructor
function ApplicationWindow() {
	//declare module dependencies
	var Observable = require('lib/Observable'),
		MasterView = require('ui/MasterView'),
		DetailView = require('ui/DetailView');
		
	//create object instance, parasitic subclass of Observable
	var self = new Observable();
	
	//public property on the object, a window UI object
	self.window = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var masterView = new MasterView(),
		detailView = new DetailView();
		
	//function to create necessary toolbar views for containers
	function createToolbar(_title) {
		var toolBarItems = [],
			flexSpace = Ti.UI.createButton({
				systemButton:Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
			}),
			label = Ti.UI.createLabel({
				text:_title,
				color:'#ffffff',
				font: {
					fontWeight:'bold',
					fontSize:18
				}
			});
		
		toolBarItems.push(flexSpace,label,flexSpace);
		
		return Ti.UI.createToolbar({
			items:toolBarItems,
			height:44,
			top:0
		});
	}
		
	//create master view container
	var masterContainer = Ti.UI.createView({
		top:0,
		bottom:0,
		left:0,
		width:240,
		borderColor:'#000000',
		borderWidth:2
	});
	
	masterContainer.add(createToolbar(L('masterView')));
	masterView.view.top = 44;
	masterContainer.add(masterView.view);
	self.window.add(masterContainer);
	
	//create detail view container
	var detailContainer = Ti.UI.createView({
		top:0,
		bottom:0,
		right:0,
		left:240
	});
	
	detailContainer.add(createToolbar(L('detailView')));
	detailView.view.top = 44;
	detailContainer.add(detailView.view);
	self.window.add(detailContainer);
	
	return self;
};

//add object to public module interface
exports.ApplicationWindow = ApplicationWindow;
