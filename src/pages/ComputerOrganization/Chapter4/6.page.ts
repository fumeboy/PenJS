import { p, section, precode, img } from '@src/components/@write'
import pic4_6_1 from './4-6-1.jpg'
import pic4_6_2 from './4-6-2.jpg'
import pic4_6_3 from './4-6-3.jpg'
import pic4_6_4 from './4-6-4.jpg'
import pic4_6_5 from './4-6-5.jpg'
import pic4_6_6 from './4-6-6.jpg'
import pic4_6_7 from './4-6-7.jpg'
import pic4_6_8 from './4-6-8.jpg'
import pic4_6_9 from './4-6-9.jpg'
import pic4_6_10 from './4-6-10.jpg'
import pic4_6_11 from './4-6-11.jpg'
import pic4_6_12 from './4-6-12.jpg'
import pic4_6_13 from './4-6-13.jpg'
import pic4_6_14 from './4-6-14.jpg'
import pic4_6_15 from './4-6-15.jpg'
import pic4_6_16 from './4-6-16.jpg'
import pic4_6_17 from './4-6-17.jpg'
import pic4_6_18 from './4-6-18.jpg'
import pic4_6_19 from './4-6-19.jpg'
import pic4_6_20 from './4-6-20.jpg'
const title = '4.6　分析应用题'
const page = section(title)(
    section('1.假设一个 C 语言程序有两个源文件：main.c 和 test.c，它们的内容如图 4.1 所示。')(
        img(pic4_6_1)('图 4.1　题 1 用图'),
        p`对于编译生成的可重定位目标文件 test.o，填写表 4.1 中各符号的情况，说明每个符号是否出现在 test.o 的符号表（.symtab 节）中，如果是，定义该符号的模块是 main.o 还是 test.o？该符号的类型是全局、外部，还是本地符号？该符号出现在相应定义模块的哪个节（.text、.data 或.bss）？`,
        img(pic4_6_2)('表 4.1　题 1 用表 1'),
        section('分析解答')(p`根据题 1 中给出的条件，填表 4.1 后，得到表 4.2。`, img(pic4_6_3)('表 4.2　题 1 用表 2'))
    ),
    section('2.假设一个 C 语言程序有两个源文件：main.c 和 swap.c，其中，main.c 和 swap.c 的内容如下。')(
        precode(`main.c：
 1　extern void swap(void);
 2　int buf[2] = {1, 2};
 3　int main() {
 4　    swap();
 5　    return 0;
 6　}
swap.c：
 1　extern int buf[];
 2　int *bufp0 = &buf[0];
 3　static int *bufp1;
 4　static void incr() {
 5　    static int count=0;
 6　    count++;
 7　}
 8
 9　void swap() {
10　    int temp;
11　    incr();
12　    bufp1=&bufp[1];
13　    temp=*bufp0;
14　    *bufp0=*bufp1;
15　    *bufp1=temp;
16　}`)(),

        p`对于编译生成的可重定位目标文件 swap.o，填写表 4.3 中各符号的情况，说明每个符号是否出现在 swap.o 的符号表（.symtab 节）中，如果是的话，定义该符号的模块是 main.o 还是 swap.o、该符号的类型是全局、外部还是本地符号、该符号出现在相应定义模块的哪个节（.text、.data 或.bss）。`,

        img(pic4_6_4)('表 4.3　题 2 用表 1'),
        section('分析解答')(p`根据题 2 中给出的条件，填表 4.3 后，得到表 4.4。`, p`表 4.4　题 2 用表 2`, img(pic4_6_5)())
    ),
    section('3.假设一个 C 语言程序有两个源文件：main.c 和 proc1.c，它们的内容如图 4.2 所示。')(
        img(pic4_6_6)('图 4.2　题 3 用图'),
        p`回答下列问题。`,
        p`（1）在上述两个文件中出现的符号哪些是强符号？哪些是弱符号？各变量的存储空间分配在哪个节中？各占几个字节？`,
        p`（2）程序执行后打印的结果是什么？请分别画出执行第 7 行的 proc1（）函数调用前、后，在地址&x 和&z 中存放的内容。`,
        p`（3）若 main.c 的第 3 行改为「short y=1，z=2；」，结果又会怎样？`,
        p`（4）修改文件 proc1，使得 main.c 能输出正确的结果（即 x=257，z=2）。要求修改时不能改变任何变量的数据类型和名字。`,
        section('分析解答')(
            p`（1）main.c 中强符号有 x、z、main，弱符号有 y 和 proc1；proc1.c 中的强符号有 proc1，弱符号有 x。根据多重定义符号处理规则 2（若一个符号被说明为一次强符号定义和多次弱符号定义，则按强符号定义为准），符号 x 的定义以 main.c 中的强符号 x 为准，即在 main.o 的.data 节中分配 x，占 4 个字节，随后是另一个强符号 z 占两个字节，x 和 z 都属于.data 节，随后是.bss 节，其中只有一个变量 y，按 4 字节对齐，因此，在 z 后面有两个字节空闲，再后面是变量 y 的空间。`,
            p`（2）程序执行时，在调用 proc1（）函数之前，&x 中存放的是 x 的机器数：00000101H，随后两个字节（地址为&z）存放 z，即 0002H，再后面两个字节空闲，如图 4.3a 所示。`,
            p`在调用 proc1（）函数以后，因为 proc1（）中的符号 x 是弱符号，所以，x 的定义以 main 中的强符号 x 为准，执行 x=-1.5 后，便将「-1.5」的机器数 BFF8000000000000H 存放到了&x 开始的 8 个字节中。即&x 中为其低 32 位的 00000000H，&z 中为高 32 位的 BFF80000H 中的低 16 位 0000H，z 后面的两个空闲字节中为高 16 位 BFF8H，如图 4.3b 所示。`,
            img(pic4_6_7)('图 4.3　执行 proc1（）函数前、后 x 和 z 所在存储区中的内容 1'),
            p`因此，最终打印的结果为 x=0，z=0。`,
            p`（3）若 main.c 的第 3 行改为「short y=1，z=2；」，则 x、y、z 都是强符号，都被分配在.data 节中，因此，x 占 4 个字节，随后是 y 占两个字节，z 占两个字节，proc1 函数执行前、后的存储内容如图 4.4 所示，由此可见，x 的机器数为全 0，z 的机器数为 BFF8H，因此，最终打印的结果为 x=0，z=-16392。`,
            img(pic4_6_8)('图 4.4　执行 proc1（）函数前、后 x 和 z 所在存储区中的内容 2'),
            p`（4）只要将文件 proc1.c 中的第 1 行修改为「static double x」，就可以使得 proc1 中的 x 设定为本地变量，从而在 proc1.o 的.data 节中专门分配存放 x 的 8 个字节空间，而不会和 main 中的 x 共用同一个存储地址，因此也就不会破坏 main 中 x 和 z 的值。`
        )
    ),
    section(
        '4.以下每一小题给出了两个源程序文件，它们被分别编译生成可重定位目标模块 m1.o 和 m2.o。在模块 mj 中对符号 x 的任意引用与模块 mi 中定义的符号 x 关联记为 REF（mj.x）→DEF（mi.x）。请在下列空格处填写模块名和符号名以说明给出的引用符号所关联的定义符号。若发生链接错误，则说明其原因；若从多个定义符号中任选，则给出全部可能的定义符号，若是局部变量，则说明不存在关联。'
    )(
        img(pic4_6_9)(),
        p`①REF（m1.main）→DEF（_____._____）`,
        p`②REF（m2.main）→DEF（_____._____）`,
        p`③REF（m1.p）→DEF（_____._____）`,
        p`④REF（m2.p）→DEF（_____._____）`,
        img(pic4_6_10)(),
        p`①REF（m1.main）→DEF（_____._____）`,
        p`②REF（m2.main）→DEF（_____._____）`,
        p`③REF（m1.x）→DEF（_____._____）`,
        img(pic4_6_11)(),
        p`①REF（m1.main）→DEF（_____._____）`,
        p`②REF（m2.main）→DEF（_____._____）`,
        p`③REF（m1.p1）→DEF（_____._____）`,
        p`④REF（m1.x）→DEF（_____._____）`,
        p`⑤REF（m2.x）→DEF（_____._____）`,
        img(pic4_6_12)(),
        p`①REF（m1.x）→DEF（_____._____）`,
        p`②REF（m2.x）→DEF（_____._____）`,
        p`③REF（m1.y）→DEF（_____._____）`,
        p`④REF（m2.y）→DEF（_____._____）`,
        section('分析解答')(
            p`（1）main 在 m1 中是强定义，在 m2 中是本地符号。`,
            p`①REF（m1.main）→ 在 m1 中不存在对 main 的引用`,
            p`②REF（m2.main）→DEF（m2.main）`,
            p`③REF（m1.p）→DEF（m2.p）`,
            p`④REF（m2.p）→ 在 m2 中不存在对 p 的引用`,
            p`（2）发生链接错误，因为全局变量 main 和 x 都有两个强定义。`,
            p`（3）main 在 m1 中是强定义符号，在 m2 中是弱符号，因此链接器选择强定义`,
            p`①REF（m1.main）→ 在 m1 中不存在对 main 的引用`,
            p`②REF（m2.main）→DEF（m1.main）`,
            p`③REF（m1.p1）→DEF（m2.p1）`,
            p`④REF（m1.x）→ 在 m1 中引用的 x 是局部变量，不存在关联`,
            p`⑤REF（m2.x）→DEF（m2.x）`,
            p`（4）全局符号 x 在 m1 中是弱定义，在 m2 中是强定义，y 在两个模块中都是弱定义`,
            p`①REF（m1.x）→DEF（m2.x）`,
            p`②REF（m2.x）→ 在 m2 中不存在对 x 的引用`,
            p`③REF（m1.y）→ 在 m1 中不存在对 y 的引用`,
            p`④REF（m2.y）→DEF（m1.y）或者 DEF（m2.y）`
        )
    ),
    section(
        '5.以下由两个目标模块 m1 和 m2 组成的程序，经编译、汇编、链接后在计算机上执行，结果发现即使 p1 函数中没有对数组变量 main 进行初始化，最终也能打印出字符串「0x5589\n」。为什么？要求解释原因。'
    )(
        img(pic4_6_13)(),
        img(pic4_6_14)(),
        section('分析解答')(
            p`全局符号 main 在 m1 中是强符号，在 m2 中是弱符号，因此以 m1 中 main 的定义为准。在 m1 中全局符号 main 被定义在.text 节中，出现本题所说结果的原因是，main 函数对应的机器码开始两个字节为 55H 和 89H。在有些系统中，main 函数最初两条指令如下：`,

            precode(`1　Disassembly of section .text:
2　00000000 <main>:
3　    0:    55          push   %ebp
4　    1:    89 e5     mov   %esp,%ebp`)(),

            p`其中，55H 是指令「push%ebp」的机器码，89E5H 是指令「mov%esp，%ebp」的机器码，因此，可以看出在 m2 中的 printf 语句中引用数组元素 main[0]和 main[1]时，main[0]=55H，main[1]=89H。`
        )
    ),
    section(
        '6.图 4.5 中给出了用 OBJDUMP 显示的某个可执行目标文件的程序头表（段头表）的部分信息，其中，可读写数据段（Read/write data segment）的信息表明，该数据段对应虚拟存储空间中起始地址为 0x8049448、长度为 0x104 个字节的存储区，其数据来自可执行文件中偏移地址 0x448 开始的 0xe8 个字节。这里，可执行目标文件中的数据长度和虚拟地址空间中的存储区大小之间相差了 28 字节。请解释可能的原因。'
    )(
        img(pic4_6_15)('图 4.5　某可执行目标文件程序头表的部分内容'),
        section('分析解答')(
            p`在可执行目标文件中描述的「可读写数据段」由所有可重定位目标文件中的.data 节合并生成的.data 节、所有可重定位目标文件中的.bss 节合并生成的.bss 节这两部分组成。.data 节由初始化的全局变量组成，因此其初始值必须记录在可执行文件中；而.bss 节由未初始化的全局变量组成，因此在可执行目标文件中无需记录其值，只要描述总的长度和每个变量的起始位置即可。`,
            p`根据图 4.5 中的内容可知，.data 节中全局变量的初始值总的数据长度为 0xe8。因此，虚拟地址空间中长度为 0x104 字节的可读写数据段中，开始的 0xe8 个字节取自.data 节，后面的 28 字节是未初始化全局变量所在区域。`
        )
    ),
    section(
        '7.假定 a 和 b 是可重定位目标文件或静态库文件，a→b 表示 b 中定义了一个被 a 引用的符号。对于以下每一小题出现的情况，给出一个最短命令行（含有最少数量的可重定位目标文件或静态库文件参数），使得链接器能够解析所有符号引用。'
    )(
        p`（1）p.o→libx.a→liby.a→p.o`,
        p`（2）p.o→libx.a→liby.a 同时 liby.a→libx.a`,
        p`（3）p.o→libx.a→liby.a→libz.a 同时 liby.a→libx.a→libz.a`,
        section('分析解答')(
            p`（1）gcc-static-o p p.o libx.a liby.a p.o`,
            p`（2）gcc-static-o p p.o libx.a liby.a libx.a`,
            p`（3）gcc-static-o p p.o libx.a liby.a libx.a libz.a`
        )
    ),
    section('8.已知两个 C 语言源程序文件 main.c 和 swap.c 的内容如图 4.6 所示。')(
        img(pic4_6_16)('图 4.6　main.c 和 swap.c 文件中的内容'),
        p`图 4.7 给出了 main 函数源代码对应的 main.o 中.text 节和.rel.text 节的内容，图中显示其.text 节中有一处需重定位。假定链接后 main 函数代码起始地址是 0x8048386，紧跟在 main 后的是 swap 函数的代码，且首地址按 4 字节边界对齐。要求根据对图 4.7 的分析，指出 main.o 的.text 节中需重定位的符号名、相对于.text 节起始位置的位移、所在指令行号、重定位类型、重定位前的内容、重定位后的内容，并给出重定位值的计算过程。`,
        img(pic4_6_17)('图 4.7　main.o 中.text 节和.rel.text 节的内容'),
        section('分析解答')(
            p`根据图 4.7 可知，main.o 的.text 节中只有一个符号需要重定位，它就是在 main.c 中被引用的全局符号 swap；需要重定位的是图 4.7 中第 6 行 call 指令中的偏移量字段，其位置相对于.text 节起始位置位移量 r_offset 为 7，按照 PC 相对地址方式（R_386_PC32）进行重定位。`,
            p`重定位前，在位移量 7、8、9、a 处的内容分别为 fc、ff、ff、ff，因此初始值 init 的机器数为 0xfffffffc，值为-4。重定位后，应该使 call 指令的目标转移地址指向 swap 函数的起始地址。`,
            p`main 函数总共占 12H=18 字节的存储空间，其起始地址 ADDR（.text）为 0x8048386，因此 main 函数最后一条指令地址为：0x8048386+0x12=0x8048398。因为 swap 函数代码紧跟在 main 后且首地址按 4 字节边界对齐，故 swap 的起始地址 ADDR（swap）就是 0x8048398。`,
            p`重定位值的计算公式为`,
            p`ADDR（swap）-（（ADDR（.text）+r_offset）-init）=0x8048398-（（0x8048386+7）-（-4））=7。`,
            p`因此，重定位后，在位移量 7、8、9、a 处的 call 指令的偏移量字段为 07000000。`
        )
    ),
    section('9.图 4.8 给出了图 4.6b 所示的 swap 源代码对应的 swap.o 文件中.text 节和.rel.text 节的内容，图中显示.text 节中共有 6 处需重定位。')(
        img(pic4_6_18)('图 4.8　swap.o 中.text 节和.rel.text 节的内容'),
        p`假定链接后生成的可执行目标文件中 buf 和 bufp0 的存储地址分别是 0x80495c8 和 0x80495d0，bufp1 的存储地址位于.bss 节的开始，为 0x8049620。根据对图 4.8 的分析，仿照例子填写表 4.5，以指出各个重定位的符号名、相对于.text 节起始位置的位移、所在指令行号、重定位类型、重定位前的内容以及重定位后的内容。`,

        img(pic4_6_19)('表 4.5　题 9 用表 1'),
        section('分析解答')(p`根据题 9 中给出的条件，填表 4.5 后，得到表 4.6。`, img(pic4_6_20)('表 4.6　题 9 用表 2'))
    )
).elem
