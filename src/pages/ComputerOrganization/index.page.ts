import { p, section } from '@src/components/@write'
import Chapter1 from './Chapter1'
import Chapter2 from './Chapter2'
import Chapter3 from './Chapter3'
import Chapter4 from './Chapter4'
import Chapter5 from './Chapter5'
import Chapter6 from './Chapter6'
import Chapter7 from './Chapter7'
import Chapter8 from './Chapter8'
const title = '计算机组成原理'
const page = section(title)(
    p`书内容由程序处理，可能有严重错误。`,
    Chapter1,Chapter2,Chapter3,Chapter4,
    Chapter5,Chapter6,Chapter7,Chapter8
).elem
