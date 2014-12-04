
// Turn
Game.turn = function(){
        
        if (Game.player.stat.health > 0){
            
            // start turn
            var currentEvent = {};
            var eCount = Game.event.list.length;

            function getRandomEvent(){
                    return Game.event.list[Math.floor(Math.random()*eCount)];
            }

            function setEvent(){
                    currentEvent = getRandomEvent();
                    if (!currentEvent.condition()){ 
                        setEvent(); 
                    } else if(!!currentEvent.condition()){
                        currentEvent.visited = true;
                    }
            }
            setEvent();

            renderVariants(currentEvent.variants);

            App.story.turnheader(currentEvent.name);
            App.story.tell(currentEvent.content);

            Game.inventoryDraw();
            Game.statDraw();
            Game.turnCounterDraw();

            Game.turnCounter += 1;

        } else if (Game.player.stat.health <= 0){
            
            App.story.system('Кажется вам смертеьлно нездоорвится. вы буквально мертвы. Стоит быть аккуратнее в следующий раз.');
            App.apply( 'variants', '<div class="choise" onclick="Game.restart()"> Попытать счастья снова</div>'); 
            
        };

};

Game.turnCounterDraw = function(){
	$('#turnsCounter > .inner').css({
		width: (Game.turnCounter * 10)
	});
}

function restartGame(){
    
}

function renderVariants(obj){
    
    // appply turn
    Game.event.curentVariants = [];
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
                    Game.event.curentVariants.push(variantToPush);
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
	for(var i = 0; i < Game.event.curentVariants.length; i++){
		if(Game.event.curentVariants[i].id === ID){
			return Game.event.curentVariants[ID];
		}
	}
}