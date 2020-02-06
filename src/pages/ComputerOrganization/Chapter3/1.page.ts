import { p, b, section, ol } from '@src/components/@write'
const title = '3.1　教学目标和内容安排'
const page = section(title)(
    p`${b`主要教学目标`}使学生掌握高级语言程序与机器级代码之间的关系，以及机器级代码与指令集体系结构（ISA）的关系，从而使学生能够深刻理解高级语言程序的执行过程以及决定其执行结果的主要因素。`,
    p`${b`基本学习要求`}`,
    ol(
        p`理解机器指令和汇编指令之间的关系。`,
        p`了解一个指令集体系结构所必须规定的内容。`,
        p`了解从高级语言源程序转换为可执行文件的过程。`,
        p`了解高级编程语言和汇编语言之间的关系。`,
        p`理解汇编和反汇编之间的关系。`,
        p`了解 IA-32 指令系统的数据类型及其格式。`,
        p`了解 C 语言程序中基本数据类型与 IA-32 数据类型之间的关系。`,
        p`了解 IA-32 中通用寄存器的个数、宽度和功能。`,
        p`了解 IA-32 中的标志寄存器 EFLAGS 的功能、宽度和其中各标志信息的含义。`,
        p`了解 IA-32 中的指令指针寄存器 EIP 的功能。`,
        p`理解 IA-32 提供的各类寻址方式的含义和有效地址计算方式。`,
        p`理解 IA-32 处理器的工作模式与寻址方式之间的关系。`,
        p`了解 IA-32 实地址模式和保护模式各自的含义。`,
        p`了解浮点处理架构 x87 FPU 的概要内容。`,
        p`了解由 MMX 发展而来的 SSE 架构的概要内容。`,
        p`了解 IA-32 中各类传送指令的功能，包括 MOV、PUSH/POP、LEA、IN/OUT、PUSHF/POPF 等。`,
        p`了解 IA-32 中各类定点算术运算指令的功能，包括 ADD/SUB、INC/DEC、NEG、CMP、MUL/DIV、IMUL/IDIV 等。`,
        p`了解 IA-32 中各类逻辑运算指令的功能，包括 NOT、AND、OR、XOR、TEST 等。`,
        p`了解 IA-32 中各类移位指令的功能，包括 SHL/SHR、SAL/SAR、ROL/ROR、RCL/RCR 等。`,
        p`了解 IA-32 中各类控制转移指令的功能，包括 JMP、Jcc、SETcc、CMOVcc 等。`,
        p`了解 IA-32 中调用和返回指令的功能，包括各类 CALL 和 RET 指令。`,
        p`了解 IA-32 中各类中断指令的功能，包括 INT n、iret/iretd、into、sysenter/sysexit 指令。`,
        p`了解 C 语言程序中过程调用的执行步骤以及 IA-32 的寄存器使用约定。`,
        p`了解 IA-32 的栈和栈帧的概念，以及过程调用过程中栈和栈帧的变化。`,
        p`能根据过程调用过程中栈和栈帧的变化，清楚说明变量的作用域和生存期。`,
        p`深刻理解过程调用中按值传递参数和按地址传递参数的不同本质。`,
        p`深刻理解嵌套或递归过程调用带来较大时间开销和空间开销的原因。`,
        p`了解 if～（then）、if～（then）～else 选择结构代码对应的机器级代码结构，能对其进行逆向工程转换。`,
        p`了解条件运算表达式对应的机器级代码结构，能对其进行逆向工程转换。`,
        p`了解 switch 语句对应的机器级代码结构，能对其进行逆向工程转换。`,
        p`了解 do～while 语句对应的机器级代码结构，能对其进行逆向工程转换。`,
        p`了解 while 语句对应的机器级代码结构，能对其进行逆向工程转换。`,
        p`了解 for 语句对应的机器级代码结构，能对其进行逆向工程转换。`,
        p`了解数组元素、指针数组和多维数组元素在存储空间的存放和访问机制。`,
        p`了解结构体数据在存储空间的存放和访问机制。`,
        p`了解联合体数据在存储空间的存放和访问机制。`,
        p`了解不同系统的不同对齐方式，以及编译器如何处理数据的对齐。`,
        p`了解越界访问和缓冲区溢出攻击及其防范方法。`,
        p`了解兼容 IA-32 的 64 位系统 x86-64 的概要内容，包括通用寄存器组织、基本指令类型和对齐方式、过程调用的参数传递方式和调用约定等。`
    ),
    p`本章主要介绍 C 语言程序中的函数调用以及各类语句对应的机器级代码表示。本书选用 IA-32 指令系统机器级代码，因此，本章在介绍完高级语言程序到机器级代码的转换过程之后，概要性地介绍了 IA-32 指令系统，包括寄存器组织、寻址方式和指令格式等，并对 IA-32 指令系统中常用的几类指令进行了简要介绍，包括传送、定点算术运算、按位运算、控制转移、x87 浮点运算指令等，也简要介绍了 MMX 及 SSE 指令集。因为 IA-32 是复杂指令集计算机（Complex Instruction Set Computer，CISC）的典型代表，因而涉及的内容比较多而烦琐，而且都是 IA-32 指令系统规定的内容，所以，课堂上只要介绍一些概要性的内容，并通过一些例子让学生了解 IA-32 的大致内容即可，对于 IA-32 的细节内容，可以让学生通过实验和课后作业来了解。`,
    p`在学生对 IA-32 指令系统有一定了解的基础上，接着可介绍 C 语言程序中各类语句被转换为机器级代码后的机器级表示，包括过程（函数）调用的机器级表示、选择和循环语句的机器级表示，以及 C 语言程序中数组和指针类型的分配和访问、结构和联合数据类型的分配和访问、数据的对齐存放。这部分内容对于学生理解高级语言程序如何在计算机上执行、不同存储类型变量的作用域和生存期、嵌套和递归调用的时间开销和空间开销、过程调用时按值传参和按地址传参、从机器级代码逆向推导出高级语言程序代码（逆向工程）、缓冲区溢出及其防范等方面都有非常大的帮助。`
).elem