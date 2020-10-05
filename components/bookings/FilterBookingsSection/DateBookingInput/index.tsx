import { DateBookingInputProps } from "./types"
import DatePicker from "react-datepicker";
import { memo } from "react";

const Index = memo(({ dateBooking, onInputChange }: DateBookingInputProps) => {
    return (
        <div className="justify-self-center">
            <p className="text-lg">
                Date Booking:
            </p>
            <DatePicker
                className="border-2 border-purple-400 w-42"
                dateFormat="dd/MM/yyyy"
                onChange={onInputChange}
                selected={dateBooking}
            />
        </div>
    )
})

export default Index;