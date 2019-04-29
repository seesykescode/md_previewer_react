import React, {Component} from 'react';
import './App.css';
import Preview from './components/Preview'

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      input: `
      
# Markdown Previewer
## Created by Johnathon Sykes
____
### Emphasis and Italics
You want to make a bold statement? Use double asterisks surrounding your text.
**Like this** 

Need to italicize your text Juse use single astericks surronding your text.
*Like this*
____
### Code in Markdown
Standalone elements can be typed with a a pair of backticks (\`\`) surrounding your code
\`<h2> isn't rendering and that's good<h2>\`

Here's a code block, I'm working on getting syntax highlighting working.
\`\`\`\ javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\`
____
### Lists
Here's how you create a list in markdown
#### Ordered
1. Thing
2. Thing 2
3. Thing 3.

#### Unordered list
* Thing
* Another Thing
* 3rd Thing's a charm
Just like that. Cool, right
____
### Blockquotes
Use a \`>\` in front of your text in order to create a block text
> Because **WE** are your friends
> **YOU'LL** never be alone again
> Well come on!
> Well come on!
> Well come on!
____
### Links
Links can be created by using the following syntax
\`[<link text>](<URL>)\`
Check this link out!
[My favorite soccer team](http://www.lagalaxy.com)
____
### Images
Image syntax is pretty similar to links but with one big difference...well character
\`![<alt text of image>](<image URL>)\`
![You win...Markdown!](https://media.giphy.com/media/3oEduGdxEVeRU3fijC/giphy.gif)
      `
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({input: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
  }
  

  render() {
    return (
      <div className="App">
      <textarea name=""  value={this.state.input} onChange={this.handleChange} id="editor" cols="30" rows="10"></textarea>
        <Preview data={this.state.input}></Preview>
      </div>
    )
  }
}

export default App