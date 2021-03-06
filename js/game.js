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
      
      this.owner = this.owner ? this.owner : 'destiny';
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
      
      this.durability = this.durability ? this.durability : 100;
      this.repair = function(num){ this.durability += num; };
      this.break = function(num){
          if (this.durability >= num){
            this.durability -= num;
          } else {
            this.durability = 0;
          }
      };
      
  };
};

Game.Complete.image = function(content, category){
  return new function(){
      _.extend(this, content);
      this.image = this.image ? ('img/'+ category + '/' + this.image + '.png') : 'img/default.png' ;
  };
};