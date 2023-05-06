import React from "react";

const Navigation = ({ children, ...props }) => {
  const main = {
    width: props.size,
    height: "100%",
    backgroundColor: props.backgroundColor || "#153953",
  };

  const child = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  return (
    <div style={{ ...main }}>
      <div style={{ ...child } as React.CSSProperties}>{children}</div>
    </div>
  );
};

export default Navigation;
