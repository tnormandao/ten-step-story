// Game start
$(function(){
	App.story.system('Очень длинная история' );
	App.story.system('Удивительная история о том, чего никогда не происходило, но вполне могло произойти. Впереди вас ждут неожиданные встречи, невероятные случайности и умопомрачительные ситуации в которых лишь вы будете решать, как поведёт себя история в дальнейшем. Каждый ваш шаг будет решающим в вашей личной истории. <br /> <center> Вперед! </center>' );
	App.apply( 'variants', App.templates.turnNext({content: 'Начать новое приключение'}));
});
