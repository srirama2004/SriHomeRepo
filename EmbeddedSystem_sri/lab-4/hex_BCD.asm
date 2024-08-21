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
  LDR R3,[R0]
UP
   BL DIV
   LSL R3,R2
   ADD R4,R3
   ADD R2,#4
   MOV R3,R1
   CMP R1,#0
   BNE UP
   LDR R6,=DST
   STR R4,[R6]
STOP B STOP
 
DIV 
      MOV R1,#0
BACK  CMP R3,#0XA
	  BLO EXIT
	  SUB R3,#0XA
	  ADD R1,#1
	  B BACK
EXIT 
    BX LR
SRC1 DCD 0X000000AE
	AREA mydata,DATA,READWRITE
DST DCD 0
 END