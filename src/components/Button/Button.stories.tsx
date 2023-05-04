import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = {
  args: {
    colorCode: { primary: "white", secondary: "maroon" },
    variant: "Green button",
    children: "My first button",
  },
};

export const Secondary = {
  args: {
    colorCode: { primary: "maroon", secondary: "maroon" },
    variant: "Green button",
    children: "My first button",
  },
};
