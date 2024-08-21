	 AREA  RESET,DATA,READONLY
	 EXPORT __Vectors
__Vectors
	 DCD 0x10001000 ; stack pointer value when stack is empty
	 DCD Reset_Handler ; reset vector
	 ALIGN
	 AREA mycode, CODE, READONLY
	 ENTRY
	 EXPORT Reset_Handler
Reset_Handler

	 LDR R1,=SRC
	 LDR R6,=RES
	 MOV R4,#10
UP
	 LDR R0,[R1],#4
	 ADDS R2,R0
	 ADC R3,#0
	 SUB R4,#1
	 CMP R4,#0
	 BNE UP
	 STR R2,[R6],#4
	 STR R3,[R6]
STOP B STOP 
SRC DCD 0X2,0X45,0X56,0X23,0X56,0X34,0X45,0X34,0X76
	 AREA  MYDATA,DATA,READWRITE
RES DCD 0,0
	 END
	 