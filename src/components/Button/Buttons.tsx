import React from "react";

const Buttons = ({ children, ...props }) => {
  const main = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div
      style={
        {
          ...main,
          paddingTop: props?.top ? props.top + "rem" : "initial",
          paddingBottom: props?.bottom ? props.bottom + "rem" : "initial",
          gap: props?.spacing ? props.spacing + "rem" : "initial",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Buttons;
