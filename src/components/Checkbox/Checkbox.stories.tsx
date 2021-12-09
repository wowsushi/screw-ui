import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FC, useState } from "react";
import styled from "styled-components";

import { SCREW_COLOR_TYPE } from "@/theme/default-theme";

import Checkbox, { CheckboxSizeType } from "./Checkbox";

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const StyledRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const StyledListChildren = styled.div`
  margin: 8px 16px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <Checkbox value="1" {...args}>
      Checkbox Sample
    </Checkbox>
  );
};

export const Playground = Template.bind({});
Playground.args = {};

export const Size: FC = () => {
  const sizes = (["sm", "md", "lg"] as CheckboxSizeType[]).map((size) => (
    <Checkbox key={size} size={size}>
      Checkbox size {size}
    </Checkbox>
  ));

  return <StyledRow>{sizes}</StyledRow>;
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
    <Checkbox color={variant} key={variant}>
      Checkbox {variant}
    </Checkbox>
  ));
  return <StyledRow>{variants}</StyledRow>;
};

export const Disabled: FC = () => {
  return (
    <StyledRow>
      <Checkbox disabled>Checkbox Disabled</Checkbox>
    </StyledRow>
  );
};

export const Indeterminate: FC = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const items = ["1", "2"].map((v) => (
    <Checkbox
      key={v}
      value={v}
      checked={checkedList.includes(v)}
      onChange={(e) =>
        setCheckedList(
          checkedList.includes(v)
            ? checkedList.filter((item) => item !== e.target.value)
            : [...checkedList, e.target.value]
        )
      }
    >
      Option {v}
    </Checkbox>
  ));
  return (
    <div>
      <StyledRow>
        <Checkbox
          indeterminate={
            checkedList.length !== 0 && checkedList.length !== items.length
          }
          checked={checkedList.length === items.length}
          onChange={() =>
            setCheckedList(checkedList.length === 0 ? ["1", "2"] : [])
          }
        ></Checkbox>
      </StyledRow>
      <StyledListChildren>{items}</StyledListChildren>
    </div>
  );
};
