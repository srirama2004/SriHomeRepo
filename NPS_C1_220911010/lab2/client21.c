#include<stdio.h>
#include<unistd.h>
#include<sys/socket.h>
#include<sys/types.h>
#include<netinet/in.h>
#include<sys/stat.h>
#include<fcntl.h>
#include<string.h>
#include<stdlib.h>
#define MAXSIZE 50
main()
{   char e[2];
	char buff[MAXSIZE];
	int sockfd,retval,i;
	char st[20];
	char ch[100];
	char choice[30];
	char rp[20];
	char rp1[20];
	int recedbytes,sentbytes;
	struct sockaddr_in serveraddr;
	sockfd=socket(AF_INET,SOCK_STREAM,0);
	if(sockfd==-1)
	{
		printf("\nSocket Creation Error");
		return;
	}
	serveraddr.sin_family=AF_INET;
	serveraddr.sin_port=htons(3388);
	serveraddr.sin_addr.s_addr=inet_addr("127.0.0.1");
	retval=connect(sockfd,(struct sockaddr*)&serveraddr,sizeof(serveraddr));
	if(retval==-1)
	{
		printf("Connection error");
		return;
	}
		memset(buff, '\0', sizeof(buff));
		while(1){
		printf("enter the file name with type !!!:\n");
		scanf("%s",buff);
		buff[strlen(buff)] = '\0';
		int s = strlen(buff) * sizeof(char);
		sentbytes=send(sockfd,buff,s,0);
		if(sentbytes==-1)
		{
			printf("!!");
			close(sockfd);
		}
		recedbytes=recv(sockfd,choice,sizeof(choice),0);
		printf("%s",choice);
		scanf("%s",e);
		sentbytes=send(sockfd,e,sizeof(e),0);
		char chi[20];
	    char se[20];
	    if(e[0]=='1'){
		recedbytes=recv(sockfd,chi,sizeof(chi),0);
		printf("%s",chi);
		scanf("%s",se);
		sentbytes=send(sockfd,se,sizeof(se),0);
	    }
	    else if(e[0]=='0'){
            printf("enter  rp!!!:\n");
		scanf("%s",rp);
		printf("enter rp1 !!!:\n");
		scanf("%s",rp1);
        sentbytes=send(sockfd,rp,sizeof(rp),0);
        sentbytes=send(sockfd,rp1,sizeof(rp1),0);

	    }
	    else if(e[0]=='2'){
               recedbytes=recv(sockfd,ch,sizeof(ch),0);
		for(int k=0;k<strlen(ch);k++)
		printf ("%c",ch[k]);
	    }
	    else if(e[0]=='3'){
            break;
	    }
}

	close(sockfd);
}
