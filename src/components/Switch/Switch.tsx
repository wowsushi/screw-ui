import { forwardRef } from "react";

import { SCREW_COLOR_TYPE } from "@/theme/default-theme";

import {
  StyledInput,
  StyledRoot,
  StyledThumb,
  StyledTrack,
} from "./Switch.styles";
import { getSwitchUtilityClass } from "./switchClasses";

export type SwitchSizeType = "sm" | "md" | "lg";

export interface SwitchProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
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
const useUtilityClasses = (ownerState: SwitchProps): Record<string, string> => {
  const { checked, disabled } = ownerState;

  const slots: Record<string, Array<string | false>> = {
    root: ["root"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input", !!checked && "checked", !!disabled && "disabled"],
  };
  const composedClasses: Record<string, string> = {};
  Object.keys(slots).forEach((slot) => {
    composedClasses[slot] = slots[slot]
      .reduce((acc: string[], key: string | false) => {
        if (key) {
          acc.push(getSwitchUtilityClass(key));
        }
        return acc;
      }, [] as string[])
      .join(" ");
  });

  return composedClasses;
};

/**
 * Switch allow users to take actions by single tap component.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  props,
  ref
) {
  const {
    disabled,
    size = "md",
    color = "primary",
    className,
    ...rest
  } = props;

  const ownerState = {
    ...props,
    disabled,
  };
  const classes = useUtilityClasses(ownerState);
  return (
    <StyledRoot
      role="switch"
      className={`${classes.root} ${className}`}
      $size={size}
      {...rest}
    >
      <StyledInput
        ref={ref}
        type="checkbox"
        className={classes.input}
        disabled={disabled}
        $size={size}
        $color={color}
        {...rest}
      />
      <StyledTrack className={classes.track} $color={color} />
      <StyledThumb className={classes.thumb} $size={size} />
    </StyledRoot>
  );
});
