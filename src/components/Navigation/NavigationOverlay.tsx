import React from "react";

const NavigationOverlay = () => {
  const _style = {
    position: "absolute",
    width: "50vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    zIndex: 5,
  };

  return <div style={{ ..._style } as React.CSSProperties} />;
};

export default NavigationOverlay;
