import React from 'react';

const Editor = (props) => {
  const handleInput = (e) => {
    props.onMarkdownChange(e.target.value)
  }
  return (
    <div className="markdown-editor">
      <h4><i class="fa fa-edit"></i>Editor</h4>
      <textarea 
        id="editor" rows="25" cols="70"
        onInput={handleInput}>
        {props.markdown}
      </textarea>
    </div>
  )
}

export default Editor