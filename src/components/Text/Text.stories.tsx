import { ComponentMeta, ComponentStory } from "@storybook/react";

import Text from "./Text";

export default {
  title: "Example/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  return <Text {...args}>測試</Text>;
};

export const Primary = Template.bind({});

Primary.args = {};
