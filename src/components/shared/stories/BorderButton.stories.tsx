import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BorderButton from "../BorderButton";

const meta: Meta<typeof BorderButton> = {
  title: "Shared/BorderButton",
  component: BorderButton,
  tags: ["autodocs"],
};

const Template: StoryFn<typeof BorderButton> = (args) => (
  <BorderButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Click me",
  isWhiteBg: false,
  onClick: action("clicked"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export default meta;
