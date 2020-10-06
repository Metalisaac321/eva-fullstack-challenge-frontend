import { Booking } from "../types";

export interface BookingTableRowProps {
    women: Booking['women'];
    dateTime: string;
    date: string;
    clinic: Booking['clinic'];
    consumedMedications: Booking['consumedMedications']
}

export interface BookingTableProps {
    bookings: Booking[]
}