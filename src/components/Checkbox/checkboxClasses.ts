import { generateUtilityClass, generateUtilityClasses } from "@/theme/utils";

export interface CheckboxClasses {
  root: string;
  input: string;
  controller: string;
  checked: string;
  disabled: string;
}

export type CheckboxClassKey = keyof CheckboxClasses;

export function getCheckboxUtilityClass(slot: string): string {
  return generateUtilityClass("ScrCheckbox", slot);
}

export const checkboxClasses: CheckboxClasses = generateUtilityClasses(
  "ScrCheckbox",
  ["root", "input", "controller", "checked", "disabled"]
);

export default checkboxClasses;
