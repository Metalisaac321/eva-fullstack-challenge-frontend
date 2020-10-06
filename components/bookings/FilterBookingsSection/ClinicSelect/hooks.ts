import { useState } from "react";
import { MultiselectOption } from "./types";


const useClinicSelect = () => {
    const [options, setOptions] = useState<MultiselectOption[]>();
    const [value, setValue] = useState<MultiselectOption>();

    const onChange = (selectedOption) => {
        setValue(selectedOption);
    }

    return {
        value,
        onChange,
        options,
        setOptions,
    }
}

export default useClinicSelect;