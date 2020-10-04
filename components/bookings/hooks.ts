import { useState } from "react"
import { BOOKINGS } from "./BookingsTable/constants"
import useFilterBookingsSection from "./FilterBookingsSection/hooks"

const useBookings = () => {
    const filterBookingsSectionsProps = useFilterBookingsSection();
    const [bookings, setBookings] = useState(BOOKINGS);

    return {
        filterBookingsSectionsProps,
        bookings,
    }
}

export default useBookings;