import Select from 'react-select';
import { ConsumedMedicationMultiselectProps } from './types';


const Index = (props: ConsumedMedicationMultiselectProps) => {
    return (
        <div className="mt-6">
            <p className="text-lg text-center mb-2">
                Consumed medications
            </p>
            <Select
                isMulti
                {...props}
            />
        </div>
    );
};

export default Index;