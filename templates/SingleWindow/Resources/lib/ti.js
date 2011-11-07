//Helper functions for common Titanium APIs, and wrappers for UI components
var Component = require('lib/Component').Component,
	_ = require('lib/underscore')._;

exports.Window = function(args) {
	return new Component(Ti.UI.createWindow(args));
};

exports.View = function(args) {
	return new Component(Ti.UI.createView(args));
};

exports.Label = function(text,_args) {
	var args = _.extend({
		color:'#000',
		height:'auto',
		width:'auto',
		font: {
			fontSize: 14
		}
	},_args||{});
	args.text = text;
	return new Component(Ti.UI.createLabel(args));
};

exports.Button = function(_args) {
	return new Component(Ti.UI.createButton(_args));
};

exports.ImageView = function(img,_args) {
	var args = _.extend({
		height:'auto',
		width:'auto'
	},_args||{});
	args.image = img;
	return new Component(Ti.UI.createImageView(args));
};

exports.ScrollableView = function(_args) {
	var args = _.extend({
		contentWidth:'auto',
		contentHeight:'auto'
	},_args||{});
	var views = [];
	for(var i = 0, l = _args.views.length; i<l; i++) {
		views.push(_args.views[i].__viewProxy);
	}
	args.views = views;
	return new Component(Ti.UI.createScrollableView(args));
};

exports.log = function(str) {
	Ti.API.info(str);
};
