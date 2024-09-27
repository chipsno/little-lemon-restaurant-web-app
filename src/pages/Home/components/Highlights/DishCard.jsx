import React from 'react'

import styles from './DishCard.module.scss';

export default function DishCard(props) {
  const { image, title, price, description } = props;
  return (
    <div className={styles['dish-card-wrapper']}>
      <article className={styles['dish-card-container']}>
        <div className={styles['dish-card-image']}>
          <img src={image} alt={title} aria-label="image of dish" />
        </div>
        <div className={styles['dish-card-header']}>
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
        <div className={styles['dish-card-footer']}>
          <p>{description}</p>
          <a href='/'>
            Order a delivery
          </a>
        </div>
      </article>
    </div>
  )
}
