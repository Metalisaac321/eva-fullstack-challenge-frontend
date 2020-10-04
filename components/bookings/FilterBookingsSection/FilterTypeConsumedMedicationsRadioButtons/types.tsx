import { ChangeEvent } from "react";

export interface FilterTypeConsumedMedicationsProps {
    selectedOption: string;
    onOptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
}