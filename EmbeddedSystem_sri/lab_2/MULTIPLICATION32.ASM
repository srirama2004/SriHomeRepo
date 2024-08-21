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
  LDR R1,=SRC2
  LDR R3,[R0]
  LDR R4,[R1]
UP
  ADDS R3,R4
  ADC R5,#0
  SUBS R4,#1
   TEQ R4,#0
   BNE UP
   STR R3,[R6]
STOP B STOP
SRC1 DCD 0X00000008
SRC2 DCD 0X00000004
	AREA mydata,DATA,READWRITE
DST DCD 0
 END