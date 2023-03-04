#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

void isAnagram(string &s, string &t, int frequencyTable[256])
{
  
  

  for(int i = 0; i<s.length(); i++)
    {
       frequencyTable[s[i]]++;

    }

  for(int i = 0; i<t.length(); i++)
    {
       frequencyTable[t[i]]--;

    }
     
}

int main() {
    std::string s = "HELLO";
    std::string t = "OLLEH";
    int frequencyTable[256] = {0};

    isAnagram(s, t, frequencyTable);

    for(int i = 0; i<256; i++)
    {
      if(frequencyTable[i] != 0)
      {
        cout << "not anagram";
        return;
      }

      

    }
  cout << "anagram";
    
    
  
}
