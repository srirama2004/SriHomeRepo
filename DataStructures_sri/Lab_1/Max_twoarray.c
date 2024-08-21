#include<stdio.h>
#include<ctype.h>
int main()
{

int a[100][100],b[100][100],c[100][100],i,n,j,m;
    printf("enter the row size of the array:");
    scanf("%d",&n);
    printf("enter the column size of the array:");
    scanf("%d",&m);
     printf("enter the array elements is:");
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        scanf("%d",&a[i][j]);
    }
     printf("enter the  row size of the array2:");
    scanf("%d",&n);
    printf("enter the column size of the array2:");
    scanf("%d",&m);
     printf("enter the array2 elements:");
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        scanf("%d",&b[i][j]);
    }
     for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            if(a[i][j]>b[i][j])
                c[i][j]=a[i][j];
                else
                     c[i][j]=b[i][j];
        }
    }
     for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        printf("%d\t",c[i][j]);
    }
    return 0;
}
