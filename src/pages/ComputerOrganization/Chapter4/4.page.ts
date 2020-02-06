import { p, section } from '@src/components/@write'
const title = '4.4　常见问题解答'
const page = section(title)(
    section('1.引入链接的好处是什么？')(
        p`答：引入链接的第一个好处就是「模块化」，它能使一个程序被划分成多个模块，由不同的程序员进行编写，并且可以构建公共的函数库（如数学函数库、标准 I/O 函数库等）以提供给不同的程序进行重用。引入链接的第二个好处是「效率高」，每个模块可以分开编译，在程序修改时只需重新编译那些修改过的源程序文件，然后再重新链接，因而从时间上来说，能够提高程序开发的效率；同时，因为源程序文件中无需包含共享库的所有代码，只要直接调用即可，而且在可执行文件运行时的内存中，也只需要包含所调用函数的代码而不需要包含整个共享库，所以链接也有效地提高了空间利用率。`
    ),
    section('2.如果一个程序仅有单个模块，是否无须链接即可直接生成可执行目标文件？')(
        p`答：不是。如果一个程序仅有单个模块，也需要进行链接。因为每个模块分别进行预处理、编译和汇编而得到可重定位目标文件，所以在链接之前无法知道某个模块是否需要和其他模块进行合并，也不知道将要与哪个模块进行合并。因此，链接之前的所有模块都采用统一的可重定位目标文件格式，它与最终的可执行目标文件格式有一些差别，即使是单个模块，也不能将可重定位目标文件直接变成可执行目标文件。而且，单个模块也可能会调用库函数（如数学函数库、标准 I/O 函数库等），因此，必须通过链接才能把库函数中的代码和数据等合并到程序中，以生成可执行目标文件。`
    ),
    section('3.可重定位目标文件和可执行目标文件的主要差别是什么？')(
        p`答：可执行目标文件由链接器将若干个相互关联的可重定位目标文件组合起来而生成。可重定位文件中的代码和数据的地址是相对于起始地址 0 而得到的，可执行文件中代码和数据的地址则按照操作系统规定的存储器映像来确定起始地址，并且可重定位文件中代码和数据的地址将会被修改，使得它们被重定位到运行时的虚拟存储空间中相应地址处。可执行目标文件格式与可重定位目标文件格式类似，例如，这两种格式中 ELF 头的数据结构一样，.text 节、.rodata 节和.data 节中除了有些重定位地址不同以外，大部分都类似。相比于 ELF 可重定位目标文件，可执行目标文件的不同之处表现在以下几个方面：`,
        p`①ELF 头中字段 e_entry 给出系统将控制权转移到的起始的虚拟地址（入口点），即执行程序时第一条指令的地址，而在可重定位文件中，此字段为 0。`,
        p`② 多了一个.init 节，其中定义了一个_init 函数，用于可执行目标文件开始执行时的初始化工作。`,
        p`③ 少了两个.rel 节，因为可执行目标文件中的指令和数据已被重定位，故可去掉用于重定位的节。`,
        p`④ 多了一个程序头表，也称段头表（segment header table），可执行文件中的节与虚拟空间中的存储段之间的映射关系。`
    ),
    section('4.哪些节组合成只读代码段？哪些节组合成可读写数据段？')(
        p`答：可执行目标文件中描述了两种可装入段：只读代码段和可读写数据段。只读代码段对应可执行目标文件中所有代码和只读数据所在的区域，通常包括 ELF 头、程序头表以及.init、.text 和.rodata 节。可读写数据段对应可执行目标文件中所有可读可写数据所在的区域，通常包括.data 和.bss 节。`
    ),
    section('5.加载可执行目标文件时，加载器根据其中的哪个表的信息对可装入段进行映射？')(
        p`答：可执行目标文件的程序头表中记录了可执行目标文件中所有存储段的相关信息，如存储段类型，段在虚拟地址空间中的起始地址、长度、对齐方式、访问权限等。这些信息反映了可执行目标文件在运行时的存储器映像，即可执行目标文件中的代码段和数据段在虚拟地址空间中的映射关系。加载可执行目标文件时，加载器可根据可执行目标文件中的程序头表对可装入段进行映射。`
    ),
    section('6.在可执行目标文件中，可装入段被映射到虚拟存储空间，这种做法有什么好处？')(
        p`答：每个可执行目标文件都采用布局相对一致的存储器映像方式，即映射到一个统一的虚拟地址空间上，使得链接器在重定位时可以完全按照一个统一的虚拟存储空间来确定每个符号的地址，而不用管其数据和代码将来存放在主存或磁盘的何处。因此，引入虚拟存储管理简化了链接器的设计和实现。`,
        p`同样，引入虚拟存储管理也简化了程序加载过程。因为统一的虚拟地址空间映像使得每个可执行目标文件的只读代码段都映射到同一个地址（例如 Linux 系统是 0x08048000）开始的一块连续区域，可读写数据段映射到虚拟地址空间中的一块连续区域，因而加载器可以非常容易地对这些连续区域进行分页，并初始化相应页表项的内容。加载时，只读代码段和可读写数据段对应的页表项都被初始化为「未缓存页」（即有效位为 0），并指向磁盘中可执行目标文件中适当的地方。因此，程序加载过程中，实际上并没有真正从磁盘上加载代码和数据到主存，而是仅仅创建了只读代码段和可读写数据段对应的页表项。只有在执行代码过程中发生了「缺页」异常，才会真正从磁盘加载代码和数据到主存。`
    ),
    section('7.静态链接的缺点是什么？')(
        p`答：首先，静态库函数（如 printf）直接被包含在每个运行进程的代码段中，因此对于并发运行上百个进程的系统来说，这会造成极大的主存资源浪费；其次，静态库函数被合并在可执行目标文件中，而磁盘上存放着数千个可执行目标文件，因此造成磁盘空间的极大浪费；最后，程序员需要关注是否有函数库的新版本出现，并需定期下载、重新编译和链接，因而更新困难、使用不便。`
    ),
    section('8.动态链接有什么特点？')(
        p`答：共享库以动态链接的方式被多个加载过程中或正在执行的应用程序共享，因而共享库的动态链接有两个方面的特点：一是「共享性」，二是「动态性」。`,
        p`「共享性」是指共享库函数中的代码段和数据段在内存只有一个副本，当应用程序在其代码中需要引用共享库中的符号时，在引用处通过某种方式确定指向共享库中对应定义符号的地址即可。例如，对于动态共享库 libc.so 中的 printf 模块，内存中只有一个 printf 副本，所有应用程序都可以通过动态地链接 printf 模块来使用它。`,
        p`「动态性」是指共享库只在使用它的程序被加载或执行时才加载到内存，因而在共享库更新后并不需要重新对程序进行链接，每次加载或执行程序时所链接的共享库总是最新的。可以利用共享库的这个特性来实现软件分发或生成动态 Web 网页等。对于静态库，程序员则需要对其进行定期维护和更新，关注它是否有新版本出现，在出现新版本时需要重新对程序进行链接操作。`
    )
).elem