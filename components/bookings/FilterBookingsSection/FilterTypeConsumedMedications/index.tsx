import { FilterTypeConsumedMedicationsProps } from "./types"

export default ({ onOptionChange, selectedOption }: FilterTypeConsumedMedicationsProps) => {
    return (
        <div>
            <div className="grid grid-cols-2 justify-items-center">
                <div>
                    <input
                        className="mr-2 h-4 w-4"
                        type="radio"
                        id="strict-mode"
                        value="strictMode"
                        checked={selectedOption === 'strictMode'}
                        onChange={onOptionChange}
                    />
                    <label className="text-lg" htmlFor="strict-mode">Strict mode</label>
                </div>
                <div>
                    <input
                        className="mr-2 h-4 w-4"
                        type="radio"
                        id="lax-mode"
                        value="laxMode"
                        checked={selectedOption === 'laxMode'}
                        onChange={onOptionChange}
                    />
                    <label className="text-lg" htmlFor="lax-mode">Lax mode</label>
                </div>
            </div>
        </div>
    )
}