#include<stdio.h>
#define MAX 5
struct queue{
int r;
int f;
int a[MAX];
}q;
int main()
{
    q.r=0;
    q.f=0;
    int f;
    while(1)
    {
       printf("enter the operation:");
    scanf("%d",&f);
    if(f==4)
        exit(0);
    else{
    switch(f)
    {
      case 1:enqueue();
             break;
      case 2:dequeue();
             break;
      case 3:dis();
             break;
    }
}
    }
return 0;
}



void enqueue()
{
    int ele;
    if((q.r+1)%MAX==q.f)
        printf("overflow!");
    else{
    printf("enter the element:");
    scanf("%d",&ele);
     q.r=(q.r+1)%MAX;
    q.a[q.r]=ele;

    }
}
void dequeue()
{
    if(q.r==q.f)
        printf("underflow!");
    else{
        q.f=(q.f+1)%MAX;
        printf("the deleted element is:%d",q.a[q.f]);
    }
}

void dis()
{
    for(int i=(q.f+1)%MAX;i!=q.r+1;i=(i+1)%MAX)
        printf("%d",q.a[i]);
}
