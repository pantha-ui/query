import React from "react";
import Toast from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
};

export const ToastExample = {
  render: (args) => (
    <Toast
      color="white"
      bg="green.700"
      info="Operation successful"
      isToastOpen={true}
      duration={5000}
    />
  ),
};