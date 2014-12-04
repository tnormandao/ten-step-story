// Event
Game.event.curentVariants = [];
Game.event.list = [];
Game.event.Add = function(content){
	content.visited = false;
	Game.event.list.push(content);
};


function choiseVariant(obj){
		var variant = $(obj).data().variant;
		var linkToVariant = getFromVariantList(variant);
		linkToVariant.result();
		
		Game.turn();
}

function getFromVariantList(ID){
	for(var i = 0; i < Game.event.curentVariants.length; i++){
		if(Game.event.curentVariants[i].id === ID){
			return Game.event.curentVariants[ID];
		}
	}
}