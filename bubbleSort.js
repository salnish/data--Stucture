let unsortedArr = [10, 7, 23, 4, 6, 8, 9, 3, 2, 9];

let swapped;

function bubblesSort(arr) {
  swapped = false;
  let end = arr.length - 1;
  for (let i = 0; i < end; i++) {
    if (arr[i] > arr[i + 1]) {
        swapped=true;
        let temp =arr[i];
        arr[i] =arr[i+1];
        arr[i+1]=temp;
    }
  }
  end--;
}   

do{
    bubblesSort(unsortedArr)
    console.log(unsortedArr)
}while(swapped);

console.log(unsortedArr)
