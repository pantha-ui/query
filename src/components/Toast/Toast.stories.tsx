import React from "react";
import Toast from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
};

export const ToastExample = {
  args: {
    color: "white",
    bg: "blue.700",
    variant: "outlined",
    children: "Go to dashboard",
  },
};
