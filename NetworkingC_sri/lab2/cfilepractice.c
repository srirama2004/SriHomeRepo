#include<stdio.h>
#include<stdlib.h>
#include<string.h>
void palindrome(char c[]){
int i=0,j=0,k=0;
j=strlen(c)-1;
while(i!=j){
    if(c[i]==c[j])
        k++;
        i++;
        j--;
}
if(k==strlen(c)/2){
    printf("palindrome");
}
else{
       printf("not palindrome");
}
return ;
}
int main(){
int i=0,j=0,k=0;
char ch[100]={"C:\\NPS_C1_220911010\\lab2\\pracfile.txt"};
char ch1[10]={""};
FILE *fo;
fo=fopen(ch,"w+");
if(fo==NULL){
    printf("file not present!");
}
char buff[100]={"the angle mom dad \n abab"};
char s[100]={"\nhello world "};
fprintf(fo,"%s",buff);
fputs(s,fo);
char c;
char buff1[100];
fseek(fo, 0, SEEK_SET);
  c=fgetc(fo);
		  while(c!=EOF){
		   buff1[k++]=c;
           c=fgetc(fo);
		  }
		  printf("%s",buff1);
while(buff1[i] != '\0'){
        j=i;
        k=0;
    while(buff1[j]!=' ' && buff1[j]!='\0'){
        ch1[k++]=buff1[j];
         j++;
    }
    ch1[k]='\0';
    printf("word is ::%s",ch1);
    palindrome(ch1);
     if (buff1[j] == '\0') // Exit loop if end of string is reached
            break;
    i=j+1;
}
}
