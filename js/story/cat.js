Game.scene.Add({
	name: 'Встреча с котом',
	content: ' Кот, это такое пушистое животное. У вас как раз есть возможность пообщаться с одним из самых ярких предсатвителей семейства кошачих — с котом.',
	condition: function(){ 
            
            if (this.visited){ 
                    this.content = 'Кот уже где-то вас видел'; 
                    if (Game.npc.cat.loyalty.get() < 0){ this.content += ' и у него очевидное желание вас убить.'; }
                    if (Game.npc.cat.loyalty.get() === 0){ this.content += ', но ему вы в целом безразличны.'; }
                    if (Game.npc.cat.loyalty.get() > 0){ this.content += ' и помнится, он остался вами доволен.'; }
            }
                
            return true;
	},
	variants: [ 
		{
			content: 'подарить коня коту',
			condition: function(){ 
                            if(Game.item.horse.own('player')){ 
                                return true; 
                            }
			},
			result:  function(){
                            Game.item.horse.put('cat');
                            Game.npc.cat.loyalty.inc(5);
                            App.story.npc('Кот взмахну на коня и пришпорил.');
			}
		},
		{
			content: 'пдкинуть коту деньжат',
			condition: function(){ 
                            if (Game.item.money.get() >= 10){ 
                                return true; 
                            }
			},
			result:  function(){
                            Game.item.money.dec(10);
                            Game.npc.cat.loyalty.inc(1);
                            App.story.npc(' Кот не очень понял, зачем вы дали ему деньги. Он ими пользоватсья не умеет, но в целом коты любят, когда им что-то дают. Вы заслужили немного его внимания.');
			}
		},
		{
			content: 'обмануть кота',
			condition: function(){ 
                            if(Game.player.stat.intelligence.get() > 10){ 
                                return true; 
                            }
			},
			result:  function(){
                            
                            var damage = Game.action.damage(40);
                                console.log(damage);

                            if(Game.player.stat.health.get() > 0){
                                Game.npc.cat.loyalty.dec(5);
                                App.story.damage('Вы попытались обмануть кота, но кот быстро раскрыл ваши планы. \n\
                                                  Извернувшись он полоснул вас по лицу когтистой лапой, оставив вам на памяит \n\
                                                  парочку глубоких шрамов. Будете знать, как обманывать кота. <br /> \n\
                                                  кот нанес вам ' + damage + ' урона.');
                            } else {
                                Game.npc.cat.loyalty.dec(5);
                                App.story.damage('Эта встреча с котом окаалась для вас роковой. Кажется вам раньше уже \n\
                                                    доводилось его разочаровывать. \n\
                                                    но теперь вы не оставили ему выбора. Он приончил вас на месте как существо \n\
                                                    не одстойное жить на этом свете.');
                            };
			}
		},
		{
			content: 'Погладить кота',
			condition: function(){ 
                            if(Game.npc.cat.loyalty.get() >= 0){
				return true;
                            }
			},
			result:  function(){
                            Game.npc.cat.loyalty.inc(3);
                            App.story.npc('Кот отбросил прочь всю свою напыщенность и заурчал как котенок, когда вы почесали его шевелюру.');
			}
		},
		{
			content: 'Пройти мимо.',
			condition: function(){ 
                            return true;
			},
			result:  function(){
                            App.story.npc('Кот даже не обратил на вас внимания. Знаете как это бывает с котами? Они вас порой не замечают, даже если вы ну вот прямо у них под носом.');
			}
		}
	]
});