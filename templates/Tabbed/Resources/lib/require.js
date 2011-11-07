/*
	add a monkey-patched "require" function to the global scope (global object).
	It is smarter in two ways:
	- It only loads a module once
	- If the exports object contains a function matching the module base name, return that
  		value from "require" - this is a bit of sugar added because Titanium's require implementation
  		does not allow you to replace the "exports" object directly\
  		
  	Eventually, this shim will not be necessary, but it provides better require functionality
  	right now.
*/
exports.monkeypatch = function(object) {
	var scriptRegistry = {}, old_require = object.require;
	object.require = function(moduleName) {
		if (!scriptRegistry[moduleName]) {
			var mod = old_require(moduleName),
				moduleRoot = moduleName.split(/[\/ ]+/).pop();
			if (typeof(mod[moduleRoot]) === 'function') {
				scriptRegistry[moduleName] = mod[moduleRoot];
			}
			else {
				scriptRegistry[moduleName] = mod;
			}	
		}
		return scriptRegistry[moduleName];
	};
};