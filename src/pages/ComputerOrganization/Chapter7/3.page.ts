import { p, section } from '@src/components/@write'
const title = '7.3　基本术语解释'
const page = section(title)(
    section('正常控制流（normal control flow）')(
        p`一个程序的正常执行流程有两种顺序：一种按指令存放顺序执行，即新的 PC 值为当前指令地址加当前指令长度；另一种是转移到转移类指令指出的转移目标地址处执行，即新的 PC 值为转移目标地址。CPU 所执行的指令的地址序列称为 CPU 的控制流，通过上述两种方式得到的控制流为正常控制流。`
    ),
    section('异常控制流（Exceptional Control Flow，ECF）')(
        p`CPU 在程序正常执行过程中因为遇到进程上下文切换、异常或外部中断事件等而打断原来程序的正常执行所引起的意外控制流称为异常控制流。`
    ),
    section('进程（process）')(
        p`进程指程序的一次运行过程，是一个具有一定独立功能的程序关于某个数据集合的一次运行活动，因而其具有动态的含义。计算机处理的所有任务实际上是由进程完成的。`
    ),
    section('逻辑控制流（logical control flow）')(
        p`不管是静态链接生成的完全链接可执行文件，还是动态链接后在存储器中形成的完全链接可执行目标，其代码段中的每条指令都有一个确定的地址，在这些指令的执行过程中，会形成一个指令执行的地址序列，对于确定的输入数据，其指令执行的地址序列也是确定的。这个确定的指令执行地址序列称为进程的逻辑控制流。`
    ),
    section('物理控制流（physical control flow）')(
        p`对某个处理器而言，它所执行的所有指令序列（包括交错执行的不同进程所包含的）构成了该处理器的物理控制流。`
    ),
    section('进程的上下文（process context）')(
        p`进程的物理实体（代码和数据等）和支持进程运行的环境合称为进程的上下文。由进程的程序块、数据块、运行时的堆和用户栈（统称为用户堆栈）等组成的用户空间信息被称为用户级上下文；由进程标识信息、进程现场信息、进程控制信息和系统内核栈等组成的内核空间信息被称为系统级上下文；此外，处理器中各个寄存器的内容被称为寄存器上下文（也称为硬件上下文）。进程的上下文包括了用户级上下文、系统级上下文和寄存器上下文。其中，用户级上下文地址空间和系统级上下文地址空间一起构成了一个进程的整个存储器映像。`
    ),
    section('进程上下文切换（process context switching）')(
        p`操作系统通过处理器调度让处理器轮流执行多个进程。实现不同进程中指令交替执行的机制称为进程上下文切换，它发生在操作系统调度一个新进程到处理器上运行时。`
    ),
    section('用户级上下文（user level context）')(
        p`由进程的程序块、数据块、运行时的堆和用户栈（统称为用户堆栈）等组成的用户空间信息被称为用户级上下文。`
    ),
    section('系统级上下文（system level context）')(
        p`由进程标识信息、进程现场信息、进程控制信息和系统内核栈等组成的内核空间信息被称为系统级上下文。`
    ),
    section('寄存器上下文（register context）')(p`处理器中各个寄存器的内容（即现场信息）被称为寄存器上下文（也称为硬件上下文）。`),
    section('进程控制信息（process control information）')(
        p`进程控制信息中包含各种内核数据结构，例如，记录有关进程信息的进程表（process table）、页表、文件表等。`
    ),
    section('异常处理程序（exception handler）')(p`异常处理程序是指操作系统内核中专门用于针对具体的内部异常进行处理的程序。`),
    section('故障（fault）')(
        p`故障是在引起故障的指令被启动后但未执行结束时 CPU 检测到的一类与指令执行相关的意外事件。这种意外事件有些可以恢复，有些则不能恢复。`
    ),
    section('陷阱（trap）')(
        p`陷阱也称为自陷或陷入，与故障等其他异常事件不同，是预先安排的一种「异常」事件，就像预先设定的「陷阱」一样。当执行到陷阱指令（也称为自陷指令）时，CPU 就调出特定的程序进行相应的处理，处理结束后返回到陷阱指令的下一条指令执行。`
    ),
    section('终止（abort）')(
        p`如果在执行指令过程中发生了诸如数据校验错等严重错误，则程序将无法继续执行，只好终止发生问题的进程，甚至重启系统。显然，这种异常是随机发生的，无法确定发生异常的是哪条指令。`
    ),
    section('可屏蔽中断（maskable interrupt）')(
        p`如果某个中断事件不是很紧急，可以被延缓响应，那么在处理其他中断时，就可以屏蔽这个中断，让正在处理的中断执行完，再来响应这个中断。这种中断称为可屏蔽中断。一般外设中断源引起的中断都是可屏蔽中断。`
    ),
    section('不可屏蔽中断（Non-Maskable Interrupt，NMI）')(
        p`不可屏蔽中断是指重要或紧急的硬件故障事件，如电源掉电、存储器线路错等。这类中断发生时，必须立即响应，不能把这类中断屏蔽掉。`
    ),
    section('向量中断（vector interrupt）')(
        p`向量中断是指一种识别中断源的技术或方式。识别中断源的目的就是要找到中断源对应的中断服务程序的入口地址，即获得向量地址。采用向量中断进行中断源识别的做法是，采用某种硬件排队线路（如菊花链、并行判优等），对所有未被屏蔽的中断请求进行排队，选出优先级最高的中断源，然后对其编码，得到该中断源的编号（有些书中称其为向量地址），通过总线将其取到 CPU 中，转换成向量地址，从而取出中断服务程序入口地址或跳转到中断服务程序。还有一种中断源识别方式是用程序（称为中断查询程序）进行识别的软件方法。`
    ),
    section('中断向量（interrupt vector）')(p`每个中断源都有对应的处理程序，这个处理程序被称为中断服务程序，其入口地址称为中断向量。`),
    section('中断向量表（interrupt vector table）')(
        p`所有中断（包括异常）的中断服务程序入口地址构成一个表，该表被称为中断向量表；也有的机器把中断服务程序入口的跳转指令构成一张表，该表被称为中断向量跳转表。`
    ),
    section('向量地址（vector address）')(p`向量地址是指中断向量表或中断向量跳转表中每个表项所在的内存地址。`),
    section('中断类型号（interrupt number）')(p`中断类型号是指中断向量表或中断向量跳转表中每个表项所在的表项索引值。`),
    section('中断响应（interrupt response）')(
        p`中断响应是指 CPU 发现有中断请求到取出中断服务程序的入口地址准备执行中断服务程序的过程。CPU 总是在一条指令执行完、取下条指令之前去查询有无中断请求。如果此时是开中断状态，并有未被屏蔽的中断请求发生，则 CPU 自动执行一条隐指令，进入中断响应周期，以完成关中断、保护断点、取中断向量三个操作。`
    ),
    section('中断服务程序（interrupt service routine）')(
        p`中断服务程序是指操作系统内核中专门用于针对具体的外部中断进行处理的程序，也称为中断处理程序。当发现中断时，CPU 就会把当前正在执行的用户进程停下来，调出操作系统内核中的专门处理相应中断类型的程序来执行，这个程序就是中断服务程序。`
    ),
    section('系统调用（system call）')(
        p`系统调用是一种特殊的「异常事件」，是操作系统为用户程序提供服务的一种手段。Linux 提供了几百种系统调用，主要分为以下几类：进程控制、文件操作、文件系统操作、系统控制、内存管理、网络管理、用户管理和进程通信。`
    ),
    section('系统调用号（system call number）')(
        p`每个系统调用使用唯一的一个整数表示，该整数被称为系统调用号。它用来确定系统调用跳转表中的偏移量，跳转表中每个表项给出相应系统调用对应的系统调用服务例程的首地址。`
    ),
    section('系统调用处理程序（system call processing program）')(
        p`在 Linux 中，有一个系统调用的统一入口，此处即是系统调用处理程序（system_call）的首地址，所以，CPU 执行指令 int$0x80 后，便转到程序 system_call 中第一条指令开始执行。`
    )
).elem