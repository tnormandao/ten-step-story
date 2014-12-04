
// Turn
Game.turn = function(){
        
        if (Game.player.stat.health > 0){
            
            // start turn
            var currentScene = {};
            var eCount = Game.scene.list.length;

            function getRandomScene(){
                    return Game.scene.list[Math.floor(Math.random()*eCount)];
            }

            function setScene(){
                    currentScene = getRandomScene();
                    if (!currentScene.condition() || currentScene.skip){ 
                        setScene(); 
                    } else if(!!currentScene.condition()){
                        currentScene.visited += 1;
                    }
            }
            setScene();

            renderVariants(currentScene.variants);

            App.story.turnheader(currentScene.name);
            App.story.tell(currentScene.content);

            Game.inventoryDraw();
            Game.statDraw();
            Game.turnCounterDraw();

            Game.turnCounter += 1;

        } else if (Game.player.stat.health <= 0){
            App.story.system('<br/>Кажется вам смертеьлно нездоровится. вы буквально мертвы. Стоит быть аккуратнее в следующий раз.');
            App.apply( 'variants', '<div class="choise" onclick="Game.restart()"> Попытать счастья снова</div>'); 
            
        };

};

Game.turnCounterDraw = function(){
	$('#turnsCounter > .inner').css({
		width: (Game.turnCounter * 10)
	});
}

Game.restart = function(){
   location.reload();
}

function renderVariants(obj){
    
    // appply turn
    Game.scene.curentVariants = [];
    $('#variants').html('');
    var nxt = 0;
    
    for (var i = 0; i < obj.length; i++){
            if(obj[i].condition()){
                    var variantToPush = {
                            id: nxt,
                            el: App.templates.choise({
                                id:nxt,
                                content: obj[i].content}),
                            result: obj[i].result
                    };
                    $('#variants').append(variantToPush.el);
                    Game.scene.curentVariants.push(variantToPush);
                    nxt += 1;
            }
    }
    
}

function choose(obj){
    //if(!App.story.process){
        var variant = $(obj).data().id;
        var linkToVariant = getFromVariantList(variant);
        linkToVariant.result();
        Game.turn();
    //}
}

function getFromVariantList(ID){
	for(var i = 0; i < Game.scene.curentVariants.length; i++){
		if(Game.scene.curentVariants[i].id === ID){
			return Game.scene.curentVariants[ID];
		}
	}
}