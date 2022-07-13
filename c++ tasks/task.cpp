#include <iostream>
#include <cstring>
#include <string>
using namespace std;

int fibonacci(int count){

	if(count < 0) return 0;

	if(count == 0 || count == 1) return count;

    return fibonacci(count - 1) + fibonacci(count - 2);

}



int fibonacciRec(int count){
int cache[10] = { 0 };

	if(count < 0) return 0;

	if(count == 0 || count == 1) return count;

	if(cache[count] ) {
		return cache[count];

	}else{
		
		
        return  cache[count] = fibonacciRec(count-1) + fibonacciRec(count-2);
	}

}




int mystrLen(char* str){
	int count = 0;
	while(str[count] != '\0'){
		count++;

	}
	return count;

}

void reverse1(char* strInp){
	int strLength = mystrLen(strInp); 	
	char result[strLength+1] = {0};
	     result[strLength] = '\0';
	for(int i = strLength - 1, j = 0; i >= 0 ; i--){
		if(j == strLength){
			break;
		}
		result[j] = strInp[i];
		j++;
	}
	cout<< result <<endl;
}


void reverse(char* strInp){
	int strLength = mystrLen(strInp); 	
	string str = "";
	
	for(int i = strLength - 1; i >= 0 ; i--){
		str += strInp[i];
	}
	
	cout<< str <<endl;
}


int main(){

//cout<< fibonacci(5) <<endl;
//cout<< fibonacciRec(5) <<endl;
char str1[] = "helloooo";

//cout<< mystrLen(str1) <<endl; 
//reverse(str1);
reverse1(str1);


}

