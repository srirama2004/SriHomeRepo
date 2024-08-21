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
 LDR R1,=SRC+4*(N-1)
 MOV R3,#0
BACK
 LDR R4,[R0]
 LDR R5,[R1]
 STR R4,[R1],#-4
 STR R5,[R0],#4
 ADD R3,#1
 CMP R3,#N/2
 BNE BACK
STOP B STOP
N EQU 4
  AREA mydata,DATA,READWRITE
SRC DCD 0,0,0,0
	END