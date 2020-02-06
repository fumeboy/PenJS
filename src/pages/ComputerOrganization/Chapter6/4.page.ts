import { p, section } from '@src/components/@write'
const title = '6.4　常见问题解答'
const page = section(title)(
    section('1.ROM 和 RAM 都是随机存取存储器吗？')(
        p`答：是的。虽然经常把只读存储器 ROM 和随机访问存储器 RAM 放在一起进行分类，但 ROM 的存取方式和 RAM 是一样的，都是通过对地址进行译码，然后选择某个单元进行读写。所以两者采用的都是随机存取方式。不过，在程序执行过程中，ROM 存储区只能读出信息，不能修改；而 RAM 存储区既可以读出信息，也可以修改信息。`
    ),
    section('2.寄存器和主存储器都是用来存放信息的，它们有什么不同？')(
        p`答：寄存器在 CPU 中，用触发器来实现，速度极快，价格高，容量只有几十个，多的机器也只有几百个，主要用来暂存指令运行时的操作数和结果。`,
        p`主存储器在 CPU 之外，用 MOS 管电路实现，速度没有寄存器快，价格也比寄存器便宜，容量可以达 GB 数量级，用来存放被启动程序的代码和数据。`
    ),
    section('3.存取时间 TA就是存储周期 TM吗？')(
        p`答：不是。存取时间 TA是执行一次读操作或写操作的时间，分为读出时间和写入时间。读出时间为从主存接收到地址开始到数据取出有效为止的最短时间；写入时间是从主存接收到地址开始到数据写入被写单元为止的最短时间。存储周期 TM是指存储器进行连续两次独立的读或写操作所需的最小时间间隔。所以存取时间 TA不等于存储周期 TM。通常存储周期 TM大于存取时间 TA。`
    ),
    section('4.主存都是由 RAM 组成的吗？')(p`答：不是。主存是由 RAM 和 ROM 两部分组成的，它们统一编址，分别占用不同的地址空间。`),
    section('5.目前流行的内存条技术是什么？')(
        p`答：目前主存常用的是基于 SDRAM（Synchronous DRAM）芯片技术的内存条，包括 DDR SDRAM、DDR2 SDRAM、DDR3 SDRAM 和 DDR4 SDRAM 等。SDRAM 是一种与当年 Intel 推出的芯片组中北桥芯片的前端总线同步运行的 DRAM 芯片，因此，称为同步 DRAM。`
    ),
    section('6.SDRAM 芯片中的操作由什么信号进行同步？')(
        p`答：SDRAM 芯片的每一步操作都在外部系统时钟 CLK 的控制下进行，也即芯片内部工作频率与外部系统时钟频率同步。`
    ),
    section('7.连接 SDRAM 芯片的存储器总线是否支持突发传输方式？')(
        p`答：支持突发（burst）传输方式。只要在第一次存取时给出首地址，以后按地址顺序读写即可，不再需要地址建立时间和行、列预充电时间，就能连续快速地从行缓冲器中输出一连串数据。`
    ),
    section('8.SDRAM 芯片技术中的 DDR、DDR2、DDR3 各是什么含义？')(
        p`答：DDR 是 Double Data Rate 的缩写，含义是双倍数据传输率。通过芯片内部 I/O 缓冲中数据的两位预取功能，并利用存储器总线上时钟信号 CLK 的上升沿与下降沿进行两次传送，使总线上每秒传送数据的次数达到芯片内部工作频率的两倍，也是存储器总线时钟频率的两倍。`,
        p`DDR2 采用 4 位预取方式，外部总线时钟频率是芯片内部工作频率的两倍，因而，总线上每秒传送数据的次数达到芯片内部工作频率的 4 倍。存储器总线上时钟信号 CLK 的上升沿与下降沿进行两次传送，因而总线上每秒传送数据的次数是总线时钟频率的两倍。`,
        p`DDR3 采用 8 位预取方式，外部总线时钟频率是芯片内部工作频率的 4 倍，因而，总线上每秒传送数据的次数达到芯片内部工作频率的 8 倍。存储器总线上时钟信号 CLK 的上升沿与下降沿进行两次传送，因而总线上每秒传送数据的次数是总线时钟频率的两倍。`
    ),
    section('9.磁盘上信息是如何组织的？磁盘的最小编址单位是什么？')(
        p`答：磁盘表面被分为许多同心圆，每个同心圆被称为一个磁道。信息存储在磁道上。每个磁道被划分为若干段（又叫扇区）。每个扇区存放一个记录块，每个记录块有相应的地址标识字段、数据字段和校验字段等。到磁盘上寻找数据时，只要定位到数据在哪个磁头的哪个磁道的哪个扇区。所以，扇区是磁盘的最小编址单位。`
    ),
    section('10.一个磁盘扇区的大小总是 512B 吗？')(
        p`答：不是。近三十多年来，一个磁盘扇区的大小一直都是 512B。但是，最近几年，硬盘制造公司正在从传统的 512B 扇区迁移到更大、更高效的 4096B 扇区，通常称为 4K 扇区。`
    ),
    section('11.盘面号和磁头号是一回事吗？')(
        p`答：是的。硬盘是一个盘组，有多个盘片组成，每个盘片有两个面。每个盘面上有一个磁头，用于对该盘面上的信息进行读写。所以，磁头号就是盘面号。`
    ),
    section('12.柱面号和磁道号是一回事吗？')(
        p`答：是的。硬盘是一个盘组，有多个盘面组成，所有盘面上相同编号的磁道构成了一个圆柱面（但物理上这个圆柱面是不存在的），有多少磁道就形成多少圆柱面，磁道号就是圆柱面号。`
    ),
    section('13.当一个磁道存满后，信息是在同一个盘面的下一个磁道存放，还是在同一个柱面的下一个盘面存放？')(
        p`答：当一个磁道存满后，如果信息是在同一个盘面的下一个磁道存放，则需要移动磁头，因为移动磁头是机械运动，所以花费时间较长，且有机械磨损；如果信息在同一个柱面的下一个盘面存放，则不需移动磁头，即磁道号不变，只要给出一个相邻盘面号，通过译码电路选取该盘面的磁头就可以读写了，几乎没有延迟，也没有机械运动。因此，磁盘地址形式为磁道号（柱面号）、磁头号（盘面号）、扇区号。`
    ),
    section('14.高速缓存（cache）对程序员来说是透明的吗？')(
        p`答：cache 的访问过程对程序员来说是透明的。执行一条指令时，CPU 需要到内存取指令，有些指令还要访问内存来取操作数或将运算结果保存到内存。采用 cache 的计算机系统中，总是先到 cache 去访问指令或数据，当 cache 缺失时才到主存去访问。这个过程是 CPU 在执行指令过程中自动完成的。程序员不需要知道要找的指令和数据在不在 cache 中、在 cache 的哪一行中，也不需要知道 cache 的访问过程，只要在指令中给定存储单元地址（即变量的指针或指令的标号）即可。事实上，现代计算机都采用虚拟存储器机制，所以，在程序员编写的程序或编译生成的程序中，指令给出的地址还不是真正的内存单元地址，而是一个虚拟地址（逻辑地址），操作系统需要对程序进行重定位，以页或段为单位把程序装载到内存中，并由 CPU 把逻辑地址转换为真正的内存地址（物理地址）。`
    ),
    section('15.主存和 cache 之间按主存块为单位传送数据时，是否主存块越大越好？')(
        p`答：不是。主存块大可充分利用程序访问的空间局部性特点，使得一个比较大的局部空间被一起调到 cache 中，因而可以增加命中机会。但是，主存块不能太大，主要原因有两个：① 主存块变大，使得缺失损失也变大，因为需要花费更多时间从主存读一个较大的块。② 主存块变大，则 cache 行数变少，因而需要替换的可能性增加，从而导致命中的可能性变小。`
    ),
    section('16.指令和数据都是放在同一个 cache 中的吗？')(
        p`答：现代计算机系统中，一般采用多级 cache 系统。CPU 执行指令时，先到速度最快的一级 cache（L1 cache）中寻找指令或数据，找不到时，再到速度次快的二级 cache（L2 cache）中找，……最后到主存中找。对于一级 cache，指令和数据一般分开存放，分别称为 L1 data cache 和 L1 code cache，而对于二级以上的 cache，其指令和数据是放在一起的。`
    ),
    section('17.cache 可以做在 CPU 芯片里面吗？')(
        p`答：可以。早期的计算机，其 cache 是做在 CPU 芯片外的。但随着 CPU 芯片技术的提高，cache 可以做在 CPU 芯片里面。从逻辑上来说，cache 是位于 CPU 和主存之间的部件，但在物理上，cache 被封装在 CPU 芯片内。目前，一级 cache、二级 cache 甚至三级 cache 都可以封装在 CPU 芯片中。`
    ),
    section('18.直接映射方式下是否需要考虑替换方式？为什么？')(
        p`答：无需考虑。因为在直接映射方式下，一个给定的主存块只能映射到一个固定的 cache 槽中，所以，在对应 cache 槽已有一个主存块的情况下，新的主存块毫无选择地把原先已有的那个主存块替换掉，因而无需考虑替换算法。`
    ),
    section('19.在 CPU 和主存间加入了多个 cache，计算机总存储量就增加了，对吗？')(
        p`答：不对。虽然 cache 是存储器，具有几百 KB 甚至几 MB 的容量，但因为它存放的是主存信息的副本，所以并不能增加系统的存储容量。`
    ),
    section('20.怎样保证 CPU 要找的指令和数据大都能在 cache 中访问到呢？')(
        p`答：根据程序访问的局部性特点可知，不管是访问指令还是数据，CPU 在执行程序的过程中，若某个地址在 T 时刻被访问，则该地址及其邻近地址在 T+△t 时间段内很可能也被访问。因而，在访问到某个内存地址时，把该地址及其邻近的内存单元内容（就是一个主存块 block）一起复制到 cache 中。这样，在接下来的一段时间内，CPU 所要访问的指令或数据基本上能在 cache 中找到了。`
    ),
    section('21.CPU 要找的指令和数据都能在 cache 中访问到吗？为什么？')(
        p`答：不能。指令/数据在第一次被访问时，肯定不在 cache 中，因而在 cache 中访问不到。此时，就会把所访问的指令/数据所在的主存块从主存取到 cache 中，这样只要这个主存块不被其他主存块替换出来，以后再访问这个数据/指令或者同一块中其他数据/指令时，就能在 cache 中命中了。但是，随着程序的执行，CPU 所访问的地址区域会移到另外的主存块，由于 cache 容量的限制，当新的主存块调入 cache 时，原来在 cache 中的主存块很可能被新的主存块替换出来。如果被替换出来，CPU 又要对其进行访问，那么 CPU 在 cache 中肯定找不到。所以，CPU 要找的指令和数据不可能总在 cache 中访问到。`
    ),
    section('22.发生取指令缺失时的处理过程是什么？这是由硬件完成，还是软件完成的？')(
        p`答：每条指令执行的第一步是取指令。若在 cache 中取当前指令时发生缺失，则处理器必须按如下步骤完成：① 把程序计数器的值恢复到当前指令的地址，然后通过总线中的地址线送到存储器中的地址缓冲器中，以便存储器对地址译码。② 控制存储器执行一次读操作（若一个主存块只有一条指令，则一次读操作读一条指令即可；若一个主存块占用多条指令，则控制一次读出多条指令或读若干次），对主存的访问要通过总线完成，一次总线事务完成一次读操作。③ 读出的指令写到 cache 中，并把主存地址的高位写入标记字段，最后设置有效位。④ 重新执行当前指令的第一步操作（即取指令），这次在 cache 中取指令时便能命中。`,
        p`显然，cache 缺失不是内部异常，更不是外部中断，不会引起对当前正在执行程序的「中断」，因而不会调出操作系统内核程序来处理 cache 缺失，也即上述处理过程不是由软件完成的，而是由 CPU 这个硬件完成的。`
    ),
    section('23.写操作处理和读操作处理有什么不同？')(
        p`答：因为读操作不改变 cache 中数据的值，所以读操作时的缺失处理比较简单。只要把主存块从内存装入 cache 中即可。而写操作时会改变 cache 中数据的值，造成 cache 数据和主存数据的不一致，因此要有相应的写策略来解决这种不一致性。`
    ),
    section('24.cache 访问缺失对指令的执行有影响吗？有怎样的影响？')(
        p`答：cache 访问缺失对指令的执行有很大影响，会大大延长指令的执行时间。延长多少由缺失损失确定，若从 L2 cache 取，一般需要 5～10 个时钟周期；若从主存取，需要 25～100 个时钟周期。执行一条指令时的缺失情况有以下几种可能：① 取指令时缺失。此时，从 L2 以上 cache 或内存取出指令或者取出指令所在主存块，并存入 L1 code cache，然后再开始重新执行指令。② 读数据时缺失。此时，从 L2 以上 cache 或内存取出数据或者数据所在主存块，并存入 L1 data cache，然后从取数那个时钟周期开始执行指令。③ 写数据时缺失。此时，需要根据相应的写策略来决定是当时就更新主存的数据（write through）还是在主存块被替换时更新主存的数据（write back）。存数操作结束后，指令也就执行结束了。`,
        p`如果一条指令执行过程中，既发生取指令缺失又发生取数或存数缺失，那么这条指令的执行将要延长多个缺失损失的时间。也就是说，可能会延长几十到几百个时钟周期。在流水线方式下，这会大大阻塞流水线的执行。`
    ),
    section('25.虚拟存储器的大小是否等于磁盘的容量加上内存的容量？')(
        p`答：不是。虚拟存储器本身只是一个概念，是一种存储管理机制，使用这种机制使得程序员编写程序时，好像计算机内部有一个极大的存储器，程序在这个极大的存储器中运行，而不受内存大小的限制。实际上这个存储器在物理上是不存在的，因此称为「虚拟」存储器。虚拟存储器的大小就是虚拟地址（或称逻辑地址）空间的大小，它由虚拟（逻辑）地址的位数决定，与系统中所安装的磁盘容量和内存容量没有直接的关系。`
    ),
    section('26.在存储器层次结构中，「cache—主存」「主存—辅存」这两个层次有何异同点？')(
        p`答：这两个层次在以下几个方面有相同的地方：① 都是基于程序访问的局部性特点，把一块相邻的局部信息从慢速存储器复制到快速存储器；② 都必须考虑慢速存储器和快速存储器之间的映射问题；③ 当需要在快速存储器中装入新的块而对应位置已满时，都需要考虑把哪一块从快速存储器中替换出来。④ 当在快速存储器中找不到信息时，都要从慢速存储器装入该信息所在块到快速存储器中。`,
        p`因为这两个层次所处的位置和引入的目的不同，所以它们之间也存在许多不同之处：① 位置不同。cache 最靠近 CPU，辅存最远离 CPU，CPU 可以直接访问 cache 和主存，但不能直接访问辅存，辅存和主存直接交换数据。② 目的不同。在 CPU 和主存之间加入 cache，目的是为了加快 CPU 访问信息的速度；而在主存—辅存层次采用虚拟存储器机制是为了使程序员写程序时不受内存容量的限制，即扩大系统的存储容量。③ 交换的信息块大小不同。在「cache—主存」层次，交换的信息块称为主存块（block），一般大小为 8～128 字节；而「主存—辅存」层次，交换的信息块称为页（page），一般大小为 4K～64K 字节。随着技术的发展，块大小也可能会变化，但它们之间在数量级上差别很大。因为虚拟页的缺失损失比 cache 缺失损失大得多，所以页太小会影响命中率从而极大降低系统效率。④ 缺失处理不同。在「cache—主存」层次，缺失处理由处理器（硬件）来实现；在「主存—辅存」层次，则由操作系统（软件）来实现。⑤ 映射方式不同。在「cache—主存」层次，可根据不同的情况选择使用直接、全相联或组相联方式，映射关系完全由硬件实现，使用 cache 行中的标志（tag）字段来描述；在「主存—辅存」层次，则都采用全相联方式，映射关系由操作系统实现，使用页表来描述映射关系。⑥ 写策略不同。在「cache—主存」层次，可以采用「直写」和「回写」两种策略；在「主存—辅存」层次，则都采用「回写」策略。因为，如果采用「直写」，每次写操作都要访问磁盘，这样的开销是不能容忍的。`
    ),
    section('27.所有程序都使用同样的虚拟地址空间，会不会发生信息被互相读写的情况？')(
        p`答：不会。虚拟存储机制的引入，使得每个程序员可以在一个很大的虚拟地址空间中编写程序，不必考虑主存有多大，也不必考虑其他程序用的地址是否和自己用的地址有冲突。也就是说，每个程序员都在一个同样大小的虚拟地址空间中写程序。用户程序被加载之前，操作系统内核会将该程序先生成一个新进程，每个用户进程在加载时都被映射到一个统一的虚拟地址空间中，因而所有用户进程所用的虚拟地址空间大小是一样的。在进程执行过程中，操作系统会按照某种存储管理机制（分段、分页、段页）把当前需要的用户程序的一部分从磁盘调到内存中，并把存放的物理地址信息记录到段表或页表中。在每一条指令的执行过程中，CPU 进行虚拟地址到物理地址的转换。因此，CPU 访问信息的真正地址是内存物理地址。所以，虽然两个用户程序中用到的逻辑地址可能是一样的，但由于两个用户程序被存放到了不同的内存区，因此，不会发生信息被互相读写的问题，即使由于程序错误而导致这种问题也很容易被发现。`
    ),
    section('28.装入一个新的页面时，内存没有空闲块，怎么办？')(
        p`答：装入一个新的页面时，需要到内存找一个空闲页框。如果内存没有空闲页框，则必须选择一个页面并将其从主存的某个页框中替换出来。`
    ),
    section('29.怎么知道要找的指令或数据不在内存中？')(
        p`答：对指令的访问实际上就是指每条指令执行过程中的取指令操作，而对数据的访问实际上就是执行指令过程中的读取操作数或写结果的操作。所谓要找的指令或数据不在内存中，实际上就是在取某条指令或存取某个数据时，发生了缺页情况。是否缺页主要是通过查看对应页表项中的有效位是否为 0 来判断。大致过程如下：根据要找的指令或操作数的地址高位，确定所访问的虚页号，以虚页号作为索引值，找到对应的页表项，每个页表项中都有一个有效位，若为 0，则表示该页（即指令或数据所在的页）不在内存中，发生了缺页异常。`
    ),
    section('30.每次进行内存访问时，是否总要先进行逻辑地址到物理地址的转换？')(
        p`答：如果采用的是动态重定位（即指令中给定的是逻辑地址），那么执行指令过程中如果进行内存访问，则总是先要进行逻辑地址到物理地址的转换。如果采用的是静态重定位（（即指令中已经给出了物理地址）），则内存访问时不需要进行逻辑地址到物理地址的转换。`
    ),
    section('31.逻辑地址到物理地址的转换是由硬件实现的，还是由软件实现的？')(
        p`答：动态重定位方式下，由专门的主存管理单元（MMU）实现逻辑地址到物理地址的转换。静态重定位方式下，由链接程序或加载程序实现地址转换。`
    ),
    section('32.快表（TLB）在主存还是在高速缓存中？')(
        p`答：主存是由慢速的 DRAM 芯片实现的，为了尽量避免到主存访问页表，通常把最近经常访问的页表项放到一个特殊的高速缓存（由快速的 SRAM 实现）中，这个存放若干页表项的特殊 cache 称为快表（TLB）。所以，快表在高速缓存中。`
    ),
    section('33.CPU 执行指令进行一次存储访问操作要存取几次内存？')(
        p`答：在具有 cache 并采用动态重定位存储管理的系统中，其大致过程如下：`,
        p`① 根据虚页号查快表，若快表中有对应页的页表项，则取出页框号形成物理地址，转 ②；若快表中不存在对应页的页表项，则发生 TLB 缺失，转 ③。`,
        p`② 判断物理地址中的标记是否和 cache 中标记相等并且有效位是否为 1，若为 1，则 cache 命中，从 cache 取数或写数据到 cache（直写方式同时也写主存）；若为 0，则发生 cache 缺失，转 ④。`,
        p`③ 当 TLB 缺失时，根据页表基址寄存器的值和虚页号找到主存中的页表项，判断有效位是否为 1，若为 1，则说明该页在主存中，把该页的页表项装入 TLB 中，并取出页框号形成物理地址，转 ②；若不是，则说明该页不在主存中，发生了缺页异常。此时，需要调出操作系统中的缺页异常处理程序，实现从磁盘读入一个页面的功能。缺页处理结束后，重新执行当前指令。此时，一定能在主存中找到需访问的信息。`,
        p`④ 当 cache 缺失时，CPU 根据物理地址到主存读一块信息到 cache，然后再取到 CPU 或 CPU 写信息到 cache。`,
        p`从上述过程来看，CPU 进行一次存储访问操作，最好的情况下（TLB 命中、cache 命中），无需访问内存；最坏的情况下（缺页），不仅要多次访问内存，还要读写磁盘数据。`
    ),
    section('34.具有 TLB、cache 和虚拟存储器的计算机系统中，有没有可能出现「cache 命中但缺页」的情况？那「TLB 命中但缺页」的情况有没有可能发生呢？')(
        p`答：不可能出现「cache 命中但缺页」的情况。因为如果缺页，说明当前页不在主存中，那么也一定不在 cache 中。同样，「TLB 命中但缺页」的情况也不可能发生。因为若当前页不在主存中，那么 TLB 中不可能有该页对应的有效页表项。`
    ),
    section('35.TLB 缺失、cache 缺失和页面缺失（缺页）的处理有什么异同点？')(
        p`答：cache 缺失的处理是由硬件来实现的。当发生 cache 缺失时，CPU 使当前指令阻塞，并根据主存地址继续到主存中去访问主存块，从主存中取到信息后指令继续执行，因而 CPU 不会切换到其他程序执行。`,
        p`TLB 缺失可以用软件也可以用硬件来处理，处理过程相当简单，只要根据虚页号和页表基址寄存器的内容到主存中找到相应的页表项，若有效位为 1，则把该项取到 TLB 中即可。若有效位为 0，则发出缺页异常。如果用软件来处理 TLB 缺失，则通过产生 TLB 缺失异常，引出操作系统中相应的异常处理程序进行处理，异常处理结束后，重新执行当前指令。`,
        p`页面缺失（缺页）处理是由软件来实现的。缺页时，需要调出操作系统中的缺页异常处理程序进行处理，实现从磁盘读入一个页面的功能。缺页处理结束后，重新执行当前指令。`
    ),
    section('36.存储器分层结构中，各层次上存储器的速度如何？')(
        p`答：在计算机系统中，存储器采用的是一种分层结构，包括寄存器—cache—主存—磁盘。若用一个 CPU 时钟周期来表示它们之间的相对速度，则 1 个时钟周期不到就能从寄存器访问到信息；1～10 个时钟周期能够在 cache 中访问到信息；50～100 个时钟周期能在主存中访问到信息；如果要从磁盘读信息的话，则大约需要几十万到几百万个时钟周期。因此，程序员必须能够充分理解存储器的分层结构。随着技术的进步，各类存储器的速度可能会发生变化，但它们之间的差异总是存在的。`
    )
).elem