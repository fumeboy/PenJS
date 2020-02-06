import TaggedTemplateLiteralsArgs from '../utils/TaggedTemplateLiteralsArgs'
import { Component } from 'just-dom'

export let link = (...children) => (href: string) => {
    let ret =  new Component('a').a({ href })
    if(children.length)ret.c(...TaggedTemplateLiteralsArgs(children))
    else ret.c(href)
    return ret.on('click', (e)=>{
        e.preventDefault()
        window['outer'].loading.setLoading()
        window['outer'].router.push(href)
    })
}
