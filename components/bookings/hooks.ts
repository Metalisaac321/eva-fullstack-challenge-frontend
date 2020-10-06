import { useEffect, useState } from "react";
import { fetcher } from "../../utils/fetcher";
import useFilterBookingsSection from "./FilterBookingsSection/hooks"
import { Booking, Clinic, ConsumedMedication } from "./types";
import moment from 'moment';
import { MultiselectOption } from "./FilterBookingsSection/ConsumedMedicationMultiselect/types";
import { getCookie } from "./get-cookie";

const useBookings = (bookings: Booking[], clinics: Clinic[], consumedMedications: ConsumedMedication[]) => {
    const filterBookingsSectionsProps = useFilterBookingsSection();
    const dateBookingInputProps = filterBookingsSectionsProps.dateBookingInputProps;
    const clinicSelectProps = filterBookingsSectionsProps.clinicSelectProps;
    const consumedMedicationMultiselectProps = filterBookingsSectionsProps.consumedMedicationMultiselectProps;
    const filterTypeConsumedMedicationsRadioButtonsProps = filterBookingsSectionsProps.filterTypeConsumedMedicationsRadioButtonsProps;

    const [data, setData] = useState(bookings);
    const [isLoading, setIsLoading] = useState(false);
    const [isUserLogged, setIsUserLogged] = useState(true);

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
        const { clinicName, date, consumedMedications, page } = filterBookings;
        if (!clinicName && !date && consumedMedications.length < 1 && !page) {
            return;
        }
        const fetchBookings = async () => {
            setIsLoading(true);
            const access_token = getCookie('access_token');
            const bookings = await fetcher('bookings', {
                method: 'POST',
                access_token,
                body: filterBookings
            }, false)

            if (bookings.statusCode == '401') {
                setIsUserLogged(false)
            } else {
                setIsUserLogged(true);
                setData(bookings);
            }
            setIsLoading(false)
        }
        fetchBookings()
    }, [shouldFilter, filterBookings.page])

    const changePage = (n: number) => () => {
        const pageNumber = filterBookings.page + (n)

        if (pageNumber > 0) {
            changeFilterBookings('page', pageNumber);
        }
    }

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

    return {
        data,
        filterBookingsSectionsProps,
        handleOnClickFilterButton,
        isLoading,
        page: filterBookings.page,
        changePage,
        isUserLogged,
    }
}

export default useBookings;