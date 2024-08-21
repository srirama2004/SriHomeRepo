#include<stdio.h>
struct student{
char a[100];
int roll;
char g;
};
int main()
{
    int n;
   struct student s[10];
    printf("enter the number of students:");
    scanf("%d",&n);
    read(s,n);
    sort(s,n);
    dis(s,n);
        return 0;
}
void read(struct student s[],int n)
{
    int i,j;
    for(i=0;i<n;i++)
    {
        printf("enter details of student%d:",i+1);
        printf("enter name of:");
        scanf("%s",&s[i].a);
        fflush(stdin);
        printf("enter roll of%:");
        scanf("%d",&s[i].roll);
        fflush(stdin);
        printf("enter grade of:");
        scanf("%c",&s[i].g);
        fflush(stdin);
    }
}
void sort(struct student s[],int n)
{
     struct student t;
    int i,j;
      for(i=0;i<n;i++)
    {
        for(j=0;j<n-i-1;j++)
        {
            if(s[j].roll>s[j+1].roll)
            {
             t = s[j];
             s[j]=s[j+1];
             s[j+1]=t;
            }
        }
}
}
void dis(struct student s[],int n)
{
    int i;
        for(i=0;i<n;i++)
        printf("%s %d %c\n",s[i].a,s[i].roll,s[i].g);
}
