#include<LPC17xx.h>
#include<stdio.h>
int main(){
	int i=0,j=0;
	int seven[]={0x3F,0x06,0x5B,0x4F,0x66,0x6D,0x7D,0x07,0x7F,0x6F };
	SystemInit();
	SystemCoreClockUpdate();
	LPC_PINCON->PINSEL0=0;
	LPC_GPIO0->FIODIR=0xFF<<4||0x1<<23;  
  LPC_GPIO0->FIOMASK=0X1<<23;
	while(1){
		for(i=0;i<4;i++){
  LPC_GPIO0->FIOPIN=seven[i]<<4;
  for(j=0;j<100000;j++);
}
}
}
 	