import { ChangeEvent, useState } from "react";

const useFilterTypeConsumedMedicationsRadioButtons = () => {
    const [selectedOption, setSelectedOption] = useState('laxMode');

    const onOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    }

    return {
        selectedOption,
        onOptionChange,
    }
}

export default useFilterTypeConsumedMedicationsRadioButtons;;