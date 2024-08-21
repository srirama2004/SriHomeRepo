#include<LPC17xx.h>
#include<stdio.h>
int main(){
	int i;
	SystemInit();
	SystemCoreClockUpdate();
	LPC_PINCON->PINSEL0=0L;
	LPC_GPIO0->FIODIR=1<<4;
	while(1)
{
	LPC_GPIO0->FIOSET=1<<4;
	for(i=0;i<100000;i++);
	LPC_GPIO0->FIOCLR=1<<4;
	for(i=0;i<100000;i++);
}
}