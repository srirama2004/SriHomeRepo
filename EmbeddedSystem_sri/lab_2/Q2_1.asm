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
	LDR R1,[R0],#4
	LDR R2,=DST
	STR R1,[R2],#4
	LDR R1,[R0]
	STR R1,[R2]
	
STOP B STOP
SRC DCD 0xFF1256C4,0x3C154230
	AREA mydata,DATA,READWRITE
DST DCD 0,0
	END