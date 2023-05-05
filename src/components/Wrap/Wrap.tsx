import React from "react";

const Wrap = ({ children }) => {
  const main = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
  };

  const _children = {
    width: "calc(100% - 15rem)",
  };

  return (
    <div style={{ ...main } as React.CSSProperties}>
      <div style={{ ..._children } as React.CSSProperties}>{children}</div>
    </div>
  );
};

export default Wrap;
