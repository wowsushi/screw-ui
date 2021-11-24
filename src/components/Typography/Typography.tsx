import { FC } from "react";
import styled from "styled-components";

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
  const Component = getComponentFromVariant(variant);
  const StyledTypography = styled(Component)`
    ${({ theme }) => theme.typography.sizes[variant]}
    font-family: ${({ theme }) => theme.typography.fontFamily};
    margin: 0;

    ${() => {
      if (typeof lineClamp === "number")
        return {
          display: "-webkit-box",
          "-webkitLineClamp": `${lineClamp}`,
          "-webkitBoxOrient": "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        };
    }}
  `;

  return <StyledTypography {...props}>{children}</StyledTypography>;
};

export default Typography;
