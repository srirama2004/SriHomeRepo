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
	int c,j;
	char buff[MAXSIZE];
        char si[20];
        int re[6];
        for(int k=0;k<7;k++){
            re[k]=0;
        }
	int a=0;
	sockfd=socket(AF_INET,SOCK_DGRAM,0);
	if(sockfd==-1)
	{
		printf("\nSocket creation error");
	}
	clientaddr.sin_family=AF_INET;
	clientaddr.sin_port=htons(3389);
	clientaddr.sin_addr.s_addr=htons(INADDR_ANY);


	serveraddr.sin_family=AF_INET;
	serveraddr.sin_port=htons(3388);
	serveraddr.sin_addr.s_addr=htons(INADDR_ANY);

	retval=bind(sockfd,(struct sockaddr*)&serveraddr,sizeof(serveraddr));
	if(retval==1)
	{
		printf("Binding error");
		close(sockfd);
	}
		actuallen=sizeof(clientaddr);
		while(1){
           for(int i=0;i<6;){
            re[i++]=0;
           }
           c=0;
		recedbytes=recvfrom(sockfd,buff,sizeof(buff),0,(struct sockaddr*)&clientaddr,&actuallen);
		if(recedbytes==-1)
		{
			printf("Reciving error\n");
			close(sockfd);
		}
		if(strcmp(buff,"halt")==0){
		break;
		}
                for(i=0,j=strlen(buff)-1;i<j;i++,j--){
                   if(buff[i]==buff[j])
                       c++;
                 else
                    continue;
                  }
                  if(c==strlen(buff)/2){
                     strcpy(si,"palindrome!!!");

                  }
else{
                     strcpy(si,"not  palindrome!!!");
}
                  for(i=0;i<strlen(buff);i++){
                    if(buff[i]=='a')
                        re[0]++;
                    else if(buff[i]=='e')
                        re[1]++;
                         else if(buff[i]=='i')
                        re[2]++;
                         else if(buff[i]=='o')
                        re[3]++;
                         else if(buff[i]=='u')
                        re[4]++;
                  }
                  re[5]=strlen(buff);
		sentbytes=sendto(sockfd,si,sizeof(si),0,(struct sockaddr*)&clientaddr,sizeof(clientaddr));
		sentbytes=sendto(sockfd,re,sizeof(re),0,(struct sockaddr*)&clientaddr,sizeof(clientaddr));
		if(sentbytes==-1)
		{
			printf("sending error");
			close(sockfd);
		}
		}
	close(sockfd);
	close(newsockfd);
	}



