function maxnumber(number1, number2){
    if( number1 > number2){
        return number1
    }
    else if( number1 < number2){
        return number2
    }
    else{
        console.log("2 số bằng nhau")
    }
}
let checkmax = maxnumber(5,3);
console.log('max number:',checkmax);