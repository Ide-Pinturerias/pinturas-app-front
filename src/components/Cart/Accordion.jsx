import { useState, Children, isValidElement, cloneElement } from "react"
import { CaretDown } from "@svg"

function AccordionHeader({ setIsOpen, isOpen, children }) {
    return (
        <button
            className="flex items-center justify-between w-full leading-none"
            onClick={setIsOpen}
        >
            <div className="flex items-center gap-[8px]">
                {children}
            </div>
            <div className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`}>
                <CaretDown />
            </div>
        </button>
    )
}

function AccordionBody({ isOpen, children }) {
    return (
        <div className={`${isOpen ? "overflow-auto visible opacity-100 h-auto mt-[16px] pt-[16px] border-t border-duller transition-opacity duration-150 ease-ease" : "overflow-hidden invisible opacity-0 h-0"}`}>
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
        <li className={`mb-[16px] p-[16px] rounded-[10px] ${isOpen ? "bg-bgFocus" : "bg-transparent"} transition-colors duration-300 hover:bg-bgFocus`}>
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