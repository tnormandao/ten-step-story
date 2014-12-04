
//  
Game.event.Add({
	name: 'Камень на распутьи',
	content: ' Как это бывает с камнями на аспутьи — они стоят. Вот и наш камень на распутьи стоит, а у вас так долго стоять не получится. Надо что-то выбрать.',
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


