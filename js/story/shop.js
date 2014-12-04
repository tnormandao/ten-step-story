Game.scene.Add({
	name: 'Встреча с купцом',
	content: ' Купец особенно полезен если у вас есть деньги.',
	condition: function(){ 
                if(this.visited){
                    this.content = 'Купец признал вас и помахал вам издали. Ранее вам доводилось иметь с ним дела. Вот и тперь вы поторопились взглянуть на предлагаемые товары. ';
                }
                if(this.visited > 10){
                    this.content = ' Вы так часто попадаетесь купцу на глаза, что он уже начал беспокоиться, а не задумали ли вы чего недоброго? ';
                }
		return true;
	},
	variants: [
		{
			content: 'Попросить купца подвезти вас на телеге.',
			condition: function(){ 
				return true;
			},
			result:  function(){
				App.story.npc('Купец был мужик добродушный. Подвинув большой тюк с товарами он освободил вам место в телеге. Под ритмичное поскрипывание колеса, уже через пол часа вы уснули в телеге.');
			}
		},
		{
			content: 'Продать лошадь за 30 золотых',
			condition: function(){ 
				if(!!Game.inventory.horse){ return true}
			},
			result:  function(){
				Game.inventory.horse = false;
				Game.inventory.moeny += 30;
				App.story.npc('Вы продали лошадку, а ведь не очень-то и выгодно вышло, да?');
			}
		},
		{
			condition: function(){ 
				if(Game.inventory.horse === false && Game.inventory.money >= Game.action.buy(50)){ 
                                    this.content = 'Купить лошадь за ' + Game.action.buy(50);
                                    return true;
                                }
			},
			result:  function(){
				Game.inventory.horse = true;
				Game.inventory.money -= Game.action.buy(50);
				App.story.npc('Добротноо коняку прикупили, сослужит хорошую службу.');
			}
		},
		{
			condition: function(){ 
				if(Game.inventory.money >= Game.action.buy(50)){
                                    this.content = 'Купить эликсир силы за ' + Game.action.buy(50); 
                                    return true;
                                }
			},
			result:  function(){
				Game.inventory.money -= Game.action.buy(50);
				var tmp = 5+Math.floor(Math.random()*10);
				Game.player.stat.strength += tmp;
				App.story.npc('вы купили эликсир силы. Он добавил вам '+ tmp + ' силы');
			}
		},
		{
			condition: function(){ 
				if(Game.inventory.money >= Game.action.buy(50)){ 
                                    this.content = 'Купить эликсир ловкости за ' + Game.action.buy(50);
                                    return true;
                                }
			},
			result:  function(){
				Game.inventory.money -= Game.action.buy(50);
				var tmp = 5+Math.floor(Math.random()*10);
				Game.player.stat.dexterity += tmp;
				App.story.npc('вы купили эликсир ловкости. Он добавил вам '+ tmp + ' ловкости');
			}
		},
		{
			condition: function(){ 
				if(Game.inventory.money >= Game.action.buy(50)){ 
                                    this.content = 'Купить эликсир интеллекта за ' + Game.action.buy(50);
                                    return true;
                                }
			},
			result:  function(){
				Game.inventory.money -= Game.action.buy(50);
				var tmp = 5+Math.floor(Math.random()*10);
				Game.player.stat.intelligence += tmp;
				App.story.npc('вы купили эликсир интеллекта. Он добавил вам '+ tmp + ' интеллекта');
			}
		},
		{
			condition: function(){ 
				if (Game.inventory.goose === false && Game.inventory.money >= Game.action.buy(30)){
                                    this.content = 'Купить гуся за ' + Game.action.buy(30);
                                    return true; 
                                }
			},
			result:  function(){
				Game.inventory.goose = true;
				Game.inventory.money -= Game.action.buy(30);
				App.story.npc(' Вы купили чудесного гуся. Его до последнего перышка вы запихнули в сумку, до лучших времен.');
			}
		},
		{
			condition: function(){ 
				if(Game.inventory.boots === false && Game.inventory.money >= Game.action.buy(10)){ 
                                    this.content = 'Выторговать сапоги за ' + Game.action.buy(10);
                                    return true;
                                }
			},
			result:  function(){
				Game.inventory.boots = true;
				Game.inventory.money -= Game.action.buy(10);
				App.story.npc('Вы пиобрели отличные сапоги. Вы обязательно их одели бы, если бы на вас уже не было других. Отличные сапоги отправляются в сумку.');
			}
		}
	]
});