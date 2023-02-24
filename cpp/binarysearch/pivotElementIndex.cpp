#include <iostream>


using namespace std;

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
  int arr[] = {3,4,6,7,1,2};
  int size = 6;
  int ans = pivotElementIndex(arr, size);
  cout << ans;
}
