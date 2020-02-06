import { p, section, precode } from '@src/components/@write'
import { multipleChoice, answer } from '@src/components/@questionnaire'
const title = '3.5　单项选择题'
const page = section(title)(
    multipleChoice('1.以下有关指令的叙述中，错误的是（　　）。')(
        p`机器指令是用二进制表示的一个 0/1 序列，CPU 能直接执行`,
        answer(p`汇编指令是机器指令的符号表示，CPU 能直接执行`),
        p`伪指令是由若干条机器指令构成的一个指令序列，属于软件范畴`,
        p`微指令是一条机器指令所包含的控制信号的组合，CPU 能直接执行`
    ),
    multipleChoice('2.一条机器指令通常由多个字段构成。以下选项中，（　　）不显式地包含在机器指令中。')(
        p`操作码`,
        p`寻址方式`,
        answer(p`下条指令地址`),
        p`寄存器编号`
    ),
    multipleChoice('3.对于运算类指令或传送类指令，通常需要在指令中指出操作数或操作数所在的位置。通常，指令中指出的操作数不可能出现在（　　）中。')(
        p`指令`,
        p`通用寄存器`,
        p`存储单元`,
        answer(p`程序计数器`)
    ),
    multipleChoice(
        '4.指令集体系结构（ISA）是计算机系统中必不可少的一个抽象层，它是对硬件的抽象，软件通过它所规定的指令系统规范来使用硬件。以下有关 ISA 的叙述中，错误的是（　　）。'
    )(
        p`ISA 规定了所有指令的集合，包括指令格式和操作类型`,
        answer(p`ISA 规定了执行每条指令时所包含的控制信号`),
        p`ISA 规定了指令获取操作数的方式，即寻址方式`,
        p`ISA 规定了指令的操作数类型、寄存器结构、存储空间大小、编址方式和大端/小端方式`
    ),
    multipleChoice('5.以下选项中，不属于指令集体系结构名称的是（　　）。')(answer(p`UNIX`), p`IA-32`, p`ARM`, p`MIPS`),
    multipleChoice('6.以下 Intel 微处理器中，不兼容 IA-32 指令集体系结构的是（　　）。')(
        p`80386 和 80486`,
        p`Pentium（Ⅱ、Ⅲ、4）`,
        p`Core（i3、i5、i7）`,
        answer(p`Itanium 和 Itanium 2`)
    ),
    multipleChoice('7.以下关于 IA-32 指令格式的叙述中，错误的是（　　）。')(
        p`采用变长指令字格式，指令长度从一个字节到十几个字节不等`,
        p`采用变长操作码，操作码位数可能是 5 位到十几位不等`,
        p`指令中指出的位移量和立即数的长度可以是 0、1、2 或 4 个字节`,
        answer(p`指令中给出的操作数所在的通用寄存器的宽度总是 32 位`)
    ),
    multipleChoice('8.以下关于 IA-32 指令寻址方式的叙述中，错误的是（　　）。')(
        p`操作数可以是指令中的立即数，也可以是通用寄存器或存储单元中的内容`,
        p`对于寄存器操作数，必须在指令中给出通用寄存器的 3 位编号`,
        p`存储器操作数中最复杂的寻址方式是「基址加比例变址加位移」`,
        answer(p`相对寻址的目标地址为「PC 内容加位移」，PC 内容指当前正在执行指令的地址`)
    ),
    multipleChoice('9.以下关于 IA-32 中整数运算指令所支持的操作数的叙述中，错误的是（　　）。')(
        p`对于加减运算指令，操作数不区分是无符号整数还是带符号整数`,
        p`对于乘除运算指令，操作数一定区分是无符号整数还是带符号整数`,
        answer(p`除乘法指令外，其他运算指令的源操作数和目的操作数的位数相等`),
        p`参加运算的操作数可以是一个字节（8b）、一个字（16b）或双字（32b）`
    ),
    multipleChoice('10.以下关于 IA-32 的定点寄存器组织的叙述中，错误的是（　　）。')(
        answer(p`每个通用寄存器都可作为 32 位、16 位或 8 位寄存器使用`),
        p`寄存器 EAX/AX/AL 称为累加器，ECX/CX/CL 称为计数寄存器`,
        p`寄存器 ESP/SP 称为栈指针寄存器，EBP/BP 称为基址指针寄存器`,
        p`EIP/IP 为指令指针寄存器，即 PC；EFLAGS/FLAGS 为标志寄存器`
    ),
    multipleChoice(
        '11.某 C 语言程序中对数组变量 b 的声明为「int b[10][5]；」，有一条 for 语句如下：',
        
        precode(`for (i=0; i<10, i++)
    for (j=0; j<5; j++)
        sum+= b[i][j];`)(),
        
        p`假设执行到「sum+=b[i][j]；」时，sum 的值在 EAX 中，b[i][0]所在的地址在 EDX 中，j 在 ESI 中，则「sum+=b[i][j]；」所对应的指令（AT&T 格式）可以是（　　）。`
    )(answer(p`addl 0（%edx，%esi，4），%eax`), p`addl 0（%esi，%edx，4），%eax`, p`addl 0（%edx，%esi，2），%eax`, p`addl 0（%esi，%edx，2），%eax`),
    multipleChoice('12.IA-32 中指令「pushl%ebp」的功能是（　　）。')(
        answer(p`R[esp]←R[esp]-4，M[R[esp]]←R[ebp]`),
        p`R[esp]←R[esp]+4，M[R[esp]]←R[ebp]`,
        p`M[R[esp]]←R[ebp]，R[esp]←R[esp]-4`,
        p`M[R[esp]]←R[ebp]，R[esp]←R[esp]+4`
    ),
    multipleChoice('13.IA-32 中指令「popl%ebp」的功能是（　　）。')(
        p`R[esp]←R[esp]-4，R[ebp]←M[R[esp]]`,
        p`R[esp]←R[esp]+4，R[ebp]←M[R[esp]]`,
        p`R[ebp]←M[R[esp]]，R[esp]←R[esp]-4`,
        answer(p`R[ebp]←M[R[esp]]，R[esp]←R[esp]+4`)
    ),
    multipleChoice('14.IA-32 中指令「movl 8（%ebp），%edx」的功能是（　　）。')(
        p`M[R[ebp]+8]←R[edx]`,
        answer(p`R[edx]←M[R[ebp]+8]`),
        p`R[ebp]+8←R[edx]`,
        p`R[edx]←R[ebp]+8`
    ),
    multipleChoice('15.IA-32 中指令「movl 8（%edx，%esi，4），%edx」的功能是（　　）。')(
        p`M[R[edx]+R[esi]*4+8]←R[edx]`,
        p`M[R[esi]+R[edx]*4+8]←R[edx]`,
        answer(p`R[edx]←M[R[edx]+R[esi]*4+8]`),
        p`R[edx]←M[R[esi]+R[edx]*4+8]`
    ),
    multipleChoice('16.IA-32 中指令「leal 8（%edx，%esi，4），%edx」的功能是（　　）。')(
        p`R[edx]+R[esi]*4+8←R[edx]`,
        p`R[esi]+R[edx]*4+8←R[edx]`,
        answer(p`R[edx]←R[edx]+R[esi]*4+8`),
        p`R[edx]←R[esi]+R[edx]*4+8`
    ),
    multipleChoice('17.设 SignExt[x]表示对 x 符号扩展，ZeroExt[x]表示对 x 零扩展。IA-32 中指令「movswl%cx，-20（%ebp）」的功能是（　　）。')(
        answer(p`M[R[ebp]-20]←SignExt[R[cx]]`),
        p`R[cx]←SignExt[M[R[ebp]-20]]`,
        p`M[R[ebp]-20]←ZeroExt[R[cx]]`,
        p`R[cx]←ZeroExt[M[R[ebp]-20]]`
    ),
    multipleChoice('18.假设 R[ax]=FFE8H，R[bx]=7FE6H，执行指令「addw%bx，%ax」后，寄存器的内容和各标志的变化为（　　）。')(
        p`R[ax]=7FCEH，OF=1，SF=0，CF=0，ZF=0`,
        p`R[bx]=7FCEH，OF=1，SF=0，CF=0，ZF=0`,
        answer(p`R[ax]=7FCEH，OF=0，SF=0，CF=1，ZF=0`),
        p`R[bx]=7FCEH，OF=0，SF=0，CF=1，ZF=0`
    ),
    multipleChoice('19.假设 R[ax]=FFE8H，R[bx]=7FE6H，执行指令「subw%bx，%ax」后，寄存器的内容和各标志的变化为（　　）。')(
        answer(p`R[ax]=8002H，OF=0，SF=1，CF=0，ZF=0`),
        p`R[bx]=8002H，OF=0，SF=1，CF=0，ZF=0`,
        p`R[ax]=8002H，OF=1，SF=1，CF=0，ZF=0`,
        p`R[bx]=8002H，OF=1，SF=1，CF=0，ZF=0`
    ),
    multipleChoice('20.假设 R[eax]=000001B6H，R[ebx]=00FF0110H，执行指令「mulw%bx」后，寄存器的内容变为（　　）。')(
        p`R[eax]=0000B600H，R[dx]=0001H`,
        answer(p`R[eax]=0000D160H，R[dx]=0001H`),
        p`R[eax]=0000D160H，R[bx]=0001H`,
        p`R[eax]=0001D160H，其余不变`
    ),
    multipleChoice('21.假设 R[eax]=0000B160H，R[ebx]=00FF0110H，执行指令「imulw%bx」后，寄存器的内容变为（　　）。')(
        p`R[eax]=00007600H，R[dx]=00BCH`,
        answer(p`R[eax]=00007600H，R[dx]=FFACH`),
        p`R[eax]=FFAC7600H，其余不变`,
        p`R[eax]=00BC7600，其余不变`
    ),
    multipleChoice(
        '22.假设 R[eax]=080480B4H，R[ebx]=00000011H，M[080480F8H]=000000B0H，执行指令「imull$-16，（%eax，%ebx，4），%eax」后，寄存器的内容和存储单元内容变为（　　）。'
    )(p`R[eax]=00000B00H`, p`M[080480F8H]=00000B00H`, answer(p`R[eax]=FFFFF500H`), p`M[080480F8H]=FFFFF500H`),
    multipleChoice('23.假设 R[eax]=FF000008H，R[ecx]=00001000H，执行指令「testl%eax，%ecx」后，寄存器的内容和标志变为（　　）。')(
        p`R[ecx]=00000000H，OF=CF=SF=0，ZF=1`,
        p`R[eax]=00000000H，OF=CF=SF=0，ZF=1`,
        p`R[ecx]=00000000H，标志不变`,
        answer(p`寄存器内容不变，OF=CF=SF=0，ZF=1`)
    ),
    multipleChoice('24.假设 short 型变量 x 被分配在寄存器 AX 中，若 R[ax]=FF70H，则执行指令「salw$2，%ax」后，变量 x 的机器数和真值分别是（　　）。')(
        answer(p`FDC0H，-576`),
        p`FFDCH，-36`,
        p`FDC3H，-573`,
        p`3FDC，16348`
    ),
    multipleChoice(
        '25.程序 P 中有两个 unsigned 类型变量 i 和 j，被分别分配在寄存器 EAX 和 EDX 中，P 中存在以下 if 语句：',
        
        precode(`if  (i<j) {…};`)(),
        
        p`该 if 语句对应的指令序列一定不会是（　　）。`
    )(p`cmpl %eax，%edx`, p`jbe　804847c`, p`cmpl %edx，%eax`, p`jb　8048460`, p`cmpl %eax，%edx`, p`ja　8048380`, answer(p`cmpl %eax，%edx`)),
    p`jae　8048480`,
    multipleChoice(
        '26.程序 P 中有两个 int 类型变量 i 和 j，被分别分配在寄存器 EAX 和 EDX 中，P 中存在以下 if 语句：',
        
        precode(`if  (i<j) {…};`)(),
        
        p`该 if 语句对应的指令序列一定不会是（　　）。`
    )(p`cmpl %eax，%edx`, p`jle　804847c`, p`cmpl %edx，%eax`, p`jl　8048460`, answer(p`cmpl %eax，%edx`), p`ja　8048380`, p`cmpl %eax，%edx`),
    p`jg　8048480`,
    multipleChoice(
        '27.程序 P 中有两个变量 i 和 j，被分别分配在寄存器 EAX 和 EDX 中，P 中语句「if（i<j）{…}」对应的指令序列如下（左边为指令地址，中间为机器代码，右边为汇编指令）：',
        
        precode(`804846a   39 c2      cmpl  %eax, %edx
804846c   7e 0d      jle   xxxxxxxx`)(),
        
        p`若执行到 804846a 处的 cmpl 指令时，i=105，j=100，则 jle 指令执行后将会转到（　　）处的指令执行。`
    )(p`8048461`, p`804846e`, p`8048479`, answer(p`804847b`)),
    multipleChoice('28.以下关于各类控制转移指令的叙述中，错误的是（　　）。')(
        p`无条件转移指令（JMP）直接将转移目标地址送到 EIP 寄存器中`,
        p`条件转移指令（Jcc）将根据 EFLAGS 寄存器中的标志信息进行条件判断`,
        answer(p`条件转移指令（Jcc）的判断条件可用于整数之间和浮点数之间的大小比较`),
        p`调用指令（CALL）和返回指令（RET）都是特殊的无条件转移指令`
    ),
    multipleChoice('29.以下关于 x87 FPU 浮点处理指令系统的叙述中，错误的是（　　）。')(
        p`提供 8 个 80 位浮点寄存器 ST（0）～ST（7），采用栈结构，栈顶为 ST（0）`,
        p`float、double 和 long double 三种类型数据都按 80 位格式存放在浮点寄存器中`,
        p`float、double 和 long double 型数据存入主存时，分别占 32 位、64 位和 96 位`,
        answer(p`float 和 double 型数据从主存装入浮点寄存器时有可能发生舍入，造成精度损失`)
    ),
    multipleChoice('30.以下关于 MMX/SSE 指令集的叙述中，错误的是（　　）。')(
        p`同一个微处理器同时支持 IA-32 指令集与 MMX/SSE 指令集`,
        answer(p`MMX/SSE 指令集和 IA-32 指令集共用同一套通用寄存器`),
        p`SSE 指令是一种采用 SIMD（单指令多数据）技术的数据级并行指令`,
        p`目前 SSE 支持 128 位整数运算或同时并行处理两个 64 位双精度浮点数`
    ),
    multipleChoice('31.假设 P 为调用过程，Q 为被调用过程，程序在 IA-32 处理器上执行，以下有关过程调用的叙述中，错误的是（　　）。')(
        p`C 语言程序中的函数调用就是过程调用`,
        answer(p`从 P 传到 Q 的实参无需重新分配空间存放`),
        p`从 P 跳转到 Q 执行应使用 CALL 指令`,
        p`从 Q 跳回到 P 执行应使用 RET 指令`
    ),
    multipleChoice(
        '32.假设 P 为调用过程，Q 为被调用过程，程序在 IA-32 处理器上执行，以下是 C 语言程序中过程调用所涉及的操作：',
        p`① 过程 Q 保存 P 的现场，并为非静态局部变量分配空间`,
        p`② 过程 P 将实参存放到 Q 能访问到的地方`,
        p`③ 过程 P 将返回地址存放到特定处，并跳转到 Q 执行`,
        p`④ 过程 Q 取出返回地址，并跳转回到过程 P 执行`,
        p`⑤ 过程 Q 恢复 P 的现场，并释放局部变量所占空间`,
        p`⑥ 执行过程 Q 的函数体`,
        p`过程调用的正确执行步骤是（　　）。`
    )(p`②→③→④→①→⑤→⑥`, p`②→③→①→④→⑥→⑤`, answer(p`②→③→①→⑥→⑤→④`), p`②→③→①→⑤→⑥→④`),
    multipleChoice('33.以下有关 IA-32 的过程调用方式的叙述中，错误的是（　　）。')(
        p`入口参数使用栈（stack）传递，即所传递的实参被分配在栈中`,
        p`返回地址是 CALL 指令下一条指令的地址，被保存在栈中`,
        p`EAX、ECX 和 EDX 都是调用者保存寄存器`,
        answer(p`EBX、ESI、EDI、EBP 和 ESP 都是被调用者保存寄存器`)
    ),
    multipleChoice('34.以下有关 IA-32/Linux 的过程调用的叙述中，错误的是（　　）。')(
        answer(p`在过程中通常先使用被调用者保存寄存器`),
        p`每个过程都有一个栈帧，其大小为 16B 的倍数`,
        p`通常 EBP 寄存器指向对应栈帧（stack frame）的底部`,
        p`通常每个栈帧底部单元中存放其调用过程的 EBP 内容`
    ),
    multipleChoice('35.以下有关 IA-32 的过程调用所使用的栈和栈帧的叙述中，错误的是（　　）。')(
        p`每进行一次过程调用，用户栈从高地址向低地址增长出一个栈帧`,
        p`从被调用过程返回调用过程之前，被调用过程会释放自己的栈帧`,
        answer(p`只能通过将栈指针 ESP 作为基址寄存器来访问用户栈中的数据`),
        p`过程嵌套调用深度越深，栈中栈帧个数越多，严重时会发生栈溢出`
    ),
    multipleChoice('36.以下有关 C 语言程序的变量的作用域和生存期的叙述中，错误的是（　　）。')(
        answer(p`静态（static 型）变量和非静态局部（auto 型）变量都分配在对应栈帧中`),
        p`因为非静态局部变量被分配在栈中，所以其作用域仅在过程体内`,
        p`非静态局部变量可以和全局变量同名，是因为它们被分配在不同存储区`,
        p`不同过程中的非静态局部变量可以同名，是因为它们被分配在不同栈帧中`
    ),
    multipleChoice(
        '37.以下是一段 C 语言程序代码：',
        precode(` 1　int add(int x, int y)
 2　{
 3　    return x+y;
 4　}
 5
 6　int caller( )
 7　{
 8　    int t1=100 ;
 9　    int t2=200;
10　    int sum=add(t1, t2);
11　    return sum;
12　}`)(),
        p`以下关于上述程序代码在 IA-32 上执行的叙述中，错误的是（　　）。`
    )(
        p`变量 t1 和 t2 被分配在 caller 函数的栈帧中`,
        answer(p`传递参数时 t1 和 t2 的值从高地址到低地址依次存入栈中`),
        p`add 函数返回时返回值存放在 EAX 寄存器中`,
        p`变量 sum 被分配在 caller 函数的栈帧中`
    ),
    multipleChoice(
        '38.第 37 题中的 caller 函数对应的机器级代码如下：',
        
        precode(` 1　pushl     %ebp
 2　movl     %esp, %ebp
 3　subl     $24, %esp
 4　movl     $100, -12(%ebp)
 5　movl     $200, -8(%ebp)
 6　movl     -8(%ebp), %eax
 7　movl     %eax, 4(%esp)
 8　movl     -12(%ebp), %eax
 9　movl     %eax, (%esp)
10　call     add
11　movl     %eax, -4(%ebp)
12　movl     -4(%ebp), %eax
13　leave
14　ret`)(),
        
        p`假定 caller 的调用过程为 P，对于上述指令序列，以下叙述中错误的是（　　）。`
    )(
        p`第 1 条指令将过程 P 的 EBP 内容压入 caller 栈帧`,
        p`第 2 条指令使 BEP 内容指向 caller 栈帧的底部`,
        answer(p`第 3 条指令将栈指针 ESP 向高地址方向移动，以生成当前栈帧`),
        p`从上述指令序列可看出，caller 函数没有使用被调用者保存寄存器`
    ),
    multipleChoice('39.对于第 37 题的 caller 函数以及第 38 题给出的对应机器级代码，以下叙述中错误的是（　　）。')(
        p`变量 t1 和 t2 的有效地址分别为 R[ebp]-12 和 R[ebp]-8`,
        answer(p`变量 t1 所在的地址高（或大）于变量 t2 所在的地址`),
        p`参数 t1 和 t2 的有效地址分别为 R[esp]和 R[esp]+4`,
        p`参数 t1 所在的地址低（或小）于参数 t2 所在的地址`
    ),
    multipleChoice('40.对于第 37 题的 caller 函数以及第 38 题给出的对应机器级代码，以下叙述中错误的是（　　）。')(
        p`执行第 10 条指令的过程中，将会把第 11 条指令的地址压入栈顶`,
        p`执行第 11 条指令时，add 函数的返回值已经在 EAX 寄存器中`,
        p`变量 sum 的有效地址为 R[ebp]-4`,
        answer(p`leave 指令用于恢复 EBP 的旧值，并不会改变 ESP 的内容`)
    ),
    multipleChoice('41.以下有关递归过程调用的叙述中，错误的是（　　）。')(
        p`可能需要执行递归过程很多次，因而时间开销大`,
        p`每次递归调用都会生成一个新的栈帧，因而空间开销大`,
        answer(p`每次递归调用在栈帧中保存的返回地址都不相同`),
        p`递归过程第一个参数的有效地址为 R[ebp]+8`
    ),
    multipleChoice('42.以下关于 if（cond_expr）then_statement else else_statement 选择结构对应的机器级代码表示的叙述中，错误的是（　　）。')(
        p`一定包含一条无条件转移指令`,
        p`一定包含一条条件转移指令（分支指令）`,
        p`计算 cond_expr 的代码段一定在条件转移指令之前`,
        answer(p`对应 then_statement 的代码一定在对应 else_statement 的代码之前`)
    ),
    multipleChoice('43.以下关于 switch 语句的机器级代码表示的叙述中，错误的是（　　）。')(
        p`当 case 中出现的条件取值范围较小时，可以用跳转表的方式实现`,
        answer(p`每个 case 至少对应一条条件转移指令，因而一定会包含多条条件转移指令`),
        p`每个 case 对应的一段代码结束后，都会有一条无条件转移指令`,
        p`可以用连续的 if～else～if～else～if…语句对应的机器代码来实现 switch 语句`
    ),
    multipleChoice('44.以下关于循环结构语句的机器级代码表示的叙述中，错误的是（　　）。')(
        p`一定至少包含一条条件转移指令`,
        p`不一定包含无条件转移指令`,
        p`循环结束条件通常用一条比较指令 CMP 来实现`,
        answer(p`循环体内执行的指令不包含条件转移指令`)
    ),
    multipleChoice('45.假定全局 short 型数组 a 的起始地址为 0x804908c，则 a[2]的地址是（　　）。')(
        p`0x804908e`,
        answer(p`0x8049090`),
        p`0x8049092`,
        p`0x8049094`
    ),
    multipleChoice('46.假定全局 double 型数组 a 的起始地址为 0x804908c，则 a[i]的地址是（　　）。')(
        p`0x804908c+i`,
        p`0x804908c+2×i`,
        p`0x804908c+4×i`,
        answer(p`0x804908c+8×i`)
    ),
    multipleChoice(
        '47.假定全局数组 a 的声明为 char*a[8]，a 的首地址为 0x80498c0，i 在 ECX 中，现要将 a[i]取到 EAX 相应宽度的寄存器中，则所用的汇编指令是（　　）。'
    )(p`mov0x80498c0（，%ecx），%ah`, p`mov（0x80498c0，%ecx），%ah`, answer(p`mov0x80498c0（，%ecx，4），%eax`), p`mov（0x80498c0，%ecx，4），%eax`),
    multipleChoice(
        '48.假定全局数组 a 的声明为 double*a[8]，a 的首地址为 0x80498c0，i 在 ECX 中，现要将 a[i]取到 EAX 相应宽度的寄存器中，则所用的汇编指令是（　　）。'
    )(
        answer(p`mov0x80498c0（，%ecx，4），%eax`),
        p`mov（0x80498c0，%ecx，4），%eax`,
        p`mov0x80498c0（，%ecx，8），%eax`,
        p`mov（0x80498c0，%ecx，8），%eax`
    ),
    multipleChoice('49.假定局部 int 型数组 a 的首地址在 EDX 中，i 在 ECX 中，现要将 a[i]取到 EAX 相应宽度的寄存器中，则所用的汇编指令是（　　）。')(
        p`mov（%edx，%ecx，2），%ax`,
        p`mov（%edx，%ecx，2），%eax`,
        p`mov（%edx，%ecx，4），%ax`,
        answer(p`mov（%edx，%ecx，4），%eax`)
    ),
    multipleChoice('50.假定局部数组 a 的声明为 int a[4]={0，-1，300，20}，a 的首地址为 R[ebp]-16，则在地址 R[ebp]-4 处存放的是（　　）。')(
        p`0`,
        p`-1`,
        p`300`,
        answer(p`20`)
    ),
    multipleChoice('51.假定局部数组 a 的声明为 int a[4]={0，-1，300，20}，a 的首地址为 R[ebp]-16，则将 a 的首地址取到 EDX 的汇编指令是（　　）。')(
        p`movl-16（%ebp），%edx`,
        p`movl-16（%ebp，4），%edx`,
        answer(p`leal-16（%ebp），%edx`),
        p`leal-16（%ebp，4），%edx`
    ),
    multipleChoice(
        '52.某 C 语言程序中有以下两个变量声明：',
        
        precode(`int  a[10];
int  *ptr=&a[0];`)(),
        
        p`则 ptr+i 的值为（　　）。`
    )(p`&a[0]+i`, p`&a[0]+2×i`, answer(p`&a[0]+4×i`), p`&a[0]+8×i`),
    multipleChoice('53.假定 int 型数组 a 的首址在 ECX 中，则「a 送 EAX」所对应的汇编指令是（　　）。')(
        answer(p`movl%ecx，%eax`),
        p`movl%edx，%eax`,
        p`leal（%ecx，0），%eax`,
        p`leal（%ecx，4），%eax`
    ),
    multipleChoice('54.假定 int 型数组 a 的首址在 ECX 中，i 在 EDX 中，则「&a[i]-a 送 EAX」所对应的汇编指令是（　　）。')(
        p`movl%ecx，%eax`,
        answer(p`movl%edx，%eax`),
        p`leal（，%ecx，4），%eax`,
        p`leal（，%edx，4），%eax`
    ),
    multipleChoice('55.假定 int 型数组 a 的首址在 ECX 中，则「&a[4]送 EAX」所对应的汇编指令是（　　）。')(
        p`movl4（%ecx），%eax`,
        p`movl16（%ecx），%eax`,
        p`leal4（%ecx），%eax`,
        answer(p`leal16（%ecx），%eax`)
    ),
    multipleChoice('56.假定 int 型数组 a 的首址在 ECX 中，i 在 EDX 中，则「*（a+i）送 EAX」所对应的汇编指令是（　　）。')(
        answer(p`movl（%ecx，%edx，4），%eax`),
        p`movl（%edx，%ecx，4），%eax`,
        p`leal（%ecx，%edx，4），%eax`,
        p`leal（%edx，%ecx，4），%eax`
    ),
    multipleChoice('57.假定 int 型数组 a 的首址在 ECX 中，i 在 EDX 中，则「a+i-1 送 EAX」所对应的汇编指令是（　　）。')(
        p`movl-1（%ecx，%edx，4），%eax`,
        p`movl-4（%ecx，%edx，4），%eax`,
        p`leal-1（%ecx，%edx，4），%eax`,
        answer(p`leal-4（%ecx，%edx，4），%eax`)
    ),
    multipleChoice(
        '58.假定静态 short 型二维数组 b 的声明如下：',
        
        precode(`static short b[2][4]={ {2, 9, -1, 5}, {3, 8, 2, -6}};`)(),
        
        p`若 b 的首地址为 0x8049820，则按行优先存储方式下，数组元素「8」的地址是（　　）。`
    )(p`0x8049825`, answer(p`0x804982a`), p`0x8049824`, p`0x8049828`),
    multipleChoice(
        '59.假定静态 short 型二维数组 b 的声明如下：',
        
        precode(`static short b[2][4]={ {2, 9, -1, 5}, {3, 1, -6, 2 }};`)(),
        
        p`若 b 的首地址为 0x8049820，则按行优先存储方式下，地址 0x804982c 中的内容是（　　）。`
    )(answer(p`0xfa`), p`0xff`, p`0x00`, p`0x05`),
    multipleChoice(
        '60.假定静态 short 型二维数组 b 和指针数组 pb 的声明如下：',
        
        precode(`static short b[2][4]={ {2, 9, -1, 5}, {3, 1, -6, 2 }};
static short *pb[2]={b[0], b[1]};`)(),
        
        p`若 b 的首地址为 0x8049820，则 pb[1]的值是（　　）。`
    )(p`0x8049820`, p`0x8049822`, p`0x8049824`, answer(p`0x8049828`)),
    multipleChoice(
        '61.假定静态 short 型二维数组 b 和指针数组 pb 的声明如下：',
        
        precode(`static short b[2][4]={ {2, 9, -1, 5}, {3, 1, -6, 2 }};
static short *pb[2]={b[0], b[1]};`)(),
        
        p`若 b 的首地址为 0x8049820，则&pb[1]的值是（　　）。`
    )(p`0x8049830`, p`0x8049832`, answer(p`0x8049834`), p`0x8049838`),
    multipleChoice(
        '62.假定静态 short 型二维数组 b 和指针数组 pb 的声明如下：',
        
        precode(`static short b[2][4]={ {2, 9, -1, 5}, {3, 1, -6, 2 }};
static short *pb[2]={b[0], b[1]};`)(),
        
        p`若 b 和 pb 的首地址分别为 0x8049820、0x8049830，i 在 ECX 中，则「*pb[i]送 EAX」所对应的汇编指令序列是（　　）。`
    )(
        p`movl 0x8049820（，%ecx，4），%edx`,
        p`movl（%edx），%eax`,
        p`movl 0x8049820（，%ecx，4），%edx`,
        p`leal（%edx），%eax`,
        answer(p`movl 0x8049830（，%ecx，4），%edx`),
        p`movl（%edx），%eax`,
        p`movl 0x8049830（，%ecx，4），%edx`
    ),
    p`leal（%edx），%eax`,
    multipleChoice(
        '63.假定结构体类型 cont_info 的声明如下：',
        
        precode(`struct cont_info {
           char id[8];
           char name [16];
           unsigned post;
           char address[100];
           char phone[20];
} ;`)(),
        
        p`若结构体变量 x 初始化定义为 struct cont_info x={「00000010」，「ZhangS」，210022，「273 long street，High Building#3015」，「12345678」}，x 的首地址在 EDX 中，则「unsigned xpost=x.post；」所对应的汇编指令为（　　）。`
    )(p`movl0x24（%edx），%eax`, answer(p`movl0x18（%edx），%eax`), p`leal0x24（%edx），%eax`, p`leal0x18（%edx），%eax`),
    multipleChoice(
        '64.假定结构体类型 cont_info 的声明如下：',
        
        precode(`struct cont_info {
           char id[8];
           char name [16];
           unsigned post;
           char address[100];
           char phone[20];
} ;`)(),
        
        p`若变量 x 的数据类型为 struct cont_info，x 的首址在 EDX 中，则「unsigned xpost=x.post；」所对应的汇编指令为（　　）。`
    )(p`movl0x24（%edx），%eax`, answer(p`movl0x18（%edx），%eax`), p`leal0x24（%edx），%eax`, p`leal0x18（%edx），%eax`),
    multipleChoice(
        '65.假定结构体类型 cont_info 的声明如下：',
        
        precode(`struct cont_info {
           char id[8];
           char name [16];
           unsigned post;
           char address[125];
           char phone[20];
} ;`)(),
        
        p`若变量 x 的数据类型为 struct cont_info，x 的首地址为 0x8049820，则字段 x.phone 的起始地址为（　　）。`
    )(answer(p`0x80498b9`), p`0x80498cd`, p`0x8049973`, p`0x8049993`),
    multipleChoice(
        '66.假定联合体类型 node 的声明如下：',
        
        precode(`union node {
        struct {
               int *ptr;
               int data1
        } node1；
        struct {
               int data2;
               union node *next;
        } node2;
};`)(),
        
        p`node 定义了一个单向链表，函数 node_proc 用来处理仅有两个节点的链表，其定义为：`,
        
        precode(`void node_proc(union node *np) {
   np->node2.next->node1.data1=*(np->node2.next->node1.ptr);
}`)(),
        
        p`已知参数 np 所在的地址为 R[ebp]+8，则函数 node_proc 中赋值语句对应的汇编代码序列为（　　）。`
    )(
        answer(p`movl8（%ebp），%edx`),
        p`movl4（%edx），%edx`,
        p`movl（%edx），%ecx`,
        p`movl（%ecx），%ecx`,
        p`movl%ecx，4（%edx）`,
        p`movl8（%ebp），%edx`,
        p`movl4（%edx），%edx`,
        p`movl（%edx），%ecx`,
        p`movl（%ecx），%ecx`,
        p`movl4（%edx），%ecx`,
        p`movl8（%ebp），%edx`,
        p`movl4（%edx），%edx`,
        p`movl（%edx），%ecx`,
        p`movl%ecx，4（%edx）`,
        p`movl8（%ebp），%edx`
    ),
    p`movl4（%edx），%edx`,
    p`leal4（%edx），%ecx`,
    p`movl%ecx，4（%edx）`,
    multipleChoice('67.以下关于 IA-32 处理器对齐方式的叙述中，错误的是（　　）。')(
        p`不同操作系统采用的对齐策略可能不同`,
        p`可以用编译指导语句（如#pragma pack）设置对齐方式`,
        answer(p`总是按其数据宽度进行对齐，例如，double 型变量的地址总是 8 的倍数`),
        p`对于同一个 struct 型变量，在不同对齐方式下可能会占用不同大小的存储区`
    ),
    multipleChoice('68.以下有关缓冲区溢出以及缓冲区溢出攻击的叙述中，错误的是（　　）。')(
        p`当传送到栈中局部数组中的字符的个数超过数组长度时发生缓冲区溢出`,
        p`恶意程序可利用像 strcpy 等无字符串长度设定的 C 库函数进行缓冲区溢出攻击`,
        p`只要发生缓冲区溢出，寄存器内容或变量或返回地址等程序信息就可能被修改`,
        answer(p`只要发生缓冲区溢出，CPU 就会跳转到恶意程序事先设定好的程序去执行`)
    ),
    multipleChoice('69.以下有关 IA-32 和 x86-64 之间比较的叙述中，错误的是（　　）。')(
        p`IA-32 的字长为 32 位，x86-64 的字长为 64 位并兼容 IA-32`,
        p`IA-32 的通用寄存器有 8 个，而 x86-64 的通用寄存器有 16 个`,
        p`IA-32 的通用寄存器为 8/16/32 位，而 x86-64 的通用寄存器为 8/16/32/64 位`,
        answer(p`（unsigned）long 型变量在 IA-32 和 x86-64 中的长度都是 64 位（四字）`)
    ),
    multipleChoice('70.以下有关 x86-64 寄存器的叙述中，错误的是（　　）。')(
        p`用来存放将要执行的指令的地址的指令指针寄存器为 64 位的 RIP`,
        p`基址寄存器和变址寄存器都可以是任意一个 64 位的通用寄存器`,
        answer(p`任何浮点操作数都被分配在浮点寄存器栈（ST（0）～ST（7））中`),
        p`128 位的 XMM 寄存器从原来 IA-32 中的 8 个增加到 16 个`
    ),
    multipleChoice('71.以下有关 x86-64 对齐方式的叙述中，错误的是（　　）。')(
        p`short 型数据必须按 2 字节边界对齐`,
        p`int、float 型数据必须按 4 字节边界对齐`,
        p`long、double、指针型数据必须按 8 字节边界对齐`,
        answer(p`long double 型数据在内存占 12 字节空间（96 位）`)
    ),
    multipleChoice('72.以下有关 x86-64 传送指令的叙述中，错误的是（　　）。')(
        p`相比 IA-32，增加了 movq 指令，可传送 64 位数据`,
        p`movl 相当于 movzlq，能将目的寄存器高 32 位清 0`,
        answer(p`pushq 和 popq 分别对 ESP 寄存器减 8 和加 8`),
        p`movzbq 的功能是将 8 位寄存器内容零扩展为 64 位`
    ),
    multipleChoice('73.假定变量 x 的类型为 int，对于变量 y 的初始化声明「long y=（long）x；」，其对应的汇编指令是（　　）。')(
        answer(p`movslq%edx，%rax`),
        p`movzlq%edx，%rax`,
        p`movq%rdx，%rax`,
        p`movl%edx，%eax`
    ),
    multipleChoice('74.假定变量 x 的类型为 long，对于变量 y 的初始化声明「int y=（int）x；」，其对应的汇编指令不可能是（　　）。')(
        p`movl%edx，%eax`,
        p`movzlq%edx，%rax`,
        p`movslq%edx，%rax`,
        answer(p`movsql%rdx，%eax`)
    ),
    multipleChoice(
        '75.以下是 C 语言赋值语句「x=a*b+c；」对应的 x86-64 汇编代码：',
        
        precode(`    movslq  %edx, %rdx
    movsbl  %sil, %esi
    imull  %edi, %esi
    movslq  %esi, %rsi
    leaq  (%rdx, %rsi), %rax`)(),
        
        p`已知 x、a、b 和 c 分别在 RAX、RDI、RSI 和 RDX 对应宽度的寄存器中，根据上述汇编指令序列，推测 x、a、b 和 c 的数据类型分别为（　　）。`
    )(p`x—long，a—long，b—char，c—int`, answer(p`x—long，a—int，b—char，c—int`), p`x—long，a—long，b—char，c—long`, p`x—long，a—int，b—char，c—long`),
    multipleChoice(
        '76.假定 long 型变量 t、int 型变量 x 和 short 型变量 y 分别在 RAX、RDI 和 RSI 对应宽度的寄存器中，C 语言赋值语句「t=（long）（x+y）；」对应的 x86-64 汇编指令序列不可能是（　　）。'
    )(
        p`movswl %si，%edx`,
        p`addl %edi，%edx`,
        p`movslq %edx，%rax`,
        p`movswq %si，%rax`,
        p`movslq %edi，%rdx`,
        p`addq %rdx，%rax`,
        answer(p`movswq %si，%rdx`),
        p`leaq （%rdx，%rdi），%rax`,
        p`movswq %si，%rsi`
    ),
    p`movslq %edi，%rdi`,
    p`leaq （%rsi，%rdi），%rax`,
    multipleChoice('77.以下关于 x86-64 过程调用的叙述中，错误的是（　　）。')(
        p`前 6 个参数采用通用寄存器传递，其余参数通过栈传递`,
        answer(p`在通用寄存器中传递的参数，都存放在 64 位寄存器中`),
        p`在栈中的参数若是基本类型，则被分配 8 个字节空间`,
        p`返回参数存放在 RAX 相应宽度的寄存器中`
    ),
    multipleChoice('78.以下关于 IA-32 和 x86-64 指令系统比较的叙述中，错误的是（　　）。')(
        p`对于 64 位数据，x86-64 可用一条指令处理，而 IA-32 需多条指令处理`,
        p`对于入口参数，x86-64 可用通用寄存器传递，而 IA-32 需用栈来传递`,
        p`对于浮点操作数，x86-64 存于 128 位的 XMM 中，而 IA-32 存于 80 位的 ST（i）中`,
        answer(p`对于返回地址，x86-64 使用通用寄存器保存，而 IA-32 使用栈来保存`)
    ),
    section('部分题目的答案解析')(
        section('第 18 题')(
            p`指令在补码加减运算部件中执行：1111111111101000+0111111111100110=（1）0111111111001110（7FCEH），结果无溢出（OF=0）、正数（SF=0）、有进位（CF=1⊕0=1）、非 0（ZF=0）。`
        ),
        section('第 19 题')(
            p`指令在补码加减运算部件中执行：1111111111101000+1000000000011001+1=（1）1000000000000010（8002H），结果无溢出（OF=0）、负数（SF=1）、有进位（CF=1⊕1=0）、非 0（ZF=0）。`
        ),
        section('第 20 题')(
            p`因为一个源操作数为 BX 寄存器中的内容，所以只要将 AX 和 BX 中的内容相乘即可。指令在无符号乘法部件中执行，01B6H*0110H=0001D160H，DX 寄存器内容为 0001H，AX 寄存器中的内容为 D160H，EAX 中高 16 位不变。`
        ),
        section('第 21 题')(
            p`因为一个源操作数为 BX 寄存器中的内容，所以只要将 AX 和 BX 中的内容相乘即可。指令在带符号乘法部件中执行，B160H*0110H=FFFB1600+FFB16000=FFAC7600H，DX 寄存器内容为 FFACH，AX 寄存器内容为 7600H，EAX 中高 16 位不变。`
        ),
        section('第 22 题')(
            p`指令中给定的一个源操作数在内存单元中，其地址为 R[eax]+R[ebx]*4=080480B4H+00000011H*4=080480F8H。所以指令的功能是 R[eax]←M[080480F8H]*（-16）=（-000000B0H）<<4=FFFFFF50<<4=FFFFF500。`
        ),
        section('第 23 题')(
            p`TEST 指令不会改变通用寄存器内容，只会通过做与操作来改变标志，显然，EAX 和 ECX 两个寄存器内容相与后的结果为 0，所以 ZF=1，SF=0。除 NOT 指令外，其他逻辑指令（包括 TEST 指令）执行后 OF=CF=0，因此，答案为 D。`
        ),
        section('第 24 题')(
            p`salw 指令是算术左移指令，对 FF70=1111111101110000 算术左移 2 位后，结果为 1111110111000000（FDC0H），真值为-1001000000B=-（512+64）=-576。`
        ),
        section('第 25 题')(
            p`A 选项：表示的是 j≤i，相当于 i<j 取反，且按无符号整数比较，因此正确。`,
            p`B 选项：表示的是 i<j，且按无符号整数比较，因此正确。`,
            p`C 选项：表示的是 j>i，相当于 i<j，且按无符号整数比较，因此正确。`,
            p`D 选项：表示的是 j≥i，与要求不符，因此不正确。`
        ),
        section('第 26 题')(
            p`A 选项：表示的是 j≤i，相当于 i<j 取反，且按带符号整数比较，因此正确。`,
            p`B 选项：表示的是 i<j，且按带符号整数比较，因此正确。`,
            p`C 选项：表示的是 j>i，相当于 i<j，但是按无符号整数比较，因此不正确。`,
            p`D 选项：表示的是 j>i，且按带符号整数比较，因此正确。`
        ),
        section('第 27 题')(
            p`因为 cmpl 指令中 EDX 内容为 100，EAX 内容为 105，对这两个数做减法，显然 100<105，满足 jle 指令小于或等于的条件，执行完 jle 指令后将转移到 PC+ 偏移量 =0x84846c+2+0d=0x804847b 去执行。`
        )
    )
).elem
