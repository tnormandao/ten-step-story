﻿Game.scene.Add({
	name: 'У реки',
	content: ' Вы вышли к реке. Пусть это не самая быстрая река, которую вам доводилось видеть в жизни, но и её стремительный ток приковал ваше внимание. Поразительно сколь похожи и при этом как неповторимы волны и переливы скользящие змейками по поверхности. Какие причудливые узоры оставляет бегущая вода в вашем сознании.',
	condition: function(){ 
                if(this.visited){
                    this.content = ' Текст в случае, если уже довелось оказаться в этой сцене .';
                }
                if(this.visited > 5){
                    this.content = ' Если оказывался в этой сцене больше 5 раз. ';
                }
		return true;
	},
	variants: [
		{
			content: 'Напиться воды и отправиться дальше.',
			condition: function(){ 
				return true;
			},
			result:  function(){
				App.story.npc('Вы вдоволь напились свежей чистой водицы, умылись и привели себя в порядок. Настроение теперь гораздо лучше и в дороге на свежую голову веселей.');
			}
		}
	]
});