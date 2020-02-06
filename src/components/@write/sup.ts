import TaggedTemplateLiteralsArgs from '../utils/TaggedTemplateLiteralsArgs'
import { Component } from 'just-dom'
export let sup = (...children) => {
    return new Component('sup').c(...TaggedTemplateLiteralsArgs(children))
}
