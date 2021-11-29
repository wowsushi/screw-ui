import { ComponentMeta, ComponentStory } from "@storybook/react";

import Switch from "./Switch";

export default {
  title: "Inputs/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  return <Switch {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {};
