import styled from "styled-components";

import { SCREW_COLOR_MAPPING } from "@/theme/default-theme";
import { ToPrivateProperty } from "@/theme/types";

import type { CheckboxProps } from "./Checkbox";
import { checkboxClasses } from "./checkboxClasses";
const checkboxSize = {
  sm: 14,
  md: 16,
  lg: 20,
};

export const StyledInput = styled.input<
  Required<ToPrivateProperty<Pick<CheckboxProps, "color" | "size">>>
>`
  ${({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0,
    cursor: "pointer",

    [`&:disabled`]: {
      cursor: "not-allowed",
      color: theme.colors.gray[3],
    },
  })}
`;
export const StyledController = styled.span<
  Required<ToPrivateProperty<Pick<CheckboxProps, "color" | "disabled">>>
>`
  ${({ theme, $color, $disabled }) => ({
    lineHeight: 0,
    marginRight: 4,
    color: $disabled
      ? theme.colors.gray[3]
      : theme.colors[SCREW_COLOR_MAPPING[$color]][6],
  })}
`;

export const StyledRoot = styled.label<
  Required<ToPrivateProperty<Pick<CheckboxProps, "size">>>
>`
  ${({ theme, $size }) => ({
    display: "inline-flex",
    position: "relative",
    alignItems: "center",
    cursor: "pointer",
    fontSize: checkboxSize[$size],

    [`&.${checkboxClasses.disabled}`]: {
      color: theme.colors.gray[4],
    },
  })}
`;
