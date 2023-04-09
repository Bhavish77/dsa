function isSorted(arr, n, i)
{
  //base case
  if(i >=n)
  {
    return true;
  }

  //processing

  if(arr[i] > arr[i+1])
  {
    return false;
  }


  //recursive relation

  return isSorted(arr, n , i+1);

  
  
  
}







const arr = [1,2,3,5,4];
const n = arr.length;
let i = 0;
if(isSorted(arr, n , i))
{
  console.log('sorted');
}
else{
  console.log('not sorted');
}
