Game.event.Add({
	name: 'Встреча с котом',
	content: ' Кот, это такое пушистое животное. У вас как раз есть возможность пообщаться с одним из самых ярких предсатвителей семейства кошачих. С котом.',
	condition: function(){ 
		return true;
	},
	variants: [ 
		{
			content: 'подарить коня коту',
			condition: function(){ 
				if(Game.inventory.horse === true && Game.npc.cat.horse === false){ return true}
			},
			result:  function(){
				Game.inventory.horse = false;
				Game.npc.cat.horse = true;
				Game.npc.cat.loyalty += 5;
				App.story('Кот взмахну на коня и пришпорил.');
			}
		},
		{
			content: 'пдкинуть коту деньжат',
			condition: function(){ 
				if (Game.inventory.money >= 10){ return true }
			},
			result:  function(){
				Game.inventory.money -= 10;
				Game.npc.cat.loyalty += 2;
				App.story('Кот в общем-то доволен, ага');
			}
		},
		{
			content: 'обмануть кота',
			condition: function(){ 
				if(Game.player.stat.intelligence > 10){ return true}
			},
			result:  function(){
				if(Game.player.stat.health >= 40){
					Game.player.stat.health -= 40;
					Game.npc.cat.loyalty -= 5;
					App.story('Кота не обманешь! Он выцарапал вам глаз и нассал на ногу.');
				} else {
					App.story('Кота не обманешь! Он выцарапал вам глаз и нассал на ногу. От чего вы скончались.');
				};
			}
		},
		{
			content: 'Погладить кота',
			condition: function(){ 
				return true;
			},
			result:  function(){
					Game.npc.cat.loyalty += 1;
					App.story('Кота отбросил прочь всю напыщенность и заурчал как котенок.');
			}
		}
	]
});