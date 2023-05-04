import React from "react";
import styles from "./Buttons.module.scss";

const Buttons = ({ children, ...props }) => {
  return (
    <div
      className={styles.main}
      style={{
        paddingTop: props?.top ? props.top + "rem" : "initial",
        paddingBottom: props?.bottom ? props.bottom + "rem" : "initial",
        gap: props?.spacing ? props.spacing + "rem" : "initial",
      }}
    >
      {children}
    </div>
  );
};

export default Buttons;
