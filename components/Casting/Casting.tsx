import { CastingPublic } from 'datatypes/casting';
import Link from 'next/link';
import React, { ChangeEvent, FC, useCallback, useState } from 'react'

import styles from './styles.module.css'

type CastinProps = {
  data: CastingPublic,
  isEditable: boolean,
}

export const Casting: FC<CastinProps> = (props) => {
  const { data: {id, name, note}, isEditable } = props;
  const href = `/${isEditable ? 'enroll' : 'editcasting'}/${id}`;
  return (
    <Link href={href}>
      <a className={styles.main}>
        <div className={styles.title}>{name}</div>
        <div className={styles.note}>{note}</div>
      </a>
    </Link>
  )
}