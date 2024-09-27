import React from 'react'

import TestimonialsCard from './components/TestimonialsCard'

import styles from './index.module.scss'

export default function Testimonials() {

  const customers = [
    {
      customer_id: "1",
      name: "Anthony",
      image: "/customer.jpg",
      rating: [1, 1, 1, 1, 1],
      content: "I loved the cozy ambiance, perfect for a relaxing meal with friends.",
    },
    {
      customer_id: "2",
      name: "Mary",
      image: "/customer.jpg",
      rating: [1, 0.5, 1, 1, 1],
      content: "The dishes were creative and had unique flavors you don't find everywhere.",
    },
    {
      customer_id: "3",
      name: "John",
      image: "/customer.jpg",
      rating: [1, 1, 0.5, 1, 1],
      content: "Perfect spot for a romantic dinner; the atmosphere was intimate and cozy.",
    },
    {
      customer_id: "4",
      name: "Sarah",
      image: "/customer.jpg",
      rating: [1, 1, 1, 1, 1],
      content: "The decor was modern and stylish, adding to the overall dining experience.",
    },
  ];

  return (

    <section className={styles['section-wrapper']} aria-label="testimonials area">
      <div className={styles['section-container']}>
        <h2>Our customers love us!</h2>
        {
          customers.map((customer, index) => (
            <TestimonialsCard
              key={customer.customer_id}
              image={customer.image}
              customerName={customer.name}
              rating={customer.rating}
              content={customer.content}
            />
          ))
        }
       </div>
    </section>

  )
}
