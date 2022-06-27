/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
*/

function isBadVersion(num){
  if (num>= 4){
      return true 
  }
} 

let solution = function(api) {
  // /**
  //  * @param {integer} n Total versions
  //  * @return {integer} The first bad version
  //  */
  return function(n) {
      let start = 1
      let end = n;
      while(start<= end){
          let mid = Math.floor((start + end) /2);

          if (isBadVersion(mid)){
            // the bad version is found 
            // now we have to move the mid point left to find the first bad. 
            // in order to move the midpoint left you minus the the 
            end = mid -1;
          } else {
            start = mid + 1;

          }
      }
      return start

      
  };
};

console.log(solution(isBadVersion(5)))

