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
  MOV R7,R0
UP   LDR R2,[R0]
     MOV R3,R2;             KEY=R3
	 MOV R1,R0
	 CMP R4,#5
	 BEQ EXIT
	 ADD R4,#1
BACK  MOV R6,R1
     ADD R1,#-4
     LDR R5,[R1]
	 TEQ R5,R3
	 BLE DOWN
	 CMP R1,R7
	 BLO DOWN
	 LDR R8,[R1]
	 STR R8,[R6]
	 B BACK
DOWN
    LDR R9,[R6]
    STR R3,[R6]
	STR R9,[R0]
	ADD R0,#4
	B UP
EXIT
STOP B STOP
   AREA mydata,DATA,READWRITE
SRC DCD 0,0,0,0,0
 END
	 