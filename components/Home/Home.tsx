import { Pages } from '@datatypes/pages'
import Link from 'next/link'
import React, { FC } from 'react'

import styles from './styles.module.css'

export const Home: FC = () => {
  const arrow = (
    <svg width="40" height="80" className={styles.arrow}>
      <circle cx="20" cy="20" r="5" stroke="transparent" fill="black" strokeWidth="0" />
      <circle cx="20" cy="40" r="5" stroke="transparent" fill="black" strokeWidth="0" />
      <polyline points="10 55 20 70 30 55 10 55"
        stroke="transparent" fill="black" strokeWidth="0" />
    </svg>
  );
  return (
    <>
      <section className={styles.container}>
        <h2><Link href={Pages.SignUp}><a>Sign Up</a></Link></h2>
        <p>Use your email to login. And try to remember the password</p>
      </section>
      {arrow}
      <section className={styles.container}>
        <h2>Create casting event</h2>
        <p>Define emails of your crew members who will work with casting data</p>
      </section>
      {arrow}
      <section className={styles.container}>
        <h2>Tune info</h2>
        <p>Set info applicants should provide</p>
      </section>
      {arrow}
      <section className={styles.container}>
        <h2>Define slots</h2>
        <p>Set dates and times for your casting events. Number of applicants for each slot can be limited (optionally)</p>
      </section>
      {arrow}
      <section className={styles.container}>
        <h2>Setup widget</h2>
        <p>Put code of Enroll Form Widget to your site</p>
      </section>
      {arrow}
      <section className={styles.container}>
        <h2>Manage subscribers</h2>
        <p>That is it. Done! This is an extremely simple service</p>
      </section>
    </>
  )
}
