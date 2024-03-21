import { Meta, StoryFn } from "@storybook/react";
import SolidButton from "../SolidButton";

const meta: Meta<typeof SolidButton> = {
  title: "Shared/SolidButton",
  component: SolidButton,
  tags: ["autodocs"],
};

const Template: StoryFn<typeof SolidButton> = (args) => (
  <SolidButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...Default.args,
  text: "SolidButton",
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  ...Default.args,
  text: "SolidButton",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  text: "SolidButton",
};

export const SlateColor = Template.bind({});
SlateColor.args = {
  ...Default.args,
  isColorSlate: true,
  isPrimaryColor: true,
};

export default meta;
