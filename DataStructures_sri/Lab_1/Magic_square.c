#include<stdio.h>
#include<ctype.h>
int main()
{

int a[100][100],b[100],c[100],i,n,j,h=0,v=0,d=0,x=0,y=0;
    printf("enter the size of the array:");
    scanf("%d",&n);
     printf("enter the array elements is:");
    for(i=0;i<n;i++)
    {
          for(j=0;j<n;j++)
        scanf("%d",&a[i][j]);
    }
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
    {
        h=h+a[i][j];
    }
    printf("row sum%d: %d\t",i+1,h);
    b[i]=h;
    h=0;
    }
     for(j=0;j<n;j++)
    {
        for(i=0;i<n;i++)
    {
        v=v+a[i][j];
    }
    printf("column sum%d: %d\t",j+1,v);
    c[j]=v;
    v=0;
    }
    for(i=0,j=0;i<n,j<n;i++,j++)
        d=d+a[i][j];
    printf("diagonal sum:%d\t",d);
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            if(b[i]==c[j]==d)
                printf("magic square");
        }
    }


    return 0;
    }
