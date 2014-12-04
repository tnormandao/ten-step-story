Game.action.damage = function(damage){
    
    var srtBonus = Math.floor(Math.random()*(Game.player.stat.strength / 5));
    var dexBonus = Math.floor(Math.random()*(Game.player.stat.dexterity / 5));
    var intBonus = Math.floor(Math.random()*(Game.player.stat.intelligence / 10));
    var defBonus = Game.player.stat.defence;
    
    var result = damage - (srtBonus + intBonus + dexBonus + defBonus);
    
    if (result > 0){
        Game.player.stat.health -= result;
        return result;
    }
}

Game.action.buy = function(price){
    return Math.floor(price - (Game.player.stat.intelligence / 8));
}