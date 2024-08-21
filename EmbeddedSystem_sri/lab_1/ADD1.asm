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
  LDR R0,=N
  LDR R1,[R0]
STOP B STOP
N DCD 0X12345678
 END