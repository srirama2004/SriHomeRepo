#include<stdio.h>
#define MAX 30
struct stack{
char a[MAX];
int top;
}s;
void push(char str);
char pop();
int prec(char c);
int isempty();
char infixtopost(char str[]);

int main()
{
    s.top=-1;
    char str[100];
    int i;
    printf("enter a valid expression:");
    gets(str);
    infixtopost(str);
    return 0;
}
char infixtopost(char str[])
{
    int i=0,j=0;
    char res[MAX];
    for(i=0;str[i]!='\0';i++)
    {
        if(str[i]>='a' && str[i]<='z')
            res[j++]=str[i];
        else if(str[i]=='(')
            push(str[i]);
            else if(str[i]==')')
            {
                while(!isempty() && s.a[s.top]!='(')
                {
                    res[j++]= pop();
                }
                if(!isempty())
                    pop();
            }
            else {
                while(!isempty() && prec(s.a[s.top])>=prec(str[i])){
                    res[j++]=s.a[s.top];
                }
                push(str[i]);
            }
    }
    while(!isempty())
    {
        res[j++]=pop();
    }
    res[j]='\0';
    printf("%s",res);
}

void push(char str)
{
    int i;
    if(s.top==MAX-1)
        printf("stack overflow!");
    else{
        s.top++;
        s.a[s.top]=str;
    }
}
char pop()
{
    if(s.top==-1)
        printf("stack underflow!");
    else
    {
        char val = s.a[s.top];
        s.top--;
        return val;
    }
}
int prec(char c)
{
    switch(c)
    {
        case '/':
        case '*': return 2;
        case '-':
        case '+' :return 1;
        default : return -1;

    }
}
int isempty()
{
    if(s.top==-1)
        return 1;
    else
        return 0;
}
