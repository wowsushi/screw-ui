import React, { FC } from "react";

import { SCREW_COLOR_TYPE } from "@/theme/default-theme";

import { Loader } from "../Loader";
import { Typography } from "../Typography";
import StyledComponent, { StyledPrefix, StyledSuffix } from "./Button.styles";
export type ButtonVariantType = "contained" | "outlined" | "text";
export type ButtonSizeType = "sm" | "md" | "lg";

export interface ButtonProps {
  /**
   * Root element type
   */
  component?: React.ElementType;
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

/**
 * Button allow users to take actions by single tap component.
 */
const Button: FC<ButtonProps> = ({
  children,
  component,
  variant = "contained",
  disabled = false,
  loading = false,
  prefix,
  suffix,
  size = "md",
  color = "primary",
  ...props
}) => {
  let loaderPosition = "left";
  if (suffix && !prefix) loaderPosition = "right";
  return (
    <StyledComponent
      as={component || "button"}
      disabled={disabled || loading}
      $loading={loading}
      $size={size}
      $variant={variant}
      $color={color}
      {...props}
    >
      {(prefix || (loading && loaderPosition === "left")) && (
        <StyledPrefix>
          {loading && loaderPosition === "left" ? (
            <Loader color="dark" size={size} />
          ) : (
            prefix
          )}
        </StyledPrefix>
      )}

      <Typography variant="button2">{children}</Typography>

      {(suffix || (loading && loaderPosition === "right")) && (
        <StyledSuffix>
          {loading && loaderPosition === "right" ? (
            <Loader color="dark" size={size} />
          ) : (
            suffix
          )}
        </StyledSuffix>
      )}
    </StyledComponent>
  );
};
export { Button };
