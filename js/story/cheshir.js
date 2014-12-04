Game.scene.Add({
	name: 'Летающая улыбка',
	content: ' Дефолтный текст, описывающий сцену, появляется в первый раз.',
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
			content: 'Текст, который будет выведен в качестве варианта для ответа.',
			condition: function(){ 
				return true;
			},
			result:  function(){
				App.story.npc('Описание ситуации, которое будет выведенно в футер сцены после выбора этого ответа.');
			}
		}
	]
});