import { Component } from 'just-dom'

export let ul= (...children) => {
    return new Component('ul').c(...children)
}