#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<unistd.h>
#include<sys/socket.h>
#include<sys/types.h>
#include<netinet/in.h>
#define MAXSIZE 90
struct{
    char domain[20];
    char ip[20];
}dns;

int searchString(FILE *fo, char string[]){
    int check = 0;
    while( ( fscanf(fo," %s %s",dns.domain,dns.ip)) == 2) {
        if(strcasecmp(dns.domain,string)==0){
             return check = 1;
        }
    }
    if(check != 1) {
        check = 0;
    }
    return check;
}
main()
{
int sockfd,newsockfd,retval;
socklen_t actuallen;
int recedbytes,sentbytes;
struct sockaddr_in serveraddr,clientaddr;
char buff[MAXSIZE];
int a=0;
sockfd=socket(AF_INET,SOCK_STREAM,0);

if(sockfd==-1)
{
printf("\nSocket creation error");
}

serveraddr.sin_family=AF_INET;
serveraddr.sin_port=htons(3388);
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
recedbytes=recv(newsockfd,buff,sizeof(buff),0);
 char *db = "file52.txt";
    FILE *fo;
    if ( ( fo = fopen(db, "r")) == NULL) {
        printf ( "%s does not exist\nCreate it and try again\n", db);
        return 1;
    }
    int j = searchString(fo, buff);
    if(j!=0){
    sentbytes=send(newsockfd,dns.ip,sizeof(dns.ip),0);
    }
    fclose(fo);
if(recedbytes==-1)
{
close(sockfd);
close(newsockfd);
}
puts(buff);
if(sentbytes==-1)
{
close(sockfd);
close(newsockfd);
}
close(sockfd);
close(newsockfd);
}
