#include<LPC17xx.h>
#include<stdio.h>
int main(){
	int i=0,j=0;
	SystemInit();
	SystemCoreClockUpdate();
	LPC_PINCON->PINSEL0=0;
	LPC_PINCON->PINSEL4=0;
	LPC_GPIO2->FIODIR=0;
	LPC_GPIO0->FIODIR=0xFF<<4;
	while(1){
		if ((LPC_GPIO2->FIOPIN & 1<<12)){
	  LPC_GPIO0->FIOPIN=i<<4;
	  for(j=0;j<10000000;j++);
			i++;
			if(i==256)
				i=0;
		}
		else{
			if(i==0)
				i=255;
			i--;
			LPC_GPIO0->FIOPIN=i<<4;
	  for(j=0;j<10000000;j++);
	}
}
}