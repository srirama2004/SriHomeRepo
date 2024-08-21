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
   LDR R0,=NUM
   LDR R3,=RESULT
    LDRB R1,[R0]
   AND R2,R1,#0x0F 
   CMP R2,#09 
    BLO DOWN 
    ADD R2,#07 
DOWN
  ADD R2,#0x30 
   STRB R2,[R3,#1] 
   AND R4,R1,#0xF0 
   MOV R4,R4,LSR#04
   CMP R4,#09
    BLO DOWN1
  ADD R4,#07
DOWN1
  ADD R4,#0x30
   STRB R4,[R3]
STOP B STOP
N DCD 0X0000003A
    AREA data, DATA, READWRITE
RESULT DCD 0
 END