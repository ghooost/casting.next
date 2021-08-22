import React, { ChangeEvent, FC, useCallback, useState } from 'react'

import styles from './styles.module.css'


type TextInputProps = {
  value?: string,
  placeholder?: string,
  required?: boolean,
  disabled?: boolean,
  onChange?: (value: string) => void,
}

export const TextInput: FC<TextInputProps> = (props) => {
  const { value, placeholder, disabled, required, onChange } = props;
  const [localValue, setValue] = useState(value);
  const onTextChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  }, [onChange]);
  return (
    <div className={styles.main}>
      {localValue && placeholder && <div className={styles.label}>
        {placeholder}
      </div>
      }
      <input type="text"  value={localValue} placeholder={placeholder} disabled={disabled} className={styles.input} onChange={onTextChange}/>
    </div>
  )
}