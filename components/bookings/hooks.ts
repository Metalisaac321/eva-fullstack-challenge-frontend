import { useEffect, useState } from "react";
import { fetcherFrontend } from "../../utils/fetcher";
import useFilterBookingsSection from "./FilterBookingsSection/hooks"
import { Booking, Clinic, ConsumedMedication } from "./types";
import moment from 'moment';
import { MultiselectOption } from "./FilterBookingsSection/ConsumedMedicationMultiselect/types";

const useBookings = (bookings: Booking[], clinics: Clinic[], consumedMedications: ConsumedMedication[]) => {
    const filterBookingsSectionsProps = useFilterBookingsSection();
    const dateBookingInputProps = filterBookingsSectionsProps.dateBookingInputProps;
    const clinicSelectProps = filterBookingsSectionsProps.clinicSelectProps;
    const consumedMedicationMultiselectProps = filterBookingsSectionsProps.consumedMedicationMultiselectProps;
    const filterTypeConsumedMedicationsRadioButtonsProps = filterBookingsSectionsProps.filterTypeConsumedMedicationsRadioButtonsProps;

    const [data, setData] = useState(bookings);
    const [isLoading, setIsLoading] = useState(false);
    const [filterBookings, setFilterBookings] = useState({
        page: 1,
        clinicName: '',
        date: '',
        consumedMedications: [],
    });
    const [shouldFilter, setShouldFilter] = useState(false);

    const handleOnClickFilterButton = async () => {
        setShouldFilter(!shouldFilter);
    }

    useEffect(() => {
        const multiSelectConsumedMedication: MultiselectOption[] = consumedMedications.map((cm) => ({ label: cm.name, value: cm.name }))
        consumedMedicationMultiselectProps.setOptions(multiSelectConsumedMedication)
        const selectClinics: MultiselectOption[] = clinics.map((c) => ({ label: c.name, value: c.name }))
        clinicSelectProps.setOptions(selectClinics)
    }, [])

    useEffect(() => {
        console.log('should filter')
        if (!filterBookings.clinicName && !filterBookings.date && filterBookings.consumedMedications.length < 1) {
            return;
        }
        const fetchBookings = async () => {
            console.log('fetch')
            setIsLoading(true);
            const bookings = await fetcherFrontend('bookings', {
                method: 'POST',
                body: JSON.stringify(filterBookings)
            })
            setData(bookings);
            setIsLoading(false)
        }
        fetchBookings()
    }, [shouldFilter])


    const changeFilterBookings = (key: string, value: any) => {
        setFilterBookings({ ...filterBookings, [key]: value })
    }

    useEffect(() => {
        changeFilterBookings('date', moment(dateBookingInputProps.dateBooking).format('DD/MM/yyyy'))
    }, [dateBookingInputProps.dateBooking])

    useEffect(() => {
        changeFilterBookings('clinicName', clinicSelectProps.value?.value)
    }, [clinicSelectProps.value])

    useEffect(() => {
        const consumedMedicationArrayString = consumedMedicationMultiselectProps.value.map((cm) => cm.value)
        changeFilterBookings('consumedMedications', consumedMedicationArrayString);
    }, [consumedMedicationMultiselectProps.value])

    useEffect(() => {
        changeFilterBookings('filterMode', filterTypeConsumedMedicationsRadioButtonsProps.selectedOption);
    }, [filterTypeConsumedMedicationsRadioButtonsProps.selectedOption])

    console.log(filterBookings)

    return {
        data,
        filterBookingsSectionsProps,
        handleOnClickFilterButton,
        isLoading,
    }
}

export default useBookings;