define([
	"jquery", 
	"underscore", 
	"backbone", 
	"text!templates/input.html"
], function ($,_,Backbone, InputTemplate){

"use strict";

var StreetLocatorView = Backbone.View.extend({
	// template: "#input-template", 

	initialize: function(){
		console.log('intialized StreetLocatorView');

		this.render();

	}, 
	render: function(){
		var $temp = _.template(InputTemplate);

		this.$el.html($temp).addClass('active');
		console.log('rendered success');
	},
	displayCrossStreet: function(crossStreet){
		if (this.$el.find('.message').hasClass('active')) {
			return false;
		}
		var msg = $("<h2 class='message'>Your Cross Street is: " + crossStreet + "</h2>").addClass('active');
		this.$el.append(msg);
	},

	calculateStreet: function(avenue, bldgNumb){
		
		console.log(avenue);
		console.log(bldgNumb);

		var crossStreet;

		if (avenue == 'first' || '1st'){
			crossStreet = (bldgNumb / 20) + 3;
			console.log(crossStreet);

			// return crossStreet;

		}else if (avenue == 'second'){
			console.log(avenue == 'second');
			crossStreet = (bldgNumb / 20) + 3;

		}else if (avenue == 'third'){
			crossStreet = (bldgNumb / 20) + 10;

		}else if (avenue == 'fourth'){
			crossStreet = (bldgNumb / 20) + 8;

		}else if (avenue == 'fifth'){
			if(bldgNumb >= 63 &&  bldgNumb <= 108){
				crossStreet = (bldgNumb / 20) + 11;
				return crossStreet;
			}else if (bldgNumb >= 109 && bldgNumb <=200){
				crossStreet = (bldgNumb / 20) + 13; 
				return crossStreet;
			}else if (bldgNumb >= 201 && bldgNumb <=400){
				crossStreet = (bldgNumb / 20) + 16;
				return crossStreet;
			}else if (bldgNumb >= 401 && bldgNumb <=600){
				crossStreet = (bldgNumb / 20) + 18;
				return crossStreet;
			}else if (bldgNumb >= 601 && bldgNumb <=775){
				crossStreet = (bldgNumb / 20) + 20;
				return crossStreet;
			}else if (bldgNumb >= 776 && bldgNumb <=1286){
				crossStreet = (bldgNumb / 20) -18;
			}else if (bldgNumb >= 1300 && bldgNumb <=1500){
				crossStreet = bldgNumb / 20 + 45;
				return crossStreet;
			}else if (bldgNumb > 2000){
				crossStreet = (bldgNumb / 20)  + 24;
			}

		}else if (avenue == 'sixth'){
			crossStreet = (bldgNumb / 20 ) + 12; 

		}else if (avenue == 'seventh'){
			if(bldgNumb >= 1 && bldgNumb <= 1800){
				crossStreet = (bldgNumb / 20) + 12;
			}
			else{
				crossStreet = (bldgNumb / 20 ) + 20;
			}

		}else if (avenue == 'eighth'){
			crossStreet = (bldgNumb / 20) + 9;

		}else if (avenue == 'ninth' || 'nine'){
			crossStreet = (bldgNumb / 20) + 13;

		}else if (avenue == 'tenth' || 'ten'){
			crossStreet = (bldgNumb / 20) + 14;

		}else if (avenue == 'eleventh'){
			crossStreet = (bldgNumb / 20)  + 15;

		}

		this.displayCrossStreet(crossStreet);

	}, 

	events: {
		'click .fa-search': function(e){
			e.preventDefault();
			var avenue = $('#ave').val();
			var bldgNumb = Math.floor($('#bldNum').val());
			this.calculateStreet(avenue, bldgNumb);
			$(window).scrollTop(20);

		}, 
		'click .restart': function(e){
			e.preventDefault();
			this.$el.find('.message').remove();
			// this.el.find('.message').removeClass('active');
		} 
	}

});

return StreetLocatorView;

});
