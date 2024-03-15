import { CaretDown } from "@svg"

function AccordionButton({ children }) {
    return (
        <button className="flex items-center justify-between w-full">
            <div className="flex items-center gap-[8px]">
                {children}
            </div>
            <CaretDown />
        </button>
    )
}

function AccordionContent({ children }) {
    return (
        <div className="border-t border-duller mt-[16px] pt-[16px]">
            {children}z
        </div>
    )
}

function AccordionItem({ children }) {
    return (
        <li className="bg-bgFocus p-[16px] rounded-[10px] mb-[16px]">
            {children}
        </li>
    )
}

export {
    AccordionItem,
    AccordionButton,
    AccordionContent
}