// NPCs
Game.npc.add = function (content){
    if(!Game.npc[content.id]){
        content.health = Game.Complete.amount(content.health);
        content.loyalty = Game.Complete.amount(content.loyalty);
        Game.npc[content.id] = content;
    }
};

// Cat
Game.npc.add ({ id: 'cat' });
Game.npc.add ({ id: 'dragon' });
Game.npc.add ({ id: 'sphinx' });