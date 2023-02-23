
#include <iostream>
#include<algorithm>
#include<vector>
using namespace std;

int lastOccurence(int arr[], int target, int size)
{
  int s = 0;
  int e = size - 1;
  int mid = s + (e - s)/2;
  int ansl = -1;

  while(s<=e)
  {
    int element = arr[mid];
    if(element == target) //if target found i still go right and check 
    {
      ansl = mid;
      s = mid + 1;  
    }
    else if(element > target)
    {
      e = mid - 1;
      
    }
    else
    {
      s = mid + 1;
    }
    mid = s + (e - s)/2;
    
  }


   return ansl;
}

int firstOccurence(int arr[], int target, int size)
{
  int s = 0;
  int e = size - 1;
  int mid = s + (e - s)/2;
  int ansf = -1;

  while(s<=e)
  {
    int element = arr[mid];
    if(element == target) //if target found i still go left and check 
    {
      ansf = mid;
      e = mid - 1;  
    }
    else if(element > target)
    {
      e = mid - 1;
      
    }
    else
    {
      s = mid + 1;
    }
    mid = s + (e - s)/2;
    
  }


   return ansf;
}


int main()
{
  int arr[] = {1,2,3,4,5,6,6,6,8,9,10};
  int arrsize = 11;
  int target = 6;
 

  int last = lastOccurence(arr, target, arrsize);
  int first = firstOccurence(arr, target, arrsize);
  int finalAns = last - first + 1;
  
  cout << "Total number of occurences: " << finalAns << endl;
  
  return 0;
}
