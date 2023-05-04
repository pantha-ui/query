import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  colorScheme?: "green" | "yellow" | "black" | "red";
  variant?: "primary" | "secondary";
  colorCode: {
    primary: string;
    secondary: string;
  };
}

const Button: React.FC<ButtonProps> = ({ colorScheme, variant, ...props }) => {
  const { children, colorCode, style } = props;

  // const _style: React.CSSProperties = style || {
  //   width: "100%",
  //   height: "2.5rem",
  //   fontSize: "0.9rem",
  //   backgroundColor:
  //     variant === "primary" ? colorCode.secondary : "transparent",
  //   color: colorCode.primary,
  //   borderWidth: 1,
  //   borderColor: colorCode.secondary,
  // };

  // switch (colorScheme) {
  //   case "green":
  //     _style.backgroundColor = "green";
  //     _style.color = "white";
  //     break;

  //   case "yellow":
  //     _style.backgroundColor = "yellow";
  //     _style.color = "black";
  //     break;

  //   default:
  //     break;
  // }

  return <button>{children}</button>;
};

export default Button;
