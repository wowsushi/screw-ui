import { FC } from "react";

import { SCREW_COLOR_TYPE, SCREW_SIZES } from "@/theme/default-theme";

import StyledComponent from "./Loader.styles";

export interface LoaderProps {
  /** Defines width of loader */
  size?: SCREW_SIZES;

  /** Loader color from theme */
  color?: SCREW_COLOR_TYPE;
}

/**
 * Applied to display loading status.
 */
const Loader: FC<LoaderProps> = ({
  color = "primary",
  size = "md",
  ...props
}) => {
  return (
    <StyledComponent
      viewBox="25 25 50 50"
      $color={color}
      $size={size}
      {...props}
    >
      <circle cx="50" cy="50" r="20"></circle>
    </StyledComponent>
  );
};
export default Loader;
