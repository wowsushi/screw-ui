import React, { forwardRef } from "react";

import { StyledRadioGroup } from "./RadioGroup.styles";

export interface RadioGroupProps
  extends Omit<React.ComponentPropsWithRef<"div">, "onChange"> {
  /**
   * Name of radio group.
   */
  name: string;
  /**
   * Default value of radio group.
   */
  defaultValue?: string | number;
  /**
   * Triggered when user select one radio from a set of radio group.
   */
  onChange?: (value: string | number) => void;
}

/**
 * RadioGroup allow user to select one status from multiple options.
 */
const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(props, ref) {
    const { className, name, children, defaultValue, onChange, ...rest } =
      props;

    const handleRadioClick = (targetValue: string | number): void => {
      typeof onChange === "function" && onChange(targetValue);
    };

    return (
      <StyledRadioGroup
        role="radioGroup"
        className={className}
        ref={ref}
        {...rest}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return;

          return React.cloneElement(child, {
            onChange: () => handleRadioClick(child.props.value),
            defaultChecked: defaultValue
              ? child.props.value === defaultValue
              : undefined,
            name,
          });
        })}
      </StyledRadioGroup>
    );
  }
);

export default RadioGroup;
