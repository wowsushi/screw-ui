import styled from "styled-components";

import { SCREW_COLOR_MAPPING } from "@/theme/default-theme";
import { ToPrivateProperty } from "@/theme/types";

import { SwitchProps } from "./Switch";

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
    borderRadius: theme.radius.xl,
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
    transition: "left .15s cubic-bezier(0.4, 0, 0.2, 1)",
    pointerEvents: "none",
  })}
`;

export const StyledTrack = styled.span<
  Required<ToPrivateProperty<Pick<SwitchProps, "color" | "size">>>
>`
  ${({ theme }) => ({
    width: "inherit",
    height: "inherit",
    backgroundColor: theme.colors.dark[3],
    pointerEvents: "none",
  })}// &::before {
  //   content: "";
  //   background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23fff" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>');
  //   position: absolute;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   width: 20px;
  //   height: 20px;
  //   left: 3px;
  // }
  // &::after {
  //   content: "";
  //   background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23fff" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>');
  //   position: absolute;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   width: 20px;
  //   height: 20px;
  //   right: 3px;
  // }
`;

export const StyledRoot = styled.span<
  Required<ToPrivateProperty<Pick<SwitchProps, "size">>>
>`
  ${({ theme, $size }) => ({
    display: "inline-flex",
    position: "relative",
    width: switchHeight[$size] * RATIO_TRACK_SIZE,
    height: switchHeight[$size],
    borderRadius: theme.radius.xl,
    overflow: "hidden",
    cursor: "pointer",
  })}
`;
