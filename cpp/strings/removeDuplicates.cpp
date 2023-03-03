#include <iostream>
#include <string>
using namespace std;

void removeDuplicates(std::string& str, std::string& ans) {
    int i = 0;
    while (i < str.length()) {
        if (ans.length() > 0) {
            if (ans[ans.length() - 1] == str[i]) {
                ans.pop_back();
            } else {
                ans.push_back(str[i]);
            }
        } else {
            ans.push_back(str[i]);  // initially when ans is empty
          }
        i++;
    }
}

int main() {
    std::string s = "HELLO";
    std::string ans = "";
    
    removeDuplicates(s, ans);
    std::cout << ans << std::endl; // prints "HELO"
    return 0;
}
