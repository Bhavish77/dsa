#include <iostream>
#include<algorithm>
#include<vector>
using namespace std;

int binarySearch(int arr[], int target, int size)
{
  int s = 0;
  int e = size - 1;
  int mid = s + (e - s)/2;

  while(s<=e)
  {
    int element = arr[mid];
    if(element == target)
    {
      return mid;
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


int main()
{
  int arr[] = {1,2,3,4,5,6,7,8,9,10};
  int arrsize = 10;
  int target = 9;
 

  int ans = binarySearch(arr, target, arrsize);

  if(ans)
  {
    cout << "found";
  }
  else
  {
    cout << "Not found";
  }
  
}
