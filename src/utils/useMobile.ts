import React from "react";

const useMobile = (num: number) => {
  const [currentWidth, setCurrentWidth] = React.useState<number>(window.innerWidth);

  window.addEventListener("resize", () => {
    setCurrentWidth(window.innerWidth);
  });

  return currentWidth <= num ? [true] : [false];
};

export default useMobile;
