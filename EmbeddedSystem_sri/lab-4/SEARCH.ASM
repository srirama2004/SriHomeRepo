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
  LDR R0,=SRC1
  MOV R5,#5
  MOV R2,#4
UP LDR R1,[R0],#4
  MOV R4,#1
  CMP R1,R2
  BEQ EXIT
  SUB R5,#1
  MOV R4,#0
  CMP R5,#0
  BEQ EXIT
  B UP
EXIT 
  LDR R6,=DST
  STR R4,[R6];
STOP B STOP
SRC1 DCD 0X1,0X2,0X3,0X4,0X5
    AREA mydata,DATA,READWRITE
DST DCD 0
   END