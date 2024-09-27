import React from 'react'

import styles from './index.module.scss'

export default function About() {
  return (
    <section id="about" className={styles['section-wrapper']}>
      <div className={styles['section-container']}>
        <div className={styles['our-story-content']}>
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </div>
        <div className={styles['our-story-chefs']}>
          <img
            src="/chefs-mario-and-adrian_1.jpg"
            alt="Chefs Mario and Adrian #1" 
            aria-label="image of Chefs Mario and Adrian #1"/>
          <img
            src="/chefs-mario-and-adrian_2.jpg"
            alt="Chefs Mario and Adrian #2" 
            aria-label="image of Chefs Mario and Adrian #2"
          />
        </div>
      </div>
    </section>
  )
}
