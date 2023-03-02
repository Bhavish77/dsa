#include <iostream>
#include<vector>
using namespace std;


int main()
{
  string s = "ABCD";
  int n = s.length();
  int length = 0;
  int i = 0;
  int j = n-1;
  while(i<=j)
    {
      swap(s[i], s[j]);
      i++;
      j--;
      
    }
  cout << s << endl;

  

  
  
}
