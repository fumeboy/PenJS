import style from './section.styl'
import { Component } from 'just-dom'
import {h} from './h'
let level = 0
export let section = (...title) => {
    level++
    return (...children) => {
        let child = title ? [h(...title)(level)] : []
        child.push(new Component().c(...children).a({ class: style.content }))
        level--
        return new Component('section').c(...child).a({ class: style.section })
    }
}
