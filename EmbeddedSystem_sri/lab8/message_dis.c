#include<stdio.h>
#include<string.h>
#include <LPC17xx.h>
void lcd_write();
void func();
int temp2;
int temp1;
int flag2;
int flag1=0;
	int i,j;
unsigned long int init_command[] = {0x30,0x30,0x30,0x20,0x28,0x0c,0x06,0x01,0x80};
void func(){
	LPC_GPIO0->FIOPIN=temp2<<23;
	if(flag2==0)
	LPC_GPIO0->FIOCLR=1<<27;
	else
	LPC_GPIO0->FIOSET=1<<27;
	LPC_GPIO0->FIOSET=1<<28;
	for(j=0;j<100000;j++);
		LPC_GPIO0->FIOCLR=1<<28;
}
void lcd_write()
{
	temp2=temp1&0xF0;
	temp2=temp2>>4;
	func();
	if(flag1==0){
temp2=temp1&0xF;
func();		
}
}
int main(){
for (i=0; i<9;i++)  
                    {	 
	    temp1 = init_command[i];
    	    lcd_write();
                    }	
char msg[20];
strcpy(msg,"AIT MANIPAL");
SystemInit();
 SystemCoreClockUpdate();	
	LPC_PINCON->PINSEL1 = 0;
	LPC_GPIO0->FIODIR =0xF<<23 |3<<27;
	flag2=1;
	while(1){
	for(i=0;msg[i]!='\0';i++){
if(i==0){
flag2=0;
	temp1=0x80;
	lcd_write();
	flag2=1;
}
if(i==16){
flag2=0;
	temp1=0xC0;
	lcd_write();
	flag2=1;
}
temp1=msg[i];
lcd_write();
}
}
}