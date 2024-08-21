#include<stdio.h>
int main()
{
    int n,i,x=1;
    char a[100],b[100];
    while(x==1)
    {
        printf("enter 1 to add and 2 to del:");
        scanf("%d",&n);
        switch(n)
        {
            case 1:
                printf("enter string_1:");
                scanf("%s",a);
                        printf("enter sub_string:");
                         scanf("%s",b);
                       int p;
                      printf("enter the position to add substring:");
                        scanf("%d",&p);
                       int l1=len(a);
                       int l2=len(b);
                       insert(a,b,l1,l2,p);
                       break;
            case 2:
                 printf("enter string_1:");
                scanf("%s",a);
                        printf("enter sub_string to be deleted:");
                         scanf("%s",b);
                         l1=len(a);
                         l2=len(b);
                       del(a,b,l1,l2);
                       break;
        }
    }

    return 0;
}

int len(char a[])
{
    int l1=0,i;
     for(i=0;a[i]!='\0';i++)
        l1=l1+1;
        return l1;
}

void insert(char a[], char b[], int l1, int l2, int p)
{
    int i, j;

    // Shift elements to make space for the inserted substring
    for (i = l1 + l2 - 1, j = l1 - 1; j >= p; i--, j--)
    {
        a[i] = a[j];
    }

    // Insert the substring
    for (i = p, j = 0; j < l2; i++, j++)
    {
        a[i] = b[j];
    }

    a[l1 + l2] = '\0'; // Terminate the modified string

    printf("%s\n", a); // Print the modified string
}

void del(char a[], char b[], int l1, int l2)
{
    int i, j, k;

    for (i = 0; i <= l1 - l2; i++)
    {
        for (j = 0; j < l2; j++)
        {
            if (a[i + j] != b[j])
                break;
        }

        if (j == l2) // If the substring is found
        {
            for (k = i; k < l1 - l2; k++)
            {
                a[k] = a[k + l2];
            }
            a[k] = '\0'; // Terminate the modified string
            break;       // Exit the loop after deleting the first occurrence
        }
    }

    printf("%s\n", a); // Print the modified string
}




