import React from "react";

const Wrap = ({ children }) => {
  const main = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
  };

  return <div style={{ ...main } as React.CSSProperties}>{children}</div>;
};

export default Wrap;
