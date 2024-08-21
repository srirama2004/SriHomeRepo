#include<LPC17xx.h>
#include<stdio.h>
int main(){
	int i=0,j=0,k=0,n=0,count=0;
	int seven[]={0x3F,0x06,0x5B,0x4F,0x66,0x6D,0x7D,0x07,0x7F,0x6F };
	SystemInit();
	SystemCoreClockUpdate();
	LPC_PINCON->PINSEL0=0;
	LPC_GPIO0->FIODIR=0xFF<<4|0xF<<23;  
	while(1){
	if(count==10000){
    count=0;
}
n=count;
  for(i=0;i<4;i++){
  LPC_GPIO0->FIOPIN=i<<23;
   LPC_GPIO0->FIOMASK=0xF<<23;
   LPC_GPIO0->FIOPIN=seven[n%10]<<4;
   for(j=0;j<1000;j++); 
   LPC_GPIO0->FIOMASK=0;
    n=n/10;
  }
  count++;
  }
  }