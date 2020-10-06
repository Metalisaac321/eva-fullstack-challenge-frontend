export interface MultiselectOption {
    value: string;
    label: string;
}

export interface ClinicSelectProps {
    options?: MultiselectOption[];
    value?: MultiselectOption;
    onChange: (selectedOptions: any) => void;
}
