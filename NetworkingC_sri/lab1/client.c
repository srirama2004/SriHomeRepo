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
int n[4]; char c[20];
int even[10];
char q[4];
int odd[10];
int ch[1];
int ans[1];
int i=0;
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
while(1){
printf("enter the array\n");
for(i=0;i<4;i++){
scanf("%d",&n[i]);
}
sentbytes=send(sockfd,n,sizeof(n),0);
if(sentbytes==-1)
{
printf("!!");
close(sockfd);
}
recedbytes=recv(sockfd,c,sizeof(c),0);
fflush(stdout);
printf("%s",c);
scanf("%d",&ch[0]);
sentbytes=send(sockfd,ch,sizeof(ch),0);
if(ch[0]==1){
   recedbytes=recv(sockfd,n,sizeof(n),0);
   for(i=0;i<4;i++)
printf("%d",n[i]);
printf("\n");
}
if(ch[0]==0){
recedbytes=recv(sockfd,even,sizeof(even),0);
recedbytes=recv(sockfd,odd,sizeof(odd),0);
printf("even:");
for( i=0;i<4;i++)
printf("%d",even[i]);
printf("odd:");
for(i=0;i<4;i++)
printf("%d",odd[i]);
printf("\n");
}
if(ch[0]>1){
        for(int j=0;j<100;j++);
recedbytes=recv(sockfd,ans,sizeof(ans),0);
if(ans[0]==1){
    printf("found");
}
else if(ans[0]==0){
    printf("not found");
}
}
fflush(stdout);
fflush(stdin);
printf("enter random char to continue and enter exit to exit::");
fflush(stdin);
scanf("%s",q);
sentbytes=send(sockfd,q,sizeof(q),0);
if (strncmp(q, "exit",4) == 0) {
    break;
}
}
close(sockfd);
}
