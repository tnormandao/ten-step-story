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