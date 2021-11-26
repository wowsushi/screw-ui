import { css } from "styled-components";

import {
  SCREW_COLOR_MAPPING,
  SCREW_COLOR_TYPE,
} from "../../theme/default-theme";
import type { ButtonProps } from "./Button";

export const createStyle = css<{ $color: SCREW_COLOR_TYPE }>`
  ${({ theme, $color }) => {
    return {
      padding: theme.spacing.xs,
      backgroundColor: `${theme.colors[SCREW_COLOR_MAPPING[$color]][5]}`,
    };
  }}
`;
