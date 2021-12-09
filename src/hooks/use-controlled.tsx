import { useCallback, useState } from "react";

export interface UseControlledProps<T = unknown> {
  /**
   * Holds the component value when it's controlled.
   */
  controlled?: T;
  /**
   * The default value when uncontrolled.
   */
  default?: T;
}

/**
 * @hook useControlled
 * @description Controlling state become controlled or uncontrolled state
 */
function useControlled<T = unknown>(
  props: UseControlledProps<T>
): [T, (newValue: T | ((prevValue: T) => T)) => void] {
  const { controlled, default: defaultProp } = props;
  const isControlled = controlled !== undefined;
  const [valueState, setValue] = useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = useCallback(
    (newValue) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [isControlled]
  );
  return [value as T, setValueIfUncontrolled];
}

export default useControlled;
