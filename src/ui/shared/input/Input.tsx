import React, { InputHTMLAttributes } from "react";
import { cn } from "../../../../lib/utils";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Если нужен текст перед полем
  error?: string; // Сообщение об ошибке
  classNameInput?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  classNameInput,
  ...props
}) => {
  return (
    <div className={cn(styles.inputWrapper, className)}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={cn(styles.input, classNameInput, {
          [styles.error]: !!error,
        })}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;
