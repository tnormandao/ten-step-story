// Player	
Game.player.stat = {
			health: 100,
			strength: 5,
			dexterity: 5,
			defence: 2,
			intelligence: 5
};

Game.statDraw = function(){
	var el = $('.stat');
		el.html(' ');
	for(var key in Game.player.stat){
		if(!!Game.player.stat[key]){
			el.append(App.templates.item({ title: key, content: Game.player.stat[key]}));
		}
	}
}
