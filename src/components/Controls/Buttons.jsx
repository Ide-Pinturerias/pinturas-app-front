import React, { Children } from "react"
import twMerge from "@/config/twMerge.js"

export function Button({ children, variant, subVariant, className, ...props }) {
    let buttonClass
    let interaction

    switch (variant) {
        case "primary":
            buttonClass = "box-border py-[1em] px-[1.5em] rounded-[60px] font-bold uppercase bg-primaryClear text-primaryVisible font-primary"
            interaction = "transition-focus ease-linear duration-100 hover:bg-primaryLight hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-primaryDark active:scale-[.97]"
            break
        case "secondary":
            buttonClass = "box-border py-[1em] px-[1.5em] rounded-[60px] font-bold uppercase bg-bg border border-primaryClear text-primaryClear font-primary"
            interaction = "transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-primaryDull active:scale-[.97]"
            break
        case "tertiary":
            buttonClass = "underline text-primaryClear cursor-pointer hover:no-underline hover:text-primaryLight active:underline active:text-primaryDark font-primary"
            interaction = 'transition-colors ease-linear duration-100 focus:outline focus:outline-focus focus:outline-offset-[1px] focus-visible:outline-focus focus-visible:outline';
            break
        case "danger":
            buttonClass = "box-border py-[1em] px-[1.5em] rounded-[60px] font-bold uppercase bg-bg border border-secondaryClear text-secondaryClear font-primary"
            interaction = "transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-secondaryDull active:scale-[.97]"
            break
        default:
            buttonClass = ""
            interaction = ""
            break
    }

    let numberOfChildren;

    switch (subVariant) {
        case "icon":
            numberOfChildren = Children.count(children)
            buttonClass = `${buttonClass} ${numberOfChildren === 1 ? "grid place-items-center p-0" : "flex items-center"}`
            break
        default:
            numberOfChildren = 0;
            break
    }

    return (
        <button
            {...props}
            className={twMerge(
                `w-fit ${buttonClass} ${interaction}`,
                className
            )}
            aria-label={props.label ?? `${interaction}`}
        >
            {children}
        </button>
    )
}


// Buttons: Paginated.jsx, CardRegular (addFav), Products, NavBar and SearchBar buttons, Detail,
// Links: Banner.jsx, CategoryContainer.jsx
