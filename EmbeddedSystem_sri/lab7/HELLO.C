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
  