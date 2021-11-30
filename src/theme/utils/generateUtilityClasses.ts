import { generateUtilityClass } from "./generateUtilityClass";

export const generateUtilityClasses = <T extends string>(
  prefix: string,
  slots: T[]
): Record<T, string> => {
  const result: Record<string, string> = {};

  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(prefix, slot);
  });

  return result;
};
