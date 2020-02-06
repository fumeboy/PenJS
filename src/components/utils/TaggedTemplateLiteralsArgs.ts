export default (args: any[]) => {
    let ret = []
    for(let i = 0, len = args.length-1; i<len; i++){
        ret.push(args[0][i],args[i+1])
    }
    ret.push(args[0][args[0].length-1])
    return ret
}