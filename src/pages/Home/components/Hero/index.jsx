import React from 'react'

import styles from './index.module.scss'

export default function Hero() {
  return (
    <section className={styles['section-wrapper']}>
      <div className={styles['section-container']}>
        <div className={styles['hero-content']}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className={`${styles['hero-content-reserve-btn']} ${styles['button-primary']}`}>
            Reserve a Table
          </button>
        </div>
        <img
          className={styles['hero-image']}
          src="/hero-image.jpg"
          alt="Restaurant hero"
        />
      </div>
    </section>
  )
}
