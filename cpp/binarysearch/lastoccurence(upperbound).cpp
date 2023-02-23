
#include <iostream>
#include<algorithm>
#include<vector>
using namespace std;

int binarySearch(int arr[], int target, int size)
{
  int s = 0;
  int e = size - 1;
  int mid = s + (e - s)/2;
  int ans;

  while(s<=e)
  {
    int element = arr[mid];
    if(element == target) //if target found i still go right and check 
    {
      ans = mid;
      s = mid + 1;  
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


   return ans;
  }


int main()
{
  int arr[] = {1,2,2,4,5,6,6,7,8,9,10};
  int arrsize = 10;
  int target = 6;
 

  int ans = binarySearch(arr, target, arrsize);

  
    cout << "last found at " << ans;
 
  
}
