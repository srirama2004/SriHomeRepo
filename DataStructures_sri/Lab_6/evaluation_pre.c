#include<stdio.h>
#include<string.h>
#define MAX 30
struct stack{
int a[MAX];
int top;
}s;
void push(char pfix);
int pop();
void evaluation();
int operation(int op1,int op2,char pfix);
void evaluation()
{
    char pfix[MAX],sym[2];
    int res,i;
    int op1,op2;
    printf("enter the postfix form:");
    gets(pfix);
    int l=strlen(pfix);
    for(i=l-1;i>-1;i--)
    {
        if(pfix[i]=='+'||pfix[i]=='-'||pfix[i]=='*'||pfix[i]=='/')
        {
            op1=pop();
            op2=pop();
            res=operation(op1,op2,pfix[i]);
            push(res+'0');
         }
        else
        {
            push(pfix[i]);
        }
    }
    if(s.top==0)
        printf("\n%d",res);
}
    void push(char pfix)
    {
        if(s.top==MAX-1)
            printf("stack overflow!");
        else{
            s.top++;
            int x =pfix-'0';
            s.a[s.top]=x;
        }
    }
int pop()
    {
        if(s.top==-1)
            printf("stack underflow");
        else{
             return s.a[s.top--];
        }
    }
int operation(int op1,int op2,char pfix)
{
        switch(pfix)
        {
            case '+':return op1+op2;
            case '-':return op1-op2;
            case '*':return op1*op2;
            case '/':return op1/op2;
        }
}
    int main()
    {
        s.top=-1;
        evaluation();
        return 0;
    }

