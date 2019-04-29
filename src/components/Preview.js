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

componentDidMount() {
    let fccScript = document.createElement("script");
    fccScript.setAttribute(
      "src",
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
    );
    document.head.appendChild(fccScript);
}

    
    render() {
        return (
        <div className="Preview">
            <h1>Preview</h1>
            <div id="preview" dangerouslySetInnerHTML={this.getText()}/>
        </div>
        ) 
    }
}

export default Preview