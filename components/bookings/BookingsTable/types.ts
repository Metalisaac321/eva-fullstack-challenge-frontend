import Booking from "../types";

export interface BookingTableRowProps {
    womenName: string;
    womenEmail: string;
    dateTimeBooking: string;
    clinicName: string;
    consumedMedications: string;
}

export interface BookingTableProps {
    bookings: Booking[]

}