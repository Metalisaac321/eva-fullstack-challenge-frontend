import useClinicSelect from "./ClinicSelect/hooks";
import useConsumedMedicationMultiselect from "./ConsumedMedicationMultiselect/hooks";
import useDateBookingInput from "./DateBookingInput/hooks";
import useFilterTypeConsumedMedicationsRadioButtons from "./FilterTypeConsumedMedicationsRadioButtons/hooks";

const useFilterBookingsSection = () => {
    const filterTypeConsumedMedicationsRadioButtonsProps = useFilterTypeConsumedMedicationsRadioButtons();
    const dateBookingInputProps = useDateBookingInput();
    const consumedMedicationMultiselectProps = useConsumedMedicationMultiselect();
    const clinicSelectProps = useClinicSelect();

    return {
        filterTypeConsumedMedicationsRadioButtonsProps,
        dateBookingInputProps,
        consumedMedicationMultiselectProps,
        clinicSelectProps,
    }
}

export default useFilterBookingsSection;