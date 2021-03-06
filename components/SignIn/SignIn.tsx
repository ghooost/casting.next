import { Submit } from '@components/Submit'
import { TextInput } from '@components/TextInput'
import { AuthError } from "@libs/auth/share"
import { i18n, i18nUse } from '@libs/i18n'
import React, { FC, useCallback, useState } from 'react'

import keyset from './i18n'
import styles from './styles.module.css'

export type SignInProps = {
  error?: AuthError;
  isLoading: boolean;
  onSubmit: (email: string, pass: string) => void;
}

export const SignIn: FC<SignInProps> = (props) => {

  const {error, isLoading, onSubmit} = props;
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
  },[]);
  const handlePassChange = useCallback((value: string) => {
    setPass(value);
  }, []);
  const handleClick = useCallback(()=>{
    if (email && pass) {
      onSubmit(email, pass);
    }
  }, [email, onSubmit, pass]);
  const isSubmitDisabled = useCallback(() => {
    if (email && pass && !isLoading) {
      return false;
    }
    return true;
  }, [email, isLoading, pass]);

  i18nUse(keyset);

  return (
    <section className={styles.container}>
      {isLoading && <div className="loading-cover"/>}
      {error && <div className="error">{i18n(`error-${error}`)}</div>}
      <TextInput value={email} disabled={isLoading} placeholder={i18n('email')} onChange={handleEmailChange} />
      <TextInput value={pass} disabled={isLoading} placeholder={i18n('password')} onChange={handlePassChange} />
      <Submit label={i18n('login')} disabled={isSubmitDisabled()} onClick={handleClick} />
    </section>
  )
}
