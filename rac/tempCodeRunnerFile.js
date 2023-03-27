import {Animal} from './index.js'
class Cats extends Animal{
    constructor(name,age,whiskerColor){
        super(name,age)
        
    }
    getcolo() {
        return this.color;
    }   
}
let clara = new Cats("Clara", 33, "red");
console.log(clara.sing());