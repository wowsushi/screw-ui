import { forwardRef } from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdIndeterminateCheckBox,
} from "react-icons/md";

import useControlled from "@/hooks/use-controlled";
import { SCREW_COLOR_TYPE } from "@/theme/default-theme";

import { StyledController, StyledInput, StyledRoot } from "./Checkbox.styles";
import { getCheckboxUtilityClass } from "./checkboxClasses";
export type CheckboxSizeType = "sm" | "md" | "lg";

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  /**
   * The size of checkbox.
   */
  size?: CheckboxSizeType;
  /**
   * The color of checkbox.
   */
  color?: SCREW_COLOR_TYPE;
  /**
   * Determine the disabled status of checkbox.
   */
  disabled?: boolean;
  /**
   * Determine the checked status of checkbox.
   */
  checked?: boolean;
  /**
   * Determine the indeterminate status of checkbox, overwrites checked.
   */
  indeterminate?: boolean;
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value?: string | number;
}
const useUtilityClasses = (
  ownerState: CheckboxProps
): Record<string, string> => {
  const { checked, disabled, indeterminate } = ownerState;

  const slots: Record<string, Array<string | false>> = {
    root: [
      "root",
      !!checked && "checked",
      !!disabled && "disabled",
      !!indeterminate && "indeterminate",
    ],
    controller: ["controller"],
    input: ["input"],
  };
  const composedClasses: Record<string, string> = {};
  Object.keys(slots).forEach((slot) => {
    composedClasses[slot] = slots[slot]
      .reduce((acc: string[], key: string | false) => {
        if (key) {
          acc.push(getCheckboxUtilityClass(key));
        }
        return acc;
      }, [] as string[])
      .join(" ");
  });

  return composedClasses;
};

/**
 * Checkbox allow user to select multiple options from set.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const {
      disabled,
      size = "md",
      color = "primary",
      className,
      children,
      checked: checkedProp,
      defaultChecked,
      indeterminate,
      ...rest
    } = props;

    const ownerState = {
      ...props,
      disabled,
    };

    const [checked, setCheckedState] = useControlled({
      controlled: checkedProp,
      default: defaultChecked,
    });

    const classes = useUtilityClasses(ownerState);

    const handleInputChange = (): void => {
      setCheckedState(!checked);
    };
    let icon = checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />;
    icon = indeterminate ? <MdIndeterminateCheckBox /> : icon;
    return (
      <StyledRoot
        role="checkbox"
        className={`${classes.root} ${className ? className : ""}`}
        $size={size}
      >
        <StyledController $color={color} $disabled={!!disabled}>
          {icon}
        </StyledController>
        <StyledInput
          ref={ref}
          type="checkbox"
          className={classes.input}
          disabled={disabled}
          checked={!!checked}
          defaultChecked={defaultChecked}
          $size={size}
          $color={color}
          onChange={handleInputChange}
          {...rest}
        />
        {children}
      </StyledRoot>
    );
  }
);
