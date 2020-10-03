import { ChangeEvent, useState } from "react"
import FilterTypeConsumedMedications from "./FilterTypeConsumedMedications"
import MultiSelectConsumedMedication from "./MultiSelectConsumedMedication"

export default () => {
    const [selectedOption, setSelectedOption] = useState('laxMode');

    const onOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('Selected: ', event.target.value)
        setSelectedOption(event.target.value);
    }

    return (
        <div className="mb-12 border p-3">
            <p className="text-3xl text-center mb-6">
                Filter Bookings
        </p>
            <div className="grid grid-cols-3 gap-4">
                <div className="justify-self-center">
                    <p className="text-lg">
                        Date Booking:
            </p>
                    <input
                        className="border-2 border-purple-400 w-42"
                        placeholder="Date Booking"
                        onChange={() => { }}
                        type="date"
                        value=""
                    />
                </div>
                <div className="justify-self-center self-end">
                    <button type="button" className="gradient-blue px-12 py-2 rounded text-white font-semibold">
                        Filter
            </button>
                </div>
                <div className="flex flex-col">
                    <FilterTypeConsumedMedications selectedOption={selectedOption} onOptionChange={onOptionChange} />
                    <MultiSelectConsumedMedication />
                </div>
            </div>
        </div>
    )
}