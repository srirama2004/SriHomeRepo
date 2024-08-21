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
	int sockfd,newsockfd,retval,i;
	socklen_t actuallen;
	int recedbytes,sentbytes;
	struct sockaddr_in serveraddr,clientaddr;
	char buff[MAXSIZE];
     char data[28];
char check_value[28];
char gen_poly[10];
int data_length,j;
char str[20];
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

		memset(buff, '\0', sizeof(data));
		recedbytes=recv(newsockfd,data,sizeof(data),0);
		if(recedbytes==-1)
		{
			close(sockfd);
			close(newsockfd);
		}
		printf("%s \n",data);
		strcpy(str,"recieved");
		memset(buff, '\0', sizeof(buff));
		buff[strlen(buff)] = '\0';
		int s = strlen(str) * sizeof(char);
		sentbytes=send(newsockfd,str,s,0);
		if(sentbytes==-1)
		{
		    printf("not sent");
			close(sockfd);
			close(newsockfd);
		}
		printf("sent");
	close(sockfd);
	close(newsockfd);
}

