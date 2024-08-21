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
	LDR R0,=SRC
	LDR R1,=DST
	MOV R3,#10
BACK
	LDR R4,[R0],#4
	STR R4,[R1],#4
	SUB R3,#1
	CMP R3,#0
	BNE BACK
	
STOP B STOP
SRC DCD 0x30,0x41,0x5984,0x1234,0x96,0x12,0x2,0x1,0x1793,0X50
	AREA mydata,DATA,READWRITE
DST DCD 0,0,0,0,0,0,0,0,0,0
	END