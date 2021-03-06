import { p, section } from '@src/components/@write'
const title = '4.2　主要内容提要'
const page = section(title)(
    section(`编译、汇编和链接概述`)(
        p`高级语言源程序文件转换为可执行目标文件的过程通常分为预处理、编译、汇编和链接四个步骤。前面三个步骤用来对每个模块（即源程序文件）生成可重定位目标文件（relocatable object file），GCC 生成的可重定位目标文件为.o 扩展名，VC 输出的可重定位目标文件为.obj 扩展名。最后一个步骤用来将若干可重定位目标文件（可能包括若干标准库函数目标模块）组合起来，生成一个可执行目标文件（executable object file），这个过程称为链接。`
    ),
    section(`目标文件格式`)(
        p`链接处理涉及三种目标文件格式：可重定位目标文件、可执行目标文件和共享目标文件（也称为共享库文件）。共享目标文件是一种特殊的可重定位目标文件。ELF 目标文件格式有链接视图和执行视图两种，前者是可重定位目标格式，后者是可执行目标格式。链接视图中包含 ELF 头、各个节以及节头表；执行视图中包含 ELF 头、程序头表（段头表）以及各种节组成的段。`
    ),
    section(`符号表和符号解析`)(
        p`链接过程需要完成符号解析和重定位两方面的工作。符号解析的目的就是将符号的引用与符号的定义关联起来。在不同的目标模块中可能会定义相同的符号，因为相同的多个符号只能分配一个地址，所以链接器需要确定以哪个符号为准。编译器将定义符号标识为强符号或弱符号，由链接器根据一套规则来确定多重定义符号中哪个是唯一的定义符号。如果不了解这些规则，则可能无法理解程序执行的有些结果。`
    ),
    section(`重定位`)(
        p`完成符号解析后即可得到符号的引用和符号的定义之间的关联关系，然后就可以进行重定位。重定位的目的是分别合并代码和数据，并根据代码和数据在虚拟地址空间中的位置，确定每个符号的最终存储地址，然后根据符号的确切地址来修改符号的引用处的地址。重定位包含以下两方面工作：① 节和定义符号的重定位。链接器将所有模块中相同类型的节合并，生成一个同一类型的新节。例如，所有模块中的.data 节合并为一个大的.data 节，它就是生成的可执行目标文件中的.data 节。然后链接器根据每个新节在虚拟地址空间中的起始位置以及新节中每个定义符号的位置，为新节中的每个定义符号确定存储地址。② 引用符号的重定位。链接器对合并后新代码节（.text）和新数据节（.data）中的引用符号进行重定位，使其指向对应的定义符号起始处。为了实现这一步工作，链接器要知道目标文件中哪些引用符号需要重定位、所引用的是哪个定义符号等，这些称为重定位信息，放在重定位节（如.rel.text 和.rel.data 等）中。`
    ),
    section(`可执行目标文件的加载`)(
        p`完成重定位任务后即可得到一个可执行目标文件。当启动一个可执行目标文件执行时，首先会通过某种方式调出常驻内存的一个称为加载器（loader）的操作系统程序来进行处理。例如，任何 UNIX 程序的加载执行都是通过调用 execve 系统调用函数来启动加载器进行的。加载器根据可执行目标文件中的程序头表信息，将可执行目标文件中相关节的内容与虚拟地址空间中的只读代码段和可读写数据段通过页表建立映射，然后启动可执行目标文件中的第一条指令执行。加载器在加载可执行目标文件时，实际上只是把可执行目标文件中的只读代码段和可读写数据段通过页表映射到了虚拟地址空间中确定的位置，并没有真正把代码和数据从磁盘装入主存。`
    ),
    section(`动态链接`)(
        p`链接分为静态链接和动态链接两种，静态链接处理的是可重定位目标文件，它将多个可重定位目标模块中相同类型的节合并起来，以生成完全链接的可执行目标文件，其中所有符号的引用都是确定的在虚拟地址空间中的最终地址，因而可以直接被加载执行。`,
        p`而动态链接方式下的可执行目标文件是部分链接的，还有一部分符号的引用地址没有确定，需要利用共享库中定义的符号进行重定位，因而需要由动态链接器来加载共享库并重定位可执行文件中部分符号的引用。动态链接有两种方式：一种是可执行目标文件在加载时进行共享库的动态链接；另一种是可执行目标文件在执行时进行共享库的动态链接。`
    )
).elem
