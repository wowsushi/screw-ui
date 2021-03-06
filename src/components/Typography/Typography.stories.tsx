import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FC } from "react";
import styled from "styled-components";

import {
  Typography,
  TypographyProps,
  TypographyVariantType,
} from "./Typography";

const LONG_STRING =
  "body1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, asperiores fuga porro officiis mollitia qui, consectetur sed provident suscipit voluptate quae similique minima itaque officia non impedit perferendis quis consequatur?";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  title: "Data display/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const ShowRoom: FC<TypographyProps> = () => {
  const variant: TypographyVariantType[] = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "button1",
    "button2",
  ];

  const content = variant.map((typographyType) => (
    <Typography key={typographyType} variant={typographyType}>
      {typographyType} sample text
    </Typography>
  ));
  content.push(
    <Typography key="body1" variant="body1">
      {LONG_STRING}
    </Typography>
  );
  content.push(
    <Typography key="body2" variant="body2">
      {LONG_STRING}
    </Typography>
  );
  return <Wrapper>{content}</Wrapper>;
};

export const Ellipsis: ComponentStory<typeof Typography> = (args) => {
  return (
    <Typography {...args}>
      {LONG_STRING}
      {LONG_STRING}
      {LONG_STRING}
    </Typography>
  );
};

Ellipsis.args = {
  variant: "body2",
  lineClamp: 3,
};
