export interface MultiselectOption {
    value: string;
    label: string;
}

export interface ConsumedMedicationMultiselectProps {
    options: MultiselectOption[];
    value: MultiselectOption[];
    onChange: (selectedOptions: any) => void;
}
