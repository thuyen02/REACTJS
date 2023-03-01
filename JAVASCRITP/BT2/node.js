
function GiaTriLonNhat(arr) {
    return Math.max.apply(null, arr);
}

function GiaTriNhoNhat(arr) {
    return Math.min.apply(null, arr);
}

function canNest(arr1, arr2) {
    if(GiaTriLonNhat(arr1) < GiaTriLonNhat(arr2)) {
        if(GiaTriNhoNhat(arr1) > GiaTriNhoNhat(arr2)) {
            return true;
        } 
    }
    return false;
}

console.log(canNest([1,2,3,4], [0,10]));
console.log(canNest([3,1],[6,0]));
console.log(canNest([1,2,3],[2,3]));