import { Meta, Story } from "@storybook/react";
import styled from "styled-components";

import { DEFAULT_COLORS } from "@/theme/default-colors";

export default {
  title: "Example/ColorPalette",
} as Meta;

const StyledColorPalettes = styled.div`
  display: flex;
  margin: 20px 0;
  min-width: 800px;
`;

const Box = styled.div<{ colorName: string; colorLevel: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${({ theme, colorName, colorLevel }) =>
    theme.colors[colorName][colorLevel]};
`;

const Template: Story = () => {
  const ColorPalettes: React.ReactNode[] = [];

  Object.keys(DEFAULT_COLORS).map((colorName) => {
    const ColorPalette = DEFAULT_COLORS[
      colorName as keyof typeof DEFAULT_COLORS
    ].map((_, index) => {
      return (
        <Box
          key={`${colorName}-${index}`}
          colorName={colorName}
          colorLevel={index}
        >{`${colorName}-${index}`}</Box>
      );
    });

    ColorPalettes.push(
      <StyledColorPalettes>{ColorPalette}</StyledColorPalettes>
    );
  });

  return <>{ColorPalettes}</>;
};

export const ShowRoom = Template.bind({});

ShowRoom.args = {};
