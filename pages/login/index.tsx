import React from 'react'
import { Button, Title } from '../../components'
import { withLayout } from '../../Layout/WithLayout'

// STYLES
import styles from './login.module.scss'

const Login = () => {
  return (
    <>
      <div className="container">
        <div className={styles.login}>
          <Title type='h1'>Вход в электронную библиотеку</Title>
          <form className={styles.form}>
            <div className={styles.field}>
              <input required type="text" placeholder='Логин' />
            </div>
            <div className={styles.field}>
              <input required type="password" placeholder='Пароль' />
            </div>
            <div className={styles.btn}>
              <Button type="submit">Войти</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default withLayout(Login) 