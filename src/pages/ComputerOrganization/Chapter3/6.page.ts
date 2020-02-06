import { p, section, precode, img } from '@src/components/@write'
import pic3_6_1 from './3-6-1.jpg'
import pic3_6_2 from './3-6-2.jpg'
import pic3_6_3 from './3-6-3.jpg'
import pic3_6_4 from './3-6-4.jpg'
import pic3_6_5 from './3-6-5.jpg'
import pic3_6_6 from './3-6-6.jpg'
import pic3_6_7 from './3-6-7.jpg'
import pic3_6_8 from './3-6-8.jpg'
import pic3_6_9 from './3-6-9.jpg'
import pic3_6_10 from './3-6-10.jpg'
import pic3_6_11 from './3-6-11.jpg'
import pic3_6_12 from './3-6-12.jpg'
import pic3_6_13 from './3-6-13.jpg'
import pic3_6_14 from './3-6-14.jpg'
import pic3_6_15 from './3-6-15.jpg'
import pic3_6_16 from './3-6-16.jpg'
import pic3_6_17 from './3-6-17.jpg'
import pic3_6_18 from './3-6-18.jpg'
import pic3_6_19 from './3-6-19.jpg'
const title = '3.6　分析应用题'
const page = section(title)(
    section('1.对于以下 AT&T 格式汇编指令，根据操作数的长度确定对应指令助记符中的长度后缀，并说明每个操作数的寻址方式。')(
        p`（1）mov 8（%ebp，%ebx，4），%ax`,
        p`（2）mov %al，12（%ebp）`,
        p`（3）add （，%ebx，4），%ebx`,
        p`（4）or （%ebx），%dh`,
        p`（5）push $0xF8`,
        p`（6）mov $0xFFF0，%eax`,
        p`（7）test %cx，%cx`,
        p`（8）lea 8（%ebx，%esi），%eax`,
        section('分析解答')(
            p`（1）后缀：w，源：基址 + 比例变址 + 偏移，　目的：寄存器`,
            p`（2）后缀：b，源：寄存器，　目的：基址 + 偏移`,
            p`（3）后缀：l，源：比例变址，　目的：寄存器`,
            p`（4）后缀：b，源：基址，　目的：寄存器`,
            p`（5）后缀：l，源：立即数，　目的：栈`,
            p`（6）后缀：l，源：立即数，　目的：寄存器`,
            p`（7）后缀：w，源：寄存器，　目的：寄存器`,
            p`（8）后缀：l，源：基址 + 变址 + 偏移，　目的：寄存器`
        )
    ),
    section('2.使用汇编器处理以下各行 AT&T 格式代码时都会产生错误，请说明每一行存在什么错误。')(
        p`（1）movl　0xFF，（%eax）`,
        p`（2）movb　%ax，12（%ebp）`,
        p`（3）addl　%ecx，$0xF0`,
        p`（4）orw　$0xFFFF0，（%ebx）`,
        p`（5）addb　$0xF8，（%dl）`,
        p`（6）movl　%bx，%eax`,
        p`（7）andl　%esi，%esx`,
        p`（8）movw　8（%ebp，，4），%ax`,
        section('分析解答')(
            p`（1）源操作数是立即数 0xFF，需在前面加「$」。`,
            p`（2）源操作数是 16 位，而长度后缀是字节「b」，不一致。`,
            p`（3）目的操作数不能是立即数寻址。`,
            p`（4）操作数位数超过 16 位，而长度后缀为 16 位的「w」。`,
            p`（5）不能用 8 位寄存器作为目的操作数地址所在寄存器。`,
            p`（6）源操作数寄存器与目的操作数寄存器长度不一致。`,
            p`（7）不存在 ESX 寄存器。`,
            p`（8）源操作数地址中缺少变址寄存器。`
        )
    ),
    section('3.假设变量 x 和 ptr 的类型声明如下：')(
        precode(`    src_type  x;
    dst_type *ptr;`)(),

        p`这里，src_type 和 dst_type 是用 typedef 声明的数据类型。有以下一个 C 语言赋值语句：`,

        precode(`    *ptr=(dst_type) x;`)(),

        p`若 x 存储在寄存器 EAX 或 AX 或 AL 中，ptr 存储在寄存器 EDX 中，则对于表 3.1 中给出的 src_type 和 dst_type 的类型组合，写出实现上述赋值语句的机器级代码。要求用 AT&T 格式汇编指令表示机器级代码。`,
        img(pic3_6_1)('表 3.1　题 3 用表 1'),
        section('分析解答')(p`填表 3.1 后，得到表 3.2。`, img(pic3_6_2)('表 3.2　题 3 用表 2'))
    ),
    section('4.假设某个 C 语言函数 func 的原型声明如下：')(
        precode(`void func(int *xptr, int *yptr, int *zptr);`)(),

        p`函数 func 的过程体对应的机器级代码用 AT&T 汇编形式表示如下：`,

        precode(`1　movl　　8(%ebp), %eax
2　movl　　12(%ebp), %ebx
3　movl　　16(%ebp), %ecx
4　movl　　(%ebx), %edx
5　movl　　(%ecx), %esi
6　movl　　(%eax), %edi
7　movl　　%edi, (%ebx)
8　movl　　%edx, (%ecx)
9　movl　　%esi, (%eax)`)(),

        p`请回答下列问题或完成下列任务。`,
        p`（1）在过程体开始时三个入口参数对应实参所存放的存储单元地址是什么？（提示：当前栈帧底部由帧指针寄存器 EBP 指示）`,
        p`（2）根据上述机器级代码写出函数 func 的 C 语言代码。`,
        section('分析解答')(
            p`（1）xptr、yptr 和 zptr 对应实参所存放的存储单元地址分别为：R[ebp]+8、R[ebp]+12、R[ebp]+16。`,
            p`（2）函数 func 的 C 语言代码如下：`,

            precode(`void func(int *xptr, int *yptr, int *zptr)
{
    int tempx=*xptr;
    int tempy=*yptr;
    int tempz=*zptr;

    *yptr=tempx;
    *zptr = tempy;
    *xptr = tempz;
}`)(),
            p``
        )
    ),
    section('5.假设变量 x 和 y 分别存放在寄存器 EAX 和 ECX 中，请给出以下每条指令执行后寄存器 EDX 中的结果。')(
        p`（1）leal（%eax），%edx`,
        p`（2）leal4（%eax，%ecx），%edx`,
        p`（3）leal（%eax，%ecx，8），%edx`,
        p`（4）leal0xC（%ecx，%eax，2），%edx`,
        p`（5）leal（，%eax，4），%edx`,
        p`（6）leal（%eax，%ecx），%edx`,
        section('分析解答')(
            p`（1）R[edx]=x`,
            p`（2）R[edx]=x+y+4`,
            p`（3）R[edx]=x+8*y`,
            p`（4）R[edx]=y+2*x+12`,
            p`（5）R[edx]=4*y`,
            p`（6）R[edx]=x+y`
        )
    ),
    section('6.假设有表 3.3 所示的地址以及寄存器中存放的机器数。')(
        img(pic3_6_3)('表 3.3　题 6 用表'),
        p`分别说明执行以下指令后，哪些地址或寄存器中的内容会发生改变？改变后的内容是什么？条件标志 OF、SF、ZF 和 CF 会发生什么改变？`,
        p`（1）addl（%eax），%edx`,
        p`（2）subl（%eax，%ebx），%ecx`,
        p`（3）orw4（%eax，%ecx，8），%bx`,
        p`（4）testb$0x80，%dl`,
        p`（5）imull$32，（%eax，%edx），%ecx`,
        p`（6）mulw%bx`,
        p`（7）decw%cx`,
        section('分析解答')(
            p`（1）指令功能为：R[edx]←R[edx]+M[R[eax]]=0x00000080+M[0x8049300]，寄存器 EDX 中内容改变。改变后的内容为以下运算的结果：00000080H+FFFFFFF0H=（1）00000070H。因此，EDX 中的内容改变为 0x00000070。加法指令会影响 OF、SF、ZF 和 CF 标志，各标志信息为 OF=0，ZF=0，SF=0，CF=1。`,
            p`（2）指令功能为：R[ecx]←R[ecx]-M[R[eax]+R[ebx]]=0x00000010+M[0x8049400]，寄存器 ECX 中内容改变。改变后的内容为以下运算结果：00000010H-80000008H=00000010H+7FFFFFF8H=（0）80000008H。因此，ECX 中的内容改为 0x80000008。减法指令会影响 OF、SF、ZF 和 CF 标志，各标志信息为 OF=1，ZF=0，SF=1，CF=1⊕0=1。`,
            p`（3）指令功能为：R[bx]←R[bx]or M[R[eax]+R[ecx]*8+4]，寄存器 BX 中内容改变。改变后的内容为以下运算的结果：0x0100 or M[0x8049384]=0100H or FF00H=FF00H。因此，BX 中的内容改为 0xFF00。OR 指令执行后 OF=CF=0，ZF 和 SF 则根据结果设置。根据该指令的执行结果可知：因为结果不为 0，故 ZF=0；因为最高位为 1，故 SF=1。`,
            p`（4）test 指令不改变任何通用寄存器的内容，但会根据「与」操作改变标志，因为 R[dl]and 0x80=80H and 80H=80H。TEST 指令执行后 OF=CF=0，ZF 和 SF 则根据结果设置。根据该指令的执行可知：因为结果不为 0，故 ZF=0；因为最高位为 1，故 SF=1。`,
            p`（5）指令功能为：R[ecx]←M[R[eax]+R[edx]]*32，即存储单元 0x8049380 中的内容 0x908f12a8 与立即数 32 相乘，最后将乘积的低 32 位存放在 ECX 寄存器中。M[0x8049380]*32=0x908f12a8*32，乘法器将得到 64 位乘积，其结果就是将 0x908f12a8 先符号扩展成 64 位数，然后再左移 5 位所得到的 64 位结果，即：`,
            p`1111 1111 1111 1111 1111 1111 1111 1111 1001 0000 1000 1111 0001 0010 1010 1000<<5`,
            p`=1111 1111 1111 1111 1111 1111 1111 0010 0001 0001 1110 0010 0101 0101 0000 0000`,
            p`因此，指令执行后，ECX 寄存器中的内容改变为 0x11e25500。因为高 33 位不是全 0，也不是全 1，因此 OF=CF=1。`,
            p`（6）指令功能为：R[dx-ax]]←R[ax]*R[bx]，即将寄存器 AX 和 BX 中的内容相乘，其 32 位乘积的高 16 位存入 DX 中，低 16 位乘积存入 AX 中。R[ax]=0x9300，R[bx]=0x0100，32 位乘积相当于将 0x9300 先 0 扩展成 32 位数，然后再左移 8 位所得到的 32 位结果，即：`,
            p`0000 0000 0000 0000 1001 0011 0000 0000<<8=0000 0000 1001 0011 0000 0000 0000 0000`,
            p`因此，指令执行后，DX 寄存器中的内容改变为 0x0093，AX 寄存器中的内容改变为全 0。因为高 16 位不是全 0，因此 OF=CF=1。`,
            p`（7）指令功能为：R[cx]←R[cx]-1，即 CX 寄存器的内容减一。R[cx]=0x0010，指令执行后 CX 寄存器内容变为 0010H-0001H=0010H+FFFFH=（1）000FH。因此，指令执行后 CX 中的内容从 0x0010 变为 0x000F。DEC 指令会影响 OF、ZF、SF，根据上述运算结果，得到 OF=0，ZF=0，SF=0。`
        )
    ),
    section('7.假设函数 operate 的部分 C 代码如下：')(
        precode(`1　int  operate(int x, int y, int z, int k)
2　{
3　     int  v =__________________;
4　     return v;
5　}`)(),

        p`以下汇编代码用来实现第 3 行语句的功能，请写出每条汇编指令的注释，并根据以下汇编代码，填写 operate 函数缺失的部分。`,

        precode(`1　movl     12(%ebp), %ecx
2　sall     $8, %ecx
3　movl     8(%ebp), %eax
4　movl     20(%ebp), %edx
5　imull     %edx, %eax
6　movl     16(%ebp), %edx
7　andl     $65520, %edx
8　addl     %ecx, %edx
9　subl     %edx, %eax`)(),

        section('分析解答')(
            precode(`movl     12（%ebp）， %ecx          // R[ecx]←M[R[ebp]+12]，将 y 送 ECX
sall     $8， %ecx                // R[ecx]←R[ecx]<<8，将 y*256 送 ECX
movl     8（%ebp）， %eax           // R[eax]←M[R[ebp]+8]，将 x 送 EAX
movl     20（%ebp）， %edx          // R[edx]←M[R[ebp]+20]，将 k 送 EDX
imull    %edx， %eax              // R[eax]←R[eax]*R[edx]，将 x*k 送 EAX
movl     16（%ebp）， %edx          // R[edx]←M[R[ebp]+16]，将 z 送 EDX
andl     $65520， %edx            // R[edx]←R[edx]&65520，将 z&0xFFF0 送 EDX
addl     %ecx， %edx              // R[edx]←R[edx]+R[ecx]，将 z&0xFFF0+y*256 送 EDX
subl     %edx， %eax              // R[eax]←R[eax]-R[edx]，将 x*k-（z&0xFFF0+y*256）送 EAX`)(),

            p`根据以上分析可知，第 3 行缺失部分为：`,

            precode(`3　int  v =  x*k-(z&0xFFF0+y*256)   ;`)(),
            p``
        )
    ),
    section('8.假设函数 product 的 C 语言代码如下，其中 num_type 是用 typedef 声明的数据类型。')(
        precode(`1　void product(num_type *d, unsigned x, num_type y ) {
2　    *d = x*y;
3　}`)(),

        p`函数 product 的过程体对应的主要汇编代码如下：`,

        precode(`1　movl      12(%ebp), %eax
2　movl     20(%ebp), %ecx
3　imull     %eax, %ecx
4　mull     16(%ebp)
5　leal     (%ecx, %edx), %edx
6　movl     8(%ebp), %ecx
7　movl     %eax, (%ecx)
8　movl     %edx, 4(%ecx)`)(),

        p`请给出上述每条汇编指令的注释，并说明 num_type 是什么类型。`,
        section('分析解答')(
            p`从汇编代码的第 2 行和第 4 行看，y 应该是占 8 个字节，R[ebp]+20 开始的 4 个字节为高 32 位字节，记为 yh；R[ebp]+16 开始的 4 个字节为低 32 位字节，记为 yl。根据第 4 行为无符号数乘法指令，得知 y 的数据类型 num_type 为 unsigned long long。`,

            precode(`movl      12（%ebp）， %eax       // R[eax]←M[R[ebp]+12]，将 x 送 EAX
movl      20（%ebp）， %ecx       // R[ecx]←M[R[ebp]+20]，将 yh 送 ECX
imull     %eax， %ecx           // R[ecx]←R[ecx]*R[eax]，将 yh*x 的低 32 位送 ECX
mull      16（%ebp）             // R[edx]R[eax]←M[R[ebp]+16]*R[eax]，将 yl*x 送 EDX-EAX
leal      （%ecx, %edx）， %edx
                               // R[edx]←R[ecx]+R[edx]，将 yl*x 的高 32 位与 yh*x 的低 32 位 
                               // 相加后送 EDX
movl      8（%ebp）， %ecx        // R[ecx]←M[R[ebp]+8]，将 d 送 ECX
movl      %eax， （%ecx）         // M[R[ecx]]←R[eax]，将 x*y 低 32 位送 d 指向的低 32 位 
movl      %edx， 4（%ecx）        // M[R[ecx]+4]←R[edx]，将 x*y 高 32 位送 d 指向的高 32 位`)(),
            p``
        )
    ),
    section('9.已知 IA-32 是小端方式处理器，根据给出的 IA-32 机器代码的反汇编结果（部分信息用 x 表示）回答问题。')(
        p`（1）已知 je 指令的操作码为 01110100，je 指令的转移目标地址是什么？call 指令中的转移目标地址 0x80483b1 是如何反汇编出来的？`,

        precode(`    804838c:      74 08                    je     xxxxxxx
    804838e:      e8 1e 00 00 00           call     80483b1<test>`)(),

        p`（2）已知 jb 指令的操作码为 01110010，jb 指令的转移目标地址是什么？movl 指令中的目的地址如何反汇编出来的？`,

        precode(`    8048390:      72 f6                    jb     xxxxxxx
    8048392:      c6 05 00 a8 04 08 01     movl   $0x1, 0x804a800
    8048399:      00 00 00`)(),

        p`（3）已知 jle 指令的操作码为 01111110，mov 指令的地址是什么？`,

        precode(`    xxxxxxx:      7e 16                    jle     80492e0
    xxxxxxx:      89 d0                    mov     %edx, %eax`)(),

        p`（4）已知 jmp 指令的转移目标地址采用相对寻址方式，jmp 指令操作码为 11101001，其转移目标地址是什么？`,

        precode(`    8048296:      e9 00 ff ff ff          jmp     xxxxxxx
    804829b:      29 c2                   sub     %eax, %edx`)(),

        section('分析解答')(
            p`IA-32 的条件转移指令都采用相对转移方式在段内直接转移，即条件转移指令的转移目标地址为：（PC）+ 偏移量。`,
            p`（1）因为 je 指令的操作码为 01110100，所以机器代码 7408H 中的 08H 是偏移量，故转移目标地址为：0x804838c+2+0x8=0x8048396。`,
            p`call 指令中的转移目标地址 0x80483b1=0x804838e+5+0x1e，由此可以看出，call 指令机器代码中后面的 4 个字节是偏移量，因 IA-32 采用小端方式，故偏移量为 0000001EH。call 指令机器代码共占 5 个字节，因此，下条指令的地址为当前指令地址 0x804838e 加 5。`,
            p`（2）jb 指令中 F6H 是偏移量，故其转移目标地址为：0x8048390+2+0xf6=0x8048488。`,
            p`movl 指令的机器代码有 10 个字节，前两个字节是操作码等，后面 8 个字节为两个立即数，因为是小端方式，所以第一个立即数为 0804A800H，即汇编指令中的目的地址 0x804a800，最后 4 个字节为立即数 00000001H，即汇编指令中的常数 0x1。`,
            p`（3）jle 指令中的 7EH 为操作码，16H 为偏移量，其汇编形式中的 0x80492e0 是转移目的地址，因此，假定后面的 mov 指令的地址为 x，则 x 满足以下公式：0x80492e0=x+0x16，故 x=0x80492e0-0x16=0x80492ca。`,
            p`（4）jmp 指令中的 E9H 为操作码，后面 4 个字节为偏移量，因为是小端方式，故偏移量为 FFFFFF00H，即-100H=-256。后面的 sub 指令的地址为 0x804829b，故 jmp 指令的转移目标地址为 0x804829b+0xffffff00=0x804829b-0x100=0x804819b。`
        )
    ),
    section('10.已知函数 comp 的 C 语言代码及其过程体对应的汇编代码如图 3.1 所示。')(
        img(pic3_6_4)('图 3.1　题 10 图'),
        p`要求回答下列问题或完成下列任务。`,
        p`（1）给出每条汇编指令的注释，并说明为什么 C 代码只有一个 if 语句而汇编代码有两条条件转移指令。`,
        p`（2）按照主教材中图 3.22 给出的「if（）goto…」语句形式写出汇编代码对应的 C 语言代码。`,
        section('分析解答')(
            p`（1）汇编指令的注释如下：`,

            precode(`1　  movb   8（%ebp）， %dl          // R[dl]←M[R[ebp]+8]，将 x 送 DL
2　  movl   12（%ebp）， %eax        // R[eax]←M[R[ebp]+12]，将 p 送 EAX
3　  testl  %eax， %eax            // R[eax] and R[eax]，判断 p 是否为 0
4　  je      .L1                  // 若 p 为 0，则转.L1 执行 
5　  testb  $0x80， %dl            // R[dl] and 80H，判断 x 的第一位是否为 0
6　  je      .L1                  // 若 x>=0，则转.L1 执行 
7　  addb   %dl， （%eax）           // M[R[eax]]←M[R[eax]]+R[dl]，即*p+=x
8　.L1:`)(),

            p`因为 C 语言 if 语句中的条件表达式可以对多个条件进行逻辑运算，而汇编代码中一条指令只能进行一种逻辑运算，并且在每条逻辑运算指令生成的标志都是存放在同一个 EFLAGS 寄存器中，所以，最好在一条逻辑指令后跟一条条件转移指令，把 EFLAGS 中标志用完，然后再执行另一次逻辑判断并根据条件进行转移的操作。`,
            p`（2）按照主教材中图 3.22 给出的「if（）goto…」语句形式写出汇编代码对应的 C 语言代码如下：`,

            precode(`1　void comp(char x, int *p)
2　{
3　    if (p!=0)
4　          if (x<0)
5　            *p += x;
6　}`)(),
            p``
        )
    ),
    section('11.已知函数 func 的 C 语言代码框架及其过程体对应的汇编代码如图 3.2 所示，根据对应的汇编代码填写 C 代码中缺失的表达式。')(
        img(pic3_6_5)('图 3.2　题 11 图'),
        section('分析解答')(
            precode(` 1　int func(int x, int y)
 2　{
 3　         int z =   x*y   ;
 4　         if (    x<=-100     ) {
 5　               if (    y>x )
 6　               z =  x+y    ;
 7　         else
 8　               z =  x-y  ;
 9　    } else if (  x>=16  )
10　           z =   x &y     ;
11　    return z;
12　}`)(),
            p``
        )
    ),
    section('12.已知函数 do_loop 的 C 语言代码如下：')(
        precode(` 1　short do_loop(short x, short y, short k) {
 2　    do {
 3　        x*=(y%k) ;
 4　        k--;
 5　    } while ((k>0) && (y>k));
 6　    return x;
 7　}`)(),

        p`函数 do_loop 的过程体对应的汇编代码如下：`,

        precode(` 1　  movw          8(%ebp), %bx
 2　  movw          12(%ebp), %si
 3　  movw          16(%ebp), %cx
 4　.L1:
 5　  movw          %si, %dx
 6　  movw          %dx, %ax
 7　  sarw          $15, %dx
 8　  idiv           %cx
 9　  imulw          %dx, %bx
10　  decw          %cx
11　  testw          %cx, %cx
12　  jle          .L2
13　  cmpw          %cx, %si
14　  jg          .L1
15　.L2:
16　  movswl     %bx, %eax`)(),

        p`请回答下列问题或完成下列任务：`,
        p`（1）给每条汇编指令添加注释，并说明每条指令执行后，目的寄存器中存放的是什么信息？`,
        p`（2）上述函数过程体中用到了哪些被调用者保存寄存器和哪些调用者保存寄存器？在该函数过程体前面的准备阶段哪些寄存器必须保存到栈中？`,
        p`（3）为什么第 7 行中的 DX 寄存器需要算术右移 15 位？`,
        section('分析解答')(
            p`（1）每个入口参数都要按 4 字节边界对齐，因此，参数 x、y 和 k 入栈时都占 4 个字节。`,

            precode(` 1　  movw          8（%ebp）， %bx      // R[bx]←M[R[ebp]+8]，将 x 送 BX
 2　  movw          12（%ebp）， %si     // R[si]←M[R[ebp]+12]，将 y 送 SI
 3　  movw          16（%ebp）， %cx     // R[cx]←M[R[ebp]+16]，将 k 送 CX
 4　.L1:
 5　  movw          %si， %dx          // R[dx]←R[si]，将 y 送 DX
 6　  movw          %dx， %ax          // R[ax]←R[dx]，将 y 送 AX
 7　  sarw          $15， %dx          // R[dx]←R[dx]>>15，将 y 的符号扩展 16 位送 DX
 8　  idiv          %cx               // R[dx]←R[dx-ax]÷R[cx]的余数，将 y%k 送 DX
                                      // R[ax]←R[dx-ax]÷R[cx]的商，将 y/k 送 AX
 9　  imulw         %dx， %bx          // R[bx]←R[bx]*R[dx]，将 x*（y%k） 送 BX
10　  decw          %cx               // R[cx]←R[cx]-1，将 k-1 送 CX
11　  testw         %cx， %cx          // R[cx] and R[cx]，得 OF=CF=0，负数则 SF=1，零则 ZF=1
12　  jle          .L2                // 若 k 小于等于 0，则转.L2
13　  cmpw          %cx， %si          // R[si] - R[cx]，将 y 与 k 相减得到各标志 
14　  jg           .L1                // 若 y 大于 k，则转.L1
15　.L2:
16　  movswl       %bx， %eax          // R[eax]←R[bx]，将 x*（y%k） 送 AX`)(),

            p`（2）被调用者保存寄存器有 BX、SI，调用者保存寄存器有 AX、CX 和 DX。在该函数过程体前面的准备阶段，被调用者保存的寄存器 EBX 和 ESI 必须保存到栈中。`,
            p`（3）因为执行第 8 行除法指令前必须先将被除数扩展为 32 位，而这里是带符号数除法，因此，采用算术右移以扩展 16 位符号，放在高 16 位的 DX 中，低 16 位在 AX 中。`
        )
    ),
    section(
        '13.已知函数 f1 的 C 语言代码框架及其过程体对应的汇编代码如图 3.3 所示，根据对应的汇编代码填写 C 代码中缺失的部分，并说明函数 f1 的功能。'
    )(
        img(pic3_6_6)('图 3.3　题 13 图'),
        section('分析解答')(
            precode(`1　int f1(unsigned x)
2　{
3　    int y = 0 ;
4　    while (  x!=0  ) {
5　        y ^=x   ;
6　        x>>=1   ;
7　    }
8　    return  y&0x1     ;
9　}`)(),

            p`函数 f1 的功能是返回（x^x>>1^x>>2^…）&0x1，因此 f1 用于检测 x 的奇偶性，当 x 中有奇数个 1；则返回为 1；否则返回 0。`
        )
    ),
    section('14.已知函数 sw 的 C 语言代码框架如下：')(
        precode(`    int sw（int x） {
        int  v=0；
        switch （x） {
            /* switch 语句中的处理部分省略 */
        }
        return v；
    }`)(),

        p`对函数 sw 进行编译，得到函数过程体中开始部分的汇编代码以及跳转表如图 3.4 所示。`,
        img(pic3_6_7)('图 3.4　题 14 图'),
        p`回答下列问题：函数 sw 中的 switch 语句处理部分标号的取值情况如何？标号的取值在什么情况下执行 default 分支？哪些标号的取值会执行同一个 case 分支？`,
        section('分析解答')(
            p`函数 sw 只有一个入口参数 x，由汇编代码的第 2～5 行指令知，当 x+3>7 时，转标号.L7 处执行；否则，按照跳转表中的地址转移执行。x 与跳转目标处标号的关系如下：`,
            p`x+3=0：.L7`,
            p`x+3=1：.L2`,
            p`x+3=2：.L2`,
            p`x+3=3：.L3`,
            p`x+3=4：.L4`,
            p`x+3=5：.L5`,
            p`x+3=6：.L7`,
            p`x+3=7：.L6`,
            p`由此可知，switch（x）中省略的处理部分结构如下：`,

            precode(`case -2:
case -1:
    …     // .L2 标号处指令序列对应的语句 
    break；
case 0:
    …     // .L3 标号处指令序列对应的语句 
    break；
case 1:
    …     // .L4 标号处指令序列对应的语句 
    break；
case 2:
    …     // .L5 标号处指令序列对应的语句 
    break；
case 4:
    …     // .L6 标号处指令序列对应的语句 
    break；
default:
    …     // .L7 标号处指令序列对应的语句`)(),
            p``
        )
    ),
    section('15.已知函数 test 的入口参数有 a、b、c 和 p，C 语言过程体代码如下：')(
        precode(`*p = a;
return b*c;`)(),

        p`函数 test 过程体对应的汇编代码如下：`,

        precode(`1　movl       20(%ebp), %edx
2　movsbw     8(%ebp), %ax
3　movw       %ax, (%edx)
4　movzwl     12(%ebp), %eax
5　movzwl     16(%ebp), %ecx
6　mull       %ecx, %eax`)(),

        p`写出函数 test 的原型，给出返回参数的类型以及入口参数 a、b、c 和 p 的类型和顺序。`,
        section('分析解答')(
            p`根据第 2、3 行指令可知，参数 a 是 char 型，参数 p 是指向 short 型变量的指针；根据第 4、5 行指令可知，参数 b 和 c 都是 unsigned short 型，根据第 6 行指令可知，test 的返回参数类型为 unsigned int。因此，test 的原型为：`,

            precode(`unsigned int test(char a, unsigned short b, unsigned short c, short *p);`)(),
            p``
        )
    ),
    section('16.已知函数 funct 的 C 语言代码如下：')(
        precode(` 1　#include<stdio.h>
 2　int funct(viod) {
 3　    int  x, y;
 4　    scanf(“%d %d”, &x, &y);
 5　    return x-y;
 6　}`)(),

        p`函数 funct 对应的汇编代码如下：`,

        precode(` 1　funct：
 2　pushl     %ebp
 3　movl     %esp， %ebp
 4　subl     $40， %esp
 5　leal     -8（%ebp）， %eax
 6　movl     %eax， 8（%esp）
 7　leal     -4（%ebp）， %eax
 8　movl     %eax， 4（%esp）
 9　movl     $.LC0， （%esp）          // 将指向字符串「%d %d」的指针入栈 
10　call     scanf                  // 假定 scanf 执行后 x=15，y=20
11　movl     -4（%ebp）， %eax
12　subl     -8（%ebp）， %eax
13　leave
14　ret`)(),

        p`假设函数 funct 开始执行时，R[esp]=0xbc000020，R[ebp]=0xbc000030，指向字符串「%d%d」的指针为 0x804c000。回答下列问题或完成下列任务。`,
        p`（1）执行第 3、10 和 13 行的指令后，寄存器 EBP 中的内容分别是什么？`,
        p`（2）执行第 3、10 和 13 行的指令后，寄存器 ESP 中的内容分别是什么？`,
        p`（3）局部变量 x 和 y 所在存储单元的地址分别是什么？`,
        p`（4）画出执行第 10 行指令后 funct 的栈帧，指出栈帧中的内容及其地址。`,
        section('分析解答')(
            p`每次执行 pushl 指令后，R[esp]=R[esp]-4，因此，第 2 行指令执行后 R[esp]=0xbc00001c。`,
            p`（1）执行第 3 行指令后，R[ebp]=R[esp]=0xbc00001c。到第 12 条指令执行结束都没有改变 EBP 的内容，因而执行第 10 行指令后，EBP 的内容还是为 0xbc00001c。执行第 13 行指令后，EBP 的内容恢复为进入函数 funct 时的值 0xbc000030。`,
            p`（2）执行第 3 行指令后，R[esp]=0xbc00001c。执行第 4 行指令后 R[esp]=R[esp]-40=0xbc00001c-0x28=0xbbfffff4。因而执行第 10 行指令后、跳转到 scanf 函数执行前，ESP 中的内容为 0xbbfffff4-4=0xbbfffff0；在从 scanf 函数返回后 ESP 中的内容为 0xbbfffff4。执行第 13 行指令后，ESP 的内容恢复为进入函数 funct 时的旧值，即 R[esp]=0xbc000020。`,
            p`（3）第 5、6 两行指令将 scanf 的第三个参数&y 入栈，入栈的内容为 R[ebp]-8=0xbc000014；第 7、8 两行指令将 scanf 的第二个参数&x 入栈，入栈的内容为 R[ebp]-4=0xbc000018。故 x 和 y 所在的地址分别为 0xbc000018 和 0xbc000014。`,
            p`（4）执行第 10 行指令后，funct 栈帧的地址范围及其内容如图 3.5 所示。`,
            img(pic3_6_8)('图 3.5　题 16 图')
        )
    ),
    section('17.已知递归函数 refunc 的 C 语言代码框架如下：')(
        precode(` 1　int refunc(unsigned x) {
 2　    if (_______________)
 3　        return___________;
 4　    unsigned nx =__________;
 5　    int rv = refunc(nx) ;
 6　    return______________;
 7　}`)(),

        p`上述递归函数过程体对应的汇编代码如下：`,

        precode(` 1　  movl     8(%ebp), %ebx
 2　  movl     $0, %eax
 3　  testl     %ebx, %ebx
 4　  je     .L2
 5　  movl     %ebx, %eax
 6　  shrl     $1, %eax
 7　  movl     %eax, (%esp)
 8　  call     refunc
 9　  movl     %ebx, %edx
10　  andl     $1, %edx
11　  leal     (%edx, %eax), %eax
12　.L2:
      …
      ret`)(),

        p`根据对应的汇编代码填写 C 代码中缺失的部分，并说明函数的功能。`,
        section('分析解答')(
            p`第 1 行汇编指令说明参数 x 存放在 EBX 中，根据第 4 行判断 x=0，则转.L2；否则继续执行第 5～11 行指令。根据第 5、6、7 行指令可知，入栈参数 nx 的计算公式为 x>>1；根据第 9、10、11 行指令可知，返回值为（x&1）+rv。由此推断出 C 代码中缺失的部分如下：`,

            precode(`1　int refunc(unsigned x) {
2　    if (    x==0   )
3　        return     0     ;
4　    unsigned nx =   x>>1    ;
5　    int rv = refunc(nx) ;
6　    return    (x & 0x1) + rv    ;
7　}`)(),

            p`该函数的功能为计算 x 的各个数位中 1 的个数总数。`
        )
    ),
    section('18.填写表 3.4，说明每个数组的元素大小、整个数组的大小以及第 i 个元素的地址。')(
        img(pic3_6_9)('表 3.4　题 18 用表 1'),
        section('分析解答')(
            p`在 IA-32 中，GCC 为数据类型 long double 型变量分配 12 字节空间，实际上只占用 10 个字节。填表 3.4 后，得到表 3.5。`,

            img(pic3_6_10)('表 3.5　题 18 用表 2')
        )
    ),
    section(
        '19.假设 short 型数组 S 的首地址 AS 和数组下标（索引）变量 i（int 型）分别存放在寄存器 EDX 和 ECX 中，下列给出的表达式的结果存放在 EAX 或 AX 中，仿照例子填写表 3.6，说明表达式的类型、值和相应的汇编代码。'
    )(img(pic3_6_11)('表 3.6　题 19 用表 1'), section('分析解答')(p`填写表 3.6 后，得到表 3.7。`, img(pic3_6_12)('表 3.7　题 19 用表 2'))),
    section('20.假设函数 sumij 的 C 代码如下，其中，M 和 N 是用#define 声明的常数。')(
        precode(` 1　int a[M][N], b[N][M];
 2
 3　int sumij(int i, int j) {
 4　    return a[i][j] + b[j][i];
 5　}`)(),

        p`已知函数 sumij 的过程体对应的汇编代码如下：`,

        precode(` 1　movl     8(%ebp), %ecx
 2　movl     12(%ebp), %edx
 3　leal     (,%ecx, 8), %eax
 4　subl     %ecx, %eax
 5　addl     %edx, %eax
 6　leal     (%edx, %edx, 4), %edx
 7　addl     %ecx, %edx
 8　movl     a(, %eax, 4), %eax
 9　addl     b(,%edx, 4), %eax`)(),

        p`根据上述汇编代码，确定 M 和 N 的值。`,
        section('分析解答')(
            p`根据汇编指令功能可以推断最终在 EAX 中返回的值为：M[a+7*4*i+4*j]+M[b+5*4*j+4*i]，因为数组 a 和 b 都是 int 型，每个数组元素占 4B，因此，M=5，N=7。`,
            p`（若 a 和 b 的每个元素占一个字节，则 a[i][j]的地址为 a+i*N+j；b[j][i]的地址为 b+j*M+i）`
        )
    ),
    section('21.假设函数 st_ele 的 C 代码如下，其中，L、M 和 N 是用#define 声明的常数。')(
        precode(` 1　int a[L][M][N];
 2
 3　int st_ele(int i, int j, int k, int *dst) {
 4　    *dst = a[i][j][k];
 5　    return sizeof(a);
 6　}`)(),

        p`已知函数 st_ele 的过程体对应的汇编代码如下：`,

        precode(` 1　movl     8(%ebp), %ecx
 2　movl     12(%ebp), %edx
 3　leal     (%edx,%edx, 8), %edx
 4　movl     %ecx, %eax
 5　sall     $6, %eax
 6　subl     %ecx, %eax
 7　addl     %eax, %edx
 8　addl     16(%ebp), %edx
 9　movl     a(, %edx, 4), %eax
10　movl     20(%ebp), %edx
11　movl     %eax, (%edx)
12　movl     $4536, %eax`)(),

        p`根据上述汇编代码，确定 L、M 和 N 的值。`,
        section('分析解答')(
            p`执行第 11 行指令后，a[i][j][k]的地址为 a+4*（63*i+9*j+k），所以，可以推断出中间的 M=9，N=63/9=7。根据第 12 行指令，可知数组 a 的大小为 4536 字节，故 L=4536/（4*N*M）=18。`
        )
    ),
    section('22.假设函数 trans_matrix 的 C 代码如下，其中，M 是用#define 声明的常数。')(
        precode(` 1　void trans_matrix(int a[M][M]) {
 2　     int i, j, t;
 3　     for (i = 0; i < M; i++)
 4　          for (j = 0; j < M; j++) {
 5　               t = a[i][j];
 6　               a[i][j] = a[j][i];
 7　               a[j][i] = t;
 8　          }
 9　}`)(),

        p`已知采用优化编译（选项-O2）后函数 trans_matrix 的内循环对应的汇编代码如下：`,

        precode(` 1　.L2:
 2　  movl     (%ebx), %eax
 3　  movl     (%esi, %ecx, 4), %edx
 4　  movl     %eax, (%esi, %ecx, 4)
 5　  addl     $1, %ecx
 6　  movl     %edx, (%ebx)
 7　  addl     $76, %ebx
 8　  cmpl     %edi, %ecx
 9　  jl     .L2`)(),

        p`根据上述汇编代码，回答下列问题或完成下列任务。`,
        p`（1）M 的值是多少？常数 M 和变量 j 分别存放在哪个寄存器中？`,
        p`（2）写出上述优化汇编代码对应的函数 trans_matrix 的 C 代码。`,
        section('分析解答')(
            p`（1）常数 M=76/4=19，存放在 EDI 中，变量 j 存放在 ECX 中。`,
            p`（2）上述优化汇编代码对应的函数 trans_matrix 的 C 代码如下：`,

            precode(` 1　void trans_matrix(int a[M][M]) {
 2　    int i, j, t, *p;
 3　    int c=(M<<2);
 3　    for (i = 0; i < M; i++) {
 4　         p=&a[0][i];
 5　         for (j = 0; j < M; j++) {
 6　              t=*p;
 7　              *p = a[i][j];
 8　              a[i][j] = t;
 9　              p += c；
10　         }
11　    }
12　}`)(),
            p``
        )
    ),
    section('23.假设结构类型 node 的定义、函数 np_init 的 C 代码及其对应的部分汇编代码如图 3.6 所示。')(
        img(pic3_6_13)('图 3.6　题 23 图'),
        p`回答下列问题或完成下列任务。`,
        p`（1）结构 node 所需存储空间有多少字节？成员 p、s.x、s.y 和 next 的偏移地址分别为多少？`,
        p`（2）根据汇编代码填写 np_init 中缺失的表达式。`,
        section('分析解答')(
            p`（1）node 所需存储空间需要 4+（4+4）+4=16 字节。成员 p、s.x、s.y 和 next 的偏移地址分别为 0、4、8 和 12。`,
            p`（2）np_init 中缺失的表达式如下：`,

            precode(`void np_init(struct node *np)
{
    np->s.x =  np->s.y     ;
    np->p =  &(np->s.x)    ;
    np->next=  np    ;
}`)(),
            p``
        )
    ),
    section('24.假设联合类型 utype 的定义如下：')(
        precode(`typedef     union {
    struct  {
        int          x;
        short       y;
        short     z;
    } s1
    struct  {
        short     a[2];
        int          b;
        char       *p;
    } s2
} utype;`)(),

        p`若存在具有如下形式的一组函数：`,

        precode(`viod getvalue(utype *uptr, TYPE *dst) {
    *dst = EXPR;
}`)(),

        p`该组函数用于计算不同表达式 EXPR 的值，返回值的数据类型根据表达式的类型确定。假设函数 getvalue 的入口参数 uptr 和 dst 分别被装入寄存器 EAX 和 EDX 中，仿照例子填写表 3.8，说明在不同的表达式下的 TYPE 类型以及表达式对应的汇编指令序列（要求尽量只用 EAX 和 EDX，不够用时再使用 ECX）。`,
        img(pic3_6_14)('表 3.8　题 24 用表 1'),
        section('分析解答')(p`填写表 3.8 后，得到表 3.9。`, img(pic3_6_15)('表 3.8　题 24 用表 2'))
    ),
    section('25.给出下列各个结构类型中每个成员的偏移量、结构总大小以及在 IA-32/Linux 下结构起始位置的对齐要求。')(
        p`（1）struct S1{short s；char c；int i；char d；}；`,
        p`（2）struct S2{int i；short s；char c；char d；}；`,
        p`（3）struct S3{char c；short s；int i；char d；}；`,
        p`（4）struct S4{short s[3]；char c；}；`,
        p`（5）struct S5{char c[3]；short*s；int i；char d；double e；}；`,
        p`（6）struct S6{struct S1 c[3]；struct S2*s；char d；}；`,
        section('分析解答')(img(pic3_6_16)())
    ),
    section('26.以下是结构 test 的声明：')(
        precode(`struct {
    char          c;
    double        d;
    int           i;
    short         s;
    char          *p;
    long          l;
    long long     g；
    void          *v；
} test；`)(),

        p`假设在 Windows 平台上编译，则这个结构中每个成员的偏移量是多少？结构总大小为多少字节？如何调整成员的先后顺序使得结构所占空间最小？`,
        section('分析解答')(
            p`Windows 平台要求不同的基本类型按照其数据长度进行对齐。每个成员的偏移量如下：`,
            p`c　d　i　s　p　l　g　v`,
            p`0　8　16　20　24　28　32　40`,
            p`结构总大小为 48 字节，因为其中的 d 和 g 必须是按 8 字节边界对齐，所以，必须在末尾再加上 4 个字节，即 44+4=48 字节。变量长度按照从大到小顺序排列，可以使得结构所占空间最小，因此调整顺序后的结构定义如下：`,

            precode(`struct {
        double          d;
        long long       g；
        int             i;
        char            *p;
        long            l;
        void            *v；
        short           s;
        char            c;
    } test；`)(),

            p`每个成员的偏移量如下：`,
            p`d　g　i　p　l　v　s　c`,
            p`0　8　16　20　24　28　32　34　结构总大小为 34+6=40 字节。`
        )
    ),
    section('27.图 3.7 给出了函数 getline 存在漏洞和问题的 C 语言代码实现，右边是其对应的反汇编部分结果。')(
        img(pic3_6_17)('图 3.7　题 27 图 1'),
        p`假定有一个调用过程 P 调用了函数 getline，其返回地址为 0x80485c8，为调用 getline 函数而执行完 call 指令时，部分寄存器的内容如下：R[ebp]=0xbffc0800，R[esp]=0xbffc07f0，R[ebx]=0x5，R[esi]=0x10，R[edi]=0x8。执行程序时从标准输入读入的一行字符串为「0123456789ABCDEF0123456789\n」，此时，程序会发生段错误（segmentation fault）并中止执行，经调试确认错误是在执行 getline 的 ret 指令时发生的。回答下列问题或完成下列任务。`,
        p`（1）画出执行第 7 行指令后栈中的信息存放情况。要求给出存储地址和存储内容，并指出存储内容的含义（如返回地址、EBX 旧值、局部变量、入口参数等）。`,
        p`（2）画出执行第 10 行指令并调用 gets 函数后回到第 10 行的下一条指令执行时栈中的信息存放情况。`,
        p`（3）当执行到 getline 的 ret 指令时，假如程序不发生段错误，则正确的返回地址是什么？发生段错误是因为执行 getline 的 ret 指令时得到了什么样的返回地址？`,
        p`（4）执行完 gets 函数后，哪些寄存器的内容已被破坏？`,
        p`（5）除了可能发生缓冲区溢出以外，getline 的 C 代码还有哪些错误？`,
        section('分析解答')(
            p`（1）执行第 7 行指令后，栈中信息存放情况如图 3.8a 所示。其中，gets 函数的入口参数为 buf 数组首地址，应等于 getline 函数的栈帧底部指针 EBP 的内容减 0x14，而 getline 函数的栈帧底部指针 EBP 的内容应等于执行完 getline 中第 2 行指令（push%ebp）后 ESP 的内容，此时，R[esp]=0xbffc07f0-4=0xbffc07ec，故 buf 数组首地址为 R[ebp]-0x14=R[esp]-0x14=0xbffc07ec-0x14=0xbffc07d8。`,
            p`（2）执行第 10 行指令后，跳转到 gets 函数执行。在 gets 函数中，将字符串「0123456789 ABCDEF0123456789\0」作为 buf 的内容写入 buf[0]（地址为 0xbffc07d8）处开始的存储单元中。信息存放情况如图 3.8b 所示。`,
            img(pic3_6_18)('图 3.8　题 27 图 2'),
            p`（3）当执行到 getline 的 ret 指令时，假如程序不发生段错误，则正确的返回地址应该是 0x80485c8，发生段错误是因为执行 getline 的 ret 指令时得到的返回地址为 0x8003938，这个地址所在存储段是不可执行的非代码段，因而发生了段错误（segmentation fault）。`,
            p`（4）执行完 gets 函数后，被调用者保存寄存器 EBX、ESI 和 EDI 在 P 中的内容已被破坏，同时还破坏了 EBP 在 P 中的内容。`,
            p`（5）getline 的 C 代码中 malloc 函数的参数应该为 strlen（buf）+1，此外，应该检查 malloc 函数的返回值是否为 NULL。`
        )
    ),
    section(
        '28.假定函数 abc 的入口参数有 a、b 和 c，每个参数都可能是带符号整数类型或无符号整数类型，而且它们的长度也可能不同。该函数具有如下过程体：'
    )(
        precode(`*b += c;
*a += *b;`)(),

        p`在 x86-64 机器上编译后的汇编代码如下：`,

        precode(` 1　abc:
 2　addl     (%rdx), %edi
 3　movl     %edi, (%rdx)
 4　movslq   %edi, %rdi
 5　addq     %rdi, (%rsi)
 6　ret`)(),

        p`分析上述汇编代码，以确定 3 个入口参数的顺序和可能的数据类型，写出函数 abc 可能的 4 种合理的函数原型。`,
        section('分析解答')(
            p`x86-64 过程调用时参数传递是通过通用寄存器进行的，前 3 个参数所用寄存器顺序为 RDI、RSI、RDX。`,
            p`abc 的 4 种合理的函数原型为：`,
            p`①void abc（int c，long*a，int*b）；`,
            p`②void abc（unsigned c，long*a，int*b）；`,
            p`③void abc（long c，long*a，int*b）；`,
            p`④void abc（unsigned long c，long*a，int*b）；`,
            p`根据第 3、4 行指令可知，参数 b 肯定指向一个 32 位带符号整数类型；根据第 5 行指令可知，参数 a 指向 64 位带符号整数类型；而参数 c 可以是 32 位，也可以是 64 位，因为*b 为 32 位，所以取 RDI 中的低 32 位 R[edi]（截断为 32 位），再和*b 相加。同时，参数 c 可以是带符号整数类型，也可以是无符号整数类型，因为第 2 行加法指令 addl 的执行结果对于带符号整数和无符号整数都一样。`
        )
    ),
    section('29.函数 lproc 的过程体对应的汇编代码如下：')(
        precode(` 1　  movl     8(%ebp), %edx
 2　  movl     12(%ebp), %ecx
 3　  movl     $255, %esi
 4　  movl     $-2147483648, %edi
 5　.L3:
 6　  movl     %edi, %eax
 7　  andl     %edx, %eax
 8　  xorl     %eax, %esi
 9　  movl     %ecx, %ebx
10　  shrl     %bl, %edi
11　  testl     %edi, %edi
12　  jne     .L3
13　  movl     %esi, %eax`)(),

        p`上述代码根据以下 lproc 函数的 C 代码编译生成：`,

        precode(` 1　int lproc(int x, int k)
 2　{
 3　    int val =________________;
 4　    int i;
 5　    for (i=________________; i________________; i =________________) {
 6　        val ^=________________;
 7　    }
 8　    return val；
 9　}`)(),

        p`回答下列问题或完成下列任务。`,
        p`（1）给每条汇编指令添加注释。`,
        p`（2）参数 x 和 k 分别存放在哪个寄存器中？局部变量 val 和 i 分别存放在哪个寄存器中？`,
        p`（3）局部变量 val 和 i 的初始值分别是什么？`,
        p`（4）循环终止条件是什么？循环控制变量 i 是如何被修改的？`,
        p`（5）填写 C 代码中缺失的部分。`,
        section('分析解答')(
            p`（1）汇编指令注释如下：`,

            precode(` 1　  movl       8（%ebp）， %edx       // R[edx]←M[R[ebp]+8]，将 x 送 EDX
 2　  movl       12（%ebp）， %ecx      // R[ecx]←M[R[ebp]+12]，将 k 送 ECX
 3　  movl       $255， %esi          // R[esi]←255，将 255 送 ESI
 4　  movl       $-2147483648， %edi  // R[edi]←-2147483648，将 0x80000000 送 EDI
 5　.L3:
 6　  movl       %edi， %eax          // R[eax]←R[edi]，将 i 送 EAX
 7　  andl       %edx， %eax          // R[eax]←R[eax] and R[edx]，将 i and x 送 EAX
 8　  xorl       %eax， %esi          // R[esi]←R[esi] xor R[eax]，将 val xor （i and x）送 ESI
 9　  movl       %ecx， %ebx          // R[ebx]←R[ecx]，将 k 送 EBX
10　  shrl       %bl， %edi           // R[edi]←R[edi] >> R[bl]，将 i 逻辑右移 k 位送 EDI
11　  testl  %edi， %edi
12　  jne       .L3                  // 若 R[edi]≠0，则转.L3
13　  movl       %esi， %eax          // R[eax]←R[esi]`)(),

            p`（2）x 和 k 分别存放在 EDX 和 ECX 中。局部变量 val 和 i 分别存放在 ESI 和 EDI 中。`,
            p`（3）局部变量 val 和 i 的初始值分别是 255 和-2147483648。`,
            p`（4）循环终止条件为 i 等于 0。循环控制变量 i 每次循环被逻辑右移 k 位。`,
            p`（5）C 代码中缺失的部分填空如下，注意：对无符号整数进行的是逻辑右移。`,

            precode(` 1　int lproc(int x, int k)
 2　{
 3　    int val =   255    ;
 4　    int i;
 5　    for (i=  -2147483648    ; i != 0  ; i=   (unsigned) i >> k  ) {
 6　          val ^=   (i & x)   ;
 7　    }
 8　    return val；
 9　}`)(),
            p``
        )
    ),
    section('30.假设你需要维护一个大型 C 语言程序，其部分代码如下：')(
        precode(` 1　typedef struct {
 2　    unsigned            l_data;
 3　    line_struct      x[LEN];
 4　    unsigned          r_data;
 5　} str_type;
 6
 7　void  proc(int i, str_type *sptr) {
 8　    unsigned val = sptr->l_data + sptr->r_data;
 9　    line_struct *xptr = &sptr->x[i];
10　    xptr->a[xptr->idx] = val;
11　}`)(),

        p`编译时常量 LEN 以及结构类型 line_struct 的声明都在一个你无权访问的文件中，但是，你有代码的.o 版本（可重定位目标）文件，通过 OBJDUMP 反汇编该文件后，得到函数 proc 对应的反汇编结果，如图 3.9 所示，根据反汇编结果推断常量 LEN 的值以及结构类型 line_struct 的完整声明（假设其中只有成员 a 和 idx）。`,
        img(pic3_6_19)('图 3.9　题 30 图'),
        section('分析解答')(
            p`从第 5 行指令可知，i 在 EAX 中；从第 6 行指令可知，sptr 在 ECX 中。由第 7 行指令可知，i*28 在 EBX 中。由第 8、9 和 10 行指令可猜出，x 的每个数组元素占 28B，并且 xptr->idx 的地址为 sptr+i*28+4，故在 line_struct 中的第一个分量为 idx，因而后面的 24B 为 6 个数组元素 a[0]～a[5]，类型与 val 变量的类型相同，即 unsigned int。`,
            p`line_struct 结构类型的定义如下：`,

            precode(`typedef     struct {
    int       idx;
    unsigned  a[6];
} line_struct;`)(),

            p`由第 11、12 行指令可知，x 数组所占空间为 0xc8-4=200-4=196B，所以 LEN=196/28=7。`
        )
    ),
    section('31.假设嵌套的联合数据类型 node 声明如下：')(
        precode(`     1　union node {
     2　    struct {
     3　        int *ptr;
     4　        int data1;
     5　    } n1;
     6　    struct {
     7　        int data2;
     8　        union  node *next;
     9　    } n2;
    10　};`)(),

        p`有一个进行链表处理的过程 chain_proc 的部分 C 代码如下：`,

        precode(`     1　void chain_proc(union node *uptr) {
     2　    uptr-> ________ = *(uptr-> _________) - uptr-> ___________;
     3　}`)(),

        p`过程 chain_proc 的过程体对应的汇编代码如下：`,

        precode(`     1　movl     8(%ebp), %edx
     2　movl     4(%edx), %ecx
     3　movl     (%ecx), %eax
     4　movl     (%eax), %eax
     5　subl     (%edx), %eax
     6　movl     %eax, 4(%ecx)`)(),

        p`回答下列问题或完成下列任务。`,
        p`（1）node 类型中结构成员 n1.ptr、n1.data1、n2.data2、n2.next 的偏移量分别是多少？`,
        p`（2）node 类型总大小占多少字节？`,
        p`（3）根据汇编代码写出 chain_proc 的 C 代码中缺失的表达式。`,
        section('分析解答')(
            p`（1）n1.ptr、n1.data1、n2.data2、n2.next 的偏移量分别是 0、4、0 和 4。`,
            p`（2）node 类型总大小占 8 字节。`,
            p`（3）chain_proc 的 C 代码中缺失的表达式如下：`,

            precode(`uptr-> n2.next ->n1.data1 = *(uptr->n2. next->n1. ptr ) - uptr->n2. data2 ;`)(),
            p``
        )
    ),
    section('32.以下声明用于构建一棵二叉树：')(
        precode(`     1　typedef  struct  TREE  *tree_ptr;
     2　struct  TREE {
     3　    tree_ptr      left;
     4　    tree_ptr     right;
     5　    long     val;
     6　} ;`)(),

        p`有一个进行二叉树处理的函数 trace 的原型为「long trace（tree_ptr tptr）；」，其过程体对应的 x86-64 汇编代码（64 位版本）如下：`,

        precode(`     1　trace:
     2　  movl          $0， %eax
     3　  testq          %rdi， %rdi
     4　  je          .L2
     5　.L3:
     6　  movq          16（%rdi）， %rax
     7　  movq          （%rdi）， %rdi
     8　  testq          %rdi， %rdi
     9　  jne          .L3
    10　.L2:
    11　  rep          // 在此相当于空操作指令，避免使 ret 指令作为跳转目的指令 
    12　  ret`)(),

        p`回答下列问题或完成下列任务。`,
        p`（1）函数 trace 的入口参数 tptr 通过哪个寄存器传递？`,
        p`（2）写出函数 trace 完整的 C 语言代码。`,
        p`（3）说明函数 trace 的功能。`,
        section('分析解答')(
            p`（1）函数 trace 的入口参数 tptr 通过 RDI 寄存器传递。`,
            p`（2）函数 trace 完整的 C 语言代码如下：`,

            precode(`long trace( tree_ptr tptr)
{
    long  ret_val=0;
    tree_ptr  p=tptr;
    while (p!=0) {
        ret_val=p->val;
        p=p->left;
    }
    return ret_val;
}`)(),

            p`（3）函数 trace 的功能是：返回二叉树中最左边叶子节点中的值 val。`
        )
    )
).elem
