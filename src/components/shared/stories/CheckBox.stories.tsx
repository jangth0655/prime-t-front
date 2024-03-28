import { Meta, StoryFn } from "@storybook/react";
import CheckBox from "../CheckBox";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof CheckBox> = {
  title: "Shared/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
};

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  checked: false,
  onCheck: action("click"),
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

export default meta;
