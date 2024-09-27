import React from 'react'

import { StarFilled } from '@ant-design/icons';

import HalfColorStar from '../../../../../components/HalfColorStar';

import styles from './TestimonialsCard.module.scss';



export default function TestimonialsCard(props) {

  const {image, customerName, rating, content} = props;

  return (
    <div className={styles['testimonial-card-wrapper']}>
      <article className={styles['testimonial-card-container']}>
        <img src={image} alt={customerName} aria-label="picture of customer" />
        <h4>{customerName}</h4>
        <span>
          {
            rating.map((ratingPoint, idx) =>
              ratingPoint === 1 ? (
                <StarFilled key={idx} />
              ) : ratingPoint === 0.5 ? (
                <HalfColorStar leftColor="#f4ce14"/>
              ) : ratingPoint === 0 ? (
                <StarFilled key={idx} />
              ) : null
            )
          }
          <p>
            {rating.reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )} / 5
          </p>
        </span>
        <blockquote>
          <p>{`"${content}"`}</p>
        </blockquote>
      </article>
    </div>
  )
}
