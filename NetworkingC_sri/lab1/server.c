#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<unistd.h>
#include<sys/socket.h>
#include<sys/types.h>
#include<netinet/in.h>
#include<arpa/inet.h>
#define MAXSIZE 90
main()
{
int sockfd,newsockfd,retval;
socklen_t actuallen;
int recedbytes,sentbytes;
struct sockaddr_in serveraddr,clientaddr;
int even[10],i,j=0;
int odd[10];
int ans[1];
char q[4];
int n[4]; char c[20];
int ch[1];
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
while(1){
recedbytes=recv(newsockfd,n,sizeof(n),0);
printf("/n recieved");
for(i=0;i<4;i++)
printf("%d ",n[i]);
if(recedbytes==-1)
{
close(sockfd);
close(newsockfd);
}
strcpy(c,"enter choice::");
sentbytes=send(newsockfd,c,sizeof(c),0);
recedbytes=recv(newsockfd,ch,sizeof(ch),0);
if(ch[0]==1){
for( i=0;i<3;i++){
for( j=0;j<3;j++){
if(n[j]>n[j+1]){
 int temp=n[j];
n[j]=n[j+1];
n[j+1]=temp;
}
}
}
printf("\n");
sentbytes=send(newsockfd,n,sizeof(n),0);
}
else if(ch[0]==0){
    int k=0,j=0;
    for(i=0;i<4;i++){
        if(n[i]%2==0)
            even[j++]=n[i];
        else
            odd[k++]=n[i];
    }
while(j!=4){
    even[j++]=0;
}
while(k!=4){
    odd[k++]=0;
}
    for(int i=0;i<4;i++)
printf("%d",even[i]);
printf("\n odd:");
for(int i=0;i<4;i++)
printf("%d",odd[i]);
printf("\n");
    sentbytes=send(newsockfd,even,sizeof(even),0);
    sentbytes=send(newsockfd,odd,sizeof(odd),0);
}
else if(ch[0]>1){
        ans[0]=0;
   for(i=0;i<4;i++){
if(n[i]==ch[0]){
         ans[0]=1;
        printf("found");
    break;
}
else{
     ans[0]=0;
}
}
 sentbytes=send(newsockfd,ans,sizeof(ans),0);
}
 fflush(stdout);
fflush(stdin);
recedbytes=recv(newsockfd,q,sizeof(q),0);
if (strncmp(q, "exit",4) == 0) {
    break;
}
    fflush(stdout);
    fflush(stdin);
}
close(sockfd);
close(newsockfd);
}
