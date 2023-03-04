#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int isAnagram(string &s, string &t)
{
  sort(s.begin(), s.end());
  sort(t.begin(), t.end());

  for(int i = 0; i<s.length(); i++)
    {
      if(s[i] != t[i])
      {
        return false;
      }
    }
  return true;
}

int main() {
    std::string s = "HELLO";
    std::string t = "OLLEH";
    
    if(isAnagram(s, t)){
      cout << "yes";
    }
    else{
      cout << "No";
    }
  
}
