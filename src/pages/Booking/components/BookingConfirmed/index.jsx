import React from 'react'

import { CheckCircleFilled } from '@ant-design/icons'

import styles from './index.module.scss'

export default function BookingConfirmed() {
  return (
    <div className={styles["confirmed-booking"]}>
      <CheckCircleFilled className={styles["confirmed-booking-icon"]} />
      <h2>Your table has been reserved!</h2>
      <p>You'll receive a confirmation email with all the details.</p>
    </div>
  )
}
