import React, { ChangeEvent, FC, useCallback, useState } from 'react'

import styles from './styles.module.css'


type SubmitProps = {
  label: string,
  disabled?: boolean,
  onClick?: () => void,
}

export const Submit: FC<SubmitProps> = (props) => {
  const { label, disabled, onClick } = props;

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);
  return (
    <div className={styles.main}>
      <button className={styles.button} disabled={disabled} onClick={handleClick}>{label}</button>
    </div>
  )
}