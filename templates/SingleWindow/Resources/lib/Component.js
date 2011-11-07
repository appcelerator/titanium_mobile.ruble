//Wrap UI components, abstracting  
exports.Component = function(/*Object*/ tiView) {
	var self = {
		__viewProxy:tiView
	};
	
	//passthrough for add
	self.add = function(/*Object*/ tiChildView) {
		var v = tiChildView.__viewProxy||tiChildView;
		self.__viewProxy.add(v);
	};
	
	//passthrough for remove
	self.remove = function(/*Object*/ tiChildView) {
		var v = tiChildView.__viewProxy||tiChildView;
		self.__viewProxy.remove(v);
	};
	
	//passthrough for open
	self.open = function(/*Object*/ args) {
		if (self.__viewProxy.open) {
			self.__viewProxy.open(args||{animated:false});
		}
	};
	self.close = function() {
		if (self.__viewProxy.close) {
			self.__viewProxy.close();
		}
	};
	
	//set/get properties on the view proxy
	self.set = function(/*String*/k, /*Object*/ v) {
		self.__viewProxy[k] = v;
	};
	self.get = function(k) {
		return self.__viewProxy[k];
	}
	
	//passthrough for animation
	self.animate = function(/*Object*/ args, /*Function*/ cb) {
		self.__viewProxy.animate(args,cb||function(){});
	};
	
	//passthrough and shorthand for events
	self.on = function(/*String*/ name, /*Function*/ cb) {
		self.__viewProxy.addEventListener(name,cb);
	};
	self.fire = function(/*String*/ name, /*Object*/ e) {
		self.__viewProxy.fireEvent(name,e||{});
	}
	
	//memory management
	self.onDestroy = function(){};
	self.release = function() {
		self.__viewProxy = null;
		self.onDestroy();
	};
	
	return self;
};