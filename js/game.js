var Game = {
	player: {},
	item: {},
	npc: {},
	scene: {},
	event: {},
        action: {},
	turn: {},
	turnCounter: 0
};

Game.Complete = {};

Game.Complete.amount = function(content){
  return new function(){
    _.extend(this, content);
    this.amount = this.amount ? this.amount : 0;
    this.inc = function(num){ this.amount += num; };
    this.dec = function(num){ this.amount -= num; };
    this.div = function(num){ return this.amount / num; };
    this.set = function(num){ this.amount = num;  };
    this.get = function(num){ return this.amount;  };
  };
};

Game.Complete.item = function(content){
  return new function(){
      _.extend(this, content);
      this.status = this.status ? this.status : false ;
      this.own = function(owner) { 
        if (this.owner === owner){
          return true;
        } else {
          return false;
        }
      };
      this.put = function(owner){  
        if(!!owner){ 
          this.owner = owner; 
        } else {
          return this.owner;
        }   
      };
  };
};