#include <LPC17xx.h>
#include <string.h>
#define RS 8 // p0.9
#define EN 9 // p0.8
#define DT 4 // p0.4 To p0.7 data lines
#define PWM_PIN 23 // P1.23 for PWM
#define PWM_FREQ 600
// using pwm1.4
float x, y, temp, z;
int l,s;
char r;
unsigned int count = 0;
unsigned long int temp1, temp3;
unsigned int displayed = 0;
unsigned char flag1 = 0, flag2 = 0;
unsigned long a, b, temp2, r1, i;
unsigned int value;
unsigned long int init_command[] = {0x30, 0x30, 0x30, 0x20, 0x28, 0x0c, 0x06, 0x01, 0x80};
char dig[2];
// will store the digit to be displayed
unsigned int digits[] = {0, 0, 0, 0};
unsigned int pwmdigits[] = {0, 0, 0};
float temparr[] = {20, 22, 24, 26, 28, 30};
unsigned int cycle[] = {50, 150, 250, 300, 350, 400};
// function prototypes
void display(void);
// function definitions
void delay_lcd(unsigned int r1) {
unsigned int r;
for (r = 0; r < r1; r++) {
}
return;
}
/*void buzzer(){
	for(l=0;l<10;l++){
		LPC_GPIO0->FIOSET=1<<22; //setting buzzer o/p
		for(s=0;s<88000;s++);
		LPC_GPIO0->FIOCLR=1<<22; //clearing buzzer o/p
		for(s=0;s<400000;s++);
	}
}*/
void port_write() {
LPC_GPIO0->FIOPIN = 0;
LPC_GPIO0->FIOPIN = temp3;
if (flag1 == 0)
LPC_GPIO0->FIOCLR = 1 << RS;
else
LPC_GPIO0->FIOSET = 1 << RS;
LPC_GPIO0->FIOSET = 1 << EN;
delay_lcd(25);
LPC_GPIO0->FIOCLR = 1 << EN;
delay_lcd(1000000);
}
void lcd_init() {
LPC_GPIO0->FIODIR = 1 << RS | 1 << EN | 0xF << DT;
flag1 = 0;
for (i = 0; i < 9; i++) {
temp1 = init_command[i];
flag2 = (flag1 == 1) ? 0 : ((temp1 == 0x30) || (temp1 == 0x20)) ? 1 : 0;
temp3 = temp1 & 0xF0;
port_write();
if (!flag2) {
temp3 = temp1 & 0x0f;
temp3 = temp3 << DT;
port_write();
}
}
}
void disp_data(char r) {
unsigned char msg[16] = "Temperature is";
strcat(msg,&r);
i = 0;
flag1 = 1;
while (msg[i] != '\0') {
temp1 = msg[i];
temp3 = temp1 & 0xf0;
port_write();
temp3 = temp1 & 0x0f; // 26-4+1
temp3 = temp3 << DT;
port_write();
i++;
}
flag1 = 0;
temp3 = 0Xc;
temp3 = temp3 << DT;
port_write();
temp3 = 0;
temp3 = temp3 << DT;
port_write();
}
// main function
int main(void) {
SystemInit();
SystemCoreClockUpdate();
lcd_init();
//disp_data();
// P0.4 to P0.7 as data Lines to LCD
LPC_PINCON->PINSEL0 &= 0X0;
LPC_PINCON->PINSEL1 = 0X0;
// P0.24 as ADC input (ADD1)
LPC_PINCON->PINSEL1 |= 1 << 16;
// P1.23 for PWM
LPC_PINCON->PINSEL3 &= ~(0x00300000);
LPC_PINCON->PINSEL3 |= 0x00100000;
// Configure P0.15 to P0.22 as output lines
LPC_GPIO0->FIODIR |= 0x7F8000;
// Power to the ADC by enabling the 12th pin and PWM to the 6th pin
// Enable power to the 6th and 12th peripherals
LPC_SC->PCONP |= (1 << 6) | (1 << 12);
// Enable channel 1(AD0.1) in burst mode
LPC_ADC->ADCR = (1 << 1) | (1 << 16) | (1 << 21);
// Enable interrupt on channel 1 (AD0.1)
LPC_ADC->ADINTEN = (1 << 1);
// PWM Configuration
LPC_PWM1->PR = 0;
LPC_PWM1->PCR = 0x00001000; // Select PWM1 single edge
LPC_PWM1->MCR = 0x00000003; // Reset and interrupt on PWM match register 0
LPC_PWM1->MR0 = 30000; // Setup match register 0 count
LPC_PWM1->MR4 = 0x00000100; // Setup match register MR1
LPC_PWM1->LER = 0x000000ff; // Enable shadow copy register
LPC_PWM1->TCR = 0x00000002; // Reset counter and prescaler
LPC_PWM1->TCR = 0x00000009; // Enable the PWM
// Enable the NVIC
if (count == 0)
NVIC_EnableIRQ(ADC_IRQn);
while (1);
return -1;
}
void ADC_IRQHandler() {
LPC_PWM1->IR = 0xff;
// Check if channel 1's done bit is high
a = (LPC_ADC->ADSTAT) & (1 << 1);
if (a) {
b = (LPC_ADC->ADDR1);
}
// Read the data in ADGDR register to clear the done bit of ADGDR
// The data is present on 4th to 15th bit
b = b & 0xffff;
b >>= 4;
// Conversion of result in the register to temperature in degree Celsius
y=((float)b*(50.0/4096));//Conversion of result in the register to temperature in °C as 10mV of input represents 1°C
    digits[3]=((int)y/10);//MSB of the calculated temp should be displayed on the 3rd 7 segment
    digits[2]=((int)(y)%10);//LSB of the calculated temp should be displayed on the 2nd 7 segment
    digits[1]=((int)(y*10)%10);//decimal digit of the calculated temp should be displayed on the 1st 7 segment
//display();
r=y+'\0';
disp_data('1');
z=y;
// Check temperature condition and control the buzzer
    //if (y > 30.0) {
    //    buzzer();
    // }
if (z >= temparr[0] && z < temparr[1])
value = cycle[0];
else if (z >= temparr[1] && z < temparr[2])
value = cycle[1];
else if (z >= temparr[2] && z < temparr[3])
value = cycle[2];
else if (z >= temparr[3] && z < temparr[4])
value = cycle[3];
else if (z >= temparr[4] && z < temparr[5])
value = cycle[4];
LPC_PWM1->MR4 = value;
LPC_PWM1->LER |= (1 << 4);
// Enable the PWM counter and start the PWM
// LPC_PWM1->TCR |= (1 << 1);
// LPC_PWM1->TCR |= (1 << 0);
}

void display(void) {
    flag1 = 1;
    temp3 = 3 << DT; // Display "Temperature is" message
    port_write();
    temp3 = digits[3] << DT; // Display digit
    port_write();
    temp3 = 3 << DT; // Display "."
    port_write();
    temp3 = digits[2] << DT; // Display digit
    port_write();
    temp3 = 2 << DT; // Display "."
    port_write();
    temp3 = 14 << DT; // Display "C"
    port_write();
    temp3 = 3 << DT; // Display digit
    port_write();
    temp3 = digits[1] << DT; // Display digit
    port_write();
    temp3 = 0xd << DT; // Display newline
    port_write();
    temp3 = 0xf << DT; // Display newline
    port_write();
    temp3 = 4 << DT; // Display "PWM:"
    port_write();
    temp3 = 3 << DT; // Display space
    port_write();

    // Check temperature condition and control the buzzer
  /*  if (y > 25.0) {
        buzzer();
     }*/
    flag1 = 0;
    temp3 = 0xc << DT; // Move to the next line
    port_write();
    temp3 = 0 << DT; // Display newline
    port_write();

    // Display readings on LCD
    delay_lcd(3000000);
}
