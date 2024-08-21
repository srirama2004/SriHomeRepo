#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#define PORT 8080
#define MAX_BUFFER_SIZE 1024
struct Student {
    char registration_number[20];
    char name[50];
    char address[100];
    char enrollment_details[200];
};
struct Subject {
    char subject_code[10];
    int marks;
};
void handle_registration_number(int client_socket, struct Student* student_db, int num_students);
void handle_student_name(int client_socket, struct Student* student_db, int num_students);
void handle_subject_code(int client_socket, struct Subject* subject_db, int num_subjects);
int main() {
    int server_socket, client_socket;
    struct sockaddr_in server_addr, client_addr;
    socklen_t addr_len = sizeof(client_addr);
    if ((server_socket = socket(AF_INET, SOCK_STREAM, 0)) == -1) {
        perror("Socket creation failed");
        exit(EXIT_FAILURE);
    }
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);
    struct Student student_db[] = {
        {"1001", "srirama", "udupi, Karnataka", "Dept: Computer Science\nSemester: 3\nSection: A\nCourses: CS101, CS102"},
        {"1002", "jessica", "manipal,karnataka", "Dept: Information Technology\nSemester: 3\nSection: A\nCourses: IT101, IT102"},
        {"1003", "roshan", "udupi, Karnataka", "Dept: Mechanical Engineering\nSemester: 3\nSection: A\nCourses: MC101, MC102"},
        {"1004", "akash", "Jammu", "Dept: Chemical Engineering\nSemester: 3\nSection: A\nCourses: CH101, CH102"},
    };
    int num_students = sizeof(student_db) / sizeof(student_db[0]);
    struct Subject subject_db[] = {
        {"CS101", 85},
        {"CS102", 65},
        {"IT101", 83},
        {"IT102", 86},
        {"MC101", 72},
        {"MC102", 92},
        {"CH101", 63},
        {"CH102", 89},
    };
    int num_subjects = sizeof(subject_db) / sizeof(subject_db[0]);
    if (bind(server_socket, (struct sockaddr *)&server_addr, sizeof(server_addr)) == -1) {
        perror("Socket bind failed");
        exit(EXIT_FAILURE);
    }
    if (listen(server_socket, 5) == -1) {
        perror("Socket listen failed");
        exit(EXIT_FAILURE);
    }

    printf("Server listening on port %d...\n", PORT);
    while (1) {
        if ((client_socket = accept(server_socket, (struct sockaddr *)&client_addr, &addr_len)) == -1) {
            perror("Accept failed");
            exit(EXIT_FAILURE);
        }
        if (fork() == 0) {
            close(server_socket);

            int option;
            read(client_socket, &option, sizeof(option));

            switch (option) {
                case 1:
                    handle_registration_number(client_socket, student_db, num_students);
                    break;
                case 2:
                    handle_student_name(client_socket, student_db, num_students);
                    break;
                case 3:
                    handle_subject_code(client_socket, subject_db, num_subjects);
                    break;
                default:
                    printf("Invalid option\n");
            }
            close(client_socket);
            exit(EXIT_SUCCESS);
        } else {
            close(client_socket);
        }
    }
    close(server_socket);

    return 0;
}
void handle_registration_number(int client_socket, struct Student* student_db, int num_students) {
    char reg_number[20];
    read(client_socket, reg_number, sizeof(reg_number));
    for (int i = 0; i < num_students; i++) {
        if (strcmp(reg_number, student_db[i].registration_number) == 0) {
            char details[MAX_BUFFER_SIZE];
            int pid = getpid();
            snprintf(details, sizeof(details), "Name: %s\nAddress: %s\nPID: %d",
                     student_db[i].name, student_db[i].address, pid);
            write(client_socket, details, strlen(details));
            return;
        }
    }
    write(client_socket, "Registration number not found", strlen("Registration number not found"));
}
void handle_student_name(int client_socket, struct Student* student_db, int num_students) {
    char student_name[50];
    read(client_socket, student_name, sizeof(student_name));
    for (int i = 0; i < num_students; i++) {
        if (strcmp(student_name, student_db[i].name) == 0) {
            char details[MAX_BUFFER_SIZE];
            int pid = getpid();
            snprintf(details, sizeof(details), "Registration Number: %s\nAddress: %s\nEnrollment Details: %s\nPID: %d",
                     student_db[i].registration_number, student_db[i].address, student_db[i].enrollment_details, pid);
            write(client_socket, details, strlen(details));
            return;
        }
    }
    write(client_socket, "Student name not found", strlen("Student name not found"));
}
void handle_subject_code(int client_socket, struct Subject* subject_db, int num_subjects) {
    char subject_code[10];
    read(client_socket, subject_code, sizeof(subject_code));
    for (int i = 0; i < num_subjects; i++) {
        if (strcmp(subject_code, subject_db[i].subject_code) == 0) {
            char details[MAX_BUFFER_SIZE];
            int pid = getpid();
            snprintf(details, sizeof(details), "Marks Obtained: %d\nPID: %d", subject_db[i].marks, pid);
            write(client_socket, details, strlen(details));
            return;
        }
    }
    write(client_socket, "Subject code not found", strlen("Subject code not found"));
}
