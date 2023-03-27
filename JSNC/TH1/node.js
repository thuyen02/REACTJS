//1
let str1 = 'My name is:';
let name = 'Dylan';

let str2 = `${str1} ${name}`
//2
let information = { firstName: 'Dylan', lastName: 'Israel'};
let { firstName, lastName } = information;
console.log(firstName)
//3
// let [ firstName ] = ['Dylan', 'Israel'];
// console.log(firstName)
//4
let str = "hello"
for(let char of str){
    console.log(char)
}
//5
//Spread syntax dùng để gộp 2 mảng hoặc có thể dùng để làm tham số của function.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1,...arr2]
console.log(arr3)
//6
const square = num => num *num 
console.log(square(4))
7
let str = 'thuyen'
console.log(str.includes('thuyen'))
//8
class Car{
    constructor(wheels, doors) {
        this.wheels = wheels;
        this.doors = doors;
     }
     describeMe() {
        console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
      }

}
const car1 = new Car(4, 2);  
car1.describeMe(); 
//9
function takeLongtime(){
    return new Promise(resolve => {
        setTimeout(() => resolve("long time_value"),1000);
    });
}
    async  function test(){
        const v = await takeLongtime();
        console.log(v);
    }
test();