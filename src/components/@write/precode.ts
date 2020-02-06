import { Component } from 'just-dom'

export let precode = (content: string) => (lang?: string) => {
    return new Component('pre').c(new Component('code').c(content).a({ class: 'precode' }))
}
