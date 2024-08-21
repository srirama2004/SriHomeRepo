#include <LPC17xx.h> 
#include <stdio.h> 
#include <string.h> 
#define RS  8 //P0.9 
#define EN  9 //P0.8 
#define DT  4  //P0.4 to P0.7 data lines 
float x, y, temp; 
unsigned long int temp1,temp3; 
unsigned char flag1 =0, flag2 =0; 
unsigned long a, b, temp2, r1, i; 
unsigned long int init_command[] = {0x30,0x30,0x30,0x20,0x28,0x0c,0x06,0x01,0x80}; 
char dig[2]; 
 char temp_chars[5];
unsigned int digits[] = {0, 0, 0, 0}; // will store the digit to be displayed 
void display(void); 
void delay_lcd(unsigned int r1) 
{ 
    unsigned int r; 
    for(r=0; r<r1; r++) {} 
    return; 
} 
void port_write() 
{ 
    LPC_GPIO0->FIOPIN = 0; 
    LPC_GPIO0->FIOPIN = temp3; 
    if (flag1 == 0) 
        LPC_GPIO0->FIOCLR = 1<<RS; 
    else 
        LPC_GPIO0->FIOSET = 1<<RS; 
    LPC_GPIO0->FIOSET = 1<<EN; 
    delay_lcd(25); 
    LPC_GPIO0->FIOCLR = 1<<EN; 
    delay_lcd(1000000); 
} 

void lcd_init() 
{ 
    LPC_GPIO0->FIODIR = 1<<RS|1<<EN|0XF<<DT; 
    flag1 =0; 
    for (i=0; i<9; i++) 
    { 
        temp1 = init_command[i]; 
        flag2 =  (flag1 == 1) ? 0 :((temp1 == 0x30) || (temp1 == 0x20)) ? 1 : 0; 
        temp3 = temp1 & 0xf0; 
        port_write(); 
        if (!flag2) 
        { 
            temp3 = temp1 & 0x0f; 
            temp3 = temp3 << DT; 
            port_write(); 
        } 
    } 
} 

void disp_data() 
{ 
    unsigned char msg[16]="Temperature is:"; 
    i=0; 
    flag1=1; 
    while(msg[i]!='\0') 
    { 
        temp1=msg[i]; 
        temp3 = temp1 & 0xf0; 
        port_write(); 
        temp3 = temp1 & 0x0f; //26-4+1 
        temp3 = temp3 << DT; 
        port_write(); 
        i++; 
    } 
    flag1=0; 
    temp3=0xc; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=0; 
    temp3=temp3<<DT; 
    port_write(); 
}  
int main(void) 
{ 
    SystemInit(); 
    SystemCoreClockUpdate(); 
    lcd_init(); 
    disp_data(); 
    LPC_PINCON->PINSEL0 &= 0X0000000; //P0.4 to P0.7 as data lines to LCD 
    LPC_PINCON->PINSEL1 |= 1 << 16; //P0.24 as ADC input (ADD0.1) 
    LPC_SC->PCONP |= 1 << 12; //Power to the ADC by enabling the 12th pin of 
    //PCONP (Power Control for Peripheral) 
    LPC_ADC->ADCR = (1 << 1 | 1 << 16 | 1 << 21); //Enable channel 1 (ADD0.1) in burst mode and enable 
	 LPC_ADC->ADINTEN = (1 << 1); //Enable interrupt on channel 1 (ADD0.1) 
    //power down(PDN) 
    NVIC_EnableIRQ(ADC_IRQn); //Enable the NVIC 
    while (1); 
} 

void ADC_IRQHandler() 
{ 
    a = (LPC_ADC->ADSTAT) & 1 << 1; //Check if channel 1's DONE bit is high 
    if (a) 
    { 
        //if DONE bit high, read the data in ADDR1 register (this also clears the DONE bit) 
        b = (LPC_ADC->ADDR1); 
    } 
    //Read the data in ADGDR register to clear the DONE bit of ADGDR 
    //temp2 = LPC_ADC->ADGDR; 
    b = b & 0xFFFF; //The data is present on 4th to 15th bit 
    b >>= 4; //to get the digital value in lower bit positions 
    y = ((float)b * (3.3/ 4096)*100); //Conversion of result in the register to temperature in C 
    digits[3] = ((int)y / 10); 
    digits[2] = ((int)(y) % 10); 
    digits[1] = ((int)(y * 10) % 10); 
    display(); 
} 
void display(void) 
{ 
    flag1=1; 
    temp3=3; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=digits[3]; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=3; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=digits[2]; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=2; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=14; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=3; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=digits[1]; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=0xd; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=0xf; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=4; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=3; 
    temp3=temp3<<DT; 
    port_write(); 
    flag1=0; 
    temp3=0xc; 
    temp3=temp3<<DT; 
    port_write(); 
    temp3=0; 
    temp3=temp3<<DT; 
    port_write(); 
  delay_lcd(3000000); 
} 
void display1(void) {
    flag1 = 1; // Setting flag for display
    // Convert temperature digits to characters
    sprintf(temp_chars, "%.1f", y); // Assuming 'y' holds the temperature value
    // Sending temperature characters to LCD
    for (i = 0; i < 5; i++) {
        if (temp_chars[i] != '\0') { // Check for null terminator
            temp3 = temp_chars[i]; // Send ASCII value of the character
            temp3 = temp3 << DT; // Shift to align with LCD pins
            port_write(); // Send character to LCD
        }
    }
    flag1 = 0; // Resetting flag
    delay_lcd(3000000); // Delay for display update
}
