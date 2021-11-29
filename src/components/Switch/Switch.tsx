import { FC } from "react";

import { SCREW_COLOR_TYPE } from "@/theme/default-theme";

import {
  StyledInput,
  StyledRoot,
  StyledThumb,
  StyledTrack,
} from "./Switch.styles";
export type SwitchVariantType = "contained" | "outlined" | "text";
export type SwitchSizeType = "sm" | "md" | "lg";

export interface SwitchProps {
  /**
   * The size of switch.
   */
  size?: SwitchSizeType;
  /**
   * The color of switch.
   */
  color?: SCREW_COLOR_TYPE;
  /**
   * Determine the disabled status of switch.
   */
  disabled?: boolean;
}

/**
 * Switch allow users to take actions by single tap component.
 */
const Switch: FC<SwitchProps> = ({
  disabled,
  size = "md",
  color = "primary",
  ...props
}) => {
  return (
    <StyledRoot $size={size} role="switch">
      <StyledInput
        type="checkbox"
        disabled={disabled}
        $size={size}
        $color={color}
        {...props}
      />
      <StyledTrack $size={size} $color={color} />
      <StyledThumb $size={size} />
    </StyledRoot>
  );
};
export default Switch;
