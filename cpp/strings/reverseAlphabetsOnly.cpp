#include <iostream>
#include <string>
#include <algorithm>
#include <ctype.h>
using namespace std;




void reverseVowel(string &s) {
    int n = s.length();
    int i = 0;
    int j = n - 1;

    while(i < j) {
        if(!isalpha(s[i])) {
            i++;
            continue;
        }

        if(!isalpha(s[j])) {
            j--;
            continue;
        }

        swap(s[i], s[j]);
        i++;
        j--;
    }
}





int main() {
    std::string s = "Test1ng-Leet=code-Q!";
    
    

    
    reverseVowel(s);
    

    for(int i = 0; i<s.length(); i++)
    {
      cout << s[i];
      
        
      

      

    }
  
    
    
  
}
