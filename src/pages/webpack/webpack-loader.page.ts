import { p, section, a, precode, code } from '@src/components/@write'

const title = 'webpack4 loader 经验小结'
const article = section(title)(
    p`loader 的功能非常强大，凭借 loader，你可以创造出自己的自定义 javascript。在编写loader的时候，我主要从两个文档点进行参考：`,
    p`一个是官方的 ${a`编写一个loader`('https://www.webpackjs.com/contribute/writing-a-loader/')}`,
    p`另一个是 ${a`loader API`('https://www.webpackjs.com/api/loaders/')}`,
    p`其中第二个文档尤其重要。`,
    section('明确 loader 上下文')(
        p`光看文档是远远不够的，为了了解 webpack loader 的上下文，我们可以写一个简单的loader(example-loader)：`,
        precode(`//filename: example-loader/index.js
const f = function(src) {
  console.log(this)
  return src
}
module.exports = f;`)('js'),
        p`在 webpack config 文件中，将这个 loader 挂载到，比如 .js 程序或者 .ts 程序下面， 看看运行 webpack 后，example-loader 会打印出什么`,
        p`实际上，由于打印出来的 this 非常大，所以我建议你参考 loader API，指定打印对象：`,
        precode(`
    console.log(this)
    
    =>
    
    console.log('version', this.version)
    console.log('context', this.context)
    console.log('request', this.request)
    console.log('query', this.query)
    console.log('data', this.data)
    console.log('loaders', this.loaders)
    console.log('loaderIndex', this.loaderIndex)
    console.log('resource', this.resource)
    console.log('resourcePath',this.resourcePath)
    console.log('resourceQuery',this.resourceQuery)
    ...`)('js')
    ),
    section('query 的特殊作用')(
        p`webpack 的一个机制：`,
        p`${code('import {a} from "./a"')()} 和 ${code(
            'import {b} from "./a"'
        )()} 由于请求地址都是 "./a", webpack 不会对 ./a 重复处理，而是处理一次后，返回缓存后的结果，所以这两个导入语句得到的都是同一个 ./a 程序`,
        p`但如果后一个导入语句改为：${code(
            'import {b} from "./a?query=123"'
        )()} 将跳过 webpack 的缓存，重新对 ./a 进行处理，这个时候如果我们的loader进行一些特殊的工作，可以达到，是同一个 ./a 却返回不同程序的效果`
    ),
    section('更多的上下文')(
        p`有些时候，我们希望知道调用 A 文件的是 B 还是 C， 即明确request是谁发起的，我个人有两种方法：`,
        p`第一种，是直接从 this._module.issuer 获取信息，这里有两种情况(我们假设被调用、即将要处理的文件是 index.ts：`,
        p`1. index.ts 是 webpack 的 entry，会有作为 entry 而被系统调用的情况，这时 this._module.issuer 不存在`,
        p`2. 如果是 page2.ts 调用 index.ts，那么我们在处理 index.ts 时，可以通过 this._module.issuer._source._name 来获取调用方 page2.ts 的地址`,
        p`需要注意的是，你可能也知道了，this._module 已经是即将被废弃的属性了`,
        p`第二种，是在处理 page2.ts 时，将 page2.ts 中对 index.ts 的调用语句 ${code('import "./index.ts"')()} 替换为 ${code(
            'import ./index.ts?from=page2.ts'
        )()}`
    )
)
