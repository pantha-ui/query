import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Logout from "../Logout";

const WrapTag = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Wrap = ({ children }) => {
  return (
    <WrapTag>
      {/* <Navigation>
        <Title>Heading</Title>
        <Button
          colorCode={{ primary: "white", secondary: "maroon" }}
          variant="primary"
        >
          Link 1
        </Button>
        <Button
          colorCode={{ primary: "white", secondary: "maroon" }}
          variant="primary"
        >
          Link 2
        </Button>
        <Button
          colorCode={{ primary: "white", secondary: "maroon" }}
          variant="primary"
        >
          Link 3
        </Button>
      </Navigation> */}
      <div style={{ width: "calc(100% - 15rem)" }}>{children}</div>
    </WrapTag>
  );
};

export default Wrap;
