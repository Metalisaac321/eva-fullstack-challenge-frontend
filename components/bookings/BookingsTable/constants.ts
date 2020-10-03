import Booking from "../types";

const TABLE_HEAD_ITEMS: string[] = [
    'Woman Name',
    'Email',
    'Date Time Booking',
    'Clinic Name',
    'Consumed Medications',
];

const BOOKINGS: Booking[] = [
    {
        bookingId: 0,
        womenName: 'Mina Cummings',
        womenEmail: 'mina_cummings@gmail.com',
        dateTimeBooking: '2019-11-26T01:19:51.813Z',
        clinicName: 'EXPLANADA',
        consumedMedications: 'HORMONE_THERAPY',
    },
    {
        bookingId: 1,
        womenName: 'Mina Cummings',
        womenEmail: 'mina_cummings@gmail.com',
        dateTimeBooking: '2019-11-26T01:19:51.813Z',
        clinicName: 'EXPLANADA',
        consumedMedications: 'ANTIBIOTICS, HORMONE_THERAPY, BLOOD_THINNERS, COAGULANTS',
    },
    {
        bookingId: 2,
        womenName: 'Mina Cummings',
        womenEmail: 'mina_cummings@gmail.com',
        dateTimeBooking: '2019-11-26T01:19:51.813Z',
        clinicName: 'EXPLANADA',
        consumedMedications: 'ANTIBIOTICS, HORMONE_THERAPY, BLOOD_THINNERS, COAGULANTS',
    },
    {
        bookingId: 3,
        womenName: 'Mina Cummings',
        womenEmail: 'mina_cummings@gmail.com',
        dateTimeBooking: '2019-11-26T01:19:51.813Z',
        clinicName: 'EXPLANADA',
        consumedMedications: 'ANTIBIOTICS, HORMONE_THERAPY, BLOOD_THINNERS, COAGULANTS',
    },

]

export default {
    TABLE_HEAD_ITEMS,
    BOOKINGS,
}