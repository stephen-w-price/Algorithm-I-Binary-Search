// 704-Binary-Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.


let array = [-1, 2, 5, 7, 9, 10, 11]
let target = 7


function binarySearch(array, target) {
  // divide the array in half
  // search the first half and then the second
  // this code below is testing to see
  // console.log(array.splice(0, (array.length / 2)))

  for(let i = 0; i < (Math.floor(array.length / 2)); i++){
    if (target == array[i]){
      return array.indexOf(target)
    } 
  }
  for (let i = (Math.ceil(array.length / 2)); i < array.length; i++){
    if (target == array[i]){
      return array.indexOf(target)
    } 
  }
  // if odd number 
  for (let i = (Math.floor(array.length / 2)); i < array.length; i++){
    if (target == array[i]){
      return array.indexOf(target)
    } else {
      return -1
    }
  }
}
let result = binarySearch(array, target)
console.log(result)