var App = {

	regions: {
		inventory: '.inventory',
		title: '#title',
		content: '#content',
		dialog: '#dialog',
		variants: '#variants'
	},

	apply: function(region, content){
		$(App.regions[region]).html(content);
	},
        
	_u: {},

	templates: {}
	
};
