#include <iostream>
#include <string>
#include <algorithm>
using namespace std;


int isvowel(char x)
{
    if (x == 'a' || x == 'e' || x == 'i' || 
                   x == 'o' || x == 'u')
        return true;
    else
        return false;
}


void reverseVowel(string &s) {
    int n = s.length();
    int i = 0;
    int j = n - 1;

    while(i < j) {
        if(s[i] != 'a' && s[i] != 'e' && s[i] != 'i' && s[i] != 'o' && s[i] != 'u') {
            i++;
            continue;
        }

        if(s[j] != 'a' && s[j] != 'e' && s[j] != 'i' && s[j] != 'o' && s[j] != 'u') {
            j--;
            continue;
        }

        swap(s[i], s[j]);
        i++;
        j--;
    }
}


void lowerCase(string &s)
{
  for(int i= 0; i<s.length(); i++)
    {
      s[i] = s[i] + 'a' - 'A';
    }
}


int main() {
    std::string s = "HELLO";
    
    

    lowerCase(s);
    reverseVowel(s);
    

    for(int i = 0; i<s.length(); i++)
    {
      cout << s[i];
      
        
      

      

    }
  
    
    
  
}

