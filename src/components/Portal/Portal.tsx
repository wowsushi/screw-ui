import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  /**
   * The children to render into the `container`.
   */
  children?: React.ReactNode;
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container?: Element | (() => Element | null) | null;
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal?: boolean;
}
/**
 * Primary UI component for user interaction
 */
export const Portal: FC<PortalProps> = ({ children, container }) => {
  const [mountNode, setMountNode] = useState(container || document.body);

  useEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
