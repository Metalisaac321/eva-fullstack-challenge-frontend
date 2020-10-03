import { useState } from "react"
import { BOOKINGS } from "../BookingsTable/constants"
import { Booking } from "../types"

interface FilterBooking {
    dateBooking: string;
    filterMode: string;
    consumedMedications: any[];
    option

}
interface BookingState {
    bookings: Booking[];
}

const initialBookingState: BookingState = {
    bookings: BOOKINGS,
}

export default () => {
    const [bookingsState, setBookingState] = useState(initialBookingState)

    const setBookings = (bookings: Booking[]) => {
        setBookingState({ ...bookingsState, ...bookings })
    }

    return {
        bookings: bookingsState.bookings,
        setBookings,
    }
}