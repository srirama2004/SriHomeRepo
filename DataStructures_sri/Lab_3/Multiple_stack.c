#include <stdio.h>
#define MAX 30
struct mulstck{
int top[MAX],b[MAX];
int a[MAX];
}s;
int main()
{
    int n,m,f;
    printf("enter how many stacks u want!:");
    scanf("%d",&m);
    create_stack(m);
    printf("enter which stack u want to perform any operation:");
    scanf("%d",&n);   //stack number
    while(1)
    {
         printf("enter number  to perform any operation:");
           scanf("%d",&f);
           if(f==4)
            exit(0);
           else{
            switch(f)
            {
                case 1:push(n);
                             break;
                case 2:pop(n);
                             break;
                case 3:dis(n,m);
                    break;
            }
           }
    }

    return 0;
    }
  void create_stack(int m)
    {
        for(int i=0;i<m;i++)
        {
            s.top[i]=MAX/m*i-1;
            s.b[i]=MAX/m*i-1;
            }          //initialize top and border values
    }
    void push(int n)
    {
        int ele;
        if(s.top[n]==s.b[n+1])
            printf("stck overflow!");
        else{
                printf("enter the element:");
        scanf("%d",&ele);
            s.a[++s.top[n]]=ele;
        }
    }
    void pop(int n)
    {
        if(s.top[n]==s.b[n])
            printf("stack underflow!");
        else{
            printf("the element deleted is :%d",s.a[s.top[n]--]);
        }
    }
    void dis(int n,int m)
    {
        for(int i=s.b[n-1];i<=s.top[n];i++)
            printf("%d",s.a[i]);
    }
