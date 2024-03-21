import { Meta, StoryFn } from "@storybook/react";
import BottomToggleInfo from "../BottomToggleInfo";

const meta: Meta<typeof BottomToggleInfo> = {
  title: "Shared/BottomToggleInfo",
  component: BottomToggleInfo,
  tags: ["autodocs"],
};

const Template: StoryFn<typeof BottomToggleInfo> = (args) => (
  <BottomToggleInfo {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "제목입니다",
  children: <div>여기는 내용이 들어갑니다.</div>,
  isPorkHub: false,
  styles: "additional-styles",
  contentHeight: 500,
  isDefaultOpen: false,
};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
  ...Default.args,
  isDefaultOpen: true,
};

export default meta;
