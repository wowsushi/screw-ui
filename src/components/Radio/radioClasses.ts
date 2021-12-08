import { generateUtilityClass, generateUtilityClasses } from "@/theme/utils";

export interface RadioClasses {
  root: string;
  input: string;
  inner: string;
  checked: string;
  disabled: string;
}

export type RadioClassKey = keyof RadioClasses;

export function getRadioUtilityClass(slot: string): string {
  return generateUtilityClass("ScrRadio", slot);
}

const radioClasses: RadioClasses = generateUtilityClasses("ScrRadio", [
  "root",
  "input",
  "inner",
  "checked",
  "disabled",
]);

export default radioClasses;
