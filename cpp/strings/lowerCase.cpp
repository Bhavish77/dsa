#include <iostream>
#include <string>

void toLowerCase(std::string& str) {
    for (char& c : str) {
        if (c >= 'A' && c <= 'Z') {
            c = c - 'A' + 'a';
        }
    }
}

int main() {
    std::string s = "HELLO, WORLD!";
    toLowerCase(s);
    std::cout << s << std::endl; // prints "hello, world!"
    return 0;
}
