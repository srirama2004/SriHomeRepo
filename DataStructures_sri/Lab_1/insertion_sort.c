#include<stdio.h>
#include<ctype.h>
int main()
{

int a[100],i,n,j,key;
    printf("enter the size of the array:");
    scanf("%d",&n);
     printf("enter the array elements is:");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++)
    {
        key=a[i];
        j=i;
        while(a[j-1]>key&&j>=1)
        {
            a[j]=a[j-1];
            j--;
        }
        a[j]=key;
    }
         for(i=0;i<n;i++)
        printf("%d",a[i]);
        return 0;
}
