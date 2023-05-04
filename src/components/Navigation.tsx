import React from "react";
import styled from "styled-components";

const NavigationTag = styled.div`
  width: 15rem;
  height: 100%;
  background-color: pink;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Navigation = ({ children }) => {
  return (
    <NavigationTag>
      <Flex>{children}</Flex>
    </NavigationTag>
  );
};

export default Navigation;
