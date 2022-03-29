import React from "react";
import { Select } from "antd";

import styles from "./dropdown.module.css";

const { Option } = Select;

export default function Dropdown({
  handleChange,
  label,
  mandatory = true,
  errors,
  placeholder,
}) {
  return (
    <div className={styles.m2}>
      <p className={styles.label}>
        {label} {mandatory && <span>*</span>}
      </p>
      <Select
        placeholder={placeholder}
        onChange={handleChange}
        className={styles.select}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      {errors && <pre className={styles.textDanger}>{errors}</pre>}
    </div>
  );
}
