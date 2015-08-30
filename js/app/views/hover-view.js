define([
	"jquery", 
	"underscore", 
	"backbone", 
	"text!templates/hover.html"

], function ($,_,Backbone, HoverTemplate){
	"use strict";
var HoverView = Backbone.View.extend({
	initialize: function(){
		console.log('initialized hover view');
		// this.render();
		this.$content = $('#main');
		console.log(this.$content);
	},
	render: function($temp){
		/* render template  and add/ remove class active */
		// var $temp = _.template(HoverTemplate);
		$('body').find('h2').removeClass('active');
		console.log($temp);
		this.$content.html($temp);

	}



});
	/*responsible for rendering hover divs */
	
return HoverView;

});