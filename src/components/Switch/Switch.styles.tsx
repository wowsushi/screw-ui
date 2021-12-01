import styled from "styled-components";

import { SCREW_COLOR_MAPPING } from "@/theme/default-theme";
import { ToPrivateProperty } from "@/theme/types";

import type { SwitchProps } from "./Switch";

const RATIO_THUMB_SIZE = 0.8;
const RATIO_TRACK_SIZE = 2.1;
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
    position: "absolute",
    width: "inherit",
    height: "inherit",
    appearance: "none",
    cursor: "inherit",

    [`&:checked ~ ${StyledTrack}`]: {
      backgroundColor: theme.colors[SCREW_COLOR_MAPPING[$color]][6],
    },

    [`&:checked ~ ${StyledThumb}`]: {
      left: `calc(100% - ${switchHeight[$size] * RATIO_THUMB_SIZE}px)`,
      transform: `translate(-2px, ${switchHeight[$size] * RATIO_OFFSET}px)`,
      backgroundColor: theme.white,
    },

    [`&:disabled ~ ${StyledTrack}`]: {
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
    width: switchHeight[$size] * RATIO_THUMB_SIZE,
    height: switchHeight[$size] * RATIO_THUMB_SIZE,
    borderRadius: "50%",
    backgroundColor: theme.white,
    transform: `translate(2px, ${switchHeight[$size] * RATIO_OFFSET}px)`,
    transition: ".25s",
    pointerEvents: "none",
  })}
`;

export const StyledTrack = styled.span<
  Required<ToPrivateProperty<Pick<SwitchProps, "color">>>
>`
  ${({ theme }) => ({
    width: "inherit",
    height: "inherit",
    backgroundColor: theme.colors.dark[3],
    borderRadius: theme.radius.xl,
    pointerEvents: "none",
    transition: "0.25s",
  })}
`;

export const StyledRoot = styled.span<
  Required<ToPrivateProperty<Pick<SwitchProps, "size">>>
>`
  ${({ $size }) => ({
    display: "inline-flex",
    position: "relative",
    width: switchHeight[$size] * RATIO_TRACK_SIZE,
    height: switchHeight[$size],
    cursor: "pointer",
  })}
`;
