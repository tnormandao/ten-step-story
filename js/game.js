var Game = {
	player: {},
	inventory: {},
	event: {},
	turn: {},
	turnCounter: 0,
	npc: {}
};

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

// NPCs
Game.npc.create = function(obj){
	return new function(){
		this.loyalty = 0;
		this.health = 100;
		for(var key in obj){
			this[key] = obj[key];
		}
	}
}

// Cat
Game.npc.cat = Game.npc.create({
	horse: false,
	boots: false,
	hat: false
});

// Dragon
Game.npc.dragon = Game.npc.create({
	wings: true
});