import React from "react";
// import { cn } from "../../../../lib/utils";
import styles from "./container.scss";
interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};
