import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FC } from "react";

import { SCREW_COLOR_TYPE } from "@/theme/default-theme";

import { RadioGroup } from "../RadioGroup";
import { Radio, RadioSizeType } from "./Radio";

export default {
  title: "Inputs/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  return (
    <RadioGroup name="sample">
      <Radio value="1" {...args}>
        Radio Sample
      </Radio>
    </RadioGroup>
  );
};

export const Playground = Template.bind({});
Playground.args = {};

export const Size: FC = () => {
  const sizes = (["sm", "md", "lg"] as RadioSizeType[]).map((size) => (
    <Radio key={size} size={size}>
      Radio size {size}
    </Radio>
  ));

  return <RadioGroup name="size">{sizes}</RadioGroup>;
};

export const Color: FC = () => {
  const variants = (
    [
      "primary",
      "secondary",
      "warning",
      "success",
      "gray",
      "dark",
    ] as SCREW_COLOR_TYPE[]
  ).map((variant) => (
    <Radio color={variant} key={variant}>
      Radio {variant}
    </Radio>
  ));
  return <RadioGroup name="colors">{variants}</RadioGroup>;
};

export const Disabled: FC = () => {
  return (
    <RadioGroup name="disabled">
      <Radio disabled>Radio Disabled</Radio>
    </RadioGroup>
  );
};
