// Player	
Game.player.stat = {
			health: 100,
			strength: 10,
			dexterity: 10,
			intelligence: 10
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
