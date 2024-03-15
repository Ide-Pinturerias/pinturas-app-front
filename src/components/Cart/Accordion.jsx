import { useState, Children, isValidElement, cloneElement } from "react"
import { CaretDown } from "@svg"

function AccordionHeader ({ setIsOpen, isOpen, children }) {
    // isOpen state will be used for styles.
    return (
        <button
            className="flex items-center justify-between w-full"
            onClick={setIsOpen}
        >
            <div className="flex items-center gap-[8px]">
                {children}
            </div>
            <CaretDown />
        </button>
    )
}

function AccordionBody({ isOpen, children }) {
    // isOpen state will be used for styles.
    return (
        <div className="border-t border-duller mt-[16px] pt-[16px]">
            {children}
        </div>
    )
}

function Accordion({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleVisibility = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <li className="bg-bgFocus p-[16px] rounded-[10px] mb-[16px]">
            {
                Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        if (child.type === AccordionHeader) {
                            return cloneElement(child, { setIsOpen: toggleVisibility, isOpen })
                        }
                        if (child.type === AccordionBody) {
                            return cloneElement(child, { isOpen })
                        }
                    }
                    return children
                })
            }
        </li>
    )
}

export {
    Accordion,
    AccordionHeader,
    AccordionBody
}