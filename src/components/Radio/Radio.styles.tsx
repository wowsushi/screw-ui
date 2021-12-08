import styled from "styled-components";

import { SCREW_COLOR_MAPPING } from "@/theme/default-theme";
import { ToPrivateProperty } from "@/theme/types";

import type { RadioProps } from "./Radio";

const radioSize = {
  sm: 14,
  md: 16,
  lg: 20,
};

export const StyledInput = styled.input<
  Required<ToPrivateProperty<Pick<RadioProps, "color" | "size">>>
>`
  ${({ theme, $color }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0,
    cursor: "pointer",

    ":focus": {
      outline: "none",
      borderColor: "rgb(25, 113, 194) !important",
    },

    [`&:checked ~ ${StyledRadioInner}`]: {
      borderColor: theme.colors[SCREW_COLOR_MAPPING[$color]][6],
    },

    [`&:checked ~ ${StyledRadioInner}::before`]: {
      transform: "scale(0.5)",
    },

    [`&:disabled`]: {
      cursor: "not-allowed",
      color: theme.colors.gray[3],
    },

    [`&:disabled ~ ${StyledRadioInner}`]: {
      borderColor: theme.colors.gray[3],
    },

    [`&:disabled:checked ~ ${StyledRadioInner}:before`]: {
      background: theme.colors.gray[3],
    },
  })}
`;

export const StyledRadioInner = styled.span<
  Required<ToPrivateProperty<Pick<RadioProps, "color">>>
>`
  ${({ theme, $color }) => ({
    width: "1em",
    height: "1em",
    border: `2px solid currentColor`,
    borderRadius: "50%",
    color: theme.colors.gray[6],
    marginRight: "4px",
    position: "relative",

    "&::before": {
      content: '""',
      position: "absolute",
      left: "-2px",
      top: "-2px",
      width: "1em",
      height: "1em",
      background: theme.colors[SCREW_COLOR_MAPPING[$color]][6],
      borderRadius: "50%",
      transform: "scale(0)",
      transition: "transform .15s cubic-bezier(0.0, 0, 0.2, 1)",
    },
  })}
`;
export const StyledRoot = styled.label<
  Required<ToPrivateProperty<Pick<RadioProps, "size" | "color">>>
>`
  ${({ theme, $size, $color }) => ({
    display: "inline-flex",
    position: "relative",
    alignItems: "center",
    cursor: "pointer",
    fontSize: radioSize[$size],

    [`&:hover ${StyledRadioInner} `]: {
      borderColor: theme.colors[SCREW_COLOR_MAPPING[$color]][6],
    },

    [`&.ScrRadio-disabled`]: {
      color: theme.colors.gray[4],
    },

    [`&.ScrRadio-disabled:hover .ScrRadio-inner::before,
      &.ScrRadio-disabled:hover .ScrRadio-inner`]: {
      borderColor: theme.colors.gray[3],
    },
  })}
`;
