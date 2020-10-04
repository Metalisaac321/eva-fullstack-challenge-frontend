import { ChangeEvent } from "react";

export interface DateBookingInputProps {
    dateBooking: Date;
    onInputChange: (e: Date) => void;
}