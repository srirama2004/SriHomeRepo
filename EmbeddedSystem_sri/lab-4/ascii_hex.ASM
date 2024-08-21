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
	LDR R0,=SRC
	LDR R0,[R0]
	MOV R1,R0
	AND R1,#0XFF
	LSR R0,#8
	CMP R1,#0X39
	BLS EXIT
	SUB R1,#0X37
	B SKIP
EXIT SUB R1,#0X30
SKIP CMP R0,#0X39
	BLS EXITT
	SUB R0,#0X37
	LSL R0,#4
	B SKIPP
EXITT SUB R0,#0X30
	LSL R0,#4
SKIPP ADD R1,R0
	LDR R5,=DST
	STR R1,[R5]
STOP B STOP
SRC DCD 0X3239
	AREA mydata,DATA,READWRITE
DST DCD 0,0
 END