import React from "react";
import Title from "../Title/Title";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ ...props }) => {
  const { toggleNav } = props;

  const main = {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: props?.color || "#153953",
  };

  return (
    <div style={{ ...main }}>
      <Title leftIcon={props.titleIcon} color="white">
        {props.title || "LOGO"}
      </Title>
      <AiOutlineMenu color="white" onClick={() => toggleNav()} />
    </div>
  );
};

export default Header;
