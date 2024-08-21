#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#define PORT 8080
#define MAX_BUFFER_SIZE 1024
int main() {
    int client_socket;
    struct sockaddr_in server_addr;
    if ((client_socket = socket(AF_INET, SOCK_STREAM, 0)) == -1) {
        perror("Socket creation failed");
        exit(EXIT_FAILURE);
    }
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);
    if (connect(client_socket, (struct sockaddr *)&server_addr, sizeof(server_addr)) == -1) {
        perror("Connection failed");
        exit(EXIT_FAILURE);
    }
    int option;
    printf("Enter option (1: Registration Number, 2: Name of the Student, 3: Subject Code): ");
    scanf("%d", &option);
    write(client_socket, &option, sizeof(option));
    switch (option) {
        case 1: {
            char reg_number[20];
            printf("Enter Registration Number: ");
            scanf("%s", reg_number);
            write(client_socket, reg_number, sizeof(reg_number));
            break;
        }
        case 2: {
            char student_name[50];
            printf("Enter Name of the Student: ");
            scanf(" %[^\n]", student_name);
            write(client_socket, student_name, sizeof(student_name));
            break;
        }
        case 3: {
            char subject_code[10];
            printf("Enter Subject Code: ");
            scanf("%s", subject_code);
            write(client_socket, subject_code, sizeof(subject_code));
            break;
        }
        default:
            printf("Invalid option\n");
            close(client_socket);
            exit(EXIT_FAILURE);
    }
    char details[MAX_BUFFER_SIZE];
    read(client_socket, details, sizeof(details));
    printf("\nDetails received from server:\n%s\n", details);
    close(client_socket);
    return 0;
}
