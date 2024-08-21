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
 MOV R2,#8
 MOV R3,#9
 MOV R4,R2
 MOV R2,R3
 MOV R3,R4
STOP B STOP
 END