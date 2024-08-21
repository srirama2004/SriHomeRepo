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
   LDR R1,=SRC1
   LDR R7,=DST
   MOV R6,#0
   MOV R4,#0X20000000
   MSR xPSR,R4
UP
   LDR R2,[R0],#4
   LDR R3,[R1],#4
   SBCS R5,R2,R3
   STR R5,[R7],#4
   ADD R6,#1
   TEQ R6,#4
   BNE UP
   SBC R8,#0
   STR R8,[R7]
STOP B STOP
SRC DCD  0x12,0x00000005,0x00000008,0x0000000E
SRC1 DCD 0XF,0x00000003,0x00000008,0x0000000A
     AREA mydata,DATA,READWRITE
DST DCD 0,0,0,0,0
	END