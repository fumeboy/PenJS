const treeshaking = require('./treeshaking')
const fs = require('fs')
const path = require('path')
const loaderUtils = require('loader-utils')

const importRegExp = /import\b.*?meta'/g
const ext = '.page.ts'
let importRegExpReplacer = function(txt) {
    return txt.slice(0, -5) + "page.ts?meta'"
}

module.exports = function(src) {
    const options = loaderUtils.getOptions(this, { expo: [], root: '' })
    let ppp = this.resourcePath
    let pp = path.basename(ppp)
    src = src.replace(importRegExp, importRegExpReplacer)
    if (pp.split('.')[1] === 'page') {
        if (!this._module.issuer) {
            // 没有 issuer 说明是 入口文件，由系统调用而非模块间调用
            return (
                src +
                `
      window.outer.views['/${path.relative(options.root, ppp).split(ext)[0]}']={page,title};console.log(title)`
            )
        } else {
            return (
                treeshaking(options.expo, src) +
                `
      export let path='/${path.relative(options.root, ppp).split(ext)[0] + '.html'}';
      export let date='${fs.statSync(ppp).mtime.toDateString()}';
      ` +
                'export {title}'
            )
        }
    }
    return src
}

