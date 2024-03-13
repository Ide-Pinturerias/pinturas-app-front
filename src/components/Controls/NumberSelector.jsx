import { Plus, Minus } from "@svg"

export default function NumberSelector({ number, setNumber, limit }) {

    // FUNCTIONS:
    const handleNumberOfItems = (event) => {
        if (limit !== 0) {
            const { value } = event.target
            if (value === '' || (!isNaN(value) && parseInt(value) >= 1 && parseInt(value) <= limit)) {
                setNumber(Number(value))
            };
        }
    }

    const handleNumberChange = (parameter) => {
        if (limit !== 0) {
            if (parameter === 'add' && number < limit) {
                setNumber((prev) => prev + 1)
            } else if (parameter === 'remove' && number > 1) {
                setNumber((prev) => prev - 1)
            };
        }
    }

    // COMPONENTS:
    return (
        <div className="flex border border-black rounded-[2rem] text-lg h-fit">
            <button
                className="p-3"
                onClick={() => handleNumberChange("remove")}
            >
                <Minus />
            </button>
            <input
                value={number}
                onChange={(e) => handleNumberOfItems(e)}
                type="text"
                inputMode="numeric"
                maxLength={4}
                step={1}
                min={0}
                max={limit}
                className="bg-transparent text-center w-14 p-3"
            />
            <button
                className="p-3"
                onClick={() => handleNumberChange("add")}
            >
                <Plus />
            </button>
        </div>
    )
}