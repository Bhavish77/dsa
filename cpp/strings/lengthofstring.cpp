
#include <iostream>
#include<vector>
using namespace std;


int main()
{
  vector<int> arr{4,5,2,3,1};
  int n = arr.size();
  int length = 0;
  int i = 0;

  while(arr[i] != 0)
    {
      length++;
      i++;
    }
  cout << length << endl;

  

  
  
}
