import React, { Component } from 'react'
let myMarked = require('marked')

myMarked.setOptions({
    renderer: new myMarked.Renderer(),
    gfm: true,
    breaks: true,
    tables: true,
    sanitize: true,
    highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value
    }
})

class Preview extends Component {

getText() {
    let rawMarkup = myMarked(this.props.data)
    return {__html: rawMarkup}
}

    
    render() {
        return (
            <div id="preview" dangerouslySetInnerHTML={this.getText()}/>
        ) 
    }
}

export default Preview