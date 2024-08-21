   AREA RESET, DATA, READONLY
   EXPORT __Vectors
__Vectors 
    DCD 0x40001000 ; stack pointer value when stack is empty
    DCD Reset_Handler ; reset vector
    ALIGN
    AREA RESET, DATA, READONLY
    EXPORT __Vectors
    DCD Reset_Handler ; reset vector
 ALIGN
        AREA mycode, CODE, READONLY
         ENTRY
        EXPORT Reset_Handler
Reset_Handler
 LDR R0,=N
 LDR R6,=DST
 MOV R1,#0
 MOV R2,#1
 STR R1,[R6],#4
 STR R2,[R6],#4
UP
  TEQ R0,#0
  sub R0,#1
  BEQ EXIT
  ADD R3,R1,R2
  STR R3,[R6],#4
  MOV R1,R2
  MOV R2,R3
  B UP
EXIT
STOP B STOP
N EQU 5
    AREA data, DATA, READWRITE
DST DCD 0,0,0,0,0,0
 END