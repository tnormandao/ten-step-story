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

	story: function(content){
		
		var newLog = {
			turn: Game.turnCounter,
			content: content
		};
		App.history.push(newLog);
		$('#story').prepend(newLog.turn + ' : ' + newLog.content + '<br/>');
	},
	history: [],
	_u: {},

	templates: {}
	
};
