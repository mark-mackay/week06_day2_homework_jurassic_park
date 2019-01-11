const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let park2;
  let puey;
  beforeEach(function() {
      const huey = new Dinosaur('t-rex', 'carnivore', 50);
      const duey = new Dinosaur('velociraptor', 'carnivore', 100);
      const luey = new Dinosaur('diplodocus', 'herbivore', 20);
      const homer = new Dinosaur('t-rex', 'carnivore', 60);
      const bart = new Dinosaur('velociraptor', 'carnivore', 110);
      const tom = new Dinosaur('velociraptor', 'carnivore', 120);
      const jerry = new Dinosaur('velociraptor', 'carnivore', 105);
      const maggie = new Dinosaur('diplodocus', 'herbivore', 40);
      puey = new Dinosaur('spinosaurus', 'herbivore', 30);
      const dinosaurs = [huey, duey, luey];
      const dinosaurs2 = [huey, duey, luey, puey, homer, bart, maggie, tom, jerry];
      park = new Park('Vogrey', 7.99, dinosaurs);
      park2 = new Park('Whitestone', 5.99, dinosaurs2);
  });

  it('should have a name', function() {
      const actual = park.name;
      assert.strictEqual(actual, 'Vogrey');
    });
  it('should have a ticket price', function() {
      const actual = park.ticketPrice;
      assert.strictEqual(actual, 7.99);
    });

  it('should have a collection of dinosaurs', function() {
      const actual = park.dinosaurCollection.length;
      assert.strictEqual(actual, 3);
    });

  it('should be able to add a dinosaur to its collection', function() {
      park.addDinosaur(puey);
      const actual = park.dinosaurCollection.length;
      assert.strictEqual(actual, 4);
    });

  it('should be able to remove a dinosaur from its collection', function() {
      park.removeDinosaur();
      const actual = park.dinosaurCollection.length;
      assert.strictEqual(actual, 2);
    });
  it('should be able to find the dinosaur that attracts the most visitors', function() {
        const actual = park.mostVisitedDinosaur();
        assert.deepEqual(actual, {species: 'velociraptor', diet: 'carnivore', guestsAttractedPerDay: 100 });
    });
  it('should be able to find the number of visitors per day', function() {
      const actual = park.visitorsPerDay();
      assert.strictEqual(actual, 170);
    });

  it('should be able to find all dinosaurs of a particular species', function() {

      const matches = park2.findBySpecies('velociraptor');
      actual = matches.length;
      assert.strictEqual(actual, 4);
    });

  it('should be able to remove all dinosaurs of a particular species', function() {
      park2.removeBySpecies('velociraptor');
      actual = park2.dinosaurCollection.length;
      assert.strictEqual(actual, 5);
    });

    it('should be able to calculate the total number of visitors per year', function() {
        const actual = park.visitorsPerYear();
        assert.strictEqual(actual, 170*365);
      });
    it('should be able to calculate the total revenue from ticket sales for one year', function() {
        const actual = park.revenuePerYear();
        assert.strictEqual(actual, 170*365*7.99);
      });
    it('should be able to calculate the number of dinosaurs by type', function() {
        const actual = park2.dinosaursByType();
        assert.deepEqual(actual,{ herbivore: 3, carnivore: 6, omnivore: 0 });
    });

});
