// function multiply(a,b,d){
//     var resuf= a*b;
//     d(resuf);
// }
// function printresuf(resuf){
//     console.log('resufl is:' +resuf);
// }
// multiply(3,4,printresuf);
function repeatString(string){
    string = string.split("")   
   string = string.reverse("")
    string = string.join("")
    console.log(string)
}
repeatString("thuyen")