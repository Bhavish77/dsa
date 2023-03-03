#include <iostream>
#include <string>

void toUpperCase(std::string& str) {
    for (char& c : str) {
        if (c >= 'a' && c <= 'z') {
            c = c - 'a' + 'A';
        }
    }
}

int main() {
    std::string s = "hello, world!";
    toUpperCase(s);
    std::cout << s << std::endl; // prints "HELLO, WORLD!"
    return 0;
}
