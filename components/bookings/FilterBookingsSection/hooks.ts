import useConsumedMedicationMultiselect from "./ConsumedMedicationMultiselect/hooks";
import useDateBookingInput from "./DateBookingInput/hooks";
import useFilterTypeConsumedMedicationsRadioButtons from "./FilterTypeConsumedMedicationsRadioButtons/hooks";

const useFilterBookingsSection = () => {
    const handleOnClickFilterButton = () => {
        console.log('Ready to filter')
    }
    const filterTypeConsumedMedicationsRadioButtonsProps = useFilterTypeConsumedMedicationsRadioButtons();
    const dateBookingInputProps = useDateBookingInput();
    const consumedMedicationMultiselectProps = useConsumedMedicationMultiselect();

    return {
        filterTypeConsumedMedicationsRadioButtonsProps,
        dateBookingInputProps,
        handleOnClickFilterButton,
        consumedMedicationMultiselectProps,
    }
}

export default useFilterBookingsSection;