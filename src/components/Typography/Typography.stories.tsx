import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";

import Typography, { TypographyVariantType } from "./Typography";

const LONG_STRING =
  "body1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, asperiores fuga porro officiis mollitia qui, consectetur sed provident suscipit voluptate quae similique minima itaque officia non impedit perferendis quis consequatur?";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  title: "Example/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => {
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
    <Typography key={typographyType} variant={typographyType} {...args}>
      {typographyType} sample text
    </Typography>
  ));
  content.push(
    <Typography variant="body1" {...args}>
      {LONG_STRING}
    </Typography>
  );
  content.push(
    <Typography variant="body2" {...args}>
      {LONG_STRING}
    </Typography>
  );
  return <Wrapper>{content}</Wrapper>;
};

export const ShowRoom = Template.bind({});
ShowRoom.args = {};

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
