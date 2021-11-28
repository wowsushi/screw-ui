import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FC } from "react";
import {
  BsFillBellFill,
  BsFillBookmarkPlusFill,
  BsFillCaretRightSquareFill,
} from "react-icons/bs";
import styled from "styled-components";

import { SCREW_COLOR_TYPE } from "@/theme/default-theme";

import Button, { ButtonSizeType } from "./Button";

export default {
  title: "Inputs/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Group = styled.div`
  > * {
    margin-left: 1rem;
    vertical-align: middle;
  }
`;

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
  <Button color={variant} key={variant}>
    Button {variant}
  </Button>
));

const sizes = (["sm", "md", "lg"] as ButtonSizeType[]).map((size) => (
  <Button color="primary" key={size} size={size}>
    Button {size}
  </Button>
));

const disables = (["sm", "md", "lg"] as ButtonSizeType[]).map((size) => (
  <Button color="primary" key={size} size={size} disabled>
    Button disabled {size}
  </Button>
));

const loadings = (["sm", "md", "lg"] as ButtonSizeType[]).map((size) => (
  <Button color="primary" key={size} size={size} loading>
    Button loading {size}
  </Button>
));

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  children: "測試按鈕",
};
Playground.argTypes = {
  component: {
    type: {
      name: "string",
    },
  },
  prefix: {
    options: ["icon1", "icon2", "icon3"],
    mapping: {
      icon1: <BsFillCaretRightSquareFill />,
      icon2: <BsFillBookmarkPlusFill />,
      icon3: <BsFillBellFill />,
    },
  },
  suffix: {
    options: ["icon1", "icon2", "icon3"],
    mapping: {
      icon1: <BsFillCaretRightSquareFill />,
      icon2: <BsFillBookmarkPlusFill />,
      icon3: <BsFillBellFill />,
    },
  },
};

export const Variants: FC = () => {
  return <Group>{variants}</Group>;
};

export const Sizes: FC = () => {
  return <Group>{sizes}</Group>;
};

export const Disabled: FC = () => {
  return <Group>{disables}</Group>;
};

export const Loading: FC = () => {
  return <Group>{loadings}</Group>;
};

export const WithIcons: FC = () => {
  return (
    <Group>
      <Button prefix={<BsFillCaretRightSquareFill />}>With prefix icon</Button>
      <Button suffix={<BsFillCaretRightSquareFill />}>With suffix icon</Button>
    </Group>
  );
};
