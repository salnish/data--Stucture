// Iterative function to implement Binary Search
let iterativeFunction = function (arr, x) {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return arr[mid];
    // Else look in left or right half accordingly
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
console.log(iterativeFunction(arr, x, 0))
if (iterativeFunction(arr, x))
  console.log("Element found!");
else console.log("Element not found");

x = 6;

console.log(iterativeFunction(arr, x, 0))
if (iterativeFunction(arr, x, 0))
  console.log("Element found!");
else console.log("Element not found!");
