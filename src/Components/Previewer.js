import React from 'react';
import marked, { Renderer } from 'marked';

const Previewer = (props) => {
  const renderer = new Renderer();
  return (
    <div className="markdown-previewer">
      <h4><i class="fas fa-book-open"></i>Previewer</h4>
      <div id="preview"
        dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer, sanitize: true, breaks: true })}}>
      </div>
    </div>
  )
}

export default Previewer