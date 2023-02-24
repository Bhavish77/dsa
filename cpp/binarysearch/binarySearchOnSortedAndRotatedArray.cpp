#include <iostream>
#include<algorithm>
#include<vector>
using namespace std;

int binarySearch(int arr[], int target, int start, int pivotIndex)
{
  int s = start;
  int e = pivotIndex;
  int mid = s + (e - s)/2;

  while(s<=e)
  {
    int element = arr[mid];
    if(element == target)
    {
      return element;
    }
    if(element > target)
    {
      e = mid - 1;
      
    }
    else
    {
      s = mid + 1;
    }
    mid = s + (e - s)/2;
    
  }


   return 0;
  }



int pivotElementIndex(int arr[], int size)
{
  int s = 0;
  int e = size - 1;
  int mid = s + (e - s)/2;

  while(s<=e)
  {
    if(arr[mid] > arr[mid + 1])
    {
      return mid;
    }
    else if(arr[mid - 1] > arr[mid]) 
    {
      return mid - 1;
    }
    else
    {
      if(arr[s] > arr[mid])
      {
        e = mid - 1;
      }
      else if(arr[s] < arr[mid])
      {
        s = mid + 1;
      }
    }
    mid = s + (e - s)/2;
  }
}
    
    



int main()
{
  int arr[] = {4,5,6,0,1,2,3};
  int size = 7;

  int pivotIndex = pivotElementIndex(arr, size);
  
  int target = 5;
  int ans;
  if(target >= arr[0] && target <= arr[pivotIndex])
  {
    ans = binarySearch(arr, target, 0, pivotIndex);
  }
  else 
  {
    ans = binarySearch(arr, target, pivotIndex + 1, size - 1);
  }

  cout << ans;
 
}
