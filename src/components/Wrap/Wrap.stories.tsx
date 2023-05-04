import React from "react";
import { StoryObj } from "@storybook/react";
import Wrap from "./Wrap";
import Navigation from "../Navigation/Navigation";
import Title from "../Title/Title";
import Buttons from "../Button/Buttons";
import Button from "../Button/Button";
import { MdDashboard, MdLogout } from "react-icons/md";
import { BsArrowLeftRight, BsFillPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default {
  title: "Components/Wrap",
  component: Wrap,
  argTypes: {
    color: { control: "color" },
  },
};

type Story = StoryObj<typeof Wrap>;

export const Primary: Story = {
  render: (args) => (
    <Wrap {...args}>
      <Navigation>
        <Title
          size="1.5"
          isCentered
          py={1}
          leftIcon={<FcGoogle />}
          color="white"
        >
          LOGO
        </Title>
        <Buttons top={1} bottom={20} spacing={1}>
          <Button
            variant="primary"
            colorCode={{ primary: "white", secondary: "#0a1924" }}
            leftIcon={<MdDashboard size={20} />}
            rightKey={20}
            isCentered
          >
            Dashboard
          </Button>
          <Button
            variant="primary"
            colorCode={{ primary: "white", secondary: "#0a1924" }}
            leftIcon={<BsFillPersonFill size={20} />}
            rightKey={20}
            isCentered
          >
            Profile
          </Button>
          <Button
            variant="primary"
            colorCode={{ primary: "white", secondary: "#0a1924" }}
            leftIcon={<BsArrowLeftRight size={20} />}
            rightKey={20}
            isCentered
          >
            Transactions
          </Button>
        </Buttons>
        <Button
          variant="primary"
          colorCode={{ primary: "white", secondary: "red" }}
          leftIcon={<MdLogout size={20} />}
        >
          Log out
        </Button>
      </Navigation>
    </Wrap>
  ),
};
