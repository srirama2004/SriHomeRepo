#include<stdio.h>
struct time{
 int h,min,sec;
 };
 struct time read();
 struct time add(struct time t1,struct time t2);
 void dis(struct time t3,struct time t4);
 struct time diff(struct time t1,struct time t2);
int main()
{
struct time t,t1,t2,t3,t4;
 printf("enter time t1:");
 t1=read();
 printf("enter time t2:");
 t2=read();
 t3=add(t1,t2);
 t4=diff(t1,t2);
 dis(t3,t4);
  return 0;
}
 struct time read()
{
    struct time t;
    scanf("%d %d %d",&t.h,&t.min,&t.sec);
    return t;
}
struct time add(struct time t1,struct time t2)
{
    struct time t3;
    int tsec=(t1.h*3600)+(t1.min*60)+(t1.sec)+(t2.h*3600)+(t2.min*60)+(t2.sec);
    t3.h=(tsec/3600);
     tsec= tsec%3600;
    t3.min=(tsec/60);
    t3.sec=tsec%60;
    return t3 ;
}
struct time diff(struct time t1,struct time t2)
{
    struct time t4;
      int tsec=((t1.h*3600)+(t1.min*60)+(t1.sec))-((t2.h*3600)+(t2.min*60)+(t2.sec));
    t4.h=(tsec/3600);
     tsec= tsec%3600;
    t4.min=(tsec/60);
    t4.sec=tsec%60;
    return t4 ;
}

void dis(struct time t3,struct time t4)
{
    printf("the time after addition is:");
    printf("%d %d %d\n",t3.h,t3.min,t3.sec);
    printf("the time difference is:");
    printf("%d %d %d",t4.h,t4.min,t4.sec);
    return;
}
