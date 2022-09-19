function selectionSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    console.log(inputArr);
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }

    
    
  }
  return inputArr;
}
const arr = [10,9,8,7,6,5,4,3,2,1];

console.log(selectionSort(arr));
