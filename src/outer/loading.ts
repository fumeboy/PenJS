import {Component, Status, reactive_class} from 'just-dom'
import style from './loading.styl'
const if_loading = new Status(false)
const setLoading = () => {
    if_loading.set(true)
}
const setLoaded = () => {
    if_loading.set(false)
}
const elem = new Component()
    .c('loading' )
    .a({ class: style.loading})
    .with(if_loading, reactive_class(v=>v ? style.undone : style.done)).elem
export const loading = {
    setLoading,
    setLoaded,
    elem
}
document.querySelector('#header').appendChild(elem)
