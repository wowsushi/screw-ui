import { FC } from "react";
import styled from "styled-components";

import {
  SCREW_COLOR_MAPPING,
  SCREW_COLOR_TYPE,
} from "../../theme/default-theme";
import { createStyle } from "./Button.style";
type ButtonVariantType = "contained" | "outlined" | "text";
type ButtonSizeType = "small" | "medium" | "large";

export interface ButtonProps {
  /**
   * Root element type
   */
  Component?: React.ElementType;
  /**
   * The variant to use.
   */
  variant?: ButtonVariantType;
  /**
   * Disabled button when set to ==true==.
   */
  disabled?: boolean;
  /**
   * Display loading status button when set to ==true==.
   */
  loading?: boolean;
  /**
   * The icon which displaying in front of button.
   */
  prefix?: React.ReactNode;
  /**
   * The icon which displaying the end of button.
   */
  suffix?: React.ReactNode;
  /**
   * The size of button.
   */
  size?: ButtonSizeType;
  /**
   * The color of button.
   */
  color?: SCREW_COLOR_TYPE;
}

const getStyledElement = (elementType) => styled[elementType]`
  ${createStyle}
`;
/**
 * Applied to display title or paragraph contents with no margin.
 */
const Button: FC<ButtonProps> = ({
  children,
  Component,
  // variant = "contained",
  disabled = false,
  loading = false,
  prefix,
  suffix,
  size = "medium",
  color = "primary",
  ...props
}) => {
  const Element = Component || "button";
  // const StyledButton = styled(Element)`
  //   ${createStyle}
  // `;
  const StyledButton = getStyledElement(Component || "button");
  return (
    <StyledButton $color={color} {...props}>
      {children}
    </StyledButton>
  );
};
export default Button;
// export default styled(Button)`
//   ${createStyle}
// `;
