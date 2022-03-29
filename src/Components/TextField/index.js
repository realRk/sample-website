import { Input } from "antd";
import React from "react";
import styles from "./textfield.module.css";

export default function TextField({
  mandatory = true,
  label,
  placeholder = "Enter text here",
  onChange,
  onBlur,
  errors,
  disabled = false,
  value,
}) {
  return (
    <div className={styles.m2}>
      <p className={styles.label}>
        {label} {mandatory && <span>*</span>}
      </p>
      <Input
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        value={value}
      />
      {errors && <pre className={styles.textDanger}>{errors}</pre>}
    </div>
  );
}
