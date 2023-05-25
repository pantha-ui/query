import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

import { MdPerson } from "react-icons/md";

export const SolidWithoutIcons = {
  args: {
    colorCode: { primary: "red.300", secondary: "maroon" },
    variant: "solid",
    children: "Go to dashboard",
  },
};

export const SolidWithLeftIcon = {
  args: {
    colorCode: { primary: "white", secondary: "maroon" },
    variant: "solid",
    children: "Go to dashboard",
    leftIcon: <MdPerson />,
  },
};

export const SolidWithRightIcon = {
  args: {
    colorCode: { primary: "white", secondary: "maroon" },
    variant: "solid",
    children: "Go to dashboard",
    rightKey: 20,
  },
};

export const SolidWithRightAndLeftIcons = {
  args: {
    colorCode: { primary: "white", secondary: "maroon" },
    variant: "solid",
    children: "Go to dashboard",
    rightKey: 20,
    leftIcon: <MdPerson />,
  },
};

export const OulinedWithoutIcons = {
  args: {
    colorCode: { primary: "white", secondary: "maroon" },
    variant: "outlined",
    children: "Go to dashboard",
    // leftIcon: <MdPerson />,
  },
};

export const OulinedWithLeftIcon = {
  args: {
    colorCode: { primary: "white", secondary: "maroon" },
    variant: "outlined",
    children: "Go to dashboard",
    leftIcon: <MdPerson />,
  },
};

export const OulinedWithRightIcon = {
  args: {
    colorCode: { primary: "white", secondary: "maroon" },
    variant: "outlined",
    children: "Go to dashboard",
    rightKey: 20,
  },
};

export const OulinedWithRightAndLeftIcons = {
  args: {
    colorCode: { primary: "white", secondary: "maroon" },
    variant: "outlined",
    children: "Go to dashboard",
    leftIcon: <MdPerson />,
    rightKey: 20,
  },
};
