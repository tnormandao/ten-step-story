
//  
Game.event.Add({
	name: 'Сфинкс',
	content: 'Он в общем-то не такой уж и страшный, но если вы ен отгадаете его загадку, то он скорее всего вас убъёт.',
	condition: function(){ 
		if (Game.player.stat.health > 90 ){ return true }
	},
	variants: [
		{
			content: ' Пойти налево, потерять лошадь',
			condition: function(){ 
				if(Game.inventory.horse === true){ return true}
			},
			result: function(){
				console.log(' Пойти налево, потерять лошадь');
			}
		},
		{
			content: ' Пойти прямо и немного всторону, ничего не потерять',
			condition: function(){ 
				if(Game.player.stat.dexterity > 10){ return true}
			},
			result: function(){
				App.apply('dialog', 'Вы пошли очень ловким путем, потому, что вам хватило ловкости.');
			}
		},
		{
			content: 'Пойти прямо, потерять деньги',
			condition: function(){ 
				if (Game.inventory.money >= 10){ return true }
			},
			result:  function(){
				console.log('Пойти прямо, потерять деньги');
			}
		},
		{
			content: 'Пойти на право, потерять голову',
			condition: function(){ 
				if(Game.player.stat.intelligence >= 15){ return true}
			},
			result:  function(){

				App.apply('dialog', 'Вы пошли направо и потеряли 5 интеллекта.');
			}
		}
	]
});


