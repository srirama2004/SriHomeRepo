#include<stdio.h>
#include<ctype.h>
int main()
{

int a[100],i,n,j,temp,min;
    printf("enter the size of the array:");
    scanf("%d",&n);
     printf("eneter the array elements is:");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
     for(i=0;i<n;i++)
     {
         min=a[i];
           for(j=i;j<n;j++)
           {
               if(a[j]<min)
                min=a[j];
           }
           temp=min;
           min=a[i];
           a[i]=temp;
     }
     for(i=0;i<n;i++)
        printf("%d",a[i]);
        return 0;
}
