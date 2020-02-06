import style from './b.styl'
import TaggedTemplateLiteralsArgs from '../utils/TaggedTemplateLiteralsArgs'
import { Component } from 'just-dom'
export let b = (...children) => {
    return new Component('span').c(...TaggedTemplateLiteralsArgs(children)).a({ class: style.bold })
}
