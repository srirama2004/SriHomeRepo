#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<unistd.h>
#include<sys/socket.h>
#include<sys/types.h>
#include<netinet/in.h>
#define MAXSIZE 90

main()
{
    int sockfd,newsockfd,retval;
    socklen_t actuallen;
    int recedbytes,sentbytes;
    struct sockaddr_in serveraddr,clientaddr;
    char buff[MAXSIZE];
    int i=0;
    sockfd=socket(AF_INET,SOCK_STREAM,0);
    int c=1;
    if(sockfd==-1)
    {
        printf("\nSocket creation error");
    }
    serveraddr.sin_family=AF_INET;
    serveraddr.sin_port=htons(7561);
    serveraddr.sin_addr.s_addr=htons(INADDR_ANY);
    retval=bind(sockfd,(struct sockaddr*)&serveraddr,sizeof(serveraddr));
    if(retval==1)
    {
        printf("Binding error");
        close(sockfd);
    }
    retval=listen(sockfd,1);
    if(retval==-1)
    {
        close(sockfd);
    }
    actuallen=sizeof(clientaddr);
    newsockfd=accept(sockfd,(struct sockaddr*)&clientaddr,&actuallen);
    if(newsockfd==-1)
    {
        close(sockfd);
    }
c=fork();
    //printf("%d",c);
    if(c==0)
    {
    while(1){
        printf("enter the text\n");
        scanf("%s",buff);
        printf("%d %d",getpid(),getppid());
        sentbytes= send(newsockfd,buff,sizeof(buff),0);
        if(sentbytes==-1)
        {
            close(sockfd);
            close(newsockfd);
        }
        }
    }

   else
    {
    while(1){
        recedbytes=recv(newsockfd,buff,sizeof(buff),0);
        if(recedbytes==-1)
        {
            close(sockfd);
            close(newsockfd);
        }
        if(strcmp(buff,"stop")==0){
            break;
        }
        printf("%d %d",getpid(),getppid());
        puts(buff);
    }
    }
    close(sockfd);
}
