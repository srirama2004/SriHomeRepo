#include<stdio.h>
#include<unistd.h>
#include<sys/socket.h>
#include<sys/types.h>
#include<netinet/in.h>
#include<sys/stat.h>
#include<fcntl.h>
#include<string.h>
#define MAXSIZE 50
main()
{
    int sockfd,retval;
    int recedbytes,sentbytes;
    struct sockaddr_in serveraddr;
    char buff[MAXSIZE];
    int i=0;
    char si[20];
    int c=1;
    sockfd=socket(AF_INET,SOCK_STREAM,0);
    if(sockfd==-1)
    {
        printf("\nSocket Creation Error");

    }
    serveraddr.sin_family=AF_INET;
    serveraddr.sin_port=htons(7561);
    serveraddr.sin_addr.s_addr=inet_addr("127.0.0.1");
    retval=connect(sockfd,(struct sockaddr*)&serveraddr,sizeof(serveraddr));
    if(retval==-1)
    {
        printf("Connection error");
    }
    c=fork();
    if(c==0)
    {while(1){
        recedbytes=recv(sockfd,buff,sizeof(buff),0);
        printf("%d %d",getpid(),getppid());
        puts(buff);
    }
    }
    else
    {
    while(1){
     printf("%d %d",getpid(),getppid());
        printf("enter the text\n");
        scanf("%s",buff);
        printf("\n");
        puts(buff);
        sentbytes=send(sockfd,buff,sizeof(buff),0);
        if(strcmp(buff,"stop")==0){
            break;
        }
        if(sentbytes==-1)
        {
            printf("!!");
            close(sockfd);
        }
        }
    }

    close(sockfd);
}
