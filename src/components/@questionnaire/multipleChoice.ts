import style from './multipleChoice.styl'
import { Status, Component, reactive_class, reactive_event } from 'just-dom'
import {section,ol} from '@src/components/@write'

export let answer = (inner, right = true) => (done: Status) => {
    let clicked = new Status(false)
    return new Component()
        .c(inner)
        .a({class: style.item})
        .with(done, reactive_event('click', v=>v?null:()=>clicked.set(v=>!v)))
        .with(clicked, reactive_class(v=>v?style.selected:null))
        .with(done, reactive_class(v=>v?(right?style.right:style.wrong):null))
}

export let multipleChoice = (title: string, ...content) => (...answers) => {
    let done = new Status(false)
    for (let i = 0, len = answers.length; i < len; i++) {
        if (typeof answers[i] !== 'function') {
            answers[i] = answer(answers[i], false)(done)
        }else{
            answers[i] = answers[i](done)
        }
    }
    return section(
        title,
        new Component('button')
            .a({class: style.btn})
            .with(done, reactive_event('click', v=>v?null:()=>done.set(true))),
        '?'
    )(
        new Component().c(
            new Component().c(...content).a({ class: style.content }),
            new Component().c(ol(...answers)).a({ class: style.answers })
        ).a({class: style.box})
    ).a({class: style.main})
}



