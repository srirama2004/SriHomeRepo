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
  MOV R0,#4
  MOV R1,R0
  MOV R2,R0
  MLA R4,R0,R1,R2
UP
  CMP R4,#2
  BLO EXIT
  SUB R4,#2
  ADD R5,#1
  B UP
EXIT
STOP B STOP
 END