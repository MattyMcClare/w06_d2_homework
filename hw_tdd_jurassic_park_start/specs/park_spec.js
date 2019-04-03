const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
const dinosaur2 = new Dinosaur('t-rex', 'carnivore', 40)
const dinosaur3 = new Dinosaur('v-rex', 'herbivores', 60)
describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic', 20, []);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.collection.length;
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.removeDinosaur();
    const actual = park.collection.length;
    assert.deepStrictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.mostAttractiveDino();
    assert.deepStrictEqual(actual, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findBySpecies();
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2])
  });

  it('should be able to remove all dinosaurs of a particular species');

});
