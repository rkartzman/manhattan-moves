define([
	"jquery", 
	"underscore", 
	"backbone", 
	"text!templates/altheader.html"
], function ($,_, Backbone, AltHeaderTemplate){
	"use strict";

	var AltHeaderView = Backbone.View.extend({
		initialize: function(){
			console.log('initialized alt header');
			this.render();
			this.sv = new SelectionView({
				el: $('navigation'), dir: 'left', offset: 0
			});
		},
		render: function(){
			var temp = _.template(AltHeaderTemplate);
			console.log('rendered success');
		},
		activate: function(e) {
			var $this = $(e.currentTarget);

			$('#navigation > li ').removeClass('active');

			$this.addClass('active');

		}, 
		deactivate: function(){
			$('#navigation > li').removeClass('active');
		},
		events: {
			'mouseenter #navigation > li': 'activate', 
			'mouseleave #navigation > li': 'deactivate'
		}
	});

});