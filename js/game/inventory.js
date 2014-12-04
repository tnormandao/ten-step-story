// inventory
Game.inventory = {
		horse: false,
		goose: false,
		boots: false,
		money: 220,
		arrovs: 0
};
Game.inventoryDraw = function(){
	var el = $('.inventory');
		el.html(' ');
	for(var key in Game.inventory){
		if(!!Game.inventory[key]){
			if (Game.inventory[key] === true) {
				el.append(App.templates.item({ title: key, content: '*в сумке*'}));
			} else {
				el.append(App.templates.item({ title: key, content: Game.inventory[key]}));
			}
		}
	}
}
