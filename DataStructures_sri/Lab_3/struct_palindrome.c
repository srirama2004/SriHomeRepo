#include <stdio.h>
#include <string.h>
#define MAX 30

struct stack {
    char c[MAX];
    int top;
} s;

void read(int l, char str[]);
char pop();
void check(char str[], int l);

int main() {
    s.top = -1;
    char str[MAX];
    int l;
    fflush(stdin);
    printf("Enter the string: ");
    scanf("%s", str);
    l = strlen(str);
    read(l, str);
    check(str, l);
    return 0;
}

void read(int l, char str[]) {
    if (s.top == MAX - 1) {
        printf("Stack overflow\n");
    } else {
        for (int i = 0; i < l; i++) {
            s.top++;
            s.c[s.top] = str[i];
        }
    }
}

char pop() {
    char b;
    if (s.top == -1) {
        printf("Stack underflow\n");
        return '\0'; // Return a default value
    } else {
        b = s.c[s.top--];
        return b;
    }
}

void check(char str[], int l) {
    int d = 0;
    for (int i = 0; i < l; i++) {
        if (pop() == str[i]) {
            d = d + 1;
        }
    }
    if (d == l) {
        printf("Palindrome!\n");
    } else {
        printf("Not a palindrome.\n");
    }
}
