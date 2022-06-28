/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/
let nums = [1,3]
let target = 4
let searchInsert = function(nums, target) {
  let mid = Math.ceil((nums.length -1) / 2)
  console.log(mid)
  let end = nums.length - 1
  if(nums.length === 1){
    if(target > nums[0]){
      return 1
    } else {
      return 0 
    }
  }
  for(let i = 0; i < mid; i++){
    if(target === nums[i]){
      return "number is found at index: " + nums.indexOf(target)
    }
    if (target < nums[i]){
      return "would have been found at index: " + nums.indexOf(nums[i])
    }
    if(target > nums[i] && target < nums[i + 1] ){
      return "the number would have found at index: " + nums.indexOf(nums[i + 1])
    }
  }
  for(let i = mid; i < end + 1; i++){
    if(target === nums[i]){
      return "half number is found at index: " + nums.indexOf(target)
    } 
    if(target > nums[i] && target < nums[i + 1] ){
      return "the number would have found at index: " + nums.indexOf(nums[i + 1])
    }
    if(target > nums[end]){
      return "would have been at index: " + (nums.indexOf(nums[end]) + 1)
    }
  }
};

console.log(searchInsert(nums, target))