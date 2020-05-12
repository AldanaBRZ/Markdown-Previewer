import React, { Component } from 'react';
import './App.css';
import Editor from './Components/Editor';
import Previewer from './Components/Previewer';

const placeholder = `# Welcome to my React Markdown Previewer!

## You can write sub-headings...
### And yet smaller subheadings.
  
You can write code between two backticks, like this: \`<div></div>\`.

\`\`\`
// you can also write multi-line code:

You just have to write three backticks at the beginning, and three backticks at the end.
\`\`\`
  
You can make text **bold**.
Or _italic_.
Or **_both!_**
And why not ~~cross stuff out~~?

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| --- | --- | ---  | 
| Your content can | be here, and it | can be here... |
| And here. | Okay. | I think we get it. |

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    }
  }
  render() {
    const handleMarkdownChange = (markdown) => {
      this.setState({ markdown })
    }
    return (
      <div className="App container-fluid row">
        <Editor onMarkdownChange={handleMarkdownChange} markdown={this.state.markdown} />
        <Previewer markdown={this.state.markdown} />
      </div>
    );
  }
}

export default App;
