import React from "react";

const Title = ({ children, ...props }) => {
  const main = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
  };

  return (
    <div
      style={{
        ...main,
        fontSize: props?.size ? props.size + "rem" : "initial",
        textAlign: props?.isCentered ? "center" : "initial",
        paddingTop: props?.py ? props.py + "rem" : "initial",
        paddingBottom: props?.py ? props.py + "rem" : "initial",
        paddingLeft: props?.px ? props.px + "rem" : "initial",
        paddingRight: props?.px ? props.px + "rem" : "initial",
        color: props?.color ? props.color : "inherit",
      }}
    >
      {props.leftIcon ? props.leftIcon : null}
      {children}
    </div>
  );
};

export default Title;
