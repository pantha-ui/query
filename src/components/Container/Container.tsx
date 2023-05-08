import React from "react";
import useMobile from "../../utils/useMobile";

const Container = ({ children }) => {
  const [isMobile] = useMobile(768);

  const _style = {
    width: isMobile ? "100%" : "calc(100% - 15rem)",
  };

  return <div style={{ ..._style }}>{children}</div>;
};

export default Container;
