import React from "react";
import styles from "./Title.module.scss";

const Title = ({ children, ...props }) => {
  return (
    <div
      className={styles.main}
      style={{
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
