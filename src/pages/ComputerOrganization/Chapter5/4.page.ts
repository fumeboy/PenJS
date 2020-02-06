import { p, section } from '@src/components/@write'
const title = '5.4　常见问题解答'
const page = section(title)(
    section('1.一条指令的执行过程中要做哪些事情呢？')(
        p`答：一条指令的执行过程包括取指令、指令译码、计算源操作数地址、取操作数、运算、送结果。其中取指令和指令译码是每条指令都必须进行的操作。有些指令需要到存储单元取操作数，因此需要在取数之前计算操作数所在的存储单元地址。取操作数和送结果这两个步骤，对于不同的指令，其取和送的地方可能不同，有些指令要求在寄存器读取/保存数据，有些是在内存单元中读取/保存数据，还有些是对 I/O 端口进行读取或保存数据。因此，一条指令的执行阶段（不包括取指令阶段），可能只有 CPU 参与，也可能要通过总线去访问主存，也可能要通过总线去访问 I/O 端口。`
    ),
    section('2.CPU 总是在执行指令吗？会不会停下来什么都不做？')(
        p`答：CPU 的功能就是不断地、周而复始地执行指令，而每条指令又都有不同的步骤，每个步骤在一定的时间内完成。因此，CPU 总是在不停地执行指令。有时我们会说，CPU 停止或 CPU 正在等待，什么事情也不做。事实上，CPU 还是在执行指令，只不过可能处于以下几种情况之一：①CPU 正在执行某条指令的过程中，发生了诸如 cache 缺失这样需要访问内存或 I/O 端口的事件，此时，当前正在执行的指令无法继续执行到下一步，因此 CPU 就处于等待（阻塞）状态，直到主存或 I/O 完成读写操作；②CPU 正在不断地通过执行指令，以查询外设是否就绪，在查询过程中，CPU 什么实质性的工作都没有做；③CPU 正在执行一连串的空指令（nop），什么实质性工作都没有做。综上所述，CPU 不可能不在执行指令，只是指令的执行过程被阻塞了一段时间或执行了没有产生结果的指令。`
    ),
    section('3.CPU 除了执行指令外，还做什么事情？')(
        p`答：CPU 的工作过程就是周而复始地执行指令，计算机各部分所进行的工作都是由 CPU 根据指令的要求来启动的。为了使 CPU 和外部设备能够很好地协调工作，尽量使 CPU 不等待甚至不参与外部设备的输入和输出过程，CPU 对外设的输入、输出控制采用了程序中断方式和 DMA 方式。这两种方式下，外部设备需要向 CPU 提出中断请求或 DMA 请求，因此，在执行指令过程中，CPU 还要定时通过采样相应的引脚来查询有没有中断请求或 DMA 请求。如果有中断请求，CPU 要进行一系列操作来完成从正在执行的用户程序到中断处理程序的切换；如果有 DMA 请求，还要给出响应 DMA 请求的一些控制信号。另外，CPU 在一条指令的执行过程中，还可能发生一些异常事件，因此，也需要 CPU 能通过相应的动作，转换到异常事件处理程序去执行。不过，查询或响应中断请求和 DMA 请求的过程都是包含在一条指令执行过程中的。`
    ),
    section('4.对于 CPU 中的所有寄存器，用户都能访问吗？')(
        p`答：CPU 中的寄存器分为用户可访问寄存器和用户不可见寄存器。一般把用户可访问寄存器称为通用寄存器（GPR）。这些寄存器都有一个编号，在指令中用编号标识寄存器。因此执行指令时，指令中的寄存器编号要送到一个地址译码器进行译码，然后才能选中某个寄存器进行读写。通用寄存器可以用来存放操作数或运算结果，或作为地址指针、变址寄存器、基址寄存器等。`,
        p`CPU 中有一些寄存器是用户不可见的，它们没有编号、不能通过程序直接访问。如指令寄存器 IR、程序状态字寄存器 PSWR、存储器地址寄存器 MAR、存储器数据寄存器 MDR 等。`,
        p`对于程序计数器 PC，它虽然是专用寄存器，没有编号，不能在指令中被明确指定，但用户可以通过转移类指令来修改其值，以改变程序执行的顺序。`
    ),
    section('5.CPU 执行指令的过程中，其他部件在做什么？')(
        p`答：计算机的工作过程就是连续执行指令的过程，整个计算机各个部分的动作都是由 CPU 中的控制部件（CU）通过对指令译码送出的控制信号来控制的。其他部件不知道自己该做什么，该完成什么动作，只有 CPU 通过对指令译码才知道。如果指令中包含对存储器或 I/O 端口的访问，则必须由 CPU 通过总线，把要访问的地址和操作命令（读还是写）等信息送到存储器或 I/O 接口来启动相应的读或写操作。例如，若不采用 cache，则每次指令执行前，都要通过向总线发出主存地址、主存读命令等来控制存储器取指令；若当前执行的是寄存器定点加法指令，则 CU 控制定点运算器进行动作；若是 I/O 指令，则 CU 会通过总线发出 I/O 端口地址、I/O 读或写命令等来控制对某个 I/O 接口中的寄存器进行读写操作。所以说，CPU 在执行指令时，其他部件也可能在执行同样的指令，只不过它们各司其职：CU 负责解释指令和发出命令（控制信号），各个部件则按命令具体完成自己该完成的任务（如读写、运算等）。`
    ),
    section('6.怎样保证 CPU 能按程序规定的顺序执行指令呢？')(
        p`答：计算机的工作过程就是连续执行指令的过程，指令在主存中连续存放。一般情况下，指令被顺序执行，只有遇到转移指令（如无条件转移、条件分支、调用和返回等指令）才改变指令执行的顺序。当执行到非转移指令时，CPU 中的指令译码器通过对指令译码，知道正在执行的是一种顺序执行的指令，所以就直接通过对 PC 加「1」（这里的「1」是指一条指令的长度）来使其指向下一条顺序执行的指令；当执行到转移指令时，指令译码器知道正在执行的是一种转移指令，因而，控制运算器根据指令执行的结果进行相应的地址运算，把运算得到的转移目标地址送到 PC 中，使得执行的下一条指令为转移到的目标指令。`,
        p`由此可以看出，指令在主存中的存放顺序是静态的，而其执行顺序是动态的。CPU 能根据指令执行的结果动态改变程序的执行流程。`
    ),
    section('7.定长指令字格式的处理器中，如何读取指令？')(
        p`答：定长指令字格式是一种规整型指令集格式——所有指令都有相同的长度，所以，指令的读取非常简单——每次都可以按照确定的字节个数从指令存储器中读出指令。`
    ),
    section('8.定长指令字格式的处理器中，下一条指令地址如何计算？')(
        p`答：定长指令字格式是一种规整型指令集格式，所有指令都有相同的长度。现代计算机大多以字节编址，因此在计算下条指令的地址时，只要将 PC 中的当前指令地址加上指令的字节数即可。例如，MIPS 处理器的指令字都是 32 位，因此每条 MIPS 指令占 4 个内存单元，只要将 PC 的值加 4 就可以得到下一条指令的地址。`
    ),
    section('9.变长指令字格式的处理器中，如何读取指令？')(
        p`答：变长指令字格式是一种不规整型指令集格式——指令有长有短，每条指令所包含的字节个数不同。因此在取当前指令时，可以每次按最长的指令长度来取。例如，如果最长指令长度为 6，则每次取 6 个字节，然后根据指令中特定位的规定，对指令中的各字段进行划分，确定指令包含的操作码字段、寄存器编码字段、立即数字段、直接地址字段或转移目标地址字段等。因为总是按最长的指令字读取，所以每条指令总是包含在读出的若干字节中。`
    ),
    section('10.变长指令字格式的处理器中，下一条指令地址如何计算？')(
        p`答：变长指令字格式是一种不规整型指令集格式——指令有长有短，每条指令所含的字节数不同，因此，在计算下条指令的地址时，应将当前指令地址（PC 的内容）加上当前指令的字节数。例如，x86 处理器的指令字是变长的，每条指令从一个字节到多个字节不等，因此，下一条指令地址通过一个专门的 PC 增量器来进行计算，这个 PC 增量器能根据指令中相关字段的值，确定 PC 应该加几。`
    ),
    section('11.从处理器设计的角度，你认为定长指令字好，还是变长指令字好？')(
        p`答：从处理器设计的角度来看，定长指令字格式比变长指令字格式要好。特别是在取指令操作和计算下一条指令地址方面，定长指令字可以大大简化处理器中取指令部件的设计。`
    ),
    section('12.CPU 的主频越高，运算速度就越快吗？')(
        p`答：CPU 中的执行部件（定点运算部件、浮点运算部件）的每一步动作都要有相应的控制信号进行控制，这些控制信号何时发出、作用时间多长，都要有相应的时钟定时信号进行同步，CPU 的主频就是同步时钟信号的频率。`,
        p`直观上来看，主频越高，每一步的动作就越快，CPU 的运算速度也就越快。例如，若两台机器的 CPI（假定 CPI=2）和 ISA 都一样，则主频为 500MHz 的机器在 1s 内执行 10 亿条指令，而主频为 1GHz 的机器在 1s 内执行 20 亿条指令。显然，主频越高，指令执行速度越快。`,
        p`主频是反映 CPU 性能的重要指标，但它只是反映了一个侧面，不是绝对的。对于具有不同 ISA 和不同 CPI 的两台计算机，就不能简单地根据主频来衡量运算速度。例如，对于非流水线处理器，如果将一条指令所包含的操作步骤分得很多，使每一步操作所用时间很短，定时用的时钟周期就很短，那么主频就高。但是，此时 CPI 变大了，使得执行一条指令所用的时间并没有缩短。`
    ),
    section('13.CPU 中控制器的功能是什么？')(
        p`答：CPU 中的控制器主要用来产生各条指令执行所需的控制信号。控制信号分为两大类，即 CPU 内部控制信号和发送到系统总线上的控制信号。`
    ),
    section('14.数据通路的功能是什么？')(
        p`答：CPU 的基本功能就是执行指令，指令的执行过程就是数据在数据通路中流动的过程。数据在流动过程中，要经过一些执行部件进行相应的处理，处理后的数据要送到存储部件保存。所以，简而言之，数据通路的功能就是通过对数据进行处理、存储和传输来完成指令的执行。`
    ),
    section('15.数据通路是如何进行数据处理、数据传送、数据存储的？')(
        p`答：数据通路中的功能部件包括两种不同的逻辑单元，即进行数据处理的组合逻辑单元（称为操作元件）和进行数据存储的时序逻辑单元（称为状态单元）。组合逻辑单元的输出只取决于当前的输入，也就是说，输入一旦改变，在一定的线路延迟后，输出就跟着变化，因而它只能完成一定的数据处理功能，不能存储数据，只有将处理后的新数据送到一个状态单元才能保存下来。所以，所有数据处理单元都必须将处理后的输出结果写到状态单元中，而在处理前又必须从状态单元接收输入。因此，数据流动的起点是状态单元，经过一些组合逻辑部件，最终又流到状态单元保存。功能部件之间的输入/出信息通过连线进行传送。`
    ),
    section('16.数据通路中流动的信息有哪些？')(
        p`答：指令的执行过程就是数据通路中信息的流动过程，因此要理解数据通路中流动的信息类型，必须先考察指令的执行过程。因为每条指令的功能不同，所以其执行过程也不一样。但总体来说，指令执行过程中所涉及的基本操作包括：取指令并送指令寄存器、计算下一条指令地址、下条指令地址送 PC、读取寄存器中的数据到 ALU 输入端、指令中的立即数送扩展器或 ALU 输入端、在 ALU 中进行运算（包括计算内存单元地址）、读取内存中的数据到寄存器、将寄存器中的数据写到内存、ALU 输出的数据写到寄存器等。因此，在数据通路中流动的信息有：PC 的值、指令、指令中的立即数、指令中的寄存器编号、寄存器中的操作数、ALU 运算的结果、内存单元中的操作数等。`
    ),
    section('17.控制信号是如何控制数据的流动的？')(
        p`答：指令的执行过程就是数据通路中信息的流动过程。数据通路中信息的流动受控制信号的控制。当前指令被取到指令寄存器（IR）后，指令的操作码部分被送到指令译码器进行译码，指令译码输出信号和其他信号一起组合后生成控制信号。所以不同的指令得到不同的控制信号，以规定数据通路完成不同的信息流动过程。在数据通路中，各个功能部件中都有一些控制点，这些控制点接收不同的控制信号，就使得功能部件完成不同的操作。例如：ALU 的操作控制点接收「Add」「Sub」「And」「Or」等不同的操作信号，控制 ALU 完成加、减、与、或等不同的操作。Load/Store 指令译码后把「Add」信号送到 ALU 控制点，控制 ALU 进行加法运算来计算内存单元的地址。再如，有些状态单元的写入操作由一个「写控制信号」来控制，如果某条指令不需要把信息写入寄存器或内存单元，那么这条指令对应的译码信号就使这个「写控制信号」无效，从而控制不写入任何信息。`
    ),
    section('18.如何保证一条指令执行过程中的操作按序执行？')(
        p`答：对于每条指令来说，其执行过程应该是有序的。例如，对于运算类指令，其操作数一定要先取出来才能进行运算，运算结果一定是在最后才能写到目的寄存器。对于 Load/Store 型指令一定是先取出源寄存器的值，并先对立即数进行符号扩展，然后才能把它们送到 ALU 相加，计算出内存单元的地址，随后再访问内存单元取数或存数。因而必须有一个机制来控制一条指令的有序执行，那么，如何控制呢？主要是通过将执行指令的每一步所需的控制信号按序送到相应的组合逻辑处理部件和存储信息的状态元件。在每个时钟周期中，组合逻辑部件在相应控制信号的控制下进行数据处理、数据传送，而在时钟有效信号到达时状态单元保存中间结果。这样，经过若干个时钟周期，一条指令就在数据通路中执行完成了。`
    ),
    section('19.多路选择器的作用与工作原理是什么？')(
        p`答：多路选择器也称为数据选择器或多路复用器，用于在多个输入中选择其中的一个作为输出，因此，它有多个输入端、一个输出端和一个控制端。控制端的控制信号位数由输入端的个数确定，2 选 1 时，控制信号有 1 位，根据控制信号为 0 还是 1，决定输入端 1 还是输入端 2 作为输出。3 选 1 或 4 选 1 时，控制信号有两位，根据控制信号为 00、01、10 还是 11，决定输入端 1、输入端 2、输入端 3 或输入端 4 作为输出。`
    ),
    section('20.加法器（adder）和 ALU 的差别是什么？')(
        p`答：加法器只能实现两个输入的相加运算，而 ALU 可以实现多种算术逻辑运算。可以用门电路直接实现加法器，也可以通过对 ALU 的操作控制端固定设置为「加」操作来实现加法器。在数据通路中，有些地方只需做加法运算，如指令地址计算时，这时就不需要用 ALU，只要用一个加法器即可。`
    ),
    section('21.指令存储器和数据存储器的差别是什么？')(
        p`答：指令存储器和数据存储器的功能不一样，指令存储器专门用来存放指令，而数据存储器专门存放数据。所以，从指令执行过程来看，指令存储器只在取每条指令时执行读操作，每个指令周期都一样，而数据存储器只有在执行访存指令时才被访问，而且不仅可能有读操作，也可能有写操作。指令存储器的读地址由 PC 提供，而数据存储器的读地址和写地址都由 ALU 的输出端提供，因为数据的地址需要通过基址和偏移量在 ALU 中相加得到。数据存储器的写操作需要一个写控制信号（即写使能信号 write enable）进行控制。`
    ),
    section('22.如何确定 CPU 的时钟周期？')(
        p`答：在一个边沿触发的同步数字系统中，一个状态量的改变总是在时钟的上升沿或下降沿发生，通常称上升沿或下降沿的到来为时钟有效信号到达。一个状态量的改变必须满足以下三个条件：① 新写入的数据已经生成并稳定在状态单元的输入端；② 写使能信号有效；③ 时钟有效信号到达。在前面两个条件满足的情况下，一旦时钟有效信号到达，则输入数据开始写入状态单元，经过一定的延迟后，状态单元的输出变为新输入的数据。所以要能使电路正确工作，必须使新写入的数据在时钟有效信号到达前稳定在输入端，也即时钟周期必须足够长，使得在状态单元之间进行数据处理的组合逻辑电路有足够的时间来得到新的数据。因此，应将所有相邻状态单元之间的组合逻辑电路中最长的延时作为基准来确定时钟周期，以保证在一个时钟周期内所有组合电路能完成必要的数据处理工作，在下个时钟到来后，数据能存储在状态单元中。`
    ),
    section('23.中断（interrupt）和异常（exception）的区别是什么？')(
        p`答：有关中断和异常的概念，很多教科书或资料中都有不同的解释。有些作者或体系结构并不区分它们，把它们统称为中断，例如，PowerPC 体系结构用异常来指代意外事件，用中断表示指令执行时控制流的改变。在 MIPS 系统和一些经典的国外教科书中，「异常」和「中断」的概念是有区别的，区分的根据是来自处理器内部还是外部来区分。把执行指令过程中由指令本身引起的、来自处理器内部的特殊事件称为「异常」，把来自处理器外部的由外部设备通过「中断请求」信号向 CPU 申请的事件称为「中断」。`
    ),
    section('24.什么样的指令格式更适合流水线方式？')(
        p`答：定长指令字和定长操作码使得每条指令的预取及译码操作时间完全一致，便于流水线控制；指令类型少、操作数地址规整，便于规划取操作数步骤，并使得对指令进行译码的同时可以读取寄存器操作数；采用 Load/Store 型指令格式，便于利用执行运算步骤来进行地址计算。上述这些都是 RISC 指令系统的特点，由此可知，RISC 的指令风格更适合于流水线方式。`
    ),
    section('25.采用流水线方式能使一条指令的执行时间更短吗？')(
        p`答：不能。采用流水线方式使得指令吞吐率提高了，即在给定的时间内完成指令执行的条数增加了，但每条指令的执行过程没有减少，因此不会缩短一条指令的执行时间，相反，流水线方式还会延长一条指令的执行时间。`
    ),
    section('26.为什么流水线方式会延长一条指令的执行时间？')(
        p`答：因为在确定一条流水线的流水段个数时，是以最复杂指令执行过程所需的流水段个数为标准设计的；在确定每个流水段的宽度时，也以最复杂流水段所需的宽度来设计。因而，所有指令都需要花费最慢指令所需的执行时间才能完成执行。此外，每个流水段之间要有信息的缓存和传递等，这也增加了额外的执行时间开销。`
    ),
    section('27.二阶段流水线能成倍提高指令执行效率吗？')(
        p`答：不能。二阶段流水线把一个指令周期分成取指令和执行指令两个阶段，是最简单的流水线，它不能成倍提高指令执行效率。有很多原因，主要有：① 因为每条指令的执行阶段所花时间不同，流水线要求以最慢指令为标准来设计，所以执行阶段时间可能会很长。② 虽然每条指令的取指令过程可能一样，但是流水线中要求每个流水段的时间相同，所以取指令阶段时间也要和最慢指令的执行时间一样。③ 流水段寄存器的读写会增加一定的延迟。④ 各种流水线冒险会破坏流水线，造成流水线的停顿，影响指令执行效率。`
    ),
    section('28.加倍流水线的阶段数能成倍提高指令执行效率吗？')(
        p`答：不能。一般来说，加倍流水线的阶段数会提高指令的执行效率，但是不能按比例成倍提高。主要原因是增加流水段使得流水段之间的流水线寄存器的开销增加了。例如，假定一个三阶段流水线的每一级流水段中组合逻辑延时为 100ps，流水段寄存器延时为 20ps，则时钟周期至少为 100ps+20ps=120ps，吞吐率为 1/120ps=8.33GOPS（每秒千兆次操作），指令延时至少为 3×120ps=360ps；如果流水段数成倍增加到六段，则每个流水段的组合逻辑延时变为 50ps，故时钟周期变为 50ps+20ps=70ps，吞吐率为 1/70ps=14.29GOPS，指令延时为 6×70ps=420ps。所以，性能只提高到大约 14.29/8.33=1.71 倍，而不是两倍，指令延时增加了 420ps-360ps=60ps，这主要是流水段寄存器增加的延时。`
    ),
    section('29.流水线深度越深，时钟频率就越高，对吗？')(
        p`答：一般来说，在指令执行时间一定的情况下，流水线深度越深，时钟频率就越高。增加流水段个数，使得每个流水段内的操作变得非常简单，因此，每个阶段的延时就很小，也就缩短了时钟周期，提高了时钟频率。但是，流水线深度不能无限制提高，随着流水段个数的增加，流水段之间的流水段寄存器增多，加大了流水段之间缓冲的额外开销，当额外开销的比例达到 50% 时，再增加流水线的深度就没有意义了。此外，用于流水线优化和存储器（或寄存器）冲突处理的控制逻辑将随流水线深度的加深而大量增多，可能导致用于流水段之间控制的逻辑比流水段本身的控制逻辑更复杂。`
    ),
    section('30.流水线方式下，如何确定流水段的个数？')(
        p`答：流水线方式下，一条指令的执行过程被分成若干个操作子过程。由于每条指令所完成的功能不同，所包含的操作过程也就不同。有的指令要求完成寄存器之间内容的传送；有的就是简单的加/减运算；还有的是复杂的乘/除运算。这些操作所花的时间相差很大，因此，这些指令如果都在同一个流水线中执行，就必须按最复杂的指令来设计流水线的流水段个数。现代计算机一般把复杂度相近的指令用同一条流水线完成，而把复杂度相差很大的指令安排在不同的流水线中。`
    ),
    section('31.流水线方式下执行指令时，总能在一个时钟周期内完成一条指令的执行吗？')(
        p`答：不能。理想情况下，经过若干周期后，能在每个时钟周期内执行完一条指令，即 CPI=1。但是，当程序中出现以下情况时，流水线被破坏，不能达到 CPI=1：① 如果有多条指令的不同阶段都要用到同一个功能部件，那么会发生资源冲突，后面指令要延时执行；② 当程序的执行流程发生改变时，发生控制相关，原来按顺序取出的指令无效；③ 如果后面指令的操作数是前面指令的运行结果，那么会发生数据相关，后面指令要延时执行。此外，异常和中断等的发生都会阻塞流水线的执行。`
    ),
    section('32.如何解决结构冒险？')(
        p`答：通过以下两种规整流水线结构的方式可以解决部分结构冒险：① 规定每个功能部件在每条指令执行过程中只能被使用一次，例如，每条指令只能用一次「寄存器写口」；② 每个功能部件只能在一个特定的流水段内被使用。例如，「寄存器写口」只能在第 5 个流水阶段被使用。`,
        p`另外，可将指令和数据分别存放在不同的存储器中，使得同时访问指令和数据不会引起存储器资源的结构冒险。这在大多数处理器中都是这样的，因为在 L1 cache 的 data cache 和 code cache 是分开的。`
    ),
    section('33.什么是控制冒险？哪些情况下会发生控制冒险？')(
        p`答：正常情况下 PC 的值按顺序增量，但在执行转移类指令或发生异常和中断时，PC 的值由指令或异常/中断处理部件给出。在流水线方式下，如果在取下一条指令时正确的下一条指令地址还没有送到 PC 中，那么所取的下一条指令就不是正确的，因而发生控制冒险。可以看出，如果下一条指令地址的确定需要较长时间，就会因为来不及在一个时钟周期内得到正确的 PC 值而发生控制冒险。通常，转移类指令会发生控制冒险，例如，分支指令（条件转移指令）要根据条件测试结果来确定 PC 的值，因而会发生控制冒险；返回指令需要从存储器中读取返回地址然后送至 PC，因而也会发生控制冒险。`
    )
).elem
