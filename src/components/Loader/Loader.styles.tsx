import styled, { keyframes } from "styled-components";

import { SCREW_COLOR_MAPPING } from "@/theme/default-theme";
import { ToPrivateProperty } from "@/theme/types";

import { LoaderProps } from "./Loader";

const rotate = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  
  100% {
    stroke-dashoffset: -125px;
  }
`;

const size = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "1.75rem",
  xl: "3rem",
};
export default styled.svg<Required<ToPrivateProperty<LoaderProps>>>`
  width: ${({ $size }) => size[$size]};
  transform-origin: center;
  animation: ${rotate} 2s linear infinite;

  & circle {
    fill: none;
    stroke: ${({ theme, $color }) =>
      `${theme.colors[SCREW_COLOR_MAPPING[$color]][2]}`};
    stroke-width: 4;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;
