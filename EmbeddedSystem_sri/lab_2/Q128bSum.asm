	AREA RESET, DATA, READONLY
	EXPORT __Vectors
__Vectors 
	DCD 0x40001000 ; stack pointer value when stack is empty
	DCD Reset_Handler ; reset vector
	ALIGN
	AREA mycode, CODE, READONLY
	ENTRY
	EXPORT Reset_Handler
Reset_Handler
 LDR R3,=SRC1
 LDR R4,=SRC2
 MOV R5,#4
 MSR XPSR,R8
 LDR R6,=DST
BACK
 LDR R0,[R3],#4
 LDR R1,[R4],#4
 ADCS R2,R0,R1
 STR R2,[R6],#4
 SUB R5,#1
 TEQ R5,#0
 BNE BACK
 ADC R7,#0
 STR R7,[R6]
STOP B STOP
SRC1 DCD 0X0000F23,0X2,0XFF,0X1
SRC2 DCD 0X0000F23,0X5,0XAE,0XF
 AREA mydata,DATA,READWRITE
DST DCD 0,0,0,0,0
 END
 