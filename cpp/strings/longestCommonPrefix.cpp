#include <iostream>
#include <string>
#include <algorithm>
#include <ctype.h>
#include <vector>
using namespace std;



string longestCommonPrefix(vector<string>& strs) //vertical comparison method
{
  string ans = "";
  for(int i = 0; i < strs[0].length(); i++) // outer loop for comparing character
    {
      char current_character = strs[0][i];
      for(int j = 0; j < strs.size(); j++)  // inner loop for iterating over strings
        {
          if(strs[j][i] != current_character)
          {
            return ans;
          }
        }
      ans.push_back(current_character);
    }
  return ans;
  
}






int main() {
       vector<string> strs = {"flower","flow","flight"};
       string finalAns = longestCommonPrefix(strs);#include <iostream>
#include <string>
#include <algorithm>
#include <ctype.h>
#include <vector>
using namespace std;



string longestCommonPrefix(vector<string>& strs) //vertical comparison method
{
  string ans = "";
  for(int i = 0; i < strs[0].length(); i++) // outer loop for comparing character
    {
      char current_character = strs[0][i];
      for(int j = 0; j < strs.size(); j++)  // inner loop for iterating over strings
        {
          if(strs[j][i] != current_character)
          {
            return ans;
          }
        }
      ans.push_back(current_character);
    }
  return ans;
  
}






int main() {
       vector<string> strs = {"flower","flow","flight"};
       string finalAns = longestCommonPrefix(strs);
       cout << finalAns << endl;



    
   
        
      

      

    
  
    
    
  
}


       cout << finalAns << endl;



    
   
        
      

      

    
  
    
    
  
}

