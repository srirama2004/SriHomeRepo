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
 LDR R0, =SRC
UP 
  LDR R1,=SRC
  LDR R4,=SRC+4
  CMP R5,#5
  BEQ EXIT
  ADD R5,#1
  MOV R6,#0
BACK LDR R2,[R1]
	 LDR R3,[R4]
	 ADD R6,#1
	 TEQ R6,#5
	 BEQ UP
	 CMP R3,R2
	 BLO SWAP
BA
	 ADD R1,#4
	 ADD R4,#4
	 B BACK
SWAP 
     STR  R3,[R1]
	 STR R2,[R4]
	 B BA
EXIT
STOP B STOP
   AREA mydata,DATA,READWRITE
SRC DCD 0,0,0,0,0
 END