import { useState } from "react";

const useDateBookingInput = () => {
    const [dateBooking, setDateBooking] = useState(new Date());

    const onInputChange = (date) => {
        setDateBooking(date);
    }

    return {
        dateBooking,
        onInputChange,
    }
}

export default useDateBookingInput;