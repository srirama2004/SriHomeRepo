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
  LDR R6,=DST
  LDR R1,[R0]
  LDR R2,[R0]
  LSR R2,#4
  AND R1,0XF
  MOV R3,#0XA
  MLA R4,R2,R3,R1
  STR R4,[R6]
STOP B STOP
SRC1 DCD 0X00000015
   AREA mydata,DATA,READWRITE
DST DCD 0
 END
