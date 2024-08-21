#include<stdio.h>
#include<unistd.h>
#include<sys/socket.h>
#include<sys/types.h>
#include<netinet/in.h>
#include<sys/stat.h>
#include<fcntl.h>
#include<string.h>
#define MAXSIZE 500

main()
{
int sockfd,retval;
int recedbytes,sentbytes;
struct sockaddr_in serveraddr;
char buff[MAXSIZE];
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
int data[7]={0},rec[7]={0},i,c1,c2,c3,c;
    	printf("this works for message of 4bits in size \nenter message bit one by one:  ");
    	scanf("%d%d%d%d",&data[0],&data[1],&data[2],&data[4]);
sentbytes=send(sockfd,data,sizeof(data),0);

printf("\nenter the received data bits one by one: ");
    	for (i=0;i<7;i++) {
    	scanf("%d",&rec[i]);
    	}
sentbytes=send(sockfd,rec,sizeof(rec),0);

if(sentbytes==-1)
{
printf("!!");
close(sockfd);
}
recedbytes=recv(sockfd,buff,sizeof(buff),0);
puts(buff);
printf("\n");
close(sockfd);
}
