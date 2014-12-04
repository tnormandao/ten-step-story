// inventory
Game.inventory = {
		horse: false,
		money: 150,
		arrovs: 10,
		goose: false,
		boots: false
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
