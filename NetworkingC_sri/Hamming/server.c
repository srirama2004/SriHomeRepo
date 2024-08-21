#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h>

#define MAXSIZE 90

int main() {
    int sockfd, newsockfd, retval;
    socklen_t actuallen;
    int recedbytes, sentbytes;
    struct sockaddr_in serveraddr, clientaddr;

    char buff[MAXSIZE];
    int a = 0;
    sockfd = socket(AF_INET, SOCK_STREAM, 0);

    if (sockfd == -1) {
        printf("\nSocket creation error");
    }

    serveraddr.sin_family = AF_INET;
    serveraddr.sin_port = htons(3388);
    serveraddr.sin_addr.s_addr = htons(INADDR_ANY);
    retval = bind(sockfd, (struct sockaddr *)&serveraddr, sizeof(serveraddr));
    if (retval == -1) {
        printf("Binding error");
        close(sockfd);
    }

    retval = listen(sockfd, 1);
    if (retval == -1) {
        close(sockfd);
    }

    actuallen = sizeof(clientaddr);
    newsockfd = accept(sockfd, (struct sockaddr *)&clientaddr, &actuallen);

    if (newsockfd == -1) {
        close(sockfd);
    }

    int data[7] = {0}, rec[7] = {0}, i, c1, c2, c3, c;
    recedbytes = recv(newsockfd, data, sizeof(data), 0);

    for (i = 0; i < 7; i++) {
        printf("%d ", data[i]);
    }
    printf("\n");
    data[6] = data[0] ^ data[2] ^ data[4];
    data[5] = data[0] ^ data[1] ^ data[4];
    data[3] = data[0] ^ data[1] ^ data[2];
    printf("\nthe encoded bits are given below: \n");
    for (i = 0; i < 7; i++) {
        printf("%d ", data[i]);
    }
    fflush(stdout);

    recedbytes = recv(newsockfd, rec, sizeof(rec), 0);
    c1 = rec[6] ^ rec[4] ^ rec[2] ^ rec[0];
    c2 = rec[5] ^ rec[4] ^ rec[1] ^ rec[0];
    c3 = rec[3] ^ rec[2] ^ rec[1] ^ rec[0];
    c = c3 * 4 + c2 * 2 + c1;


    char msg[100] = "there is no error:";
    if (c == 0) {
        printf("\nthere is no error: ");
        sentbytes = send(newsockfd, msg, sizeof(msg), 0);
    } else {
        char position[2];
        position[0] = c  +'0';
        position[1] = '\0';
       // sprintf(position, "%d", c);

        strcpy(msg, "error on the position: ");
        strcat(msg, position);
        strcat(msg, " correct message is \n");

        for (i = 0; i < 7; i++) {
            char bit[2];
            //sprintf(bit, "%d", rec[i]);
            bit[0] =  rec[i]  +'0';
              bit[1] = '\0';;
            strcat(msg, bit);
            strcat(msg, " ");
        }
       // puts(msg);

        sentbytes = send(newsockfd, msg, sizeof(msg), 0);
        printf("\nerror on the position: %d\nthe correct message is \n", c);

        if (rec[7 - c] == 0)
            rec[7 - c] = 1;
        else
            rec[7 - c] = 0;
        for (i = 0; i < 7; i++) {
            printf("%d ", rec[i]);
        }
    }

    if (sentbytes == -1) {
        close(sockfd);
        close(newsockfd);
    }

    close(sockfd);
    close(newsockfd);

    return 0;
}
