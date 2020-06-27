import React from "react";

const Editor = (props) => {
  return (
    <div className="editor">
      <textarea
        type="text"
        id="editor"
        value={props.input}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Editor;
