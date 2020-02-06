import { section, p } from '@src/components/@write'
const title='1.3　基本术语解释'
const page = section(title)(
    section('系列机（family machine）')(
        p`系列机是指一个厂家生产的具有相同系统结构、不同组成和实现的一系列不同型号的机器。它应在指令系统、数据格式、字符编码、中断系统、输入/输出控制方式等方面保持统一，从而保证软件的兼容性。`
    ),
    section('兼容性（compatibility）')(
        p`兼容是一个广泛的概念，主要表示一种「互换」特性，包括软件兼容、硬件兼容等。`,
        section('软件兼容（software compatibility）')(
            p`软件兼容是指在某种机型上开发的软件可以不加修改地在另外的机型上正确运行。一般在同一系列机内的软件是兼容的，有向上兼容和向下兼容两种形式。向上兼容是指高档机型上的程序能在低档机型上运行，向下兼容是指低档机型上的程序能在高档机型上运行，一般系列机满足向下兼容性。因为系列机中高档机的指令系统包含了低档机中的所有指令。`
        ),
        section('硬件兼容（hardware compatibility）')(
            p`硬件兼容也就是设备或部件兼容，是指设备或部件可以不加改动地用于多种计算机。这要求设备或部件符合某种标准化设计。`
        )
    ),
    section('集成电路')(
        section('小规模集成电路（Small Scale Integrated circuit，SSI）')(p`集成度小于 100 的集成电路。`),
        section('中规模集成电路（Medium Scale Integrated circuit，MSI）')(p`集成度在 100 到 1000 的集成电路。`),
        section('大规模集成电路（Large Scale Integrated circuit，LSI）')(p`集成度在 1000 到 10 万的集成电路。`),
        section('超大规模集成电路（Very Large Scale Integrated circuit，VLSI）')(p`集成度在 10 万到 1000 万的集成电路。`),
        section('极大规模集成电路（Ultra Large Scale Integrated circuit，ULSI）')(p`集成度在 1000 万以上的集成电路。`),
        section('摩尔定律（Moore’s law）')(
            p`1965 年，摩尔预测：以后每年将缩小硅片中形成晶体管电路的细线尺寸的 10%，芯片制造商能够每 3 年发布新一代的芯片，其晶体管数为上一代的 4 倍。后来摩尔定律被表述成：由于集成电路技术的不断改进，每 18～24 个月，集成电路芯片上集成的晶体管数将翻一番，速度将提高一倍，而价格将降低一半。`
        )
    ),
    section('控制器（control unit）')(
        p`控制器也称为控制单元或控制部件。其作用是对指令进行译码，将译码结果和状态/标志信号、时序信号等进行组合，产生各种操作控制信号。这些操作控制信号被送到 CPU 内部或通过总线送到主存或 I/O 模块。送到 CPU 内部的控制信号用于控制 CPU 内部数据通路的执行，送到主存或 I/O 模块的控制信号用于控制 CPU 和主存或 CPU 和 I/O 模块之间的信息交换。控制单元是整个 CPU 的指挥控制中心，通过规定各部件在何时做什么动作来控制数据的流动，完成指令的执行。`
    ),
    section('中央处理器（Central Processing Unit，CPU）')(
        p`中央处理器是计算机中最重要的部件之一，主要由运算器和控制器组成。其内部结构归纳起来可以分为控制部件、运算部件和存储部件三大部分，它们相互协调，共同完成对指令的执行。`
    ),
    section('存储器（Memory，Storage）')(
        p`存储器用于存储程序和数据，分为内存储器（简称内存）和外存储器（简称外存）。内存存取速度快，但容量小、价格贵；外存容量大、价格低，但存取速度慢。`,
        section('内存（memory）')(
            p`从字面上来说，内存是内部存储器，应该包括主存（Main Memory，简称 MM）和高速缓存（cache），但是，因为早期计算机中没有高速缓存，因而传统意义上的内存就是主存，所以，目前也并不区分内存和主存。内存位于 CPU 之外，用来存放已被启动执行的程序及所用的数据，包括 ROM 芯片和 RAM 芯片组成的相应 ROM 存储区和 RAM 存储区两部分。`
        ),
        section('外存（storage）')(
            p`外存储器主要有磁盘存储器、磁带存储器和光盘存储器等。磁盘是最常用的外存储器，通常它分为软盘和硬盘两类。容量极大、价格便宜的磁带机和光盘组等称为海量存储器，常用作数据备份，也称为辅存（Accessorial Memory，简称 AM）或二级存储器（Secondary Memory，简称 SM）。`
        )
    ),
    section('系统软件（system software）')(
        p`系统软件是介于计算机硬件与应用程序之间的各种软件，它与具体应用关系不大。系统软件包括操作系统（如 Windows）、语言处理系统（如 C 语言编译器）、数据库管理系统（如 Oracle）和各类实用程序（如磁盘碎片整理程序、备份程序）。`
    ),
    section('应用软件（application software）')(
        p`应用软件是指针对使用者的某种应用目的所编写的软件，例如办公自动化软件、互联网应用软件、多媒体处理软件、股票分析软件、游戏软件、管理信息系统等。`
    ),
    section('操作系统（Operating System，简称 OS）')(
        p`操作系统是计算机系统中负责支撑应用程序运行环境以及用户操作环境的系统软件，其目的是使计算机系统所有资源最大限度地发挥作用，并为用户提供方便的、有效的、友善的服务界面。操作系统是一个庞大的管理控制程序，大致包括五个方面的管理功能：进程与处理器管理、作业管理、存储管理、设备管理和文件管理。目前比较流行的操作系统主要有两个家族：类 UNIX 家族和微软的 Windows 家族。`
    ),
    section('最终用户（end user）')(
        p`使用应用程序完成特定任务的计算机用户称为最终用户。大多数计算机使用者都属于最终用户。例如使用炒股软件的股民、玩计算机游戏的人、进行会计电算化处理的财会人员等。`
    ),
    section('系统管理员（system administrator, admin）')(
        p`指利用操作系统提供的功能对系统进行配置、管理和维护以建立高效合理的系统环境供计算机用户使用的操作人员。其职责主要包括安装、配置和维护系统的硬件和软件，建立和管理用户账户，升级软件，备份和恢复业务系统及数据等。`
    ),
    section('高级语言（high-level programming language）')(
        p`高级语言也称为高级编程语言或算法语言，是面向问题和算法的描述语言。用这种语言编写程序时，程序员不必了解实际机器的结构和指令系统等细节，而是通过一种比较自然的、直接的方式来描述问题和算法。`
    ),
    section('汇编语言（assembly language）')(
        p`汇编语言是一种面向实际机器结构的低级语言，是机器语言的符号表示，与机器语言一一对应。因此，汇编语言程序员必须对机器的结构和指令系统等细节非常清楚。`
    ),
    section('机器语言（machine language）')(
        p`机器语言是指直接用二进制代码（指令）表示的语言。用户必须用二进制代码来编写机器语言程序。因此，机器语言程序员必须对机器的结构和指令系统等细节非常清楚。`
    ),
    section('指令集（instruction set）')(
        p`指令集是一台计算机能够执行的所有机器指令的集合。指令按功能可以分为运算指令、移位指令、传送指令、串指令、程序控制指令等类型。`
    ),
    section('指令集体系结构（Instruction Set Architecture，ISA')(
        p`指令集体系结构是计算机硬件与系统软件之间的接口，指机器语言程序员或操作系统、编译器、解释器设计人员所看到的计算机功能特性和概念性结构。其核心部分是指令系统，同时还包含数据类型和数据格式定义、寄存器组织、I/O 空间的编址和数据传输方式、中断结构、计算机状态的定义和切换、存储保护等。ISA 设计得好坏直接决定了计算机的性能和成本。`
    ),
    section('透明性（transparency）')(
        p`由于计算机系统采用了层次化结构进行设计和组织，因此面向不同的硬件或软件层面进行工作的人员或用户所「看到」的计算机是不一样的。也就是说，计算机组织方式或系统结构中的一部分对某些用户而言是「看不到」的或称为「透明」的。例如，对于高级语言程序员来说，指令格式、数据格式、机器结构、指令和数据的存取方式等都是透明的；而对于机器语言程序员和汇编语言程序员来说，指令格式、机器结构、数据格式等则不是透明的。`
    ),
    section('源程序（source program, src）')(
        p`编译程序、解释程序和汇编程序统称为语言处理程序。各种语言处理程序处理的对象称为源程序，用高级（算法）语言或汇编语言编写，如 C 语言源程序、Java 语言源程序、汇编语言源程序等。`
    ),
    section('解释器（interpreter）')(
        p`解释器将源程序的一条语句翻译成对应的机器语言目标代码，并立即执行，然后翻译下一条源程序语句并执行，直至所有源程序中的语句全部被翻译并执行完。因此，解释器并不输出目标程序，而是直接输出源程序的执行结果。`
    ),
    section('响应时间（response time）')(
        p`响应时间也称为执行时间（execution time）或等待时间（latency time），是指从作业提交开始到作业完成的时间。一般一个程序的响应时间除了 CPU 执行程序包含的指令执行时间外，还包括等待 I/O 的时间、系统运行其他用户程序所用的时间以及操作系统运行的时间等。`
    ),
    section('吞吐率（throughput')(p`在有些场合下，吞吐率也称为带宽（bandwidth），是指在一定的时间内所完成的工作量。`),
    section('时钟周期（clock cycle，tick，clock tick，clock）')(
        p`所有计算机执行指令的过程都是分成若干步骤和相应的动作来完成的，每一步动作都要有相应的控制信号进行控制，这些控制信号何时发出、作用时间多长，都要有相应的定时信号进行同步。因此，CPU 必须能够获得用于同步的时钟定时信号，也就是 CPU 的主脉冲信号，其宽度称为时钟周期。`
    ),
    section('基准测试程序（benchmark）')(
        p`基准测试程序是专门用来进行性能评价的一组程序，这些程序能够很好地反映机器在运行实际负载时的性能。可以在不同机器上运行相同的基准测试程序来比较不同机器的运行时间，从而比较其性能。`
    ),
    section('阿姆代尔定律（Amdahl’s law）')(
        p`阿姆代尔定律的主要含义是指系统优化某部件所获得的系统性能的改善程度，取决于该部件被使用的频率或所占总执行时间的比例。该定律很好地诠释了改善「系统瓶颈」性能的重要性。`
    ),
    section('加法指令执行速度（add instruction execution speed）')(
        p`最早用来衡量计算机性能的指标是完成单个运算（如加法运算）指令所需要的时间。当时大多数指令的执行时间是相同的，并且加法指令能反映乘、除等运算，而其他指令的时间也大体与加法指令相当，故加法指令的速度有一定的代表性。加法指令执行速度的计量单位为 KIPS（每秒千条指令）和 MIPS（每秒百万条指令）。`
    )
).elem