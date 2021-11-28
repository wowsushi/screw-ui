import { FC } from "react";

import { StyledRootElement } from "./Typography.styles";

export type TypographyVariantType =
  | `h${1 | 2 | 3 | 4 | 5 | 6}`
  | `button${1 | 2}`
  | `body${1 | 2}`;

export type TypographyComponent = `h${1 | 2 | 3 | 4 | 5 | 6}` | "p" | "span";

function getComponentFromVariant(
  variant: TypographyVariantType
): TypographyComponent {
  if (variant.startsWith("h")) {
    return variant as TypographyComponent;
  }
  if (variant.startsWith("body")) {
    return "p";
  }
  return "span";
}

export interface TypographyProps {
  /**
   * Applies the theme typography styles.
   */
  variant: TypographyVariantType;
  /**
   * 	Display ellipsis when text overflows. Will be set to CSS property -webkit-line-clamp.
   */
  lineClamp?: number;
}

/**
 * Applied to display title or paragraph contents with no margin.
 */
const Typography: FC<TypographyProps> = ({
  children,
  variant = "body2",
  lineClamp,
  ...props
}) => {
  return (
    <StyledRootElement
      as={getComponentFromVariant(variant)}
      $lineClamp={lineClamp}
      $variant={variant}
      {...props}
    >
      {children}
    </StyledRootElement>
  );
};

export default Typography;
