import { useState } from "react";
import { MultiselectOption } from "./types";


const optionsValues = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const useConsumedMedicationMultiselect = () => {
    const [options, setOptions] = useState<MultiselectOption[]>(optionsValues);
    const [value, setValue] = useState([]);

    const onChange = (selectedOption) => {
        setValue(selectedOption);
    }

    return {
        value,
        onChange,
        options,
    }
}

export default useConsumedMedicationMultiselect;