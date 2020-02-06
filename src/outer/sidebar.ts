import { Component } from 'just-dom'
import style from './sidebar.styl'
import { a, h, p } from '@src/components/@write'
const sidebar = new Component()
    .c(
        new Component().a({ class: style.header }).c(
            h("fumeboy's blog")(1)
        ),
        new Component().a({ class: style.content }).c(
            new Component('button').a({class: style.menu_btn}).c("goto  ' / ' ").on('click', ()=>{window['outer'].router.push('/')}),
            new Component('button').a({class: style.menu_btn}).c('router.back()').on('click', ()=>{window['outer'].router.back()}),
        ),
        new Component().a({ class: style.footer }).c(
            p`powered by ${a`justDOM`('https://github.com/fumeboy/justDOM')} & ${a`PenJS`('https://github.com/fumeboy/PenJS')}`
        ))
    .a({ class: style.sidebar }).elem
document.querySelector('#sidebar').appendChild(sidebar)
