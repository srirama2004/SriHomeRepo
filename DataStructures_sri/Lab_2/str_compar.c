#include<stdio.h>
int main()
{
    char a[100],b[100];
   int i,j,l1=0,l2=0,f;
    printf("enter string_1:");
    gets(a);
    printf("enter string_2:");
    gets(b);
     for(i=0;a[i]!='\0';i++)
        l1=l1+1;
        for(i=0;b[i]!='\0';i++)
        l2=l2+1;
        for(i=0,j=0;i<l1,j<l2;i++,j++)
        {
            if(a[i]==b[j])
                f=f+1;
        }
        if(f==l1)
            printf("strings are equal");
        else
            printf("strings are not equal!");
        return  0;
}




