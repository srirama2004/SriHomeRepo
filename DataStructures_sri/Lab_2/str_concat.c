#include<stdio.h>
int main()
{
    char a[100],b[100];
   int i,j,l1=0,l2=0;
    printf("enter string_1:");
    gets(a);
    printf("enter string_2:");
    gets(b);
    for(i=0;a[i]!='\0';i++)
        l1=l1+1;
        for(i=0;b[i]!='\0';i++)
        l2=l2+1;

    printf("%d\t%d",l1,l2);
    for(i=l1,j=0;i<l1+l2,j<l2;i++,j++)
    {
        a[i]=b[j];
    }
    for(i=0;i<l1+l2;i++)
        printf("%c",a[i]);
    return 0;
}
