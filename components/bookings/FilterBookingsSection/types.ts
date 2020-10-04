import { ConsumedMedicationMultiselectProps } from "./ConsumedMedicationMultiselect/types";
import { DateBookingInputProps } from "./DateBookingInput/types";
import { FilterTypeConsumedMedicationsProps } from "./FilterTypeConsumedMedicationsRadioButtons/types";

export interface FilterBookingsSectionProps {
    dateBookingInputProps: DateBookingInputProps;
    filterTypeConsumedMedicationsRadioButtonsProps: FilterTypeConsumedMedicationsProps;
    handleOnClickFilterButton: () => void,
    consumedMedicationMultiselectProps: ConsumedMedicationMultiselectProps
}