let spacecraftName = 'Determination'
let speedMph = 17500;
let kilometersToMars = 225000000;
let kilometersToTheMoon = 	384400;
let milesPerKilometer = 0.621
let daysToMars = 621
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
// function getDaytodolacation(kilometersAway){
//     let milesAway= kilometersAway * milesPerKilometer;
//     let hours= milesAway / speedMph;
//     return hours / 24;
// }
// getDaytodolacation()
// console.log(getDaytodolacation(5612))
// class Spacecraft {
//     milesPerKilometer: number = 0.621;
//     name;
//     speedMph;
    
 
//     constructor(name, speedMph) {
//        this.name = name;
//        this.speedMph = speedMph;
//     }
 
//     getDaysToLocation(kilometersAway) {
//        let milesAway= kilometersAway * this.milesPerKilometer;
//        let hoursToMars = milesAway / this.speedMph;
//        return hoursToMars / 24;
//     }
//  }

 class Spacecraft {
    milesPerKilometer = 0.621;
    name;
    speedMph;
 
    constructor(nam, speedMph) {
       this.name = name;
       this.speedMph = speedMph;
    }
 
    getDaysToLocation(kilometersAway){
       let milesAw = kilometersAway * this.milesPerKilometer;
       let hours= milesAway / this.speedMph;
       return hours / 24;
    }
 
    printDaysToLocation(location) {
       console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
 }

 const Spacecraft1 = Spacecraft();  
 Spacecraft1.printDaysToLocation(564)