import TaggedTemplateLiteralsArgs from '../utils/TaggedTemplateLiteralsArgs'
import { Component } from 'just-dom'
export let sub = (...children) => {
    return new Component('sub').c(...TaggedTemplateLiteralsArgs(children))
}
