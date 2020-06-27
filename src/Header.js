import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <span>{`< />`}</span>
      <span>MarkDown Previewer</span>
      <span>{props.count} characters</span>
    </div>
  );
};

export default Header;
