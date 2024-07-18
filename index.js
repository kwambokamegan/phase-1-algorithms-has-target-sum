function hasTargetSum(array, target) {
  // Initialize an empty Set to store seen numbers
  let seenNumbers = new Set();

  // Iterate through each number in the array
  for (let num of array) {
    // Calculate the complement needed to reach the target
    let complement = target - num;
    
    // Check if the complement has been seen before
    if (seenNumbers.has(complement)) {
      return true; // If found, return true (we have a pair)
    }
    
    // Add the current number to the set of seen numbers
    seenNumbers.add(num);
  }

  // If no such pair is found, return false
  return false;
}

/* 
  Big O time complexity: O(n)

    - We iterate through the array once, performing average-time O(1) operations on a Set (insert and lookup).
    - Thus, the overall time complexity is O(n), where n is the number of elements in the array.
*/

/* 
  Pseudocode:

  1. Initialize an empty Set called seenNumbers.
  2. Iterate through each number num in the array:
     - Calculate complement as target - num.
     - If complement is in seenNumbers, return true (we found a pair).
     - Otherwise, add num to seenNumbers.
  3. If no pairs are found by the end of the loop, return false.
*/

/*
  Written Explanation:

  The function `hasTargetSum` uses a Set to keep track of numbers that have been encountered so far as it iterates through the array.
  For each number in the array, it calculates the complement needed to reach the target sum from that number.
  If the complement has been seen before , it means there exists a pair of numbers in the array that sum up to the target.
  If no such pair is found by the end of the loop, the function returns false.
  This approach ensures that we find the solution in a single pass through the array, making it efficient with a time complexity of O(n), where n is the number of elements in the array.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
