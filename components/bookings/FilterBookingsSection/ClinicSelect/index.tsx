import Select from 'react-select';
import { ClinicSelectProps } from './types';


const Index = (props: ClinicSelectProps) => {
    return (
        <div className="mt-6">
            <p className="text-lg text-center mb-2">
                Clinic
            </p>
            <Select
                {...props}
            />
        </div>
    );
};

export default Index;