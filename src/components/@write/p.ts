import { Component } from 'just-dom'
import style from './p.styl'
import TaggedTemplateLiteralsArgs from '../utils/TaggedTemplateLiteralsArgs'

// ex: p`loader 的 ${b`功能`} 非常强大`
export let p = (...children) => {
    return new Component('p').c(...TaggedTemplateLiteralsArgs(children)).a({class:style.p})
}