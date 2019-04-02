const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collection = [];
};

Park.prototype.addDinosaur = function(dinosaur){
  this.collection.push(dinosaur);
};

Park.prototype.removeDinosaur = function(){
  this.collection.pop();
};

Park.prototype.attractsMostVisitors = function(){
  let arr = this.collection.guestsAttractedPerDay;
  return Math.max(arr);
};

module.exports = Park;
