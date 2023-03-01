const arr = [9,9,5,6,7]
let sum = 0;
for(const a of arr){
    sum +=a;
}
const average = (sum / arr.length);
console.log("11-marks-average-grade!")
console.log(" average:" + average)
if( average <= 7 && average >= 0 ){
    console.log("Grade:D")
}
else if(average <= 8 && average >= 7.1){
    console.log("Grade:C")
}
else if(average <= 9 && average >= 8.1){
    console.log("Grade:B")
}
else if(average <= 10 && average >= 9.1){
    console.log("Grade:A")
}
