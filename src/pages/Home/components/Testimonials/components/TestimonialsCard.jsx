import React from 'react'

import styles from './TestimonialsCard.module.scss';

export default function TestimonialsCard(props) {

  const {image, customerName, rating, content} = props;

  return (
    <div className={styles['testimonial-card-wrapper']}>
      <article className={styles['testimonial-card-container']}>
        <img src={image} alt={customerName} />
        <h4>{customerName}</h4>
        <span>
          {rating.map((ratingPoint, idx) =>
            <span key={idx}>{ratingPoint}</span>
            // ratingPoint === 1 ? (
            //   <IoMdStar key={idx} />
            // ) : ratingPoint === 0.5 ? (
            //   <IoMdStarHalf key={idx} />
            // ) : ratingPoint === 0 ? (
            //   <IoMdStarOutline key={idx} />
            // ) : null
          )}
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
