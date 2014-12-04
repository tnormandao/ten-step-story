
// Turn
Game.turn = function(){

	// start turn
	var currentEvent = {};
	var eCount = Game.event.list.length;
	
	function getRandomEvent(){
		return Game.event.list[Math.floor(Math.random()*eCount)];
	}

	function setEvent(){
		currentEvent = getRandomEvent();
		if (!currentEvent.condition()){ console.log('try'); setEvent(); }
	}

	setEvent();

	// appply turn
	Game.event.curentVariants = [];
	$('#variants').html('');
	var nextVariant = 0;

	for (var i = 0; i < currentEvent.variants.length; i++){
		if(currentEvent.variants[i].condition()){
			var variantToPush = {
				id: nextVariant,
				el: $('<div class="choise" data-variant="'+nextVariant+'" onclick="choiseVariant(this);">'+currentEvent.variants[i].content+'</div>'),
				result: currentEvent.variants[i].result
			};
			$('#variants').append(variantToPush.el);
			Game.event.curentVariants.push(variantToPush);
			nextVariant += 1;
		}
	}

	App.story(currentEvent.name);
	App.story(currentEvent.content);
	Game.inventoryDraw();
	Game.statDraw();
	Game.turnCounterDraw();

	Game.turnCounter += 1;
};
Game.turnCounterDraw = function(){
	$('#turnsCounter > .inner').css({
		width: (Game.turnCounter * 10)
	});
}
