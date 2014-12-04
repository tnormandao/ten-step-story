// Event
Game.event.curentVariants = [];
Game.event.list = [];
Game.event.Add = function(content){
    
	content.visited = false;
        content.showAll = function(){
            return this.variants;
        }
        
	Game.event.list.push(content);
};
