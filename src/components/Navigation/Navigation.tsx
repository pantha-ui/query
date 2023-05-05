import React from "react";
import styles from "./Navigation.module.scss";

const Navigation = ({ children, ...props }) => {
  return (
    <div className={styles.main} style={{ backgroundColor: props.color }}>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Navigation;
