import { forwardRef } from "react";

import { SCREW_COLOR_TYPE } from "@/theme/default-theme";

import { StyledInput, StyledRadioInner, StyledRoot } from "./Radio.styles";
import { getRadioUtilityClass } from "./radioClasses";

export type RadioSizeType = "sm" | "md" | "lg";

export interface RadioProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  /**
   * The size of radio.
   */
  size?: RadioSizeType;
  /**
   * The color of radio.
   */
  color?: SCREW_COLOR_TYPE;
  /**
   * Determine the disabled status of radio.
   */
  disabled?: boolean;
  /**
   * Determine the checked status of radio.
   */
  checked?: boolean;
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value?: string | number;
}
const useUtilityClasses = (ownerState: RadioProps): Record<string, string> => {
  const { checked, disabled } = ownerState;

  const slots: Record<string, Array<string | false>> = {
    root: ["root", !!checked && "checked", !!disabled && "disabled"],
    inner: ["inner"],
    input: ["input"],
  };
  const composedClasses: Record<string, string> = {};
  Object.keys(slots).forEach((slot) => {
    composedClasses[slot] = slots[slot]
      .reduce((acc: string[], key: string | false) => {
        if (key) {
          acc.push(getRadioUtilityClass(key));
        }
        return acc;
      }, [] as string[])
      .join(" ");
  });

  return composedClasses;
};

/**
 * Radio allow user to select one status from multiple options.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  props,
  ref
) {
  const {
    disabled,
    size = "md",
    color = "primary",
    className,
    children,
    name,
    ...rest
  } = props;

  const ownerState = {
    ...props,
    disabled,
  };

  const classes = useUtilityClasses(ownerState);
  return (
    <StyledRoot
      role="radio"
      className={`${classes.root} ${className ? className : ""}`}
      $size={size}
      $color={color}
    >
      <StyledInput
        ref={ref}
        type="radio"
        name={name}
        className={classes.input}
        disabled={disabled}
        $size={size}
        $color={color}
        {...rest}
      />
      <StyledRadioInner
        className={classes.inner}
        $color={color}
      ></StyledRadioInner>
      {children}
    </StyledRoot>
  );
});
