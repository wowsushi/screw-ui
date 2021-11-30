import { generateUtilityClass, generateUtilityClasses } from "@/theme/utils";

export interface SwitchClasses {
  root: string;
  input: string;
  track: string;
  thumb: string;
  checked: string;
  disabled: string;
}

export type SwitchClassKey = keyof SwitchClasses;

export function getSwitchUtilityClass(slot: string): string {
  return generateUtilityClass("ScrSwitch", slot);
}

const switchClasses: SwitchClasses = generateUtilityClasses("ScrSwitch", [
  "root",
  "input",
  "track",
  "thumb",
  "checked",
  "disabled",
]);

export default switchClasses;
