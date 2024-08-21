#include <stdio.h>
int main()
{
    char a[100];
    int i,l=0,x;
    scanf("%[^\n]%c",a);
    for(i=0;a[i]!='\0';i++)
        l=l+1;
        printf("%d",l);
        return 0;
}
