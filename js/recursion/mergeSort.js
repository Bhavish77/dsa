//merge sort//

function merge(arr, s, e)
{
  let mid = Math.floor((s+e)/2);

  let lenOfLeft = mid - s + 1;
  let lenOfRight = e - mid;
  
// creating two new array
  let left = [];
  let right = [];

  //copying values into new arrays
  let k = s;
  for(let i = 0; i<lenOfLeft; i++)
    {
      left[i] = arr[k];
      k++;
    }
  k = mid + 1;

   for(let i = 0; i<lenOfRight; i++)
    {
      right[i] = arr[k];
      k++;
    }

  
  //merge
  let leftIndex = 0;
  let rightIndex = 0;
  let arrIndex = s;

  //pushing correct values into arr from left and right till one of them exhausts
  while(leftIndex < lenOfLeft && rightIndex < lenOfRight)
    {
      if(left[leftIndex] < right[rightIndex])
      {
        arr[arrIndex++] = left[leftIndex++];
      }
      else
      {
        arr[arrIndex++] = right[rightIndex++];
      }
    }

  //copying remaining values ie values of array that is larger
  while(leftIndex < lenOfLeft)
    {
      arr[arrIndex++] = left[leftIndex++];
    }

   while(rightIndex < lenOfRight)
    {
      arr[arrIndex++] = right[rightIndex++];
    }

  
}

function mergeSort(arr,s, e){
  //base
  if(s >= e)
  {
    return;
  }

  //mid 
let mid = Math.floor((s+e)/2);


  //rr call to left
  mergeSort(arr, s, mid);

  //rr call to right
  mergeSort(arr, mid+1, e);

  //merge
  merge(arr, s, e);
}


const arr = [3,2,4,1,5,7];
console.log(arr);
const s = 0;
const e = 5;

mergeSort(arr, s, e);

console.log(arr);
