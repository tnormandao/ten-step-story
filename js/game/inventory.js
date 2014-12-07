// items
Game.item = {};
Game.item.add = function(content){
    if(!Game.item[content.id]){

      var content = Game.Complete.item(content);
      var content = Game.Complete.amount(content);
      
      Game.item[content.id] = content;
    }
};

Game.item.draw = function(){
    var el = $('.inventory > ul').html(' ');
    for(var key in Game.item){
        if(!!Game.item[key].id && Game.item[key].own('player')){
            if (Game.item[key].get() > 0) {
                el.append(App.templates.item({ description: Game.item[key].description, title: Game.item[key].name, content: Game.item[key].get()}));
            } else if (Game.item[key].status) {
                el.append(App.templates.item({ description: Game.item[key].description, title: Game.item[key].name, content: Game.item[key].status}));
            }
        }
    }
};






Game.item.add({
  id: 'money',
  name: 'деньги',
  amount: 100,
  owner: 'player',
  description: 'И действитеьлно, что же такое деньги?'
});

Game.item.add({
  id: 'horse',
  name: 'лошадь',
  status: 'имеется',
  owner: 'shop',
  description: 'Лошадка хороша! Вся в яблоках.'
});

Game.item.add({
  id: 'club',
  name: 'дубинка',
  status: 'за плечом',
  owner: 'shop',
  description: 'Дубинка выглядит добротной. Тяжелая, из старого граба. \nСтоит заметить, что кованные кольца окаймленные шипами\nтут не только для декораций.'
});

Game.item.add({
  id: 'boots',
  name: 'сапоги',
  status: 'на ногах',
  owner: 'shop',
  description: 'Сапоги как сапоги. Ничего волшебного в них нет, \nно на ноге сидят хорошо.'
});

Game.item.add({
  id: 'arrows',
  name: 'стрелы',
  amount: 0,
  owner: 'player',
  description: 'Обычне стрелы. К ним не помешает обзавестись луком.'
});

Game.item.add({
  id: 'goose',
  name: 'гусь',
  status: 'в сумке',
  owner: 'pesant',
  description: 'Гусь — отличный спутник в дороге. \nЕсли одиноко, бери с собой гуся!'
});

