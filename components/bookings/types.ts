export interface Women {
    name: string;
    email: string;
}
export interface Clinic {
    name: string;
}

export interface ConsumedMedication {
    name: string;
}
export interface Booking {
    bookingId: number;
    women: Women;
    dateTime: string;
    date: string;
    clinic: Clinic;
    consumedMedications: ConsumedMedication[];
}
