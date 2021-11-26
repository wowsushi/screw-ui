import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};
export const ShowRoom = Template.bind({});
ShowRoom.args = {
  children: "測試按鈕",
};
