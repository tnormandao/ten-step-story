Game.action.damage = function(damage){
    
    var srtBonus = Math.floor(Math.random()*Game.player.stat.strength.div(5));
    var dexBonus = Math.floor(Math.random()*Game.player.stat.dexterity.div(5));
    var intBonus = Math.floor(Math.random()*Game.player.stat.intelligence.div(10));
    var defBonus = Game.player.stat.defence.get();
    
    var result = damage - (srtBonus + intBonus + dexBonus + defBonus);
    
    if (result > 0){
        Game.player.stat.health.dec(result);
        return result;
    }
};

Game.action.buy = function(price){
    return Math.floor( price - Game.player.stat.intelligence.div(8));
};

Game.action.updateStat = function(num){
    var tmp = num / 2;
    return tmp+Math.floor(Math.random()*tmp)
};