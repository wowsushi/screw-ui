import { ComponentMeta, ComponentStory } from "@storybook/react";

import Portal from "./Portal";

export default {
  title: "Utils/Portal",
  component: Portal,
} as ComponentMeta<typeof Portal>;

const Template: ComponentStory<typeof Portal> = (args) => {
  return <Portal {...args}>測試</Portal>;
};

export const Primary = Template.bind({});

Primary.args = {};
