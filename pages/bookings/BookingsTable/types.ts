export interface Booking {
    bookingId: number;
    womenName: string;
    womenEmail: string;
    dateTimeBooking: string;
    clinicName: string;
    consumedMedications: string;
}

export interface BookingTableRowProps {
    womenName: string;
    womenEmail: string;
    dateTimeBooking: string;
    clinicName: string;
    consumedMedications: string;
}