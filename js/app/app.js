define([
	'jquery', 
	'underscore', 
	'backbone', 
	'views/app', 
	'views/header',
	'views/street-locator',
	'views/hover-view',
	'text!templates/home.html', 
	'text!templates/input.html', 
	'text!templates/hover.html'

], function($, _, Backbone, AppView, HeaderView, StreetLocatorView,HoverView, HomeTemplate, InputTemplate, HoverTemplate ) {

"use strict"; 

var AppRouter = Backbone.Router.extend({
	initialize: function(){
		this.init = false;
	}, 
	routes: {
		"": "home", 
		"page/:number": "render", 
		"remy": "remy"
	}, 
	home: function() {
		// this.reset();
		console.log('inside home route');
		window.appView.changePage();
		var $template = $(HomeTemplate);

		window.appView.render($template);
		var wait = this.init ? window.wait : 0;

		var hv = new HeaderView({ el: $('#header1') });
		var lv = new StreetLocatorView({ el: $('#address-input')});
		window.appView.showView(lv);

		setTimeout(_.bind(function() {
			window.appView.render($template);
		}, this), wait);
		this.init = true;
	},
	remy: function(){
		console.log('remy');
	},

	render: function(number) {
		this.reset();
		window.appView.changePage();
		var wait = this.init ? window.wait : 0;

		if(number === '2' || number === '1'){
			

			this.hv = new HeaderView({ el: $('#header'), page: number });
		}
		
		if(number === '3'){
			var $template = $(HoverTemplate);
			var hoverView = new HoverView({ el: $('#main') });
			window.appView.showView(hoverView);
			window.appView.render($template);
			// hoverView.render($template);

		}



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


