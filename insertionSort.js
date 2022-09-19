const insertionSort = (arr)=>{
    for(let i=1;i<arr.length;i++){
     
        let j=i-1
     
        let temp=arr[i]
    
        while (j>0&&arr[j]>temp){
      
            arr[j+1]=arr[j]
            j--
        }
   
        arr[j+1]=temp
   
    }
    
    return arr
}

let arrr=[3,9,6,4,78,34,6778,433,56,78,];
console.log(arrr);
console.log(insertionSort(arrr));