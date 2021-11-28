import styled from "styled-components";

import type { TypographyProps } from "./Typography";

export const StyledRootElement = styled.div<{
  $variant: TypographyProps["variant"];
  $lineClamp: TypographyProps["lineClamp"];
}>`
  ${({ theme, $variant }) => theme.typography.sizes[$variant]}
  font-family: ${({ theme }) => theme.typography.fontFamily};
  margin: 0;

  ${({ $lineClamp }) => {
    if (typeof $lineClamp === "number")
      return {
        display: "-webkit-box",
        "-webkitLineClamp": `${$lineClamp}`,
        "-webkitBoxOrient": "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      };
  }}
`;
