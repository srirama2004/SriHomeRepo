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
	LDR R1,=SRC
UP   LDR R2,[R0]
     CMP R3,#5
     BEQ EXIT
	 MOV R4,R0
	 MOV R6,R3
BACK 
	ADD R1, #4;
     MOV R5,R1;
     LDR R7,[R5];
	 ADD R6,#1;
     TEQ R6,#5;
	 BEQ UP1
	 CMP R7,R2
	BLO CHANGE
BA
	 B BACK
UP1 LDR R9,[R4]
    LDR R10,[R0]
    STR R9,[R0]
	STR R10,[R4]
	ADD R3,#1
	ADD R0,#4
	MOV R1,R0
	B UP
CHANGE MOV R4,R5
       B BA
EXIT
STOP B STOP
   AREA mydata,DATA,READWRITE
SRC DCD 0,0,0,0,0
 END
 