#include <iostream>
#include<vector>
using namespace std;


int main()
{
  vector<int> arr{4,5,2,3,1};
  int n = arr.size();

  for(int round = 1; round < n; round++) 
    {
      bool swapped = false;
      
      for(int j = 0; j<n-round; j++)
        {
          if(arr[j]>arr[j+1])
          {
            swap(arr[j], arr[j+1]);
          }
          
        }
      if(swapped == false)
      {
        break;
      }
    }
  
  
}
