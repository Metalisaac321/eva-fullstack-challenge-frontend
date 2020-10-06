import { DateBookingInputProps } from "./types"
import DatePicker from "react-datepicker";
import { memo } from "react";

const Index = memo(({ dateBooking, onInputChange }: DateBookingInputProps) => {
    return (
        <div className="self-center">
            <p className="text-lg">
                Date Booking:
            </p>
            <DatePicker
                className="border-2 border-gray-300 rounded w-64 p-2"
                dateFormat="dd/MM/yyyy"
                onChange={onInputChange}
                selected={dateBooking}
            />
        </div>
    )
})

export default Index;