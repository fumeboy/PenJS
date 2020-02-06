import { p, section, precode, img } from '@src/components/@write'
import pic6_6_1 from './6-6-1.jpg'
import pic6_6_2 from './6-6-2.jpg'
import pic6_6_3 from './6-6-3.jpg'
import pic6_6_4 from './6-6-4.jpg'
import pic6_6_5 from './6-6-5.jpg'
import pic6_6_6 from './6-6-6.jpg'
import pic6_6_7 from './6-6-7.jpg'
import pic6_6_8 from './6-6-8.jpg'
import pic6_6_9 from './6-6-9.jpg'
import pic6_6_10 from './6-6-10.jpg'
import pic6_6_11 from './6-6-11.jpg'
import pic6_6_12 from './6-6-12.jpg'
const title = '6.6　分析应用题'
const page = section(title)(
    section(
        '1.假定某计算机的主存地址空间大小为 512MB，按字节编址。若每次读写操作最多可以存取 32 位，则存储器地址寄存器 MAR 和存储器数据寄存器 MDR 的位数至少分别为多少？'
    )(
        section('分析解答')(
            p`主存地址空间大小为 512MB，按字节编址，说明每个存储单元有 8 位，共有 512M=229个存储单元。所以，地址位数至少应有 29 位，故存放主存地址的存储器地址寄存器 MAR 至少应有 29 位。每次读写最多存取 32 位，因此，用来作为读/写数据缓冲的存储器数据寄存器 MDR 的位数至少应有 32 位。`
        )
    ),
    section(
        '2.某计算机主存地址 16 位，每个存储单元有 8 位，即按字节编址。如果用 1K×4 位的 RAM 芯片构成该存储器，需要多少芯片？片选逻辑的输入需要多少位地址？'
    )(
        section('分析解答')(
            p`主存地址为 16 位，所以主存地址空间大小为 216=64K 个存储单元，每个存储单元占 8 位。因此需要的芯片数为（64K/1K）×（8/4）=64×2=128。存储器在字方向上扩展了 64 倍，因而片选逻辑需要 6 位地址。每个芯片有 1K=1024=210个单元，所以芯片内地址位数为 10 位，剩下 6 位地址正好用于片选逻辑。`
        )
    ),
    section(
        '3.某计算机主存最大寻址空间为 64KB，按字节编址，假定用 1K×8 位的具有 8 个位平面的 DRAM 芯片组成容量为 16KB 的内存条（主存模块），其传输宽度为 8 位。回答下列问题。'
    )(
        p`（1）每个内存条需要多少 DRAM 芯片？`,
        p`（2）构建容量为 48KB 的主存时，需要几个内存条？`,
        p`（3）主存地址共有多少位？其中哪几位用作 DRAM 芯片内地址？哪几位为 DRAM 芯片内的行地址？哪几位为 DRAM 芯片内的列地址？`,
        section('分析解答')(
            p`（1）16KB/1K×8 位 =16×1=16 片 DRAM。`,
            p`（2）48KB/16KB=3 个内存条。`,
            p`（3）因为是按字节编址，所以主存地址共 16 位：A15A14…A9…A1A0。若每次在总线上传输 8 位数据，则内存条中 16 个芯片按连续编址方式组织，每个内存条中有 1024 个存储单元，16 位地址中的低 10 位 A9…A1A0表示 DRAM 芯片内地址，其中 A9…A5为行地址，A4…A0为列地址。芯片内各个存储单元的排列如图 6.1 所示，图中每个方框表示一个存储单元，由 8 个位平面中相同位置的 8 位组成，方框上面显示的是对应的存储单元地址，方框内显示的是存储阵列中所在位的行号和列号。从图中显示的地址来看，同一行中的存储单元是连续的，也即在 DRAM 的行缓存中数据的地址是连续的。`,
            img(pic6_6_1)('图 6.1　题 3 用图'),
        )
    ),
    section(
        '4.某计算机主存最大寻址空间为 4GB，按字节编址，假定用 64M×8 位的具有 8 个位平面的 DRAM 芯片组成容量为 512MB、传输宽度为 64 位的内存条。回答下列问题：'
    )(
        p`（1）每个内存条需要多少个 DRAM 芯片？`,
        p`（2）构建容量为 2GB 的主存时，需要几个内存条？`,
        p`（3）主存地址共有多少位？其中哪几位用作 DRAM 芯片内地址？哪几位为 DRAM 芯片内的行地址？哪几位为 DRAM 芯片内的列地址？哪几位用于选择芯片？`,
        section('分析解答')(
            p`（1）512MB/（64M×8 位）=8 片 DRAM。`,
            p`（2）2GB/512MB=4 个内存条。`,
            p`（3）因为是按字节编址，所以主存地址共 32 位：A31A30…A25…A1A0。因为每次在总线上传输 64 位数据，因此，内存条内 8 个芯片同时进行读写，每个芯片有 8 个位平面，因而同时读出 64 位数据。芯片按交叉编址方式组织，每个内存条有 512MB 容量，故内存条内存储单元的地址有 29 位，即 A28…A4A3A2A1A0。其中，A2A1A0表示芯片号，A28…A4A3表示芯片内的存储单元地址，其中芯片内的行地址为 A28…A16，列地址为 A15…A3。`
        )
    ),
    section(
        '5.某计算机的主存地址空间大小为 64KB，按字节编址，已配有 0000H～7FFFH 的 ROM 区，若再用 8K×4 位的 RAM 芯片形成其余 32K×8 位的 RAM 存储区，则需要多少个这样的 RAM 芯片？假定将该计算机的主存地址空间升级为 16MB，ROM 区地址范围还是 000000H～007FFFH，剩下的所有地址空间都用 8K×4 位的 RAM 芯片配置，则需要多少个这样的 RAM 芯片？'
    )(
        section('分析解答')(
            p`因为主存地址空间为 64KB，按字节编址，所以主存地址范围为 0000H～FFFFH，其中 0000H～7FFFH 为 ROM 区，8000H～FFFFH 为 RAM 区，也即当 A15为 0 时选中 ROM 芯片，当 A15为 1 时选中 RAM 芯片。因为 RAM 区的大小为 32KB，故需 8K×4 位的 RAM 芯片数为 32KB/（8K×4bit）=4×2=8。`,
            p`若主存地址空间升级为 16MB 时，主存地址为 24 位，ROM 区范围为 000000H～007FFFH，其大小为 32KB，主存空间总大小为 16MB=512×32KB，所以 RAM 区大小为 511×32KB，需使用的 RAM 芯片数为 511×32KB/（8K×4 位）=511×4×2=4088。`
        )
    ),
    section(
        '6.假设 CPU 有 16 个地址引脚，8 个数据引脚，并用 MREQ 作为访存控制信号（低电平有效），用 WR 作为读/写控制信号（低电平为写，高电平为读）。现有以下规格的存储器芯片：1K×4 位 RAM、4K×8 位 RAM、1K×8 位 ROM、4K×8 位 ROM，另外有 74LS138 译码器和各种门电路。主存地址空间分配为：6000H～67FFH 为 ROM 区，6800H～6BFFH 为 RAM 区，其余为备用区，暂不连接芯片。请画出 CPU 与存储器的连接图，并详细画出片选逻辑。'
    )(
        section('分析解答')(
            p`第一步：将十六进制地址写成对应的二进制地址形式。`,
            img(pic6_6_2)(),
            p`第二步：选择芯片。ROM 区选择 2 片 1K×8 位 ROM 芯片；RAM 区选择 2 片 1K×4 位 RAM 芯片。选其他芯片都不合理。`,
            p`第三步：地址线的连接。对于 1K×8 位的 ROM 芯片和 1K×4 位的 RAM 芯片来说，其芯片内的地址引脚都为 10 位，因此，每个芯片的地址引脚都分别与地址线 A9 A8 A7 A6 A5 A4 A3 A2 A1 A0相连。剩下的高位地址线和访存控制信号 MREQ 共同产生片选信号。`,
            p`第四步：片选信号的形成。按本题要求，A15 A14=01，ROM 区的 A13 A12 A11=100，RAM 区的 A13 A12 A11 A10=1010。74LS138 译码器要求控制端 G1 为高，G2A与 G2B为低，因此可把它们分别接到 A14、A15和 MREQ 上。地址线 A13A12A11可作为译码器的 C、B、A 输入端。最终的片选信号由译码器输出信号和地址线 A10组合生成。具体的连接如图 6.2 所示，其中 CS 为片选信号。`
        )
    ),
    section(
        '7.假定一个存储器系统支持 4 体交叉存取，某程序执行过程中，CPU 访问的主存地址序列为 3，9，17，2，51，37，13，4，8，41，67，10，则哪些地址访问会发生体冲突？'
    )(
        section('分析解答')(
            p`对于 4 体交叉访问的存储系统，理想情况下，每隔 1/4 周期可读写一个数据，假定这个时间为 △t。每个存储模块内的地址分布如下。`,
            p`模块 0：0、4、8、12、16…`,
            p`模块 1：1、5、9、13、17…37…41…`,
            p`模块 2：2、6、10、14、18…`,
            p`模块 3：3、7、11、15、19…51…67…`,
            p`很显然，如果相邻 4 次访问中给定的访存地址出现在同一个模块内，就会发生访存冲突。所以 17 和 9、37 和 17、13 和 37、8 和 4 会发生冲突。41 和 13 也在同一个模块内且访问间隔小于 4 个 △t，但是，由于访问第 8 单元发生冲突而使其访问延迟三个 △t 进行，从而使得 41 号单元也延迟三个 △t 访问，因而，其访问不会和 13 号单元的访问发生冲突。`,
            img(pic6_6_3)('图 6.2　题 6 中 CPU 与存储芯片的连接'),
        )
    ),
    section(
        '8.假定有一个磁盘存储器，磁盘片外径为 355.6mm，有 20 个记录面，每面有 51mm 区域用于记录信息，道密度为 3.92TPM（道/mm），位密度为 90BPM（bit/mm），转速为 2400RPM，道间移动时间为 0.2ms。请问：'
    )(
        p`（1）磁盘容量约为多少？如果道密度和位密度同时扩大 100 倍，则容量约为多少？`,
        p`（2）平均存取时间和平均数据传输率各为多少？`,
        p`（3）如果在道密度和位密度同时扩大 100 倍的同时转速扩大 3 倍，则平均存取时间和平均数据传输率各为多少？`,
        section('分析解答')(
            p`（1）每面磁道数为 51mm×3.92TPM=200 道，给出的位密度是指最内圈上的位密度。所以，最内圈周长为 3.14×（355.6-2×51）≈796.3mm，故每道信息量为 796.3mm×90BPM≈71664bit，因此，磁盘容量为 20×200×71664bit=286656000bit≈273Mbit（1M=220）。若道密度和位密度同时扩大 100 倍，则磁道数扩大 100 倍，每道容量扩大 100 倍，所以整个盘组容量扩大 10000 倍，磁盘容量大约为 273M×104bit≈2666Gbit≈333GB（1G=230）。`,
            p`（2）平均寻道时间为[（200-1）×0.2+0]/2=19.9ms；转一圈的时间为 60×1000/2400RPM=25ms，平均（旋转）等待时间为（25ms+0）/2=12.5ms。平均存取时间为平均寻道时间与平均寻道时间之和，即 19.9ms+12.5ms=32.4ms。平均数据传输率为 R=71664bit×103/25≈2.87Mbit/s（1M=106）。`,
            p`（3）道密度扩大 100 倍，则平均寻道时间约为（19999×0.002+0）/2=20ms；转速扩大 3 倍，则转一圈的时间缩短为 25ms/3=8.33ms，平均等待时间缩短为 8.33ms/2=4.2ms，故平均存取时间为 20ms+4.2ms=24.2ms。位密度扩大 100 倍，则每道容量扩大 100 倍，转速扩大 3 倍，则转一圈的时间缩短为 1/3，因此，平均数据传输率共扩大 100×3=300 倍，即平均数据传输率为 300×2.87Mitb/s=861Mbit/s。`
        )
    ),
    section(
        '9.假定一个程序重复完成将磁盘上一个 4KB 的数据块读出，进行相应处理后，写回到磁盘的另外一个数据区。各数据块内信息在磁盘上连续存放，数据块随机地位于磁盘的一个磁道上。磁盘转速为 7200RPM，平均寻道时间为 10ms，磁盘最大数据传输率为 40MB/s，磁盘控制器的开销为 2ms，没有其他程序使用磁盘和处理器，并且磁盘读写操作和磁盘数据的处理时间不重叠。若程序对磁盘数据的处理需要 20000 个时钟周期，处理器时钟频率为 500MHz，则该程序完成一次数据块「读出—处理—写回」操作所需的时间为多少？每秒可以完成多少次这样的数据块操作？'
    )(
        section('分析解答')(
            p`磁盘旋转一圈的时间为 1000/（7200RPM/60）≈8.33ms，故平均旋转等待时间约为 8.33ms/2=4.17ms。因为数据块内信息连续，所以，一个数据块的传输时间为 4×210B/（40×106）B/s=0.1024ms，因而数据块的平均读取或写回时间为 2ms+10ms+4.17ms+0.1024ms≈16.27ms。数据块的处理时间为 20000/500MHz=0.04ms。因为数据块随机存放在某个磁道上，所以，每个数据块的「读出—处理—写回」操作时间都是相同的，其整个时间为 16.27ms×2+0.04ms=32.58ms。所以每秒可以完成这样的数据块操作次数是 1000ms/32.58ms≈30 次。`
        )
    ),
    section(
        '10.现代计算机中，SRAM 一般用于实现快速小容量的 cache，而 DRAM 用于实现慢速大容量的主存。以前超级计算机通常不提供 cache，而是用 SRAM 来实现主存（如 Cray 巨型机），请问：如果不考虑成本，你还这样设计高性能计算机吗？为什么？'
    )(
        section('分析解答')(
            p`不会。理由主要有以下两个：`,
            p`① 主存越大越好，主存大，缺页率降低，因而减少了访问磁盘所需的时间。DRAM 芯片的集成度比 SRAM 芯片的高得多，因而，用 DRAM 芯片比用 SRAM 芯片构成的主存容量大得多。`,
            p`② 程序访问的局部性特点使得 cache 的命中率很高，因而，CPU 访问的主要是 cache，对主存的访问不多，而且现代 DRAM 芯片中也有 SRAM 构成的高速缓存区。因此即使主存没有用快速的 SRAM 芯片而是用 DRAM 芯片，也不会对存储访问速度有多大影响。`
        )
    ),
    section(
        '11.某计算机主存地址空间大小有 8MB，分成 32768 个主存块，按字节编址；cache 可存放 8KB 数据（不包括有效位、标记等附加信息），采用直接映射方式，问 cache 共有多少行？主存地址如何划分？要求说明每个字段的含义、位数和在主存地址中的位置。'
    )(
        section('分析解答')(
            p`每个主存块大小为 8MB/32768=256B，故 cache 共有 8KB/256B=32 行。直接映射方式下，cache 行号（即行索引）有 5 位；由于每个主存块大小为 256B，按字节编址，故块内地址为 8 位；主存地址空间大小为 8MB，所以地址位数为 23 位，故主存地址中标记有 23-5-8=10 位。综上所述，主存地址共有以下三个字段：高 10 位为标记字段，中间 5 位为行索引，低 8 位为块内地址。`
        )
    ),
    section(
        '12.某计算机主存地址空间大小为 1GB，按字节编址。cache 可存放 64KB 数据，主存块大小为 128 字节，采用直接映射和直写（write-through）方式。请回答下列问题：'
    )(
        p`（1）主存地址如何划分？要求说明每个字段的含义、位数和在主存地址中的位置。`,
        p`（2）cache 的总容量为多少位？`,
        section('分析解答')(
            p`（1）cache 共有 64KB/128B=512 行，直接映射方式下，cache 行号占 9 位；由于每个主存块大小为 128B，按字节编址，故块内地址为 7 位；主存地址空间大小为 1GB，所以主存地址位数为 30 位。主存地址中标记有 30-9-7=14 位。综上所述，主存地址共有以下三个字段：高 14 位为标记，中间 9 位为行索引，低 7 位为块内地址。`,
            p`（2）因为直接映射不考虑替换算法，所以 cache 行中没有用于替换的控制位；因为采用直写方式，所以，cache 行中也没有修改位。每个 cache 行中包含 1 位有效位、14 位标记位和 128B 的数据，因此，cache 总容量为 512×（1+14+128×8）bit=519.5Kbit。`
        )
    ),
    section('13.对于数据的访问，分别给出具有下列要求的程序或程序段的示例。')(
        p`（1）空间局部性和时间局部性都好。`,
        p`（2）时间局部性好，空间局部性差。`,
        p`（3）空间局部性好，时间局部性差。`,
        p`（4）时间局部性和空间局部性都差。`,
        section('分析解答')(
            p`对于按行优先存放在内存的多维数组，如果按列优先访问数组元素，则空间局部性就差；如果在一个循环体中某个数组元素只被访问一次，则时间局部性就差。假定二维数组 a[1000][1000]按行优先存放在内存，以下给出的 4 个程序片段用于对数组 a 进行相应的处理，它们具有相同的功能，但数组访问的时间局部性和空间局部性截然不同（不考虑编译器的优化）。`,
            p`（1）时间局部性和空间局部性都好的程序片段。`,

            precode(`for (i=0; i<1000; i++)
    for (j=0; j<1000; j++) {
        sum=sum+a[i][j];
        product=product*a[i][j];
        square=square+a[i][j]*a[i][j];
    }`)(),

            p`（2）时间局部性好，空间局部性差。`,

            precode(`for (j=0; j<1000; j++)
    for (i=0; i<1000; i++) {
        sum=sum+a[i][j];
        product=product*a[i][j];
        square=square+a[i][j]*a[i][j];
    }`)(),

            p`（3）空间局部性好，时间局部性差。`,

            precode(`for (i=0; i<1000; i++)
    for (j=0; j<1000; j++)
        sum=sum+a[i][j];
for (i=0; i<1000; i++)
    for (j=0; j<1000; j++)
        product=product*a[i][j];
for (i=0; i<1000; i++)
    for (j=0; j<1000; j++)
        square=square+a[i][j]*a[i][j];`)(),

            p`（4）时间局部性和空间局部性都差。`,

            precode(`for (j=0; j<1000; j++)
    for (i=0; i<1000; i++) {
        sum=sum+a[i][j];
for (j=0; j<1000; j++)
    for (i=0; i<1000; i++) {
        product=product*a[i][j];
for (j=0; j<1000; j++)
    for (i=0; i<1000; i++) {
        square=square+a[i][j]*a[i][j];`)(),
            p``
        )
    ),
    section(
        '14.假定某计算机的主存地址空间大小为 64KB，按字节编址；cache 采用 4-路组相联映射、LRU 替换和写回（write back）策略，能存放 4KB 数据，主存与 cache 之间交换的主存块的大小为 64 字节。请回答下列问题：'
    )(
        p`（1）主存地址字段如何划分？要求说明每个字段的含义、位数和在主存地址中的位置。`,
        p`（2）cache 的总容量有多少位？`,
        p`（3）若 cache 初始为空，CPU 依次从 0 号地址单元顺序访问到 4344 号单元，共重复访问 16 次。cache 存取时间为 20ns，主存存取时间为 200ns，试估计 CPU 访存的平均时间。`,
        section('分析解答')(
            p`（1）cache 的行数为 4KB/64B=64；因为采用 4-路组相联映射，所以每组有 4 行，共 16 组。主存地址空间大小为 64KB，按字节编址，所以主存地址有 16 位，其中低 6 位为块内地址，中间 4 位为组号（组索引），高 6 位为标记。`,
            p`（2）因为采用写回策略，所以 cache 每行中要有一个修改位（dirty bit）；因为每组有 4 行，所以每行有两位 LRU 位。此外，每行还有 6 位标记、1 位有效位和 64 字节数据，共有 64 行，故总容量为 64×（6+1+1+2+64×8）=33408 位。`,
            p`（3）因为块大小为 64 字节，CPU 总共访问了 4345 个单元，因为 4345/64=67.89，所以第 0～4344 单元应该对应前 68 块（第 0～67 块），也即 CPU 访问过程是对主存的前 68 块连续访问 16 次。图 6.3 给出了访问过程中主存块和 cache 行之间的映射关系。图中列方向是 cache 的 16 个组，行方向是每组的 4 行。`,
            img(pic6_6_4)('图 6.3　题 14 中 cache 组和主存块之间的映射'),
            p`主存的第 0～15 块分别对应 cache 的第 0～15 组，可以放在对应组的任意一行中，在此假定按顺序存放在第 0 行；主存的第 16～31 块也分别对应 cache 的第 0～15 组，放到第 1 行中；同理，主存的第 32～47 块分别放到 cache 的第 0～15 组的第 2 行中；主存的第 48～63 块分别放到 cache 的第 0～15 组的第 3 行中。这样，访问主存的第 0～63 块都是没有冲突的，每块都是第一次在 cache 中没有找到，然后把这一块调到 cache 对应组的某一行中，这样该块后面的每次访问都能在 cache 中找到。因此，每一块只有第一单元未命中，其余 63 个单元都命中。主存的第 64～67 块分别对应 cache 的第 0～3 组，此时，这 4 组的 4 个行都已经被主存块占满，所以这四组的每一组都要选择一个主存块从 cache 中淘汰出来。因为采用 LRU 算法，所以，将最近最少用的第 0～3 块分别从第 0～3 组的第 0 行中替换出来。再把第 64～67 块分别放到 cache 第 0～3 组的第 0 行中，每块也都是第一次在 cache 中没有找到，调入后，每次都能在 cache 中找到。`,
            p`综上所述，第一次循环中，每一块都只有第一单元未命中，其余都命中。`,
            p`以后的 15 次循环中，因为 cache 第 4～15 组的 48 行中的主存块一直没有被替换过，所以只有 68-48=20 个行中对应主存块的第一个单元未命中，其余都命中。`,
            p`总访问次数为 4345×16=69520，其中，未命中次数为 68+15×20=368。`,
            p`命中率 p 为（69520-368）/69520=99.47%。平均访存时间约为 ta=tc+（1-p）×tm=20ns+200×（1-0.9947）ns=20ns+1.06ns=21.06ns。`
        )
    ),
    section(
        '15.假定某计算机的 cache 采用直接映射方式，和主存交换的数据块大小为 1 个字，按字编址，一共能存放 16 个字的数据。CPU 开始执行某程序时，cache 为空，在该程序执行过程中，CPU 依次访问以下地址序列：2，3，11，16，21，13，64，48，19，11，3，22，4，27，6 和 11。请回答下列问题：'
    )(
        p`（1）每次访问在 cache 中命中还是缺失？试计算访问上述地址序列的 cache 命中率。`,
        p`（2）若 cache 数据区容量还是 16 个字，而数据块大小改为 4 个字，则上述地址序列的命中情况又如何？说明块大小和命中率的关系。`,
        section('分析解答')(
            p`（1）cache 采用直接映射，每行存放一个字，因此共 16 行；每个主存块对应 1 个字，所以主存块号 = 字号。得到映射公式为 cache 行号 = 字号 mod 16。程序开始执行时 cache 为空，所以每个单元第一次访问总是缺失（miss）。CPU 访问给定地址序列的过程如下（每个数字对「x-y」的含义为「x 是访问的主存地址，y 是对应的 cache 行号」。hit 表示命中，miss 表示缺失，miss/replace 表示缺失并替换）：2-2：miss；3-3：miss；11-11：miss；16-0：miss；21-5：miss；13-13：miss；64-0：miss/replace；48-0：miss/replace；19-3：miss/replace；11-11：hit；3-3：miss/replace；22-6：miss；4-4：miss；27-11：miss/replace；6-6：miss/replace；11-11：miss/replace。只有一次命中！命中率为 1/16=6.25%。`,
            p`（2）数据块大小改为 4 个字，cache 最多能存放 16 个字的数据，因此 cache 共 4 行；每个主存块对应 4 个字，所以，主存块号 =[字号/4]。得到映射公式为：cache 行号 = 主存块号 mod 4。CPU 访问给定地址序列的过程如下（每个数字对「x-y-z」的含义为「x 是访问的主存地址，y 是对应的主存块号，z 是对应的 cache 行号」。hit 表示命中，miss 表示缺失，miss/replace 表示缺失并替换）：2-0-0：miss；3-0-0：hit；11-2-2：miss；16-4-0：miss/replace；21-5-1：miss；13-3-3：miss；64-16-0：miss/replace；48-12-0：miss/replace；19-4-0：miss/replace；11-2-2：hit；3-0-0：miss/replace；22-5-1：hit；4-1-1：miss/replace；27-6-2：miss/replace；6-1-1：hit；11-2-2：miss/replace。共命中 4 次，命中率为 4/16=25%。数据块变大后，命中率提高了，其原因在于块变大后空间局部性得到更大发挥。`
        )
    ),
    section(
        '16.假定数组元素在主存按从左到右的下标顺序存放。试改变下列函数中循环的顺序，使得其数组元素的访问与排列顺序一致，并说明为什么修改后的程序比原来的程序执行时间短。'
    )(

        precode(`int sum_array ( int a[N][N][N])
{
    int i, j, k, sum=0;
    for (i=0; i < N; i++)
        for (j=0; j < N; j++)
            for (k=0; k < N; k++)
                sum+=a[k][i][j];
    return sum;
}`)(),

        section('分析解答')(
            p`数组元素的访问顺序和排列顺序一致的程序如下：`,

            precode(`int sum_array ( int a[N][N][N])
{
    int i, j, k, sum=0;
    for (k=0; k < N; k++)
        for (i=0; i < N; i++)
            for (j=0; j < N; j++)
                sum+=a[k][i][j];
    return sum;
}`)(),

            p`当被访问的数组元素不在 cache 时，则将该数组元素所在的一个主存块全部装入 cache，因为访问顺序和排列顺序一致，所以，随后访问的若干个数组元素都和该数组元素在同一个主存块中，因而也都能在 cache 中命中。因此，修改后的程序，其数组访问的空间局部性比原程序更好，命中率更高，使得执行时间更短。`
        )
    ),
    section(
        '17.某计算机的主存地址空间大小为 256MB，按字节编址。指令 cache 和数据 cache 分离，均有 8 个 cache 行，主存与 cache 交换的块大小为 64B，数据 cache 采用直接映射方式。现有两个功能相同的程序 A 和 B，其伪代码如图 6.4 所示。'
    )(
        img(pic6_6_5)('图 6.4　题 17 的伪代码程序'),
        p`假定 int 类型数据用 32 位补码表示，程序编译时 i，j，sum 均分配在寄存器中，数组 a 按行优先方式存放，其首地址为 320（十进制数）。请回答下列问题，要求说明理由或给出计算过程。`,
        p`（1）若不考虑用于 cache 一致性维护和替换算法的控制位，则数据 cache 的总容量为多少？`,
        p`（2）数组元素 a[0][31]和 a[1][1]各自所在的主存块对应的 cache 行号分别是多少（cache 行号从 0 开始）？`,
        p`（3）程序 A 和 B 的数据访问命中率各是多少？哪个程序的执行时间更短？`,
        section('分析解答')(
            p`（1）cache 中的每一行信息除了用于存放主存块的数据区外，还有有效位、标记信息，以及用于 cache 一致性维护的修改位（dirty Bit）和用于替换算法的使用位（如 LRU 位）等控制位。因为主存地址空间大小为 256MB，所以主存地址为 28 位，其中 6 位为块内地址，3 位为行号（行索引），标志信息有 28-6-3=19 位。因此，在不考虑用于 cache 一致性维护和替换算法的控制位的情况下，数据 cache 的总容量为 8×（19+1+64×8）=4256 位 =532 字节。`,
            p`（2）解法一：要得到某个数组元素所在块对应的 cache 行号，最简单的做法就是把该数组元素的地址计算出来，然后根据地址求出主存块号，最后用主存块号除以 8 取余数（即主存块号 mod 8）就是对应的 cache 行号。因为每个数组元素为一个 32 位 int 型变量，故占 4 个字节。因此，a[0][31]的地址为 320+4×31=444，[444/64]=6（取整），因此 a[0][31]对应的主存块号为 6。因为 6 mod 8=6，所以对应的 cache 行号为 6。`,
            p`解法二：也可以将地址转换为 28 位二进制地址，然后取出其中的行索引（即行号）字段的值，得到对应行号。将地址 444 转换为二进制表示为 0000000000000000000110111100，中间 3 位 110 为行号（行索引），因此，对应的 cache 行号为 6。`,
            p`解法三：用画图的方式可以清楚地表示 cache 行和主存块之间的映射关系。（略）`,
            p`同理，数组元素 a[1][1]对应的 cache 行号为[（320+4×（1×256+1））/64]mod 8=5。`,
            p`（3）编译时 i，j，sum 均分配在寄存器中，故数据访问命中率仅需要考虑数组 a 的访问情况。`,
            p`① 程序 A 的数据访问命中率。`,
            p`解法一：由于程序 A 中数组访问顺序与存放顺序相同，因此依次访问的数组元素位于相邻单元；程序共访问 256×256 次 =64K 次，占 64K×4B/64B=4K 个主存块；因为首地址正好位于一个主存块的边界，故每次将一个主存块装入 cache 时，总是第一个数组元素缺失，其他都命中，共缺失 4K 次，因此，数据访问的命中率为（64K-4K）/64K=93.75%。`,
            p`解法二：因为每个主存块的命中情况都一样，因此，也可以按每个主存块的命中率计算。主存块大小为 64B，包含有 16 个数组元素，因此，共访存 16 次，其中第一次不命中，所以命中率为 15/16=93.75%。`,
            p`② 程序 B 的数据访问命中率。`,
            p`由于程序 B 中的数组访问顺序与存放顺序不同，依次访问的数组元素分布在相隔 256×4=1024 的单元处，因此，依次访问的前后数组元素都不在同一个主存块中；因为数据 cache 只有 8 行，而每次内循环要调入 256×4/64B=16 个主存块，因此，以前被装入 cache 的主存块，当需要再次访问其中的数组元素时，已经被替换出 cache，因而不能命中。由此可知，所有访问都不命中，命中率为 0。`,
            p`因为程序 A 的命中率高，因此，程序 A 的执行速度比程序 B 快。`
        )
    ),
    section('18.图 6.5 给出了三个函数，分析比较它们的空间局部性，并指出哪个最好、哪个最差。')(
        img(pic6_6_6)('图 6.5　题 18 中的伪代码程序'),
        section('分析解答')(
            p`对于函数 clear1，其数组访问顺序与在内存的存放顺序完全一致，因此，空间局部性最好。`,
            p`对于函数 clear2，其数组访问顺序在每个数组元素内跳跃式访问，相邻两次访问的单元最大相差 3 个 int 型变量（假定 sizeof（int）=4，则相当于 12B），因此空间局部性比 clear1 差。若主存块大小为 12B 或更小，则大大影响命中率。`,
            p`对于函数 clear3，其数组访问顺序与在内存的存放顺序不一致，相邻两次访问的单元都相差 6 个 int 型变量（假定 sizeof（int）=4，则相当于 24B）因此，空间局部性比 clear2 还差。若主存块大小为 24B 或更小的话，则大大影响命中率。`
        )
    ),
    section('19.以下是计算两个向量点积的程序段：')(

        precode(`float dotproduct(float x[8], float y[8])
{
    float sum = 0.0;
    int i;
    for (i = 0; i < 8; i++)
        sum += x[i] * y[i];
    return sum;
}`)(),

        p`请回答下列问题：`,
        p`（1）访问数组 x 和 y 时的时间局部性和空间局部性各如何？能否推断出命中率的高低？`,
        p`（2）假定数据 cache 采用直接映射方式，数据区容量为 32 字节，每个主存块大小为 16 字节；编译器将变量 sum 和 i 分配在寄存器中，数组 x 存放在 00000040H 开始的 32 字节的连续存储区中，数组 y 则紧跟在 x 后进行存放。该程序数据访问的命中率是多少？要求说明每次访问时 cache 的命中情况。`,
        p`（3）将上述（2）中的数据 cache 改用 2-路组相联映射方式，块大小改为 8 字节，其他条件不变，则该程序数据访问的命中率是多少？`,
        p`（4）在上述（2）中条件不变的情况下，将数组 x 定义为 float[12]，则数据访问的命中率是多少？`,
        section('分析解答')(
            p`（1）数组 x 和 y 都按存放顺序访问，空间局部性都较好，但每个数组元素都只被访问一次，故没有时间局部性。命中率的高低与 cache 容量、块大小、映射方式等都有关，而题干中没有给出这些信息，因此无法推断命中率的高低。`,
            p`（2）cache 共有 32B/16B=2 行；4 个数组元素占一个主存块；数组 x 的 8 个元素（共 32B）分别存放在主存 40H 开始的 32 个单元中，共有 2 个主存块，其中 x[0]～x[3]在第 4 块，x[4]～x[7]在第 5 块中；数组 y 的 8 个元素分别在主存第 6 块和第 7 块中。所以，x[0]～x[3]和 y[0]～y[3]都映射到 cache 第 0 行；x[4]～x[7]和 y[4]～y[7]都映射到 cache 第 1 行。因为 x[i]和 y[i]总是映射到同一个 cache 行，相互淘汰对方，故每次都不命中，命中率为 0。`,
            p`（3）改用 2-路组相联，块大小改为 8B，则 cache 共有 4 行，每组两行，共两组。两个数组元素占一个主存块。数组 x 占 4 个主存块，数组元素 x[0]～x[1]、x[2]～x[3]、x[4]～x[5]、x[6]～x[7]分别在第 8～11 块中；数组 y 占 4 个主存块，数组元素 y[0]～y[1]、y[2]～y[3]、y[4]～y[5]、y[6]～y[7]分别在第 12～15 块中；因为每组有两行，所以 x[i]和 y[i]可以存放到同一个 cache 组的不同 cache 行内，因此，不会发生冲突。每调入一块，装入的两个数组元素中，第 2 个数组元素总是命中，故命中率为 50%。`,
            p`（4）将数组 x 定义为 12 个元素后，则 x 共有 48B，使得 y 从主存第 7 块开始存放，即 x[0]～x[3]在第 4 块，x[4]～x[7]在第 5 块，x[8]～x[11]在第 6 块中，y[0]～y[3]在第 7 块，y[4]～x[7]在第 8 块。因而，x[i]和 y[i]就不会映射到同一个 cache 行中。每调入一块，装入 4 个数组元素，第一个元素不命中，后面 3 个总命中，故命中率为 75%。`
        )
    ),
    section('20.以下是对矩阵进行转置的程序段：')(

        precode(`typedef  int  array[4][4];
void transpose(array dst, array src)
{
    int  i, j;
    for (i = 0; i < 4; i++)
        for (j = 0; j < 4; j++)
            dst[j][i] = src[i][j];
}`)(),

        p`假设该段程序运行的计算机中 sizeof（int）=4，且只有一级 cache，其中 L1 data cache 的数据区大小为 32B，采用直接映射、写回方式，块大小为 16B，初始为空。数组 dst 从地址 0000 C000H 开始存放，数组 src 从地址 0000 C040H 开始存放。仿照 col=0，row=0 栏目中的形式填写表 6.1，说明数组元素 src[row][col]和 dst[row][col]各自映射到 cache 哪一行，其访问是命中（hit）还是缺失（miss）。若 L1 data cache 的数据区容量改为 128B 时，重新填写表中内容。`,
        img(pic6_6_7)('表 6.1　题 20 中的 src 数组和 dst 数组'),
        section('分析解答')(
            p`从程序来看，数组访问过程如下：`,
            p`src[0][0]、dst[0][0]、src[0][1]、dst[1][0]、src[0][2]、dst[2][0]、src[0][3]、dst[3][0]`,
            p`src[1][0]、dst[0][1]、src[1][1]、dst[1][1]、src[1][2]、dst[2][1]、src[1][3]、dst[3][1]`,
            p`src[2][0]、dst[0][2]、src[2][1]、dst[1][2]、src[2][2]、dst[2][2]、src[2][3]、dst[3][2]`,
            p`src[3][0]、dst[0][3]、src[3][1]、dst[1][3]、src[3][2]、dst[2][3]、src[3][3]、dst[3][3]`,
            p`因为块大小为 16B，每个数组元素有 4 个字节，所以 4 个数组元素占一个主存块，因此每次总是调入 4 个数组元素到 cache 的一行中。`,
            p`当数据区容量为 32B 时，L1 data cache 中共有 2 行。因为地址 0000 C000H 和 0000 C040H 的最低 5 位都是 0，所以数组 dst 和 src 都从一个主存块的起始处开始存放。数组元素 dst[0][i]、dst[2][i]、src[0][i]、src[2][i]（i=0～3）都映射到 cache 第 0 行，数组元素 dst[1][i]、dst[3][i]、src[1][i]、src[3][i]（i=0～3）都映射到 cache 第 1 行。因此，从上述访问过程来看，src[0][0]所在的主存块（即存放 src[0][i]（i=0～3）中四个数组元素的主存块）刚调入 cache，dst[0][0]所在主存块又把它替换了。`,
            p`当数据区容量为 128B 时，L1 data cache 中共有 8 行。数组元素 dst[0][i]、dst[1][i]、dst[2][i]、dst[3][i]、src[0][i]、src[1][i]、src[2][i]、src[3][i]（i=0～3）分别映射到 cache 第 0、1、2、3、4、5、6、7 行。因此，不会发生数组元素的替换。每次总是第一个数组元素不命中，后面三个数组元素都命中。`,
            p`表 6.2 给出了 cache 数据容量分别为 32B 和 128B 时数组 src 和 dst 的每个元素的命中情况。`,
            img(pic6_6_8)('表 6.2　题 20 中的 src 数组和 dst 数组的命中情况'),
        )
    ),
    section('21.通过对方格中每个点设置相应的 CMYK 值，就可以将方格涂上相应的颜色。图 6.6 中三个程序段都可实现对一个 8×8 的方格中涂上黄颜色的功能。')(
        img(pic6_6_9)('图 6.6　题 21 中的伪代码程序'),
        p`假设 cache 的数据区大小为 512B，采用直接映射，块大小为 32B，存储器按字节编址，sizeof（int）=4。编译时变量 i 和 j 分配在寄存器中，数组 square 按行优先方式存放在 00000C80H 开始的连续区域中，主存地址为 32 位。要求：`,
        p`（1）对三个程序段 A、B、C 中数组访问的时间局部性和空间局部性进行分析比较。`,
        p`（2）画出主存中的数组元素和 cache 中行的对应关系图。`,
        p`（3）计算三个程序段 A、B、C 中数组访问的写操作次数、写不命中次数和写缺失率。`,
        section('分析解答')(
            p`（1）程序段 A、B 和 C 中，都是每个数组元素只被访问一次，所以都没有时间局部性；程序段 A 访问顺序和存放顺序一致，所以空间局部性好；程序段 B 访问顺序和存放顺序不一致，所以空间局部性不好；程序段 C 的访问顺序和存放顺序部分一致，所以空间局部性的优劣介于程序 A 和 B 之间。`,
            p`（2）cache 的行数为 512B/32B=16；square 数组的首地址为 00000C80H=0…0110010000000B，因为最低 5 位地址为全 0，说明 square 数组正好是主存第 1100100B（100）块的起始地址。所以数组从主存第 100 块开始存放，一个数组元素占 4×4B=16B，所以每两个数组元素占用一个主存块。8×8 的数组共占用 32 个主存块，正好是 cache 数据区大小的 2 倍。因为 100 mod 16=4，所以主存第 100 块映射到的 cache 行号为 4。主存中的数组元素与 cache 行的映射关系如图 6.7 所示。`,
            img(pic6_6_10)('图 6.7　主存中的数组元素与 cache 行的映射关系'),
            p`（3）对于程序段 A：每两个数组元素（共涉及 8 次写操作）装入一个 cache 行中，总是第一次访问时未命中，后面 7 次都命中，所以，总的写操作次数为 64×4=256 次，写不命中次数为 256×1/8=32 次，因而写缺失率为 12.5%。`,
            p`对于程序段 B：每两个数组元素（共涉及 8 次写操作）装入一个 cache 行中，但总是只有一个数组元素（涉及 4 次写操作）在被淘汰之前被访问，并且总是第一次不命中，后面 3 次命中，即写不命中次数为 256×1/4=64 次，因而写缺失率为 25%。`,
            p`对于程序段 C：第一个循环共访问 64 次，每次装入两个数组元素，第一次不命中，第二次命中；第二个循环，共访问 64×3 次，每两个数组元素（共涉及 6 次写操作）装入一个 cache 行中，并且总是第一次不命中，后面 5 次命中，所以总的写不命中次数为 32+（3×64）×1/6=64 次，因而总的写缺失率为 25%。`
        )
    ),
    section(
        '22.已知 cache1 采用直接映射方式，共 16 行，块大小为 1 个字，缺失损失为 8 个时钟周期；cache2 也采用直接映射方式，共 4 行，块大小为 4 个字，缺失损失为 11 个时钟周期。假定开始时 cache 为空，采用字编址方式，要求找出一个访问地址序列，使得 cache2 具有更低的缺失率，但总的缺失损失反而比 cache1 大。'
    )(
        section('分析解答')(
            p`假设 cache1 和 cache2 的缺失次数分别为 x 和 y，根据题意，x 和 y 必须满足以下条件：11y>8x 且 x>y，显然，满足该条件的 x 和 y 有许多，例如，x=4，y=3 或是 x=5，y=4 等。`,
            p`对于以下的访问地址序列：0，1，4，8，cache1 缺失 4 次，而 cache2 缺失 3 次；`,
            p`对于以下的访问地址序列：0，2，4，8，12，cache1 缺失 5 次，而 cache2 缺失 4 次；`,
            p`对于以下的访问地址序列：0，3，4，8，12，16，20，cache1 缺失 7 次，而 cache2 缺失 6 次；`,
            p`这样的例子可以找出很多。`
        )
    ),
    section(
        '23.提高关联度通常会降低缺失率，但并不总是这样。请给出一个地址访问序列，使得采用 LRU 替换算法的 2-路组相联映射 cache 比具有同样大小的直接映射 cache 的缺失率更高。'
    )(
        section('分析解答')(
            p`2-路组相联映射 cache 的组数是直接映射 cache 的行数的一半，所以，可以找到一个地址序列 A、B、C，使得 A 映射到某一个 cache 行，B 和 C 同时映射到另一个 cache 行，并且 A、B、C 映射到同一个 cache 组。这样，如果访存的地址序列为 A、B、C、A、B、C、A、B、C…，则对于直接映射 cache，其命中情况为：miss/miss/miss/hit/miss/miss/hit/miss/miss/…命中率可达 33.3%；对于组相联映射 cache，因为 A、B、C 映射到同一个组，每组只有两行，采用 LRU 替换算法，所以，每个地址处的数据刚调出 cache 就又被访问到，每次都是 miss，命中率为 0。例如，假定直接映射 cache 为 4 行 ×1 字/行，同样大小的 2-路组相联映射 cache 为 2 组 ×2 行/组 ×1 字/行，当访问序列为：0、2、4、0、2、4、0、2、4、…（局部块大小为 3，大于每一组的行数）时，则出现上述情况。`,
            p`当访问的局部块比组大时，可能会发生「颠簸（抖动）」现象：刚被替换出去的数据又被访问，导致缺失率为 100%。`
        )
    ),
    section('24.假定有 3 个处理器，分别带有以下不同的 cache。')(
        p`cache1：采用直接映射方式，块大小为 1 个字，指令和数据的缺失率分别为 4% 和 6%；`,
        p`cache2：采用直接映射方式，块大小为 4 个字，指令和数据的缺失率分别为 2% 和 4%；`,
        p`cache3：采用 2-路组相联映射方式，块大小为 4 个字，指令和数据的缺失率分别为 2% 和 3%。`,
        p`在这些处理器上运行相同的程序，该程序的 CPI 为 2.0，其中有一半是访存指令。若缺失损失为「块大小 +6」个时钟周期，处理器 1 和处理器 2 的时钟周期都为 420ps，带有 cache3 的处理器 3 的时钟周期为 450ps。请问：哪个处理器因 cache 缺失而引起的额外开销最大？哪个处理器执行速度最快？`,
        section('分析解答')(
            p`假设所运行的程序共执行 N 条指令，每条访存指令仅读写一次内存数据，则在该程序执行过程中各处理器因 cache 缺失而引起的额外开销和执行时间计算如下：`,
            p`对于处理器 1，额外开销为 N×（4%+6%×50%）×（1+6）=0.49N 个时钟周期，执行程序所需时间为（N×2.0+0.49N）×420ps=1045.8Nps。`,
            p`对于处理器 2，额外开销为 N×（2%+4%×50%）×（x4+6）=0.40N 个时钟周期，执行程序所需时间为（N×2.0+0.40N）×420ps=1008Nps。`,
            p`对于处理器 3，额外开销为 N×（2%+3%×50%）×（4+6）=0.35N 个时钟周期，执行程序所需时间为（N×2.0+0.35N）×450ps=1057.5Nps。`,
            p`由此可见，处理器 1 的 cache 缺失引起的额外开销最大，处理器 2 的执行速度最快。`
        )
    ),
    section(
        '25.假定某处理器带有一个数据区容量为 256B 的 cache，主存块大小为 32B。以下 C 语言程序段运行在该处理器上，sizeof（int）=4，编译器将变量 i，j，c，s 都分配在通用寄存器中，因此，只要考虑数组元素的访存情况，假定数组起始地址正好在一个主存块的开始处。若 cache 采用直接映射方式，则当 s=64 和 s=63 时，缺失率分别为多少？若 cache 采用 2-路组相联映射方式，则当 s=64 和 s=63 时，缺失率又分别为多少？'
    )(

        precode(`int  i, j, c, s, a[128];
…
for ( i = 0; i < 10000; i++ )
    for ( j = 0; j < 128; j=j+s )
        c = a[j];`)(),

        section('分析解答')(
            p`因为块大小为 32B，数组起始地址正好是一个主存块的开始，所以每 8 个数组元素占一个主存块；cache 共有 256B/32B=8 行，在 2-路组相联映射时，cache 有 4 组。以下仅考虑数组访问情况。`,
            p`（1）直接映射，s=64：访存顺序为 a[0]、a[64]；a[0]、a[64]；…，共循环 10000 次。因为 a[0]和 a[64]正好相差 256B，即相差 8 个主存块，因而除 8 同余，直接映射方式下，a[0]所在主存块和 a[64]所在主存块正好被映射到同一个 cache 行，因而每次都会发生冲突，其缺失率为 100%。`,
            p`（2）直接映射，s=63：访存顺序为 a[0]、a[63]、a[126]；a[0]、a[63]、a[126]；…，循环 10000 次。因为 a[63]所在主存块的第一个数组元素 a[56]和 a[126]所在主存块的第一个数组元素 a[120]之间正好相差 256B，即相差 8 个主存块，因而除 8 同余，直接映射方式下，这两个元素正好都映射到同一个 cache 行，因此每次都会发生冲突，而 a[0]不会发生冲突，故缺失率约为 67%。`,
            p`（3）2-路组相联，s=64：访存顺序为 a[0]、a[64]；a[0]、a[64]；…，共循环 10000 次。因为 a[0]和 a[64]之间正好相差 256B，即相差 8 个主存块，因而除 4 同余，在 2-路组相联映射方式下，这两个元素所在主存块会映射到同一个组，可放在同一组的不同 cache 行中，所以不会发生冲突，总缺失次数仅为两次，缺失率近似为 0。`,
            p`（4）2-路组相联，s=63：访存顺序为 a[0]、a[63]、a[126]；a[0]、a[63]、a[126]；…，共循环 10000 次。因为 a[63]所在主存块的第一个数组元素 a[56]和 a[126]所在主存块的第一个数组元素 a[120]之间正好相差 256B，即相差 8 个主存块，因而除 4 同余，这两个元素所在主存块被映射到同一个组，可放在同一组的不同 cache 行中，而 a[0]不会发生冲突，所以总缺失次数仅为 3 次，缺失率近似为 0。`
        )
    ),
    section(
        '26.假定一个分页虚拟存储系统的虚拟地址为 40 位，物理地址为 36 位，页大小为 16KB，按字节编址。若页表中有有效位、存储保护位、修改位、使用位，共占 4 位，磁盘地址不在页表中，则该存储系统中每个进程的页表大小为多少？如果按计算出来的实际大小构建页表，则会出现什么问题？'
    )(
        section('分析解答')(
            p`因为每页大小有 16KB，所以虚拟页数为 240B/16KB=2（40-14）=226页。物理页面和虚拟页面大小相等，所以物理页号的位数为 36-14=22 位。每个页表项包括有效位、保护位、修改位、使用位、物理页号等，所以其位数至少为 4+22=26。为了简化对页表项的访问，每个页表项取 32 位，因此，每个进程的页表大小为 226×32b=256MB。如果按实际计算出的页表大小构建页表，则构建出的页表会因为过大而导致页表无法一次装入内存。`
        )
    ),
    section(
        '27.假定一个分页虚拟存储系统按字节编址，逻辑地址有 36 位，页大小为 16KB，物理地址位数为 32 位，页表中有效位和修改位各占 1 位、使用位和存取方式位各占 2 位，而且所有虚拟页都在使用中。请问：每个进程的页表大小至少为多少？如果所使用的快表（TLB）中总的表项数为 256 项，采用 2-路组相联 cache 实现，则快表的大小至少为多少？'
    )(
        section('分析解答')(
            p`因为页大小为 16KB，所以页内地址位数为 14 位。逻辑地址为 36 位，虚页号位数为 36-14=22，虚拟页数为 222个，因此每个进程的页表项数为 222个。物理地址为 32 位，实页号位数为 32-14=18。每个页表项的位数为 1+1+2+2+18=24 位。每个进程的页表大小至少为 24×222=24×4Mb=12MB。`,
            p`TLB 中总的表项数为 256 项，采用 2-路组相联，所以共有 128 组。虚拟页号 22 位中，低 7 位用来表示组号，高 15 位用来作为标记，和每个 TLB 组中的各标记进行比较，以判断是否 TLB 命中。所以，TLB 中每个页表项的位数比主存中页表项的位数多了 15 位的标记，即 TLB 中每个页表项的位数为 24+15=39 位。整个快表的大小至少为 256×39=9984 位 =1248 字节。`
        )
    ),
    section(
        '28.假定一个计算机系统中有一个 TLB 和一个 L1 data cache。该系统按字节编址，虚拟地址 16 位，物理地址 12 位；页大小为 128B，TLB 为 4 路组相联，共有 16 个页表项；L1 data cache 采用直接映射方式，块大小为 4B，共 16 行。在系统运行到某一时刻时，TLB、页表和 L1 data cache 中的部分内容（用十六进制表示）分别如图 6.8 所示。'
    )(
        p`请回答下列问题：`,
        p`（1）虚拟地址中哪几位表示虚拟页号？哪几位表示页内偏移量？虚拟页号中哪几位表示 TLB 标记？哪几位表示 TLB 索引？`,
        p`（2）物理地址中哪几位表示物理页号？哪几位表示页内偏移量？主存物理地址如何划分成标记字段、行索引字段和块内地址字段？`,
        p`（3）CPU 从地址 067AH 中取出的值为多少？说明 CPU 读取地址 067AH 中内容的过程。`,
        img(pic6_6_11)('图 6.8　题 28 中的 TLB、页表和 cache 部分内容'),
        section('分析解答')(
            p`（1）16 位虚拟地址中低 7 位为页内偏移量，高 9 位为虚页号；虚页号中高 7 位为 TLB 标记，低 2 位为 TLB 组索引。`,
            p`（2）12 位物理地址中低 7 位为页内偏移量，高 5 位为物理页号；12 位物理地址中，低 2 位为块内地址，中间 4 位为 cache 行索引，高 6 位为标记。`,
            p`（3）地址 067AH=0000011001111010B，所以，虚页号为 000001100B，映射到 TLB 的第 0 组，将 0000011B=03H 与图 6.8a 中的 TLB 第 0 组的 4 个标记比较，虽然和其中一个相等，但对应的有效位为 0，其余都不等，所以 TLB 缺失，需要访问主存中的慢表。直接查看图 6.8b 中 000001100B=00CH 处的页表项，有效位为 1，取出物理页号 19H=11001B，和页内偏移 1111010B 拼接成物理地址 110011111010B。根据中间 4 位 1110 直接找到图 6.8c 中 cache 第 14 行（即第 E 行），其有效位为 1，且标记为 33H=110011B，正好等于物理地址高 6 位，故 cache 命中。最后根据物理地址最低两位 10，取出字节 2 中的内容 4AH=01001010B。`
        )
    ),
    section('29.对于缓冲区溢出漏洞，你认为可以采用本章提到的什么技术来防止？')(
        section('分析解答')(p`可以采用虚拟存储器技术，并将用户栈区设置为具有「不可执行」的属性，这样缓冲区溢出攻击代码就不会通过置入栈中来启动运行。`)
    ),
    section('30.假设在 IA-32/Linux 平台上运行一个 C 语言源程序 P 对应的用户进程，P 中有一条循环语句 S 如下：')(

        precode(`for (i=0; i<N; i++) sum+=a[i];`)(),

        p`已知变量 sum 和数组 a 都是 long 型，链接后确定 a 的首地址为 0x804d000。假设编译器将 a 的首地址分配在 EDX 中，数组的下标变量 i 分配在 ECX 中，sum 分配在 EAX 中，赋值语句「sum+=a[i]；」仅用一条指令 I 实现。已知 IA-32/Linux 平台采用主教材中图 6.41 所示的两级页表分页虚拟存储管理方式，页大小为 4KB，系统启动后控制寄存器 CR0 中的控制位 NW 和 CD 均为 0。假定系统中没有其他用户进程，回答下列问题或完成下列任务：`,
        p`（1）指令 I 对应的汇编形式（AT&T 格式）是什么？指令 I 中存储器操作数的寻址方式是哪种？`,
        p`（2）假定指令 I 的地址为 0x8049c08，执行指令 I 时，CS 段寄存器对应的描述符 cache 中存放的是主教材中表 6.2 所示的用户代码段信息，且 CPL=3，DS 段寄存器对应的描述符 cache 中存放的是主教材中表 6.2 所示的用户数据段信息，则当 i=50 时，取指令操作过程中 MMU 得到的指令的线性地址是多少？取数操作过程中 MMU 得到的操作数的线性地址是多少？`,
        p`（3）假定常数 N 在 EBX 中，手工写出循环语句 S 对应的指令序列，与 GCC 生成的目标代码进行比较。`,
        p`（4）在执行到程序 P 时，控制寄存器 CR0 中的控制位 PE 和 PG 各是什么？`,
        p`（5）指令 I 在第一次执行过程中，有没有可能发生缺页异常？为什么？如果发生缺页异常，则页故障线性地址是什么？该地址会保存在哪个控制寄存器中？`,
        p`（6）指令 I 所在页的虚页号是什么？指令 I 的线性地址中，页目录索引、页表索引和页内偏移量分别是什么？第一次执行指令 I 时，指令 I 所在页对应页表项中，字段 P、R/W、U/S、A 和 D 的内容各是什么？`,
        p`（7）指令 I 在第一次执行过程中，有没有可能发生 TLB 缺失？为什么？若指令 TLB 共有 16 个表项，采用 4 路组相联方式，则虚拟页号中哪几位为 TLB 标记？哪几位表示 TLB 组索引？若第一次执行到指令 I 时，指令 TLB 中的部分内容如图 6.9 中的表内内容所示（TLB 表项中部分字段缺失，内容以十六进制表示），则指令 I 所存放的主存地址是什么？`,
        img(pic6_6_12)('图 6.9　题 30 中的 TLB 部分内容'),
        p`（8）若指令 cache 的数据区容量为 8KB，主存块大小为 32B，采用 2 路组相联映射方式，则指令 I 在第一次执行时的取指令过程中，会不会发生 cache 缺失？指令 I 所在的主存块应映射到指令 cache 的哪一组中？`,
        p`（9）当 N=2000 时，数组 a 占用几个页面？每个页的虚页号是什么？数组元素 a[1200]在哪个页中？`,
        section('分析解答')(
            p`（1）因为 IA-32 中的 long 型和 int 型一样，都是 32 位带符号整数，因此，指令 I 对应的汇编形式（AT&T 格式）是「addl（%edx，%ecx，4），%eax」。其中存储器操作数的寻址方式是「基址 + 比例变址 + 偏移量」，这里的偏移量为 0，比例因子是 4，因为每个数组元素（long 型）的大小为 4 个字节。`,
            p`（2）取指令操作过程中，MMU 根据 CS 段寄存器对应的描述符 cache 中的信息（因为执行的是用户程序，所以用 Linux 初始化时设定的用户代码段信息）进行逻辑地址到线性地址的转换。MMU 根据 CS 对应段描述符中的 DPL，确定 DPL 的特权级别不高于 CPL 才能继续进行地址转换，这里 DPL=CPL=3，没有发生存储保护错。因此，MMU 将 CS 对应段描述符中的基地址与指令逻辑地址（指令逻辑地址为指令在代码段的段内偏移量）相加，得到线性地址为 0x0+0x8049c08=0x8049c08。`,
            p`取数操作中，MMU 先根据 DS 对应段描述符获得 DPL，确定 DPL 的特权级别不高于 CPL 才能继续进行地址转换，否则发生存储保护错。显然，这里 DPL=CPL=3，没有发生存储保护错，于是，MMU 将 DS 对应段描述符中的基地址与操作数有效地址相加得到线性地址。因为操作数「（%edx，%ecx，4）」的寻址方式为「基址加比例变址加偏移量」，故有效地址 EA=R[edx]+R[ecx]×4+0=0x804d000+50×4=0x804d0c8。因此，操作数的线性地址为 0x0+0x804d0c8=0x804d0c8。`,
            p`（3）假定常数 N 在 EBX 中，则以下指令序列可以实现循环语句 S 的功能：`,

            precode(`   movl     $0, %ecx
. LOOP
   cmpl     %ebx, %ecx
   jge     .EXIT
   addl     (%edx, %ecx, 4), %eax
   incl     %ecx
   jmp      .LOOP
.EXIT`)(),

            p`（4）在执行到程序 P 时，已经是保护模式并采用分页虚拟管理方式，因此，控制寄存器 CR0 中的控制位 PE=1（表示保护模式），PG=1（表示启用分页）。`,
            p`（5）指令 I 在第一次执行过程中，取指令时不会发生缺页异常，因为，指令 I 不在一个页面起始处，在执行指令 I 前面的指令而发生缺页时，会将指令 I 一起调入内存。但是，取操作数 a[0]时可能发生缺页，因为 a[0]的地址为 0x804d000，它正好位于一个页面的起始处（页大小为 4KB，因此，页起始地址的后 12 位为 0），它所在的页面很有可能以前未被访问过，若是这样，执行指令 I 的过程中，当访问操作数时会发生缺页异常。此时，页故障线性地址是 0x804d000，该地址保存在控制寄存器 CR2 中。`,
            p`（6）指令 I 的线性地址为 0x8049c08，其中低 12 位（1100 0000 1000）为页内偏移量，高 20 位（0000 1000 0000 0100 1001）为虚页号。虚页号中高 10 位（0000 1000 00）为页目录索引，低 10 位（00 0100 1001）为页表索引。第一次执行指令 I 时，指令 I 所在页对应页表项中，P=1（所在页已在主存），R/W=0（所在页只能读和执行，不能写），U/S=1（所在页允许用户进程访问），A=1（所在页已被访问过），D=0（所在页为代码页，不会被修改）。`,
            p`（7）指令 I 在第一次执行过程中，取指令时不会发生 TLB 缺失，因为指令 I 不在一个页面起始处，在执行指令 I 前面的指令而发生 TLB 缺失时，已经将所在页的页表项装入 TLB。但是，取操作数 a[0]时有可能发生 TLB 缺失，因为 a[0]所在页可能是第一次被访问，所以对应页表项可能不在 TLB 中。`,
            p`指令 TLB 共有 16 个表项，采用 4 路组相联方式，因此，20 位虚拟页号中高 18 位为 TLB 标记，低两位为 TLB 组索引。指令 I 的线性地址为 0x8049c08，虚页号为 0000 1000 0000 0100 1001，其中，TLB 组索引为 01，因此，MMU 将 TLB 标记 0000 1000 0000 0100 10（02012H）与第 1 组所有标记相比，能找到一个相等且有效位为 1 的页表项在 TLB 中，因而 TLB 命中，取出对应页表项中的页框号 028B0H，得到主存地址为 028B0C08H=0x28b0c08。`,
            p`（8）指令 cache 的数据区容量为 8KB，主存块大小为 32B，所以，指令 cache 共有 8KB/32B=256 行。因为采用 2 路组相联映射方式，所以，cache 组数为 256/2=128，主存地址划分为：高 20 位为标记、中间 7 位为组索引、最低 5 位为块内地址。因为页大小为 4KB，所以线性地址中低 12 位的页内地址与主存地址低 12 位相同，在 MMU 进行逻辑地址到物理地址转换的同时，CPU 可以利用这低 12 位进行 cache 访问。`,
            p`指令 I 的线性地址为 0x8049c08，其中低 12 位（1100 0000 1000）为页内偏移量，因此，组索引为 1100000，块内地址为 01000。显然，指令 I 不在一个主存块的起始位置，因而，即使在第一次执行指令 I 时，在取指令阶段也不会发生 cache 缺失（在取它前面的指令时已经顺带把它装入了指令 cache）。`,
            p`指令 I 所在的主存块应映射到指令 cache 的第 1100000 组中，即 cache 组号为 96。`,
            p`（9）当 N=2000 时，数组 a 占用空间大小为 4×2000=8000 字节，因为链接后 a 的首地址为 0x804d000，而且对应段基地址为 0，所以数组 a 的起始线性地址为 0x804d000，显然这是一个页面的起始地址，因而数组 a 所占的页面个数为 8000B/4KB=1.953125，即约占两个页面。虚页号分别是 0000 1000 0000 0100 1101 和 0000 1000 0000 0100 1110。因为 4×1200=4800>4096，所以数组元素 a[1200]在后面一个页面中。`
        )
    )
).elem
