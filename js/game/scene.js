// scene
Game.scene.curentVariants = [];
Game.scene.list = [];
Game.scene.Add = function(content){
	content.visited = false;
	content.skip = false;
        content.showAll = function(){
            return this.variants;
        }
	Game.scene.list.push(content);
};