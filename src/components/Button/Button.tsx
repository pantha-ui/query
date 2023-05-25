import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { motion } from "framer-motion";
import { colors } from "../../utils/colors";

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
  size: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
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
        color: colors[props.colorCode.primary] || props.colorCode.primary,
        backgroundColor:
          colors[props.colorCode.secondary] || props.colorCode.secondary,
        width: props.size,
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
        color: props.colorCode.secondary,
        backgroundColor: "transparent",
        borderColor: props.colorCode.secondary,
        outline: "none",
        width: props.size,
      };
      break;

    default:
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
      onClick={props.onClick}
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
