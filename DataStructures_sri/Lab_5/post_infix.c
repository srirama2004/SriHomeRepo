#include<stdio.h>
#include<string.h>
#define MAX 30
struct stack{
char a[MAX][MAX];
int top;
}s;
void push(char sym[]);
void posttoinfix();
 char *pop();
void posttoinfix()
{
    char pfix[MAX],sym[2],res[MAX],op1[10],op2[10];
    int i;
    printf("enter the postfix form:");
    gets(pfix);
    for(i=0;pfix[i]!='\0';i++)
    {
        sym[0]=pfix[i];
        sym[1]='\0';
        if(sym[0]=='+'||sym[0]=='-'||sym[0]=='*'||sym[0]=='/')
        {
            strcpy(op2,pop());
            strcpy(op1,pop());
            strcpy(res,"(");
            strcat(res,op1);
            strcat(res,sym);
            strcat(res,op2);
            strcat(res,")");
            push(res);

        }
        else{
            push(sym);
        }

    }
    printf("the original equation is:%s",res);

}
void push(char sym[])
{

    if(s.top==MAX-1)
        printf("stack overflow");
    else{
      s.top++;
      strcpy(s.a[s.top],sym);
    }
}
 char *pop()
{
    if(s.top==-1)
        printf("underflow");
    else{
        char str[MAX];
        return  s.a[s.top--];
    }
}
int main()
{
    s.top=-1;
     posttoinfix();
     return 0;
}
