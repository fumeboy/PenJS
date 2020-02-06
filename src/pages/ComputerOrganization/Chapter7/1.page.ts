import { p, b, section, ol } from '@src/components/@write'
const title = '7.1　教学目标和内容安排'
const page = section(title)(
    p`${b`主要教学目标`}使学生了解硬件层和操作系统层中涉及的对于内部异常和外部中断的异常控制流实现机制。主要内容包括进程与进程上下文切换、异常的类型、异常的捕获和处理、中断的捕获和处理、系统调用的实现机制等。`,
    p`${b`基本学习要求`}`,
    ol(
        p`理解程序与进程的基本概念以及它们之间的区别。`,
        p`理解处理器的物理控制流和进程的逻辑控制流之间的关系。`,
        p`理解什么叫进程的上下文以及进程的上下文切换。`,
        p`了解进程的上下文所包含的信息以及进程上下文信息的存储映像。`,
        p`了解进程的私有地址空间与虚拟地址空间的关系。`,
        p`了解程序的加载和运行过程以及 main 函数对应的栈帧结构。`,
        p`理解异常和中断发生时的程序切换与进程上下文切换之间的区别。`,
        p`了解异常和中断所引起的异常控制流发生和处理的整个过程。`,
        p`了解 Intel 对内部异常的分类。`,
        p`理解什么是内部异常中的故障、常见的几种故障类型以及故障的处理过程。`,
        p`理解什么是内部异常中的陷阱、常见的几种陷阱类型以及陷阱的处理过程。`,
        p`理解什么是内部异常中的终止以及终止的处理过程。`,
        p`理解可屏蔽中断和不可屏蔽中断的概念。`,
        p`理解 CPU 是如何检测到外部中断的。`,
        p`理解异常和中断的响应条件和响应过程。`,
        p`理解 IA-32 中的中断向量表的概念。`,
        p`理解 IA-32 中的中断描述符表的概念。`,
        p`了解 IA-32 中的中断门描述符格式。`,
        p`了解 IA-32 中异常和中断处理的大致过程。`,
        p`了解 Linux 对异常和中断的大致处理过程。`,
        p`初步了解 IA-32/Linux 系统的系统调用。`
    ),
    p`前面的章节主要围绕一个程序从高级语言源程序转换为机器代码并正常执行过程中涉及的相关内容进行讲述。在程序的正常执行过程中，程序或者按指令存放的顺序执行，或者执行条件转移、无条件转移或调用/返回指令而跳转到由转移类指令指出的转移目标地址处执行。通过这两种方式得到的控制流为正常控制流。`,
    p`在一个程序的执行过程中，由于遇到内部异常事件或外部中断事件，程序的正常执行可能会被打断，而转去执行操作系统提供的针对这些特殊事件设置的处理程序。这种由于某些特殊情况导致用户程序的正常执行被打断所形成的意外控制流称为异常控制流（Exceptional Control of Flow，ECF）。`,
    p`计算机系统的各个层面都有实现异常控制流的机制。例如，在最底层的硬件层，CPU 中有检测异常和中断事件并将控制转移到操作系统内核执行的机制；在中间的操作系统层，内核能通过进程的上下文切换将一个进程的执行转移到另一个进程执行；在上层的应用软件层，一个进程可以直接发送信号到另一个进程，使得接收到信号的进程将控制转移到它的一个信号处理程序执行。`,
    p`计算机系统必须提供一种机制使得自身能够实现异常控制流，而且这种异常控制流的处理机制是一个计算机系统中最核心的技术之一，涉及高级程序设计语言、操作系统、指令系统和微体系结构各个层面，因而这部分相关知识应该是必不可少并且非常重要的教学内容。传统教学体系中，这部分内容仅在计算机组成原理和操作系统等课程中有所涉及，而且把异常和中断的概念放在与 I/O 相关的部分进行介绍，而没有像本章这样专门进行介绍。显然，这样的处理不能很好地体现异常和中断机制在计算机系统中的地位，也不能使学生很好地理解内部异常和外部中断之间的差别，甚至会使学生误认为异常和中断仅与 I/O 相关。`,
    p`异常和中断的内容比较抽象，如果不放到一个场景中进行讲解，学生可能不太容易明白，为此，本章提供了 IA-32/Linux 系统的实例，通过对具体系统的相关处理机制的了解，学生应该可以加深对抽象概念的理解。因此，对于 IA-32/Linux 系统中的异常和中断内容，学生只要对大致过程有个基本了解，并理解其背后的道理即可，无需对相关细节内容死记硬背。`
).elem
