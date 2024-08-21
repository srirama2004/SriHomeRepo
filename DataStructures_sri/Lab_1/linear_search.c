#include<stdio.h>
#include<ctype.h>
int main()
{

int a[100],i,n,x,b;
    printf("enter the size of the array:");
    scanf("%d",&n);
     printf("enter the array elements:");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("enter the element to search:");
    scanf("%d",&x);
    for(i=0;i<n;i++)
        {
    if(a[i]==x)
    {
        b=1;
        break;
    }
        }
    if(b==1)
        printf("the element is found in:%d\t",i+1);
        else
            printf("not found");

        return 0;
}
