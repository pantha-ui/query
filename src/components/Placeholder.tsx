import React from "react";

const Placeholder = () => {
  const _style = {
    width: "100%",
    overflowX: "scroll",
  };

  const _children = {
    height: "2rem",
    width: "60rem",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div style={{ ..._style } as React.CSSProperties}>
      <div style={{ ..._children }}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
      </div>
    </div>
  );
};

export default Placeholder;
