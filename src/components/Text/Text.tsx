import PropTypes from "prop-types";
import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface TextProps {
  /**
   * The children to render into the `container`.
   */
  color?: string;
  text: string;
}
/**
 * Primary UI component for user interaction
 */
const Text: FC<TextProps> = ({ color = "black", text = "aaa", ...props }) => {
  const [mountNode, setMountNode] = useState(null);

  return (
    <p style={{ color }} {...props}>
      {text}
    </p>
  );
};

export default Text;
