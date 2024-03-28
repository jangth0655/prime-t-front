import { Meta, StoryFn } from "@storybook/react";
import Divider from "../Divider";

const meta: Meta<typeof Divider> = {
  title: "Shared/Divider",
  component: Divider,
  tags: ["autodocs"],
};

const Template: StoryFn<typeof Divider> = (args) => <Divider {...args} />;

export const XS = Template.bind({});

XS.args = {
  type: "xs",
};

export const SM = Template.bind({});

SM.args = {
  type: "sm",
};

export const MD = Template.bind({});

MD.args = {
  type: "md",
};

export const LG = Template.bind({});

LG.args = {
  type: "lg",
};

export default meta;
