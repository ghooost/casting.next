import React, { ChangeEvent, FC, useCallback, useState } from 'react'

import styles from './styles.module.css'

type TextInputProps = {
  value?: string,
  rows?: number,
  placeholder?: string,
  required?: boolean,
  disabled?: boolean,
  onChange?: (value: string) => void,
}

export const TextArea: FC<TextInputProps> = (props) => {
  const { value, rows, placeholder, disabled, required, onChange } = props;
  const [localValue, setValue] = useState(value);
  const onTextChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
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
      <textarea value={localValue} rows={rows || 3} placeholder={placeholder} disabled={disabled} className={styles.input} onChange={onTextChange}/>
    </div>
  )
}