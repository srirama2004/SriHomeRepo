#include<stdio.h>
#include <LPC17xx.h>
//single digit upcounter
int main(){
		int n=0, i =0,count=0,j=0;
	int seven[] = {0x3F,0x06,0x5B,0x4F,0x66,0x6D,0x7D,0x07,0x7F,0x6F,0x77,0x7F,0X39,0X5E,0X79,0X71};
 SystemInit();
 SystemCoreClockUpdate();
	LPC_PINCON->PINSEL0 = 0;
	LPC_PINCON->PINSEL1 = 0;
	LPC_GPIO0->FIODIR = 0xFF<<4|0xF<<23;
	//Switch
	LPC_PINCON->PINSEL4 = 0;
	LPC_GPIO2->FIODIR = 0X0<<12;
	for(i=0;i<1000000;i++);
	while(1){
		if((LPC_GPIO2->FIOPIN & 1<<12)){
			count++;
		if(count>=10000){
			count = 0;
		}
	}else{
		count--;
		if(count<=0){
			count = 9999;
		}
	}
			n = count;
		for(j=0;j<4;j++){
		LPC_GPIO0->FIOPIN = j<<23;
		LPC_GPIO0->FIOMASK = 0xF<<23;
		LPC_GPIO0->FIOPIN = seven[n%16]<<4;
		LPC_GPIO0->FIOMASK = 0;
		n/=16;
			for(i=0;i<10000;i++);
		}
		for(i=0;i<10000;i++);
		
	}
	return 0;
}