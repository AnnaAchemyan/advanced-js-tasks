#include <iostream>
#include <cstring>
#include <string>
using namespace std;

char* mergeStr(char* str1, char* str2) {

    int str1Length = strlen(str1);
    int str2Length = strlen(str2);

    for ( int i = 0, j = str1Length; i <= str2Length; i++ ) {

        *(str1 + j) = 0;
        *(str1 + j) += str2[i];
        j++;
    }
    return str1;
}

char* strSet(char* s, char ch) {

    int i = 0;
    while( *(s + i) != '\0') {
    *(s + i) = ch;
    i++;
    }
    return s;
}

void strMove(char* s, int n) {

    int length = strlen(s);
    char str[length + 1] = {0};
    str[length] = '\0';

    for(int j = 0; j < n; j++) {
        str[j] = s[length  - n];
        length++;
    }

    for(int i = n, k = 0; i < length - n; i++) {
        str[i] = s[k];
        k++;
    }
   cout<< str<< endl;
}

int main() {
char str8[] = "hello";
char str9[] = "Anna";
char str10[] = "how are you ?";
// cout<< mergeStr(str8, str9)<< endl;
// cout<<strSet(str10, 'a')<<endl;
strMove(str8, 3);

}
