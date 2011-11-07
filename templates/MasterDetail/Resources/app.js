// monkey patch "require" in the global scope
require('lib/require').monkeypatch(this);

//inject the "is" helper function into the global scope for platform handling
var is = require('lib/is');

// This is a single context application with mutliple windows in a stack
(function() {
	var ApplicationWindow = require(is({
		tablet: 'ui/tablet/ApplicationWindow',
		handheld: is({
			ios:'ui/handheld/ios/ApplicationWindow'
			android:'ui/handheld/android/ApplicationWindow'
		})
	}));
	new ApplicationWindow().window.open();
})();
