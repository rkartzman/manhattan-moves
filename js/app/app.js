define([
	'jquery', 
	'underscore', 
	'backbone', 
	'views/app', 
	'views/header',
	'views/street-locator',
	'text!templates/home.html', 
	'text!templates/input.html'

], function($, _, Backbone, AppView, HeaderView, StreetLocatorView,  HomeTemplate, InputTemplate) {

"use strict"; 

var AppRouter = Backbone.Router.extend({
	initialize: function(){
		this.init = false;
	}, 
	routes: {
		"": "home", 
		"page/:number": "render", 
	}, 
	home: function() {
		// this.reset();
		console.log('inside home route');
		window.appView.changePage();
		var $template = $(HomeTemplate);
		console.log($template);
		var wait = this.init ? window.wait : 0;

		this.hv = new HeaderView({ el: $('#header') });
		this.locator = new StreetLocatorView({ el: $('#address-input')});

		setTimeout(_.bind(function() {
			window.appView.render($template);
		}, this), wait);
		this.init = true;
	}, 

	render: function(number) {
		// this.reset();
		window.appView.changePage();
		var wait = this.init ? window.wait : 0;
		this.hv = new HeaderView({ el: $('#header'), page: number });



		this.init = true;

	}, 

	reset: function() {

	}

});


$(document).ready(function() {
	window.$ = jQuery;
	window.max = 7;
	window.wait = 750;
	console.log('doc is ready inside app.js');

	window.appView = new AppView({ el: $('body') });
	window.appRouter = new AppRouter();
	Backbone.history.start({pushstate: true});

});



});


