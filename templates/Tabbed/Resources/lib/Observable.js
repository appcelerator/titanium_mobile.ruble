//Create an observable type that UI objects can extend
function Observable() {};

//Register an event listener of a given type
Observable.prototype.addEventListener = function(/*String (Required)*/ _name, /*Function (Required)*/ _callback) {
	if (!this.listeners) {
		this.listeners = {};
	}
	if (!this.listeners[_name]) {
		this.listeners[_name] = [];
	}
	this.listeners[_name].push(_callback);
};

//fire an event of the given type
Observable.prototype.fireEvent = function(/*String (Required)*/ _name, /*Object*/ _eventData) {
	if (this.listeners[_name]) {
		for (var i = 0, l = this.listeners[_name].length;i<l;i++) {
			this.listeners[_name].call(this,_eventData);
		}
	}
};

exports.Observable = Observable;