#include <iostream>
#include<algorithm>
#include<vector>
using namespace std;

int peakElement(int arr[], int size)
{
  int s = 0;
  int e = size - 1;
  int mid = s + (e - s)/2;

  while(s<=e)
    {
      if(mid > 0 && mid < e )
      {
        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) //peak element is bigger than all//
        {
          return mid;
        }
        else if(arr[mid] < arr[mid-1])// since the element on left i.e mid-1 is larger we go for left search//
        {
          e = mid - 1;
        }
        else
        {
          s = mid + 1;  //right search//
        }
      }
      else if(mid == 0) //separately handling first element cuz mid-1 is absent//
      {
        if(arr[0] > arr[1])
        {
          return 0;
        }
        else
        {
          return 1;
        }
      }
      else if(mid == e) //separately handling last element cuz mid+1 is absent//
      {
        if(arr[e] > arr[e-1])
        {
          return e;
        }
        else
        {
          return e - 1;   // e=size-1 so e-2==size-2 i.e element before last element//
        }
      }
    }

}


int main()
{
  int arr[] = {1,2,3,4,5,6,7,6,5,4,3,2,1};
  int size = 13;
  int ans = peakElement(arr, size);
  cout << ans;
}
