import React from 'react'

import BookingForm from './components/BookingForm'
import BookingConfirmed from './components/BookingConfirmed';

import styles from './index.module.scss'

export default function Booking() {
    const [ bookingState, setBookingState ] = React.useState(false);

    const handleBooking = React.useCallback((state) => {
        setBookingState(state);
    }, []);

    // React.useEffect(() => {
    //     console.log(bookingState)
    // }, [bookingState])

    return (
        <div className={styles["booking-wrapper"]}>
            <div className={styles["booking-container"]}>
                <h2>Table Reservation</h2>
                {
                    bookingState ?
                    <div className={styles["booking-result"]}>
                        <BookingConfirmed />
                    </div> :
                    <div className={styles["booking-form"]}>
                        <BookingForm handleBooking={handleBooking} />
                    </div>
                }
            </div>
        </div>
    )
}
