import styled from "styled-components";

import { SCREW_COLOR_MAPPING } from "@/theme/default-theme";
import { ToPrivateProperty } from "@/theme/types";

import { SwitchProps } from "./Switch";

const RATIO_THUMB_SIZE = 0.8;
const RATIO_TRACK_SIZE = 2.3;
const RATIO_OFFSET = 0.1;
const switchHeight = {
  sm: 18,
  md: 22,
  lg: 28,
};

export const StyledInput = styled.input<
  Required<ToPrivateProperty<Pick<SwitchProps, "color" | "size">>>
>`
  ${({ theme, $size, $color }) => ({
    height: switchHeight[$size],
    minWidth: switchHeight[$size] * RATIO_TRACK_SIZE,
    appearance: "none",
    cursor: "inherit",
    backgroundColor: theme.colors.dark[3],
    borderRadius: theme.radius.xl,

    "&:checked": {
      backgroundColor: theme.colors[SCREW_COLOR_MAPPING[$color]][6],
    },

    [`&:checked ~ ${StyledThumb}`]: {
      left: `calc(100% - ${switchHeight[$size] * RATIO_THUMB_SIZE}px)`,
      transform: `translate(-2px, ${switchHeight[$size] * RATIO_OFFSET}px)`,
      backgroundColor: theme.white,
    },

    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: theme.colors.gray[3],
    },

    [`&:disabled ~ ${StyledThumb}`]: {
      backgroundColor: theme.colors.gray[5],
    },
  })}
`;

export const StyledThumb = styled.span<
  Required<ToPrivateProperty<Pick<SwitchProps, "size">>>
>`
  ${({ theme, $size }) => ({
    position: "absolute",
    left: 0,
    // let thumb slightly smaller than track
    width: switchHeight[$size] * RATIO_THUMB_SIZE,
    height: switchHeight[$size] * RATIO_THUMB_SIZE,
    transform: `translate(2px, ${switchHeight[$size] * RATIO_OFFSET}px)`,
    borderRadius: "50%",
    backgroundColor: theme.white,
    transition: "left .15s ease-out",
    pointerEvents: "none",
  })}
`;

export const StyledRoot = styled.span`
    cursor: "pointer",
    position: "relative",
`;
