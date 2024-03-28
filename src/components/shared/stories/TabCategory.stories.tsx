import { Meta, StoryFn } from "@storybook/react";
import TabCategory, { CategoryType } from "../TabCategory";

const categoryList: CategoryType[] = [
  { name: "Category 1", key: "cat1" },
  { name: "Category 2", key: "cat2" },
  { name: "Category 3", key: "cat3" },
];

const meta: Meta<typeof TabCategory> = {
  title: "Shared/TabCategory",
  component: TabCategory,
  args: {
    categoryList: categoryList,
    activeStatusColor: "#FF0000",
    statusColor: "#000000",
  },
  tags: ["autodocs"],
};

const Template: StoryFn<typeof TabCategory> = (args) => {
  return <TabCategory {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  categoryList: categoryList,
  categoryKey: "cat1",
  activeStatusColor: "#FF0000",
  statusColor: "#000000",
};

export default meta;
