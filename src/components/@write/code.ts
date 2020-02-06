import {Component} from 'just-dom'
export const code = (content: string) => (lang?: string) => {
    return new Component('code').c(content).a({ class: 'code' })
}