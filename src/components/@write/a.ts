import TaggedTemplateLiteralsArgs from '../utils/TaggedTemplateLiteralsArgs'
import { Component } from 'just-dom'

export let a = (...children) => (href: string) => {
    let ret =  new Component('a').a({ href })
    if(children.length)ret.c(...TaggedTemplateLiteralsArgs(children))
    else ret.c(href)
    return ret
}
