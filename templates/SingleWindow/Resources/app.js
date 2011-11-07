// monkey patch "require" in the global scope
require('lib/require').monkeypatch(this);

// This is a single context, single window application
// There is only one master window to which sub views will be added
(function() {
	var ApplicationWindow = require('ui/ApplicationWindow');
	new ApplicationWindow().window.open();
})();
