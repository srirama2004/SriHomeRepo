#include<stdio.h>
#include<ctype.h>
int main()
{

int a[100],i,n,x,low=0,high,mid,b;
    printf("enter the size of the array:");
    scanf("%d",&n);
    high=n-1;
     printf("enter the array elements is sorted order:");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
      printf("enter the element to search:");
    scanf("%d",&x);
   while(low<=high&&low>-1)
   {
        mid=((low+high)/2);
       if(a[mid]==x)
       {
        b=1;
         break;
       }
       else if(x>a[mid])
        low=mid+1;
        else if(x<a[mid])
        high=mid-1;

   }
   if(b==1)
        printf("the element is found in:%d\t",mid+1);
        else
            printf("not found");
    return 0;
}
