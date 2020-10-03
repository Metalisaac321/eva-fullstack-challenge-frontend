import { useState } from 'react';
import Select from 'react-select';

export default () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div className="mt-6">
            <p className="text-lg text-center">
                Consumed medications
        </p>
            <Select
                isMulti
                options={options}
            />
        </div>
    );
}