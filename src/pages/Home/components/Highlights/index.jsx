import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
  Button,
} from 'antd';

import DishCard from './DishCard'

import styles from './index.module.scss'

export default function Highlights() {
  const navigate = useNavigate();

  const dishes = [
    {
      title: "Greek Salad",
      image: "greek-salad-image.png",
      price: "$10.00",
      description: `The famous greek salad of crispy lettuce, peppers, olives and
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary
        croutons.`,
    },
    {
      title: "Bruschetta",
      image: "bruschetta-image.png",
      price: "$6.79",
      description: `Our Bruschetta is made from grilled bread that has been
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      title: "Lemon Dessert",
      image: "lemon-dessert-image.png",
      price: "$8.50",
      description: `This comes straight from grandma's recipe book, every last
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];

  return (
    <section id="menu" className={styles['section-wrapper']} aria-label="highlight area">
      <div className={styles['section-container']}>
        <div className={styles['highlights-header']}>
          <h2>This week specials!</h2>
          <Button type="default" className={`${styles['menu-btn']} ${styles["button-primary"]}`} aria-label="menu button" onClick={
            () => navigate('/order')
          }
          >
            Online Menu
          </Button>
        </div>
        {
          dishes.map((dish, index) => (
            <DishCard
              key={dish.title}
              image={dish.image}
              title={dish.title}
              price={dish.price}
              description={dish.description}
            />
          ))
        }
      </div>
    </section>
  )
}
