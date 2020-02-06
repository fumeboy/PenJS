import style from './ol_ul.styl'
import { Component } from 'just-dom'
export let ol = (...children) => {
    return new Component('ol').c(...children).a({class: style.ol})
}