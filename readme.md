# PenJS

用写程序的方式写文档

PenJS 同时还是我的 webpack 多入口项目优化方案的体现。为了避免两篇文章互相导入时产生过大的打包文件，引入了 .meta 机制，使得 A
 文章对 B 文章的导入得到的是 B 程序的程序子集而非全集。

在 PenJS，一篇文章就是一个程序，凭借语言的import/export特性，来产生文章间的关联和索引，同时，也因而享有最灵活的写作方式。