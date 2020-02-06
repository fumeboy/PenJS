import style from './i.styl'
import TaggedTemplateLiteralsArgs from '../utils/TaggedTemplateLiteralsArgs'
import { Component } from 'just-dom'
export let i = (...children) => {
    return new Component('span').c(...TaggedTemplateLiteralsArgs(children)).a({ class: style.italic })
}
