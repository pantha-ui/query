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
        <Buttons top={1} bottom={20} spacing={1}>
          <Button
            variant="primary"
            colorCode={{ primary: "white", secondary: "maroon" }}
            leftIcon={<MdDashboard />}
            rightKey={20}
          >
            Link 1
          </Button>
          <Button
            variant="primary"
            colorCode={{ primary: "white", secondary: "maroon" }}
            leftIcon={<MdDashboard />}
            rightKey={20}
          >
            Link 2
          </Button>
        </Buttons>
        <Button
          variant="primary"
          colorCode={{ primary: "white", secondary: "maroon" }}
        >
          Log out
        </Button>
      </Navigation>
    </Wrap>
  ),
};
