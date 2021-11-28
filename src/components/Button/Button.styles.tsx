import styled, { CSSProperties } from "styled-components";

import { SCREW_COLOR_MAPPING } from "@/theme/default-theme";
import { ScrewTheme, ToPrivateProperty } from "@/theme/types";

import { ButtonProps, ButtonSizeType } from "./Button";
interface GetVariantStyles {
  $variant: NonNullable<ButtonProps["variant"]>;
  $color: NonNullable<ButtonProps["color"]>;
  theme: ScrewTheme;
}

const getVariantStyle = ({
  theme,
  $color,
  $variant,
}: GetVariantStyles): Record<string, CSSProperties> => {
  if ($variant === "outlined") {
    return {
      root: {
        backgroundColor: "transparent",
        color: `${theme.colors[SCREW_COLOR_MAPPING[$color]][8]}`,
        border: "1px solid currentcolor",
      },
      "root:hover": {
        color: `${theme.colors[SCREW_COLOR_MAPPING[$color]][7]}`,
      },
      "root:disabled": {
        color: theme.colors.gray[6],
      },
    };
  }

  if ($variant === "text") {
    return {
      root: {
        backgroundColor: "transparent",
        color: `${theme.colors[SCREW_COLOR_MAPPING[$color]][8]}`,
        border: "1px solid transparent",
      },
      "root:hover": {
        color: `${theme.colors[SCREW_COLOR_MAPPING[$color]][7]}`,
      },
      "root:disabled": {
        color: theme.colors.gray[6],
      },
    };
  }
  return {
    root: {
      backgroundColor: `${theme.colors[SCREW_COLOR_MAPPING[$color]][8]}`,
      color: theme.white,
      border: "1px solid transparent",
    },
    "root:hover": {
      backgroundColor: `${theme.colors[SCREW_COLOR_MAPPING[$color]][7]}`,
    },
    "root:disabled": {
      backgroundColor: theme.colors.gray[3],
      color: theme.colors.gray[6],
    },
  };
};

const getSizeStyle = ({
  theme,
  $size,
}: {
  theme: ScrewTheme;
  $size: ButtonSizeType;
}): CSSProperties => {
  if ($size === "sm") {
    return {
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    };
  }

  if ($size === "lg") {
    return {
      padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
    };
  }
  return {
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
  };
};

export const StyledPrefix = styled.span`
  margin-right: 10px;
  line-height: 0;
`;

export const StyledSuffix = styled.span`
  margin-left: 10px;
  line-height: 0;
`;

export default styled.div<
  Pick<ButtonProps, "disabled"> &
    Required<
      ToPrivateProperty<Pick<ButtonProps, "color" | "size" | "variant">>
    > &
    ToPrivateProperty<Pick<ButtonProps, "loading">>
>`
  ${({ theme, $color, $variant, $size }) => {
    return {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: theme.radius.sm,
      cursor: "pointer",
      transition: "all .2s",
      ...getSizeStyle({ theme, $size }),
      ...getVariantStyle({ theme, $color, $variant }).root,
    };
  }}

  &:hover {
    ${({ theme, $color, $variant }) => {
      return {
        ...getVariantStyle({ theme, $color, $variant })["root:hover"],
      };
    }}
  }

  &:disabled {
    ${({ theme, $color, $variant }) => {
      return {
        cursor: "not-allowed",
        ...getVariantStyle({ theme, $color, $variant })["root:disabled"],
      };
    }}
  }
`;
