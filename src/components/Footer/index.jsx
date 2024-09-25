import React from 'react'


import footerLogo from '../../assets/images/footerLogo.png'

import styles from './index.module.scss'

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-logo-wrapper"]}>
        <img src={footerLogo} alt="little lemon footer logo" />
      </div>
      <div className={styles["footer-links-wrapper"]}>
        <div className={styles["footer-links-container"]}>
          <div>Doormat Navigation</div>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Reservation</a></li>
            <li><a href='/'>Login</a></li>
          </ul>
        </div>
        <div className={styles["footer-links-container"]}>
          <div>Contacts</div>
          <ul>
            <li><a href='/'>Address</a></li>
            <li><a href='/'>Phone Number</a></li>
            <li><a href='/'>Email</a></li>
          </ul>
        </div>
        <div className={styles["footer-links-container"]}>
          <div>Social Media Links</div>
          <ul>
            <li><a href='/'>Address</a></li>
            <li><a href='/'>Phone Number</a></li>
            <li><a href='/'>Email</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
