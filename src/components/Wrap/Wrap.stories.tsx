import React from "react";
import { StoryObj } from "@storybook/react";
import Wrap from "./Wrap";
import Navigation from "../Navigation";
import Title from "../Title/Title";
import Buttons from "../Button/Buttons";
import Button from "../Button/Button";
import { MdDashboard } from "react-icons/md";

export default {
  title: "Components/Wrap",
  component: Wrap,
};

type Story = StoryObj<typeof Wrap>;

export const Primary: Story = {
  render: (args) => (
    <Wrap {...args}>
      <Navigation>
        <Title
          size="1"
          isCentered
          py={1}
          leftIcon={<MdDashboard />}
          color="white"
        >
          LOGO
        </Title>
        <Buttons>
          <Button colorCode={{ primary: "white", secondary: "maroon" }}>
            Link 1
          </Button>
          <Button colorCode={{ primary: "white", secondary: "maroon" }}>
            Link 1
          </Button>
        </Buttons>
      </Navigation>
    </Wrap>
  ),
};
