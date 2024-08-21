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
	int sockfd,newsockfd,retval,i,j,x,z;
	socklen_t actuallen;
	int recedbytes,sentbytes;
	struct sockaddr_in serveraddr,clientaddr;
	char buff[MAXSIZE];
	char st[20];
	char ch[100];
	char chi[20];
	 char c;
	strcpy(chi,"enter the string to search::");
	char se[20];
	int k=0;
	int l;
	int a=0;
	char choice[30];
	char e[2];
	char rp[20];
	char rp1[20];
	strcpy(choice,"enter ur choice ::");
	sockfd=socket(AF_INET,SOCK_STREAM,0);

	if(sockfd==-1)
	{
	printf("\nSocket creation error");
	}
	serveraddr.sin_family=AF_INET;
	serveraddr.sin_port=htons(3388);
	FILE *fo;
	strcpy(st,"opened");
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
            ch[100]=0;
            k=0;
		recedbytes=recv(newsockfd,buff,sizeof(buff),0);
		if(recedbytes==-1)
		{
			close(sockfd);
			close(newsockfd);
		}
		printf("%s \n",buff);
		sentbytes=send(newsockfd,choice,sizeof(choice),0);
		recedbytes=recv(newsockfd,e,sizeof(e),0);
		  fo=fopen(buff,"r");
		  if(fo==NULL){
		  printf("\nfile not present");
		  }
		  else{
		  printf("\nfile present");
		  c=fgetc(fo);
		  while(c!=EOF){
		   ch[k++]=c;
		  printf("%c",c);
           c=fgetc(fo);
		  }
		}
	if(e[0]=='1'){
	    sentbytes=send(newsockfd,chi,sizeof(chi),0);
	     recedbytes=recv(newsockfd,se,sizeof(se),0);
	     int count=0;
	     for(i=0;i<strlen(ch);i++){
	     j=0;
	     for(k=0;k<strlen(se);k++){
	     if(se[k]==ch[i+k])
	     j++;
	     }
	     if(j==strlen(se)){
	     printf("\n found at position: %d",i);
	     count++;
	     }
	     }
	     printf("\n %d count=",count);
	}
    else if (e[0] == '0') {
    recedbytes = recv(newsockfd, rp, sizeof(rp), 0);
    recedbytes = recv(newsockfd, rp1, sizeof(rp1), 0);
    int ch_len = strlen(ch);
    int rp1_len = strlen(rp1);
     for(i=0;i<strlen(ch);i++){
	     j=0;
	     for(k=0;k<strlen(rp);k++){
	     if(rp[k]==ch[i+k])
	     j++;
	     }
	     if(j==strlen(rp)){
	     l=i;
	     break;
	     }
     }
    for (int i = 0; i < rp1_len; i++) {
        ch[l + i] = rp1[i];
    }
    for (int k = 0; k < ch_len; k++)
        printf("%c", ch[k]);
}
    else if(e[0]=='2'){
             for ( i = 0; i < strlen(ch); i++) {
      for (int j = 0; j < strlen(ch) - 1 - i; j++) {
            if (ch[j] > ch[j + 1]) {
                char temp = ch[j];
                ch[j] = ch[j + 1];
                ch[j + 1] = temp;
            }
        }
             }
        for(int k=0;k<strlen(ch);k++)
		printf ("%c",ch[k]);
         sentbytes=send(newsockfd,ch,sizeof(ch),0);
    }
      else if(e[0]=='3'){
            break;
	    }
}
	close(sockfd);
	close(newsockfd);
}
