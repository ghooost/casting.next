import React, { FC, useCallback, useState } from 'react'
import styles from './styles.module.css'
import { i18n, i18nUse } from '@libs/i18n'
import keyset from './i18n'

export type Event = {
  date: string;
  id: string;
}

export type Casting = {
  name: string;
  events: Event[];
  id: string;
}

export type HomePageProps = {
  castings: Casting[]
}

export const HomePage: FC<HomePageProps> = (props) => {
  const {castings} = props;
  i18nUse(keyset);

  return (
    <section className={styles.container}>
      {castings.length === 0 && <p>{i18n('empty-description')}</p>}
      {castings.length > 0 && (<>
        <p>{i18n('full-description')}</p>
        {castings.map((casting) => (
          <div key={casting.id} className={styles.casting}>
            <h2>{casting.name}</h2>
            {casting.events.map((event) => (
              <div key={event.id} className={styles.event}>
                {event.date}
              </div>
            ))}
          </div>
        ))}
      </>)}
    </section>
  )
}
