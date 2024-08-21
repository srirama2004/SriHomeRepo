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
  LDR R0,=NUM
  LDR R6,=RESULT
  LDR R1,[R0]
  AND R2,R1,#0XF
  CMP R2,#0XA
  BLO DOWN
  ADD R2,#0X11
DOWN ADD R2,0X30
     STR R2,[R6],#4
	 LDR R3,[R0]
	 AND R3,R3,#0XF0
	 LSR R3,#4
	 CMP R3,#0XA
     BLO DOWN1
     ADD R3,#0X11
DOWN1 
     ADD R3,#0X30
     STR R3,[R6]
STOP B STOP
NUM DCD 0x0000004A
    AREA data, DATA, READWRITE
RESULT DCD 0,0
 END