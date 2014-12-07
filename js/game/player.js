// Player	
Game.player.stat = {};
Game.player.stat.add = function(content){
  if(!Game.player.stat[content.id]){
    content.skip = false;
    
    var content = Game.Complete.amount(content);
    
    Game.player.stat[content.id] = content;
  }
};

Game.player.stat.draw = function(){
    var el = $('.stat > ul').html(' ');
    for(var key in Game.player.stat){
        if(!!Game.player.stat[key].id && !Game.player.stat[key].skip){
            el.append(App.templates.item({
              description: Game.player.stat[key].description, 
              title: Game.player.stat[key].name, 
              content: Game.player.stat[key].get()
            }));
        }
    }
};

Game.player.stat.add({
    id: 'health',
    name: 'очки жизни',
    amount: 100,
    description: 'Уровень здоровья, текущее состояние ваших жизненных сил. \nЧем больше здоровья, тем выше живучесть. Не так ли?'
});

Game.player.stat.add({
    id: 'strength',
    name: 'сила',
    amount: 5,
    description: 'Сила-силушка — уровень вашей физической мощи. \nНадо поднять камень? — Сила. \nНадо метнуть копьё? — Сила.'
});
Game.player.stat.add({
    id: 'dexterity',
    name: 'ловкость',
    amount: 5,
    description: 'Ловкость поможет вам преодолевать препятсвия. \nУклоняться от опасностей и быстрее реагирвоать на происходящее.'
});
Game.player.stat.add({
    id: 'intelligence',
    name: 'Мышление',
    amount: 5,
    description: 'Сила вашего ума — очень важная штуковина. \nВы будете видеть скрытый смысл происходящего и вас невозможно будет обмануть!'
});
Game.player.stat.add({
    id: 'defence',
    name: 'защита',
    amount: 2,
    description: 'Защита, это защита. Чем выше защита, тем меньше урона вам наносят тумаки.'
});
