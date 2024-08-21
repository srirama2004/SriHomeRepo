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
int c=0;
char si[20];
sockfd=socket(AF_INET,SOCK_STREAM,0);
if(sockfd==-1)
{
printf("\nSocket Creation Error");

}
printf("%i",sockfd);
serveraddr.sin_family=AF_INET;
serveraddr.sin_port=htons(3388);
serveraddr.sin_addr.s_addr=inet_addr("127.0.0.1");
retval=connect(sockfd,(struct sockaddr*)&serveraddr,sizeof(serveraddr));
if(retval==-1)
{
printf("Connection error");

}
printf("enter the text\n");
scanf("%s",buff);
for(i=0;i<strlen(buff);i++){
if(buff[i]=='1')
c++;
else
continue;
}
if(c%2==0){
buff[i++]='0';
}
else{
buff[i++]='1';
}
printf("after adding parity bit at end");
printf("\n");
puts(buff);
sentbytes=send(sockfd,buff,sizeof(buff),0);
if(sentbytes==-1)
{
printf("!!");
close(sockfd);
}
recedbytes=recv(sockfd,si,sizeof(si),0);
recedbytes=recv(sockfd,buff,sizeof(buff),0);
puts(si);
printf("\n");
printf("after correcting");
puts(buff);
close(sockfd);
}
