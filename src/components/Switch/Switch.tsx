import React, { FC } from "react";

import { SCREW_COLOR_TYPE } from "@/theme/default-theme";

import { StyledInput, StyledRoot, StyledThumb } from "./Switch.styles";
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
  /**
   * Displaying content when the switch is checked.
   */
  checkedChildren?: React.ReactNode;
  /**
   * Displaying content when the switch is unChecked.
   */
  unCheckedChildren?: React.ReactNode;
}

/**
 * Switch allow users to take actions by single tap component.
 */
const Switch: FC<SwitchProps> = ({
  disabled,
  // checkedChildren,
  // unCheckedChildren,
  size = "md",
  color = "primary",
  ...props
}) => {
  return (
    <StyledRoot role="switch">
      <StyledInput
        type="checkbox"
        disabled={disabled}
        $size={size}
        $color={color}
        {...props}
      />
      <StyledThumb $size={size} />
    </StyledRoot>
  );
};
export default Switch;
