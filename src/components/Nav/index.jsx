import React from 'react'

import styles from "./index.module.scss"

export default function Nav() {
  return (
    <nav className={styles["nav"]}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
  )
}
