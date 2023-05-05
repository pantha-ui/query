import React from "react";
import styles from "./Button.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

import { motion } from "framer-motion";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "solid" | "outlined";
  colorCode: {
    primary: string;
    secondary: string;
  };
  leftIcon?: JSX.Element;
  rightKey?: number;
  isCentered?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
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

  let variant;

  switch (props.variant) {
    case "solid":
      variant = {
        padding: "0.85rem 0.5rem",
        borderWidth: 0,
        borderRadius: "0.25rem",
        transition: "0.25s",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        color: props.colorCode.primary,
        backgroundColor: props.colorCode.secondary,
      };
      break;

    case "outlined":
      variant = {
        padding: "0.85rem 0.5rem",
        borderWidth: 1.5,
        borderRadius: "0.25rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        color: props.colorCode.primary,
        backgroundColor: "transparent",
        borderColor: props.colorCode.secondary,
        outline: "none",
      };
      break;

    default:
      variant = styles.primary;
      break;
  }

  return (
    <motion.button
      style={{
        ...variant,
      }}
      whileHover={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
    >
      {props?.leftIcon ? props.leftIcon : null}
      {children}
      {props.rightKey ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <MdKeyboardArrowRight size={props.rightKey} />
        </div>
      ) : null}
    </motion.button>
  );
};

export default Button;
