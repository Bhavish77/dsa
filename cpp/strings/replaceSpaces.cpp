#include <iostream>
#include<vector>
using namespace std;


int main()
{
  string s = "ABCD abcd efgh";
  int n = s.length();
  int length = 0;
  int i = 0;
  int j = n-1;
  while(i<=j)
    {
      if(s[i] == ' ')
      {
        s[i] = '@';
      }
      i++;
      
    }
  cout << s << endl;

  

  
  
}
