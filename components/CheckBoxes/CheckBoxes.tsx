import { urlToHttpOptions } from 'node:url'
import React, { ChangeEvent, FC, useCallback, useState } from 'react'

import styles from './styles.module.css'

type Option = {
  value: string;
  label: string;
}

type CheckBoxesProps = {
  value?: string | string[];
  options: Option[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const CheckBoxes: FC<CheckBoxesProps> = (props) => {
  const { value, placeholder, disabled, options, onChange } = props;
  const [localValue, setValue] = useState(value);
  const handleClick = useCallback((newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }, [onChange]);
  return (
    <div className={styles.main}>
      {placeholder && <div className={styles.label}>
        {placeholder}
      </div>
      }
      <div className={styles.values}>
        {options.map((option) => {
          return <a key={option.value}
            className={option.value === localValue ? styles.selected : ''}
            onClick={() => handleClick(option.value)}
          >
            {option.label}
          </a>
        })}
      </div>
    </div>
  )
}