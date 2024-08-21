#include<stdio.h>
struct spm{
int r,c,v;     //structure array containing row,col,value
}a[10];
void read(){
int m,n,k=0,elem,i,j;
printf("enter the size of matrix:");
scanf("%d%d",&m,&n);
printf("enter the matrix elements:");
for(i=0;i<m;i++)
{
    for(j=0;j<n;j++)
    {
        scanf("%d",&elem);
   if(elem==0)
    continue;
   else{
        k++;
    a[k].r=i;
    a[k].c=j;
     a[k].v=elem;
   }
    }
}
a[0].r=m;
a[0].c=n;
a[0].v=k;
}
int main(){
read();
return 0;
}
