const fs = require('fs')
const path = require('path')
let root_path = path.join(__dirname, 'src', 'pages')
let ext = '.page.ts'
let output_path = path.join(__dirname, './output/dist')
const router_path = path.join(__dirname, 'src', 'outer', 'router.ts')

function delDir(path) {
    let files = []
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path)
        files.forEach((file, index) => {
            let curPath = path + '/' + file
            if (file !== '.git') if (fs.statSync(curPath).isDirectory()) {
                delDir(curPath) //递归删除文件夹
            } else {
                fs.unlinkSync(curPath) //删除文件
            }
        })
        fs.rmdirSync(path)
    }
}

function getAllFiles(root) {
    let res = [],
        files = fs.readdirSync(root)
    files.forEach(function(file) {
        let pathname = root + '/' + file,
            stat = fs.lstatSync(pathname)

        if (!stat.isDirectory()) {
            if (pathname.indexOf(ext) > -1)
                //过滤非指定后缀文件
                res.push(pathname.replace(root_path, '.'))
        } else {
            let p = path.join(output_path, pathname.replace(root_path, '.'))
            if (!fs.existsSync(p)) {
                fs.mkdirSync(p)
            }
            res = res.concat(getAllFiles(pathname))
        }
    })
    return res
}

module.exports = (root_path_, output_path_, ext_) => {
    root_path = root_path_
    output_path = output_path_
    ext = ext_
    //clean
    if (fs.existsSync(output_path)) {
        delDir(output_path)
    }
    fs.mkdirSync(output_path)
    //clean
    let entrypoints = {}
    let routes_str = '//[routes]\n'
    let paths = getAllFiles(root_path)
    for (let i = 0, len = paths.length; i < len; i++) {
        let pre = paths[i].split(ext)[0].split('./')[1]
        entrypoints[pre] = './' + path.join('src', 'pages', paths[i])
        routes_str += `router.add('/${pre + '.html'}', ()=>loadView('${'/' + pre}'))\n`
    }
    let src = fs.readFileSync(router_path).toString()
    src = src.replace(/\/\/\[routes](.|\n)*/, routes_str)
    fs.writeFileSync(router_path, src)
    return entrypoints
}
