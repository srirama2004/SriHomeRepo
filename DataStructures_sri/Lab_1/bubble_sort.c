#include<stdio.h>
#include<ctype.h>
int main()
{

int a[100],i,n,j,temp;
    printf("enter the size of the array:");
    scanf("%d",&n);
     printf("eneter the array elements is:");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
     for(i=0;i<n;i++)
     {
          for(j=0;j<n-1;j++)
          {
              if(a[j+1]<a[j])
              {
                 temp=a[j];
                 a[j]=a[j+1];
                 a[j+1]=temp;
              }
          }
     }
       for(i=0;i<n;i++)
        printf("%d",a[i]);
        return 0;
}

