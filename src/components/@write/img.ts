import { Component } from 'just-dom'

export let img = (url: string) => (text?: string) => {
    if(!text)text = ''
    return new Component('img').c(text).a({ src: url })
}
