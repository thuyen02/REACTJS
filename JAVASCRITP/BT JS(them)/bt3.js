function removeFromArray(array, deleteItem) {
    var arry = []
    arry = array.splice(array,deleteItem)
    return arry
  }
  console.log(removeFromArray([1, 2, 3, 4], 2))