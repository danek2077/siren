import React from "react";
// import { cn } from "../../../../lib/utils";
// import styles from "./container.module.scss";
interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>;
};
