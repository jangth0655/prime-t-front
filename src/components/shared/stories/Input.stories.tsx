import { Meta, StoryFn } from "@storybook/react";
import Input from "../Input";

const meta: Meta<typeof Input> = {
  title: "Shared/Input",
  component: Input,
  tags: ["autodocs"],
};

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

const mockRegister = {
  onChange: async () => {},
  onBlur: async () => {},
  name: "example",
  ref: () => {},
};

export const Default = Template.bind({});
Default.args = {
  ...Default.args,
  register: mockRegister,
};

export const TextRight = Template.bind({});
TextRight.args = {
  isTextRight: true,
  inputPaddingRight: "4rem",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export default meta;
