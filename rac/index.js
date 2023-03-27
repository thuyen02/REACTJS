// function multiply(a,b,d){
//     var resuf= a*b;
//     d(resuf);
// }
// function printresuf(resuf){
//     console.log('resufl is:' +resuf);
// }
// multiply(3,4,printresuf);
// function repeatString(string){
//     string = string.split("")   
//    string = string.reverse("")
//     string = string.join("")
//     console.log(string)
// }
// repeatString("thuyen")
// const arr1=[1,2]
// const arr2=[1,2]
// console.log([...arr1,...arr2])
// let deCoSencond = () => {
//     console.log("dosecond");
// };
// let doFirt = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Do firt");
//         resolve();
//     },2000);
// });
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                resolve("Do firt");
//             },200);
//         })
//     }
// async function printdata(){
//     const data = await fetchData();
//     console.log(data)
// }
// printdata()
// export class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sing(){
//         return `${this.name} can sing`;
//     }
// // }
// console.log("sakcgocz")
// let happyHanding = (mess) =>{
//    return  new Promise((resole,reject)=>{
//         setTimeout(()=> {
//         if(mess === 'yes'){
//             resole('em dog y')

//         }
//         else{
//             reject(new Error('khong dong y'))
//         }
//     },5000)
// });
// }
// happyHanding('yes').then(result =>{
//     console.log(result)
// })
// async function f(){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=> reject(new Error("wwhole!")),1000)
//     });
//     let resuflt = await Promise;
//     console.log(resuflt)
// }
// f();
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {
    console.log('I am callback function');
}

greet('Peter', callMe);