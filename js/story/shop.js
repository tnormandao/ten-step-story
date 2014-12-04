Game.event.Add({
	name: 'Встреча с купцом',
	content: ' Купец особенно полезен если у вас есть деньги.',
	condition: function(){ 
		return true;
	},
	variants: [
		{
			content: 'Продать лошадь за 30 золотых',
			condition: function(){ 
				if(Game.inventory.horse === true){ return true}
			},
			result:  function(){
				Game.inventory.horse = false;
				Game.inventory.moeny += 30;
				App.story.npc('Вы продали лошадку, а ведь не очень-то и выгодно вышло, да?');
			}
		},
		{
			content: 'Купить лошадь за 50 золотых',
			condition: function(){ 
				if(Game.inventory.horse === false && Game.inventory.money >= 50){ return true}
			},
			result:  function(){
				Game.inventory.horse = true;
				Game.inventory.money -= 50;
				App.story.npc('Добротноо коняку прикупили, сослужит хорошую службу.');
			}
		},
		{
			content: 'Купить эликсир силы за 50 золотых',
			condition: function(){ 
				if(Game.inventory.money >= 50 && Game.player.stat.strength <= 10){ return true}
			},
			result:  function(){
				Game.inventory.money -= 50;
				var tmp = 5+Math.floor(Math.random()*10);
				Game.player.stat.strength += tmp;
				App.story.npc('вы купили эликсир силы. Он добавил вам '+ tmp + ' силы');
			}
		},
		{
			content: 'Купить эликсир ловкости за 50 золотых',
			condition: function(){ 
				if(Game.inventory.money >= 50 && Game.player.stat.dexterity <= 10){ return true}
			},
			result:  function(){
				Game.inventory.money -= 50;
				var tmp = 5+Math.floor(Math.random()*10);
				Game.player.stat.dexterity += tmp;
				App.story.npc('вы купили эликсир ловкости. Он добавил вам '+ tmp + ' ловкости');
			}
		},
		{
			content: 'Купить эликсир интеллекта за 50 золотых',
			condition: function(){ 
				if(Game.inventory.money >= 50 && Game.player.stat.intelligence <= 10){ return true}
			},
			result:  function(){
				Game.inventory.money -= 50;
				var tmp = 5+Math.floor(Math.random()*10);
				Game.player.stat.intelligence += tmp;
				App.story.npc('вы купили эликсир интеллекта. Он добавил вам '+ tmp + ' интеллекта');
			}
		},
		{
			content: 'Купить гуся за тридцаточку',
			condition: function(){ 
				if (Game.inventory.goose === false && Game.inventory.money >= 30){ return true }
			},
			result:  function(){
				Game.inventory.goose = true;
				Game.inventory.money -= 30;
				App.story.npc('Купить гуся');
			}
		},
		{
			content: 'Выторговать сапоги бесплатно',
			condition: function(){ 
				if(Game.player.stat.intelligence > 15){ return true}
			},
			result:  function(){
				App.story.npc('Выторговать сапоги бесплатно');
			}
		}
	]
});