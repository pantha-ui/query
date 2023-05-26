import React from "react";
import { StoryObj } from "@storybook/react";
import { MdDashboard, MdLogout } from "react-icons/md";
import { BsArrowLeftRight, BsFillPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { Button, Buttons, Navigation, Title, Wrap } from "../index";

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
      <Navigation size="15rem" {...args} title="LOGO" color="bluegray.700">
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
            size="100%"
            variant="solid"
            color="white"
            bg="bluegray.800"
            onHover={{
              bg: "bluegray.700",
              duration: 0.65,
            }}
            leftIcon={<MdDashboard size={20} />}
            rightKey={20}
            isCentered
          >
            Dashboard
          </Button>
          <Button
            size="100%"
            variant="solid"
            color="white"
            bg="bluegray.800"
            onHover={{
              bg: "bluegray.700",
              duration: 0.65,
            }}
            leftIcon={<BsFillPersonFill size={20} />}
            rightKey={20}
            isCentered
          >
            Profile
          </Button>
          <Button
            size="100%"
            variant="solid"
            color="white"
            bg="bluegray.800"
            onHover={{
              bg: "bluegray.700",
              duration: 0.65,
            }}
            leftIcon={<BsArrowLeftRight size={20} />}
            rightKey={20}
            isCentered
          >
            Transactions
          </Button>
        </Buttons>
        <Button
          size="100%"
          variant="solid"
          color="white"
          bg="red.700"
          leftIcon={<MdLogout size={20} />}
        >
          Log out
        </Button>
      </Navigation>
    </Wrap>
  ),
};
