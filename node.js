
// var age = 25.658654;
// console.log(age )
// console.log(age.toFixed(2))
// console.log(parseInt("123"))
// // Mảng
// // nối mảng
// let arr = [1,2,3]
// let arr1 = [1,2,3]
// let ar3 = arr1.concat(arr)
// console.log(ar3)
// Các phương thức xử lý mảng (Array) phổ biến trong JavaScript
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// var resurt = words.filter(function(word){
//    let thueyn = word.length > 16;
//    return thueyn
    
// });
// console.log(words);
// console.log(resurt)


// // find() tra về phân tử dầu tiên thỏa mãn điều kiện
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// var resurt = words.find(function(word){
//    let thueyn = word.length > 1;
//    return thueyn
    
// });
// console.log(words);
// console.log(resurt)

// duyệt mảng
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// var resrut = words.forEach(element => {
//     console.log(element)
// });
// console.log(words)  

var words = [8, 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var resrut = words.map( function(item){
   return item * 5
});
console.log(resrut)
