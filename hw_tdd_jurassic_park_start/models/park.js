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

Park.prototype.mostAttractiveDino = function(){
  let mostAttractiveDino = this.collection[0];
  for (const dino of this.collection){
  	if(dino.guestsAttractedPerDay >
  		mostAttractiveDino.guestsAttractedPerDay){
  		mostAttractiveDino = dino;
  	};
  };
  return mostAttractiveDino
};

Park.prototype.findBySpecies = function(species){
	const foundDinosaurs = [];

	for (const dinosaur of this.collection){
		if(dinosaur.species === species){
			foundDinosaurs.push(dinosaur);
		};
	};
	return foundDinosaurs;
};

module.exports = Park;
