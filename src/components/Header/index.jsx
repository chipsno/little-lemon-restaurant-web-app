import React from 'react'

import Nav from '../Nav'

import logo from '../../assets/images/logo.png'

import styles from './index.module.scss'

export default function Header() {
  return (
    <header className={styles["header"]}>
        <img className={styles["header-logo"]} src={logo} alt="little lemon logo" />

        <Nav />
    </header>
  )
}
