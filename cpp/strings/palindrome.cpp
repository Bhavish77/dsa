#include <iostream>
#include<vector>
using namespace std;

int palindrome(string s)
{
  int n = s.length();

  int i = 0;
  int j = n-1;
  while(i<=j)
    {
      if(s[i] != s[j])
      {
        return false;
      }
      i++;
      j--;
      
    }
  return true;
}


int main()
{
  string s = "ABA";


  if(palindrome(s)){
    cout << "palindrome" << endl;
  }
  else{
    cout << "not palindrome" << endl;
  }

  

  
  
}
