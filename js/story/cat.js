Game.event.Add({
	name: 'Встреча с котом',
	content: ' Кот, это такое пушистое животное. У вас как раз есть возможность пообщаться с одним из самых ярких предсатвителей семейства кошачих — с котом.',
	condition: function(){ 
            
            if (this.visited === true){ 
                    this.content = 'Кот уже где-то вас видел'; 
                    if (Game.npc.cat.loyalty < 0){ this.content += ' и у него очевидное желание вас убить.'; }
                    if (Game.npc.cat.loyalty === 0){ this.content += ', но ему вы в целом безразличны.'; }
                    if (Game.npc.cat.loyalty > 0){ this.content += ' и помнится, он остался вами доволен.'; }
            }
                
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
				App.story.npc('Кот взмахну на коня и пришпорил.');
			}
		},
		{
			content: 'пдкинуть коту деньжат',
			condition: function(){ 
				if (Game.inventory.money >= 10){ return true }
			},
			result:  function(){
				Game.inventory.money -= 10;
				Game.npc.cat.loyalty += 1;
				App.story.npc(' Кот не очень понял, зачем вы дали ему деньги. Он ими пользоватсья не умеет, но в целом коты любят, когда им что-то дают. Вы заслужили немного его внимания.');
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
					App.story.damage('Кота не обманешь! Он выцарапал вам глаз и нассал на ногу.');
				} else {
					App.story.damage('Кота не обманешь! Он выцарапал вам глаз и нассал на ногу. От чего вы скончались.');
				};
			}
		},
		{
			content: 'Погладить кота',
			condition: function(){ 
				return true;
			},
			result:  function(){
					Game.npc.cat.loyalty += 3;
					App.story.npc('Кот отбросил прочь всю свою напыщенность и заурчал как котенок, когда вы почесали его шевелюру.');
			}
		}
	]
});