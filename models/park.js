const Park = function (name, ticketPrice, dinosaurCollection = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
}
Park.prototype.addDinosaur = function(dino) {
  this.dinosaurCollection.push(dino);
}
Park.prototype.removeDinosaur = function() {
    this.dinosaurCollection.pop();
}
Park.prototype.visitorsPerDay = function() {
    let total = 0;
    for (const dinosaur of this.dinosaurCollection){
      total += dinosaur.guestsAttractedPerDay;
    };
    return total;
}
Park.prototype.mostVisitedDinosaur = function() {
    let dino;
    let biggest = 0;
    for (const dinosaur of this.dinosaurCollection){
      if (dinosaur.guestsAttractedPerDay > biggest) {
        biggest = dinosaur.guestsAttractedPerDay;
        dino = dinosaur;
      };
    };
    return dino;
}
Park.prototype.findBySpecies = function(species) {
  let dinoDArray = [];
  for (const dinosaur of this.dinosaurCollection){
    if (dinosaur.species === species ) {
      dinoDArray.push(dinosaur);
    };
  };
  return dinoDArray;
}
Park.prototype.removeBySpecies = function(species) {
  let dinoDArray = [];
  for (const dinosaur of this.dinosaurCollection){
    if (dinosaur.species !== species ) {
      dinoDArray.push(dinosaur);
    };
  };
  this.dinosaurCollection = dinoDArray;
}
Park.prototype.visitorsPerYear = function() {
    return this.visitorsPerDay() * 365;
}
Park.prototype.revenuePerYear = function() {
    return this.visitorsPerYear() * this.ticketPrice;
}
Park.prototype.dinosaursByType = function() {
    let dinosByType = { herbivore: 0, carnivore: 0, omnivore: 0 };
    for (const dinosaur of this.dinosaurCollection){
        dinosByType[dinosaur.diet] += 1;
    };
    console.log(dinosByType);
    return dinosByType;
}
module.exports = Park;
