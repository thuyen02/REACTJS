function convertNumber(number) {
    let arr = [];
    let binary = "";
    let i=0;
    for(i = 0; number > 0; i++){
      arr[i] = number % 2;
      number = Math.floor( number / 2);
    }
    for(i = i - 1; i >=0; i--){
      binary += arr[i];
    }
    return binary;
}
console.log(convertNumber(49));