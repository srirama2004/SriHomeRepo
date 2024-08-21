#include<stdio.h>
#define MAX 30
struct stack{
int a[MAX];
int top;
}s;
int main()
{
    s.top=-1;
    int c[MAX],i,ba;
    int n,x=0,rem=0;
    scanf("%d",&ba);
    printf("enter the decimal number :");
    scanf("%d",&n);
while(n>1)
{
    rem=n%ba;
    push(rem);
    n=n/ba;
     x=x+1;
}
bin(x,n);
return 0;
}
void push(int rem)
{
    if(s.top==MAX-1)
        printf("stack overflow!");
    else
    {
        s.top++;
        s.a[s.top]=rem;
    }
}
int pop()
{
    int b;
    if(s.top==-1)
        printf("stack underflow!");
    else
         b=s.a[s.top--];
    return b;
}

int bin(int x,int n)
{
    int c[MAX],i;
    for(int i=x-1;i>=0;i--)
    {
        c[i]=pop();
    }
c[x]=n;
for(i=x;i>=0;i--)
{
      if(c[i]==10)
        printf("A");
      else if(c[i]==11)
        printf("B");
        else if(c[i]==12)
        printf("c");
        else if(c[i]==13)
        printf("D");
        else if(c[i]==14)
        printf("E");
        else if(c[i]==15)
        printf("F");
        else
        printf("%d",c[i]);

}
}

