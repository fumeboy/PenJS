import { p, section, precode, img, code } from '@src/components/@write'
import pic8_6_1 from './8-6-1.jpg'
import pic8_6_2 from './8-6-2.jpg'
import pic8_6_3 from './8-6-3.jpg'
import pic8_6_4 from './8-6-4.jpg'
import pic8_6_5 from './8-6-5.jpg'
import pic8_6_6 from './8-6-6.jpg'
import pic8_6_7 from './8-6-7.jpg'
import pic8_6_8 from './8-6-8.jpg'
import pic8_6_9 from './8-6-9.jpg'
import pic8_6_10 from './8-6-10.jpg'
import pic8_6_11 from './8-6-11.jpg'
import pic8_6_12 from './8-6-12.jpg'
import pic8_6_13 from './8-6-13.jpg'
import pic8_6_14 from './8-6-14.jpg'
import pic8_6_15 from './8-6-15.jpg'
import pic8_6_16 from './8-6-16.jpg'
import pic8_6_17 from './8-6-17.jpg'
import pic8_6_18 from './8-6-18.jpg'
import pic8_6_19 from './8-6-19.jpg'
import pic8_6_20 from './8-6-20.jpg'
import pic8_6_21 from './8-6-21.jpg'
const title = '8.6　分析应用题'
const page = section(title)(
    section('1.以下是在 IA-32/Linux 系统中执行的用户程序 P 的汇编代码：')(

        precode(` 1　# hello.s
 2　# display a string 「Hello， world.」
 3
 4　.section .rodata
 5　msg:
 6　.ascii 「Hello， world.\n」
 7
 8　.section .text
 9　.globl _start
10　_start:
11
12　movl $4， %eax           #系统调用号（sys_write）
13　movl $1， %ebx           #file descriptor（参数一）:文件描述符（stdout）
14　movl $msg， %ecx         #string address（参数二）:要显示的字符串 
15　movl $14， %edx          #string length（参数三）:字符串长度 
16　int $0x80               #调用内核功能 
17
18　movl $1， %eax           #系统调用号（sys_exit）
19　movl $0， %ebx           #参数一:退出代码 
20　int $0x80               #调用内核功能`)(),

        p`针对上述汇编代码，回答下列问题。`,
        p`（1）程序的功能是什么？`,
        p`（2）执行到哪些指令时会发生从用户态转到内核态执行的情况？`,
        p`（3）该用户程序调用了哪些系统调用？`,
        section('分析解答')(
            p`（1）程序的功能是在标准输出设备（文件描述符为 stdout）上显示字符串「Hello，world.」。`,
            p`（2）执行到第 16、20 行的「int$0x80」指令时从用户态转到内核态执行。`,
            p`（3）该用户程序第 16 行指令调用了 4 号系统调用 write，对应服务例程为 sys_write（）函数；第 20 行指令调用了 1 号系统调用 exit，对应服务例程为 sys_exit（）函数。`
        )
    ),
    section('2.上述第 1 题中用户程序的功能可以用以下 C 语言代码来实现：')(

        precode(`1　int main()
2　{
3　    write(1, "Hello, world.\n", 14);
4　    exit(0);
5　}`)(),

        p`针对上述 C 代码，回答下列问题或完成下列任务。`,
        p`（1）执行 write（）函数时，传递给 write（）的实参在 main 栈帧中的存放情况怎样？`,
        p`（2）从执行 write（）函数开始到调出 write 系统调用服务例程 sys_write（）执行的过程中，其函数调用关系是怎样的？要求画图说明。`,
        p`（3）就程序设计的便捷性和灵活性以及程序执行性能等方面，与第 1 题中的实现方式进行比较，并说明哪个执行时间更短？`,
        section('分析解答')(
            p`（1）用「objdump-d」命令将对应的可执行文件反汇编后，其 main（）函数对应的机器级指令序列如图 8.1 和图 8.2 所示，其中，图 8.1 是动态链接生成目标的反汇编结果，图 8.2 是静态链接生成目标的反汇编结果。`,
            img(pic8_6_1)('图 8.1　动态链接下 main 函数的反汇编结果'),
            img(pic8_6_2)('图 8.2　静态链接下 main 函数的反汇编结果'),
            p`从上述指令序列可以看出，在使用 call 指令调用 write（）函数之前，main 函数在自身栈帧中传递了三个参数，首先在地址 R[esp]+8 处存放了 14（0xe），然后在 R[esp]+4 处存放了 0x8048510（动态链接）或 0x80aa848（静态链接），这个是指向字符串「Hello，world.\n」的指针，最后在 R[esp]处存放了 0x1。根据上述指令可以画出如图 8.3 所示的实参（动态链接时）在 main 栈帧中的存放情况。`,
            img(pic8_6_3)('图 8.3　main 栈帧中的数据'),
            p`（2）从执行 write（）函数开始到调出 write 系统调用服务例程 sys_write（）执行的过程中，首先通过 call 指令进入 write 封装函数执行。图 8.1 中的指令${code('「call 8048350<write@plt>」')}（动态链接情况下）或图 8.2 中的指令${code('「call 804f8d0<__libc_write>」')}（静态链接情况下）执行后，便进入封装函数 write（）执行。`,
            p`静态链接情况下，进入 write（）封装函数后的反汇编结果如图 8.4 所示。`,
            img(pic8_6_4)('图 8.4　静态链接下__libc_write 的反汇编结果'),
            p`如图 8.4 所示，进入封装函数 write（）以后，会执行一段包含陷阱指令（软中断指令）「int$0x80」的一个指令序列。在执行陷阱指令（软中断指令）「int$0x80」之前，有 4 条 MOV 指令，其中有 3 条 MOV 指令用来将 main 栈帧中的 3 个参数：字符串长度（0xe）、指向字符串「Hello，world.\n」的指针、文件描述符（0x1），分别送 EDX、ECX、EBX；还有 1 条 MOV 指令用来将调用号（4）送 EAX。`,
            p`这样，当执行到完「int$0x80」指令后，就从用户态陷入内核态，调出系统调用处理程序 system_call（）执行。在 system_call（）中，根据系统调用号为 4，再跳转到相应的系统调用服务例程 sys_write（）执行，以完成将一个字符串写入文件的功能，其中，字符串的首地址由 ECX 指定，字符串的长度由 EDX 指出，写入文件的文件描述符由 EBX 指出。system_call（）执行结束时，从内核返回的参数存放在 EAX 中。`,
            p`函数调用关系如图 8.5 所示。`,
            img(pic8_6_5)('图 8.5　函数调用关系'),
            p`（3）显然，对于第 1 题给出的实现方式，其程序设计的便捷性和灵活性都不如本题给出的实现方式，第 1 题采用汇编程序设计方式，只要参数不同，就需要重新编写不同的指令；而本题采用高级语言程序设计方式，只要在 write（）函数中改变不同的实参，就可以完成不同的功能。`,
            p`不过，第 1 题实现方式下的程序执行性能比本题实现方式好，因为用汇编实现时，省去了高级语言程序中大量的函数调用，因而它的执行时间更短。`
        )
    ),
    section('3.上述第 1 题和第 2 题中用户程序的功能可以用以下 C 语言代码来实现：')(

        precode(`
1　#include <stdio.h>
2　int main()
3　{
4　    printf( "Hello, world.\n");
5　}`)(),

        p`假定源程序文件名为 hello.c，可重定位目标文件名为 hello.o，可执行目标文件名为 hello，程序用 GCC 编译驱动程序处理，在 IA-32/Linux 系统中执行。回答下列问题或完成下列任务。`,
        p`（1）为什么在 hello.c 的开头需加「#include<stdio.h>」？为什么 hello.c 中没有定义 printf（）函数，也没有它的原型声明，但 main（）函数引用它时没有发生错误？`,
        p`（2）需要经过哪些步骤才能在机器上执行 hello 程序？要求详细说明各个环节的处理过程。`,
        p`（3）为什么 printf（）函数中没有指定字符串的输出目的地，但执行 hello 程序后会在屏幕上显示字符串？`,
        p`（4）字符串「Hello，world.\n」在机器中对应的 0/1 序列（机器码）是什么？这个 0/1 序列存放在 hello.o 文件的哪个节中？这个 0/1 序列在可执行目标文件 hello 的哪个段中？`,
        p`（5）若采用静态链接，则需要用到 printf.o 模块来解析 hello.o 中的外部引用符号 printf，printf.o 模块在哪个静态库中？静态链接后，printf.o 中的代码部分（.text 节）被映射到虚拟地址空间的哪个段中？若采用动态链接，则函数 printf（）的代码在虚拟地址空间中的何处？`,
        p`（6）假定 printf（）函数最终调用的 write 系统调用的封装函数为 write（），其对应的汇编代码如图 8.6 所示。`,
        img(pic8_6_6)('图 8.6　封装函数 write 的反汇编结果'),
        p`请给出以上每条汇编指令的注释，并说明该 Linux 系统中系统调用返回的最大错误号是多少？`,
        p`（7）就程序设计的便捷性和灵活性以及程序执行性能等方面，与第 1 题和第 2 题中的实现方式分别进行比较，并分析说明哪个执行时间更短？`,
        section('分析解答')(
            p`（1）因为 hello.c 中使用了 C 标准库函数 printf（），所以需在 hello.c 文件的开头加「#include<stdio.h>」。因为在 stdio.h 头文件中有 printf（）函数的原型声明，并且 printf（）函数是 C 标准库函数，所以，虽然 hello.c 中没有定义 printf（）函数，也没有它的原型声明，但是通过对 hello.c 和 stdio.h 的预处理，编译器会得到 printf（）的原型声明，从而获得符号 printf 的相关信息，使得链接器进行链接的时候，能够从标准 C 库（libc.a 或 libc.so）中得到 printf 模块的信息，完成链接工作。`,
            p`（2）需要经过预处理、编译、汇编、链接才能生成可执行文件 hello，然后通过启动 hello 程序执行。预处理阶段主要是对带#的语句进行处理；编译阶段主要是将预处理后的源程序文件编译生成汇编语言程序；汇编阶段主要是将汇编语言源程序转换为可重定位的机器语言目标代码文件；链接阶段将多个可重定位的机器语言目标代码以及库函数链接起来，生成最终的可执行文件。`,
            p`（3）因为 printf（）函数默认的输出设备为标准输出设备 stdout，所以无需指定字符串的输出目的地。执行 hello 程序后，自动会在 stdout 设备（屏幕上）显示字符串。`,
            p`（4）字符串「Hello，world.\\n」在机器中对应的 0/1 序列（机器码）是该字符串中每个字符对应的 ASCII 码，即「48H 65H 6CH 6CH 6FH 2CH 77H 6FH 72H 6CH 64H 0AH 00H」。这个 0/1 序列存放在 hello.o 文件的.rodata 节中，作为只读数据使用，所以从第 2 题图 8.1 中的汇编指令「movl$0x8048510，0x4（%esp）」可以看到，字符串的首地址是一个绝对地址 0x8048510，这个 0/1 序列在可执行目标文件 hello 的只读代码段（read-only code segment）中。`,
            p`（5）若采用静态链接，则需要用到 printf.o 模块来解析 hello.o 中的外部引用符号 printf，printf.o 模块在静态库 libc.a 中。静态链接后，printf.o 中的代码部分（.text 节）被映射到虚拟地址空间的只读代码段（read-only code segment）中。若采用动态链接，则函数 printf（）的代码在虚拟地址空间中的共享库映射区。`,
            p`（6）write（）函数的调用语句为：`,

            precode(`write(1, "Hello, world.\\n", 14);`)(),

            p`参数按照从右向左的顺序压栈，即 14 先压栈，然后是字符串的首地址压栈，最后是 fd=1 压栈。随后执行 call 指令，将返回地址压栈后跳转到 write 代码执行。在 write 代码中，第一条指令将 EBX 压栈。此时栈中的状态如图 8.7 所示。可以看出，在地址 R[esp]+8 处存放了 fd=1，在 R[esp]+12 处存放了指向字符串「Hello，world.\n」的指针，在 R[esp]+16 处存放了 14。write 对应汇编指令的注释如下。`,
            img(pic8_6_7)('图 8.7　调用 write 的过程的栈帧'),

            precode(`804f8fa: 53                 push      %ebx                 // 被调用者保存寄存器 EBX 入栈 
804f8fb: 8b 54 24 10        mov       0x10（%esp）， %edx     // 将字符串长度 14 送 EDX
804f8ff: 8b 4c 24 0c        mov       0xc（%esp）， %ecx      // 将字符串首地址送 ECX
804f903: 8b 5c 24 08        mov       0x8（%esp）， %ebx      // 将文件描述符 fd=1 送 EBX
804f907: b8 04 00 00 00     mov       $0x4， %eax           // 将调用号 4 送 EAX
804f90c: cd 80              int       $0x80                // 系统调用入口 
804f90e: 5d                 pop       %ebx                 // 恢复 EBX 的旧值 
804f90f: 3d 01 f0 ff ff     cmp       $0xfffff001， %eax    // 系统调用返回值与 0xfffff001 比 
804f914: 0f 83 f6 1f 00 00  jae       8051910 <__syscall_error>     // 大于等于时转出错处理 
804f91a: c3                 ret                            // 返回到调用 write 的过程`)(),

            p`从上述代码可以看出，该 Linux 系统中系统调用返回的最大错误号是 4095。因为当返回值大于等于 0xfffff001 时进行出错处理，显然，这些值在 0xfffff001（-4095）和 0xffffffff（-1）之间，通常错误号是正整数，因此需要对其取负，故错误号范围为 1～4095。`,
            p`（7）显然，第 1 题和第 2 题给出的实现方式，其程序设计的便捷性和可移植性都不如本题给出的实现方式，第 1 题采用汇编程序设计方式，只要参数不同，就需要重新编写不同的指令；第 2 题采用 write 函数直接进行系统调用，只能在支持 write 系统调用的系统（即类 UNIX）中执行。而本题给出的是 C 库函数调用，所以可以在不同的系统中执行，只要该系统具有 C 语言程序设计环境即可，因而本题给出的程序的可移植性更好。`,
            p`不过，第 1 题实现方式下的程序执行性能最好，因为用汇编实现时，省去了高级语言程序中大量的函数调用，因而它的执行时间最短。`
        )
    ),
    section(
        '4.存储器总线采用同步通信方式，假定时钟频率为 50MHz 时钟，每个总线事务以突发方式传输 8 个字，以支持块长为 8 个字的 cache 行读和 cache 行写，每字 4 字节。对于读操作，访问顺序是 1 个时钟周期接收地址，3 个时钟周期等待存储器读数，8 个时钟周期用于传输 8 个字。对于写操作，访问顺序是 1 个时钟周期接收地址，2 个时钟周期延迟，8 个时钟周期用于传输 8 个字，3 个时钟周期恢复和写入纠错码。'
    )(
        p`（1）该存储器总线的带宽是多少？`,
        p`（2）当全部访问为连续的读操作时，该存储器总线的数据传输率是多少？`,
        p`（3）当全部访问为连续的写操作时，该存储器总线的数据传输率是多少？`,
        section('分析解答')(
            p`（1）读取 8 个字用了 1+3+8=12 个时钟周期，故数据传输率为 8×4B/（12×1/50M）=133.3MB/s。`,
            p`（2）写入 8 个字用了 1+2+8+3=14 个时钟周期，故数据传输率为 8×4B/（14×1/50M）=114.3MB/s。`,
            p`（3）可用两种方式估算。若用数据传输率加权平均，则为 133.3×65%+114.3×35%=126.7MB/s；若用时钟周期数的加权平均，则为 8×4B/（（12×65%+14×35%）×1/50M）=126.0MB/s。`
        )
    ),
    section(
        '5.假定采用独立编址方式对 I/O 端口进行编号，那么必须为处理器设计哪些指令来专门用于进行 I/O 端口的访问？连接处理器的总线必须提供哪些控制信号来表明访问的是 I/O 空间？'
    )(
        section('分析解答')(
            p`若采用独立编址方式对 I/O 端口进行编号，则主存地址编号和 I/O 端口编号可能会相同，所以，无法利用访存指令来访问 I/O 端口，必须提供专门的输入/输出指令，包括 I/O 读指令和 I/O 写指令。在执行 I/O 指令时，CPU 会送出相应的 I/O 读和 I/O 写控制信号，以使和执行访存指令时送出的存储器读和存储器写信号有所区别。`
        )
    ),
    section(
        '6.假设有一个磁盘，每面有 200 个磁道，盘面总存储容量为 1.6MB（1M=106），磁盘旋转一周时间为 25ms，每道有 4 个数据区，每两个数据区之间有一个间隙，磁头通过每个间隙需 1.25ms。请回答下列问题：'
    )(
        p`（1）从该磁盘上读取数据时的最大数据传输率是多少？`,
        p`（2）假如有人为该磁盘设计了一个与主机之间的接口，如图 8.8 所示，磁盘每读出一位，串行送入一个移位寄存器，每当移满 16 位后向处理器发出一个请求交换数据的信号。在处理器响应该请求信号并读取移位寄存器内容的同时，磁盘继续读出一位一位数据并串行送入移位寄存器，如此继续工作。已知处理器在接收到请求交换的信号以后，最长响应时间是 3μs，那么这样设计的接口能否正确工作？若不能，则应如何改进？`,
        img(pic8_6_8)('图 8.8　题 6 中的示意图'),
        section('分析解答')(
            p`（1）磁道容量为（1.6×106）B/200=8000B，数据区容量为 8000B/4=2000B，转过一个数据区的时间为（25ms-1.25ms×4）/4=5ms，因而磁盘的最大数据传输率为 2000B/5ms=4×105B/s=0.4MB/s。`,
            p`（2）磁盘传送 1 位的时间为 106/（8×4×105）=0.31μs<<3μs。因为传送 1 位的时间小于 3μs，因此，当处理器经过 3μs 来读取移位寄存器中的数据时，磁盘已经读出了新的数据位，并将原先请求被读的移位寄存器中的数据冲刷掉了。显然，这样的设计接口不能正确工作。传送一个字（16 位）所用的时间为 106×2B/（4×105）B/s=5μs>3μs，所以可以在磁盘接口中增加一个 16 位数据缓冲器。当 16 位移位寄存器装满后，首先送入数据缓冲寄存器，在读出下一个 16 位数据期间，上次读出的 16 位数据从数据缓冲器中被取走。`
        )
    ),
    section(
        '7.假定一个政府机构同时监控 100 路移动电话的通话消息，通话消息被分时复用到一个带宽为 4MB/s 的网络上，100 路复用使得每传送 1KB（1K=1024）的通话消息需额外开销 150μs，若通话消息的采样频率为 4kHz（1k=1000），每个样本的量化值占 16 位。请回答下列问题：'
    )(
        p`（1）要求计算每个通话消息的传输时间，并判断该网络带宽能否同时支持监控 100 路通话消息。`,
        p`（2）若网络带宽降为 1MB/s，每次通话消息的额外开销为 350μs，则该系统能否正确工作？`,
        section('分析解答')(
            p`（1）该网络传输每个 1KB 的通话消息所需时间为 150μs+1024B/（4×106）B/s×106=406μs。每一路移动电话所需的传输速率为 4000Hz×2B=8000B/s=7.8125KB/s，所以，该网络 1s 内用于传输 100 路移动电话所需时间为 100×406μs×7.8125=317ms<1s，故该网络带宽可同时支持监控 100 路通话消息。`,
            p`（2）每一路移动电话所需的传输速率为 4000Hz×2B=8000B/s=7.8125KB/s，100 路移动电话的数据速率为 100×7.8125KB/s=781.25KB/s，每个通话消息为 1KB，所以，每秒共产生 781 个消息。如果不考虑额外开销带来的延迟，那么每秒产生 781KB 的信息量在带宽为 1MB/s 的网络上传输是没有问题的。`,
            p`但是，由于多路复用带来了额外开销，使得该网络传输每个 1KB 的通话消息所需时间为 350μs+1024/（1×106）B/s×106=1374μs=1.374ms。所以 1s 内网络上能够传输的消息最多只能有 1000ms/1.374ms=740 个，而 100 个移动电话在 1s 内共产生了 781 个消息（所需时间为 781×1.374ms≈1070ms>1s），所以系统不能正确工作。`
        )
    ),
    section(
        '8.假定一台计算机带有 20 个终端同时工作，在运行用户程序的同时，能接收来自任意一个终端输入的字符信息，并将字符回送显示或打印。每一个终端的键盘输入部分有一个数据缓冲寄存器 RDBRi（i=1～20），当在键盘上按下某一个键时，相应的字符代码即进入 RDBRi，并使它的「完成」状态标志 Donei（i=1～20）置 1，要等处理器把该字符代码取走后，Donei 标志才自动清 0（复位）。每个终端显示或打印输出部分也有一个数据缓冲寄存器 TDBRi（i=1～20），并有一个 Readyi（i=1～20）状态标志，该状态标志为 1 时，表示相应的 TDBRi 是空着的，准备接收新的输出字符代码，当 TDBRi 接收了一个字符代码后，Readyi 标志自动清 0，并将字符送终端显示或打印。为了接收终端的输入信息，处理器为每个终端设计了一个指针 PTRi（i=1～20）指向为该终端保留的主存输入缓冲区。处理器采用下列两种方案输入键盘代码，同时回送显示或打印。'
    )(
        p`（1）每隔一固定时间 T 转入一个状态检查程序 DEVCHC，顺序地检查全部终端是否有任何键盘信息输入，如果有，则顺序完成之。`,
        p`（2）允许任何有键盘信息输入的终端向处理器发出中断请求。全部终端采用共同的向量地址，利用它使处理器在响应中断后，转入一个中断服务程序 DEVINT，由后者询问各终端状态标志，并为最先遇到的有中断请求的终端服务，服务结束后返回用户程序。`,
        p`要求画出 DEVCHC 和 DEVINT 两个程序的流程图。`,
        section('分析解答')(
            p`定时查询程序 DEVCHC 和中断服务程序 DEVINT 的处理流程分别如图 8.9 和图 8.10 所示。图中用（×）表示 × 的内容，× 可能是存储单元地址或寄存器编号。此外，因为标志 Donei 和 Readyi 由硬件控制自动清 0（复位），所以流程图中没有对这两个标志赋值的操作。程序 DEVINT 的流程图中，如果所有终端都检测不到 Done 标志为 1，说明所有终端都没有键盘输入，也即都没有中断请求，此时不应该进入 DEVINT 处理，因此需报告「出错」。`,
            img(pic8_6_9)('图 8.9　定时查询程序 DEVCHC 的处理流程'),
            img(pic8_6_10)('图 8.10　中断服务程序 DEVINT 的处理流程'),
        )
    ),
    section(
        '9.某台打印机每分钟最快打印 6 个页面，页面规格为 50 行 ×80 字符。已知某计算机主频为 500MHz，若采用中断方式进行字符打印，则每个字符申请一次中断且中断响应和中断处理时间合起来为 1000 个时钟周期。请问该计算机系统能否采用中断控制 I/O 方式来进行字符打印输出？为什么？'
    )(
        section('分析解答')(
            p`要达到打印机最快的打印速度，打印机的数据传输率应达到每分钟为 6×50 行 ×80 字符 =24000 字符，即打印机的数据传输率应为 24000 字符/60s=400 字符/s。`,
            p`若采用中断方式打印字符，则最长应该每隔 1/400s=2.5ms 处理一次中断申请。而实际的中断响应及处理时间仅为 1000×1/500MHz×1000=0.002ms。因为 0.002ms<<2.5ms，所以可以采用中断方式进行字符打印输出。`
        )
    ),
    section('10.若某计算机中断系统有 5 个中断源，分别记为 1、2、3、4 和 5，其中断响应优先级为 1>2>3>4>5，而中断处理优先级为 1>4>5>2>3。要求：')(
        p`（1）设计各个中断源的中断服务程序中设置的中断屏蔽位（假设 1 为屏蔽，0 为开放）。`,
        p`（2）若在运行用户程序时，中断源 2 和 4 同时发生中断请求，而在处理 2 号中断源的过程中，中断源 1、3 和 5 同时发生中断请求，试画出此时 CPU 运行过程示意图。`,
        section('分析解答')(
            p`（1）由题意可知，中断源 1 的处理优先级最高，说明 1 号中断源对其他所有中断源都屏蔽，其屏蔽字为全 1；3 号中断源的处理优先级最低，所以除了 3 号中断源之外，对其他中断源全都开放，其屏蔽字为 00100。以此类推，得到所有各个中断源的中断服务程序中设置的中断屏蔽字（见表 8.1）。`,
            img(pic8_6_11)('表 8.1　题 10 中的中断屏蔽字'),
            p`（2）在运行用户程序时，同时出现中断源 2 和 4，因为用户程序对所有中断源都开放，所以在中断响应优先级排队电路中，中断源 2 和 4 进行排队判优，根据中断响应优先级 2>4，因此先响应 2 号中断源。在 CPU 执行中断源 2 的中断服务程序过程中，首先保护现场、保护旧屏蔽字、设置新的屏蔽字 01100，然后在具体中断处理前先开中断。一旦开中断，则马上响应 4 号中断源，因为第 2 号的中断屏蔽字中对第 4 号中断源的屏蔽位是 0，也即对第 4 号中断源是开放的。在第 4 号中断处理结束后，回到第 2 号中断源的中断服务程序执行；在具体处理第 2 号中断过程中，同时发生了第 1、3、5 号中断源请求，因为第 2 号中断对第 1、5 号中断开放，对第 3 号中断屏蔽，所以只有第 1 和第 5 两个中断源进行排队判优，根据中断响应优先级 1>5，所以先响应第 1 号中断源。因为第 1 号中断源的中断处理优先级最高，所以在其处理过程中不会响应任何新的中断请求，直到中断处理结束，然后返回第 2 号中断源；因为第 2 号中断源对第 5 号中断开放，所以在第 2 号中断源的中断服务程序中执行一条指令后，又转去执行第 5 号中断源的中断服务程序，执行完后回到第 2 号中断源，在第 2 号中断源的中断服务程序执行过程中，虽然第 3 号中断源有中断请求，但是，因为第 2 号中断源对第 3 号中断源不开放，所以第 3 号中断源一直得不到响应。直到第 2 号中断源处理完回到用户程序，才能响应并处理第 3 号中断源的请求。CPU 运行程序的执行轨迹如图 8.11 所示。`,
            img(pic8_6_12)('图 8.11　CPU 运行程序的执行轨迹'),
        )
    ),
    section(
        '11.某计算机的 CPU 主频为 500MHz，所连接的某外设的最大数据传输率为 20kB/s，该外设接口中有一个 16 位的数据缓存器，相应的中断服务程序的执行时间为 500 个时钟周期。请回答下列问题。'
    )(
        p`（1）是否能用中断方式进行该外设的输入/输出？若能，则在该设备持续工作期间，CPU 用于该设备进行输入/输出的时间占整个 CPU 时间的百分比大约为多少？`,
        p`（2）若该外设的最大数据传输率是 2MB/s，则可否用中断方式进行输入/输出？`,
        section('分析解答')(
            p`（1）因为该外设接口中有一个 16 位数据缓存器，所以若用中断方式进行输入/输出，可以每 16 位数据进行一次中断请求，因此中断请求的时间间隔为 106×2B/20kB/s=100μs。`,
            p`对应的中断服务程序的执行时间为（106/500MHz）×500=1μs，因为中断响应过程就是执行一条隐指令的过程，所用时间相对于中断处理时间（即执行中断服务程序的时间）而言，几乎可以忽略不计，因而整个中断响应并处理的时间比 1μs 多一点，远远小于中断请求的间隔时间。因此，可以用中断方式进行该外设的输入/输出。`,
            p`若用中断方式进行该设备的输入/输出，则该设备持续工作期间，CPU 用于该设备进行输入/输出的时间占整个 CPU 时间的百分比大约为 1/100=1%（也可以通过考察 1s 内 500M 个时钟周期中有多少时钟周期用于中断来计算百分比，其计算公式为[（106/100×500）/500M]×100%=1%）。`,
            p`（2）若外设的最大传输率为 2MB/s，则中断请求的时间间隔为 106×2B/2MB/s=1μs。而整个中断响应并处理的时间比 1μs 多一点，中断请求的间隔时间小于中断响应和处理时间，也即中断处理还未结束就会有该外设新的中断到来，所以不可以用中断方式进行该外设的输入/输出。`
        )
    ),
    section(
        '12.假设某计算机中软盘以中断方式进行数据输入/输出，每次中断请求传输一个 32 位数，已知软盘的数据传输率为 500kB/s，每次传输的 CPU 开销（包括中断响应和处理）为 1000 个时钟周期，CPU 的主频为 500MHz，则软盘在持续工作时，CPU 用于软盘数据传送的时间占 CPU 整个时间的百分比是多少？'
    )(
        section('分析解答')(
            p`软盘准备 32 位数据的时间为 106×4B/（500×103）B/s=8μs。因此，软盘每隔 8μs 发一次中断请求，CPU 响应并处理中断所用时间为 1000×106/（500×106）Hz=2μs，因此，每次 CPU 花 2μs 取走数据后，就去执行其他程序；过 8μs 后软盘又准备好下一个数据，又发中断请求，CPU 响应并处理中断以取走数据，然后又去执行其他程序；如此周而复始，直到所有需要的数据传送完。因此，当软盘持续工作时，CPU 用于软盘数据传送的时间占 CPU 总时间的百分比是（2/8）×100%=25%。`
        )
    ),
    section(
        '13.某计算机 CPU 主频为 500MHz，CPI 为 5。假定某外设的数据传输率为 0.5MB/s，采用中断方式与主机进行数据传送，传输单位为 32 位，对应的中断服务程序包含 18 条指令，中断响应等其他开销相当于两条指令的执行时间。请回答下列问题，要求给出计算过程：'
    )(
        p`（1）在中断方式下，CPU 用于该外设 I/O 的时间占整个 CPU 时间的百分比是多少？`,
        p`（2）当该外设的数据传输率达到 5MB/s 时，改用 DMA 方式传送数据。假定每次 DMA 传送的块大小为 5000B，DMA 预处理和后处理的总开销为 500 个时钟周期，则 CPU 用于该外设 I/O 的时间占整个 CPU 时间的百分比是多少？（假设 DMA 与 CPU 之间没有访存冲突）`,
        section('分析解答')(
            p`（1）中断方式下，每当外设准备好 32 位数据（读操作）或外设接口中的 32 位数据缓存为空已准备好接收新数据（写操作）时，就向 CPU 发中断申请，要求 CPU 通过执行中断服务程序来取走缓存中的 32 位数据或向缓存送 32 位数据。CPU 每次执行中断服务程序花 18 条指令的时间，其他如中断响应等的开销相当于两条指令的时间，CPI 为 5。因此，每次 CPU 用于中断处理（数据传送服务）的时钟周期数为 5×18+5×2=100。外设的数据传输率为 0.5MB/s，每次中断传送 32 位数据，占 4 个字节，因此，外设每秒申请的中断次数为 0.5MB/4B=125000，因而 CPU 每秒用于中断响应和处理的时间开销为 100×125000=12500000=12.5M 个时钟周期。CPU 的时钟频率为 500MHz，即 CPU 每秒产生 500M 个时钟周期，故 CPU 用于外设 I/O 的时间占整个 CPU 时间的百分比为 12.5M/500M=2.5%（也可通过考察相邻两次中断请求间隔时间内 CPU 用于中断的时间来计算，即[（100×1/500M）/（4B/0.5MB）]×100%=2.5%。`,
            p`（2）当外设数据传输率提高到 5MB/s 时，1s 内产生的 DMA 次数为 5MB/5000B=1000；每次 DMA 传送前都需要进行 DMA 初始化（预处理），DMA 结束后还要进行中断处理（后处理），已知这两个处理总共需要 500 个时钟周期，所以 CPU 用于 DMA 处理的总开销为 1000×500=500000=0.5M 个时钟周期；而 CPU 的时钟频率为 500MHz，即 CPU 每秒产生 500M 个时钟周期，故 CPU 用于该外设 I/O 的时间占整个 CPU 时间的百分比 0.5M/500M=0.1%（也可通过考察相邻两次 DMA 请求间隔时间内 CPU 用于该外设 I/O 的时间来计算，即[（500×1/500M）/（5000B/5MB）]×100%=0.1%。`
        )
    ),
    section(
        '14.某计算机字长 16 位，没有 cache，运算器一次定点加法时间等于 100 毫微秒，配置的磁盘旋转速度为 3000 转/min，每个磁道上记录两个数据块，每一块有 8000 个字节，两个数据块之间间隙的越过时间为 2μs，主存存储周期为 500 毫微秒，存储器总线宽度为 16 位。'
    )(
        p`（1）磁盘读写数据时的最大数据传输率是多少？平均数据传输率是多少？`,
        p`（2）若磁盘按最大数据传输率与主存交换数据时 CPU 没有访问主存，则此时主存频带空闲百分比是多少？`,
        p`（3）直接寻址的「存储器-存储器」SS 型加法指令在无磁盘 I/O 操作打扰时的执行时间为多少？此时，主存频带空闲百分比是多少？当磁盘 I/O 操作与一连串这种 SS 型加法指令执行同时进行时，这种 SS 型加法指令的最快和最慢执行时间各是多少？（假定采用多周期处理器方式，CPU 时钟周期等于主存周期）`,
        section('分析解答')(
            p`（1）磁盘旋转一周所需时间为 60×103/3000=20ms，单个数据块的传输时间为（20ms/2）-2ms=8ms，所以最大数据传输率为 8000B/8ms=1MB/s。平均数据传输率为 2μs×8000B/20ms=0.8MB/s。`,
            p`（2）磁盘最大数据传输率为 1MB/s，存储器总线宽度为 16bit=2B，故每隔 109×2B/1MB=2000ns 产生一个 DMA 请求，即每 2000ns/500ns=4 个主存周期中有一个被 DMA 挪用，此时 CPU 没有访问主存，因此 4 个主存周期中有 3 个空闲，故主存频带空闲百分比是 75%，如图 8.12 所示。图中箭头处开始的一个主存周期被 DMA 挪用。`,
            img(pic8_6_13)('图 8.12　无 CPU 访存时主存周期被 DMA 使用的情况'),
            p`（3）无 I/O 打扰时，执行一条直接寻址的 SS 型加法指令的过程如图 8.13 所示，包括取指令、取源操作数 1、取目的操作数（源操作数 2）、执行、写结果，因此执行时间为 5×500ns=2.5μs。此时，每个指令周期所包含的 5 个时钟周期中，只有执行阶段不访问主存，所以主存频带空闲百分比是 20%。`,
            img(pic8_6_14)('图 8.13　无 I/O 打扰时主存周期被 CPU 使用的情况'),
            p`当磁盘 I/O 操作与一连串这种 SS 型加法指令同时进行时，可能因为 CPU 和 DMA 同时访存而使指令的执行时间被延长。每次 DMA 请求要求挪用一个主存周期来访问主存，同时 CPU 执行指令时也要求访问主存，当两者发生冲突时，DMA 优先级高，CPU 的访存请求被延迟。因为每隔 2000ns 产生一个 DMA 请求，所以每 4 个主存周期必定有一个被 DMA 所挪用。此时，主存周期的占用情况如图 8.14 所示。`,
            img(pic8_6_15)('图 8.14　CPU 和 DMA 交替串行访问主存时的情况'),
            p`由图 8.14 可知，最好的情况是在 SS 型加法指令执行过程中没有访存冲突（如 8.14 中最开始的一个指令周期），此时最快，指令执行时间为 2.5μs；最坏的情况是有一次访存冲突（如图 8.14 中第二个指令周期），此时最慢，指令执行时间为 2.5μs+500ns=3μs。`
        )
    ),
    section(
        '15.某计算机的所有指令都可用两个总线周期完成：一个总线周期用来取指令，另一个总线周期用来存取数据。假定总线宽度为 8bit，每个总线周期为 250ns，因而每条指令的执行时间为 500ns。若该计算机中配置的磁盘每个磁道有 16 个 512B 的扇区，磁盘旋转一圈的时间是 8.192ms。请回答下列问题：'
    )(
        p`（1）在磁盘不工作时，主存频带空闲百分比是多少？`,
        p`（2）若采用周期挪用法进行 DMA 传送，则该计算机执行指令的速度因此会降低多少？`,
        p`（3）若采用周期挪用法进行 DMA 传送，总线宽度改为 16 位，则该计算机执行指令的速度因此会降低多少？`,
        section('分析解答')(
            p`（1）因为所有指令的每个阶段都要访问主存，所以即使没有磁盘访问主存，CPU 也把主存周期占满了。因此，主存频带空闲百分比是 0。`,
            p`（2）磁盘的平均数据传输率为 103×16×512B/8.192ms=1MB/s。当总线位宽为 8 位时，DMA 控制器每隔 1B/1MB/s=1μs 申请一次数据传送，在 1μs 期间 CPU 共执行 1μs/500ns=2 条指令。因此，每两条指令的执行被插入一个总线周期用于一次数据传送，也即平均每条指令延长了 250ns/2=125ns。因而，计算机执行指令的速度降低了（125ns/500ns）×100%=25%。`,
            p`（3）当总线位宽为 16 位时，DMA 控制器每隔 2B/1MB/s=2μs 申请一次数据传送，在 2μs 期间 CPU 共执行 2μs/500ns=4 条指令，因此每 4 条指令的执行被插入一个总线周期用于一次数据传送，也即平均每条指令延长了 250/4=62.5ns。因而，计算机执行指令的速度降低了（62.5ns/500ns）×100%=12.5%。`
        )
    ),
    section(
        '16.假设一个主频为 1GHz、CPI 为 5 的 CPU 需要从某个成块传送的 I/O 设备读取 1000 字节的数据到主存缓冲区中，该 I/O 设备一旦启动即按 50kB/s 的数据传输率向主机传送 1000 字节数据，每个字节的读取、处理并存入内存缓冲区需要 1000 个时钟周期，则以下 4 种方式下，在 1000 字节的读取过程中，CPU 用在该设备的 I/O 操作上的时间分别为多少？占整个 CPU 时间的百分比分别是多少？'
    )(
        p`（1）采用定时查询方式，每次处理一个字节，一次状态查询至少需要 60 个时钟周期。`,
        p`（2）采用独占查询方式，每次处理一个字节，一次状态查询至少需要 60 个时钟周期。`,
        p`（3）采用中断 I/O 方式，外设每准备好一个字节发送一次中断请求。每次中断响应需要两个时钟周期，中断服务程序的执行需要 1200 个时钟周期。`,
        p`（4）采用周期挪用 DMA 方式，每挪用一次主存周期处理一个字节，一次 DMA 传送完成 1000 字节的传送，DMA 初始化和后处理的时间为 2000 个时钟周期，CPU 和 DMA 之间没有访存冲突。`,
        p`（5）如果设备的速度提高到 5MB/s，则上述 4 种方式中，哪些是不可行的？为什么？对于可行的方式，计算出 CPU 在该设备 I/O 操作上所用的时间占整个 CPU 时间的百分比。`,
        p`（6）如果外设不是成块传送设备，而是字符型设备，CPU 每处理完一个字符后都要重新启动外设，外设在启动后 0.02ms 时间准备好一个字节。每个字符的读取、处理（包括启动下次操作）并存入内存缓冲区还是需要 1000 个时钟周期，假定 CPU 总是在查询到就绪后立即启动外设或在中断服务程序执行了 20 条指令后启动外设，则在（1）～（3）这 3 种方式下，CPU 在该设备的 I/O 操作上所用的时间占整个 CPU 时间的百分比分别是多少？`,
        p`（7）根据对以上各种数据进行分析，你可以得出哪些结论？`,
        section('分析解答')(
            p`主频为 1GHz，所以时钟周期为 1/1GHz=1ns。因为每个字节的读取、处理并存入内存缓冲区需要 1000 个时钟周期，所以对于像程序查询和中断等用软件实现输入/输出的方式，CPU 为每个字节传送所用的时间至少为 1000×1=1000ns=1μs。在 50kB/s 的数据传输率下，设备每隔 106×1B/50kB=20μs=20000ns 准备好一个字节，因而读取 1000 字节的时间为 1000×20μs=20ms。`,
            p`（1）定时查询方式下的 I/O 过程如图 8.15 所示。可以设置每隔 20000ns 查询一次，这样使得查询程序的开销达到最小，即第一次读取状态时就可能会发现就绪，然后用 1000 个时钟周期进行相应处理，因此对于每个字节的传送，CPU 所用时钟周期数为 60+1000=1060。因此，在 1000 个字节的读取过程中，CPU 用在该设备的 I/O 操作上的时间至少为 1000×1060×1ns=1.060ms，占整个 CPU 时间的百分比至少为（1.060ms/20ms）×100%=5.3%。`,
            img(pic8_6_16)('图 8.15　定时查询方式下的 I/O 过程'),
            p`（2）独占查询方式下的 I/O 过程如图 8.16 所示。启动设备后，CPU 就开始查询，因为 333×60+20=20000，所以第一个字节传送在第 334 次读取状态查询时检测到就绪，随后用 1000 个时钟周期进行相应的处理，然后继续第二个字节的状态查询，因为 40+1000+316×60=20000，所以，第二个字节的传送在第 316 次读取状态查询时检测到就绪，第一个和第二个字节的传送过程如图 8.16a 所示。每次检测到就绪后，就进行相应的处理，然后周而复始地进行查询，因为 20000-1000/60=316.7，所以，第 317 次状态查询时发现就绪。因为 1000+60×317-20000=20，所以每 3 个字节可多 60 个时钟周期，正好进行一次状态查询，因此在剩下的 998 个字节的读取过程中，前 996 个字节的传送正好用了 996×20000 个时钟周期，如图 8.16b 所示。最后两个字节的传送过程如图 8.16c 所示，因为 2×（1000+60×317-20000）=40，此外，最后一个字节的处理还有 1000 个时钟周期，所以最后两个字节总的时间为 2×20000+40+1000=41040 个时钟周期。综上所述，CPU 用在该设备的 I/O 操作上的总时间为（1000×20000+1040）×1ns=20.00104ms≈20ms，即在 1000 字节的整个传输过程中，CPU 一直为该设备服务，所用时间占整个 CPU 时间的 100%。`,
            img(pic8_6_17)('图 8.16　独占查询方式下的 I/O 过程'),
            p`（3）中断方式下的 I/O 过程如图 8.17 所示。中断方式下，外设每准备好一个字节请求一次中断，每次中断 CPU 所用时钟周期数为 2+1200=1202，因此 CPU 用在该设备的 I/O 操作上的时间为 1000×1202×1ns=1.202ms，占整个 CPU 时间的百分比至少为（1.202/20）×100%=6.01%。`,
            img(pic8_6_18)('图 8.17　中断方式下的 I/O 过程'),
            p`（4）DMA 方式下，由于 CPU 和 DMA 没有访存冲突，因此不需考虑由于 DMA 而影响到 CPU 执行其他程序。因此，传送 1000 个字节 CPU 所用的时钟周期数就是 2000，在 1000 个字节的读取过程中，CPU 用在该设备的 I/O 操作上的时间为 2000×1ns=2μs，占整个 CPU 时间的百分比为[2/（1000×20）]×100%=0.01%。`,
            p`（5）若设备数据传输率为 5MB/s，则外设传输 1000 字节所用时间为 106×1000B/（5×106）B/s=200μs。`,
            p`对于定时查询和独占查询方式，传送 1000 字节 CPU 所用时间至少为 1000×（60+1000）×1ns=1060μs；对于中断方式，传送 1000 字节 CPU 所用时间为 1000×（2+1200）×1ns=1202μs。上述 3 种方式下，CPU 所用的时间都比设备所用时间长得多，也即设备的传输比 CPU 的处理快得多，因而发生数据丢失。因此，这 3 种方式都不能用于该设备的 I/O 操作。对于 DMA 方式，传送 1000 字节 CPU 所用时间为 2000×1ns=2μs，占整个 CPU 时间的百分比为（2/200）×100%=1%。说明可以使用 DMA 方式，不过由于外设传输速度加快，使得 CPU 频繁进行 DMA 预处理和后处理，因而 CPU 的开销从 0.01% 上升到了 1%。`,
            p`（6）对于字符型设备，在定时查询方式下，其数据传送过程如图 8.18 所示。CPU 可以每隔 0.02ms 查询一次，这样总是在第一次查询时就发现就绪，马上启动设备进行下一个字节的传送，并读取和处理当前字节。因此，传送 1000 个字节 CPU 所用时间至少为 1000×（1000+60）×1ns=1060μs=1.06ms，而设备传输 1000 字节所用时间为 0.02ms×1000=20ms，因此占用 CPU 时间的百分比至少为（1.06/20）×100%=5.3%。`,
            img(pic8_6_19)('图 8.18　字符型设备定时查询方式下的 I/O 过程'),
            p`在独占查询方式下，其数据传送过程如图 8.19 所示。第一个字节传送在第 334 次读取状态查询时检测到就绪，随后启动外设；在外设工作的同时，查询程序用 1000 个时钟周期进行相应的处理，然后周而复始地进行查询，因为 20000-1000/60=316.7，所以对于后面的 999 个字节，每当进行到第 317 次状态查询时发现就绪；对于最后一个字节，外设就绪后 CPU 还需要 1000 个时钟对其进行处理。因此，在 1000 个字节的读取过程中，CPU 用在该设备的 I/O 操作上的时间为[（334×60+999×（1000+60×317）+1000）]×1ns=20.02102ms。这种情况下，该设备的 I/O 操作占用 CPU 的时间为 100%。`,
            img(pic8_6_20)('图 8.19　字符型设备独占查询方式下的 I/O 过程'),
            p`在中断方式下，其数据传送过程如图 8.20 所示。传送 1000 个字节 CPU 所用时间为 1.202ms。因为中断响应需两个时钟周期，并且中断服务程序执行了 20 条指令后开始启动外设，所以外设每次中断请求的时间间隔为（2+20×5）×1ns+20000ns=20102ns，传送 1000 个字节所用时间为 1000×20102ns=20.102ms。因此，中断方式下 CPU 占用时间的百分比约为（1.202/20.102）×100%=5.98%。`,
            img(pic8_6_21)('图 8.20　字符型设备中断方式下的 I/O 过程'),
            p`（7）根据对各种数据的分析，可以得到以下 4 个结论：① 对于查询方式，定时查询比独占查询的 CPU 利用率高，但是定时查询的时间间隔必须和外设的数据传输率和接口缓存情况相匹配。② 对于快速设备，因为查询方式和中断方式的 CPU 开销大，使得 CPU 来不及处理外设传输的数据而导致数据丢失，因而快速设备不能采用这两种方式。③ 对于块传送设备，因为不需要每个字符都启动一次外设，所以传送相同字符个数所用的时间比字符型设备的时间短。例如，对于 1000 字节的传送，独占查询方式下，块传送设备的时间是 20.00104ms，而字符型设备是 20.02102ms；中断方式下，块传送设备的时间是 20ms，而字符型设备是 20.102ms。④ 外设速度越快，CPU 用于外设 I/O 操作的时间所占比例越大，因此对于快速设备，应尽量减少 CPU 介入 I/O 的程度，也即采用 DMA 方式更合适。`,
            p`（补充说明：在计算 CPU 占用时间百分比时也可用另一种方法计算得到。例如，对于（3）中断方式的计算，可以先求出 1s 内该外设请求的中断次数为 1/（1B/50kB）=50k，然后得到 1s 内 CPU 用于数据 I/O 的时钟周期数为 50k×（2+1200）=6.01×107，因此在该设备传输过程中，CPU 用于该设备 I/O 操作的时间占整个 CPU 时间的百分比为（6.01×107/109）×100%=6.01%。`
        )
    ),
    section('17.假定采用中断控制 I/O 方式，则以下各项工作是在 4 个 I/O 软件层的哪一层完成的？')(
        p`（1）根据逻辑块号计算磁盘物理地址（柱面号、磁头号、扇区号）。`,
        p`（2）检查用户是否有权读写文件。`,
        p`（3）将二进制整数转换为 ASCII 码以便打印输出。`,
        p`（4）CPU 向设备控制器写入控制命令（如「启动工作」命令）。`,
        p`（5）CPU 从设备控制器的数据端口读取数据。`,
        section('分析解答')(
            p`（1）根据逻辑块号计算磁盘物理地址（柱面号、磁头号、扇区号）：在内核的设备驱动程序层。`,
            p`（2）检查用户是否有权读写文件：在内核的与设备无关软件层。`,
            p`（3）将二进制整数转换为 ASCII 码以便打印输出：在用户 I/O 软件层，例如，对于 printf（）函数中指定的需要输出的二进制整数变量，通常在调用 write 封装函数之前先转换为用 ASCII 码表示的字符串。`,
            p`（4）CPU 向设备控制器写入控制命令：在内核的设备驱动程序层和中断服务程序层。`,
            p`（5）CPU 从设备控制器的数据端口读取数据：在内核的设备驱动程序层和中断服务程序层。`
        )
    )
).elem
