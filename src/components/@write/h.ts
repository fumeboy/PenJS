import style from './h.styl'
import { Component } from 'just-dom'
export let h =  (...children) => (level?: number) => {
    if(!level)level = 1
    if(level>6)level=6
    return new Component('h' + level).c(...children).a({class: style.h})
}
