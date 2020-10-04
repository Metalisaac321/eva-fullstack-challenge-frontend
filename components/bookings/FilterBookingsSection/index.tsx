import ConsumedMedicationMultiselect from "./ConsumedMedicationMultiselect"
import useDateBookingInput from "./DateBookingInput/hooks";
import DateBookingInput from "./DateBookingInput";
import FilterTypeConsumedMedicationsRadioButtons from './FilterTypeConsumedMedicationsRadioButtons'
import useFilterTypeConsumedMedicationsRadioButtons from "./FilterTypeConsumedMedicationsRadioButtons/hooks";
import useConsumedMedicationMultiSelect from "./ConsumedMedicationMultiselect/hooks";

const Index = () => {
    const handleOnClickFilterButton = () => {
        console.log('Ready to filter')
    }

    const filterTypeConsumedMedicationsRadioButtonsProps = useFilterTypeConsumedMedicationsRadioButtons();
    const dateBookingProps = useDateBookingInput();
    const consumedMedicationMultiselectProps = useConsumedMedicationMultiSelect();

    return (
        <div className="mb-12 border p-3">
            <p className="text-3xl text-center mb-6">
                Filter Bookings
            </p>
            <div className="grid grid-cols-3 gap-4">
                <DateBookingInput {...dateBookingProps} />
                <div className="justify-self-center self-end">
                    <button
                        type="button"
                        className="gradient-blue px-12 py-2 rounded text-white font-semibold"
                        onClick={handleOnClickFilterButton}
                    >
                        Filter
                    </button>
                </div>
                <div className="flex flex-col">
                    <FilterTypeConsumedMedicationsRadioButtons
                        {...filterTypeConsumedMedicationsRadioButtonsProps}
                    />
                    <ConsumedMedicationMultiselect
                        {...consumedMedicationMultiselectProps}
                    />
                </div>
            </div>
        </div>
    )
};

export default Index;