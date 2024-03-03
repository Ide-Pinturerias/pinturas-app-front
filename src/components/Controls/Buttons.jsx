import { twMerge } from "tailwind-merge"

export function ButtonPrimary({ children, action, styles }) {
    const interaction = 'transition-focus ease-linear duration-100 hover:bg-primaryLight hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-primaryDark active:scale-[.97]';
    return (
        <button
            className={`w-fit py-[1em] px-[1.5em] bg-primaryClear rounded-[60px] text-primaryVisible font-bold uppercase ${interaction}`}
            style={styles}
            onClick={action}
        >
            {children}
        </button>
    )
}

export function ButtonSecondary({ children, action, styles }) {
    const interaction = 'transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-primaryDull active:scale-[.97]';
    return (
        <button
            className={`w-fit py-[1em] px-[1.5em] box-border bg-bg border border-primaryClear rounded-[60px] text-primaryClear font-bold uppercase ${interaction}`}
            style={styles}
            onClick={action}
        >
            {children}
        </button>
    )
}

export function ButtonTertiary({ children, action, styles }) {
    return (
        <button
            className="underline text-accentClear"
            style={styles}
            onClick={action}
        >
            {children}
        </button>
    )
}

export function ButtonDanger({ children, action, styles }) {
    const interaction = 'transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-secondaryDull active:scale-[.97]';
    return (
        <button
            className={`w-fit py-[1em] px-[1.5em] box-border bg-transparent border border-secondaryClear rounded-[60px] font-bold uppercase text-secondaryClear ${interaction}`}
            style={styles}
            onClick={action}
        >
            {children}
        </button>
    )
}

export function Button({ children, variant, className, ...props }) {
    let buttonClass
    let interaction

    switch (variant) {
        case "primary":
            buttonClass = "bg-primaryClear text-primaryVisible"
            interaction =
                "transition-focus ease-linear duration-100 hover:bg-primaryLight hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-[1.7px] active:bg-primaryDark active:scale-[.97]"
            break
        case "secondary":
            buttonClass = "bg-bg border border-primaryClear text-primaryClear"
            interaction =
                "transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-[1.7px] active:bg-primaryDull active:scale-[.97]"
            break
        case "tertiary":
            buttonClass = "underline text-accentClear"
            break
        case "danger":
            buttonClass = "bg-bg border border-secondaryClear text-secondaryClear"
            interaction =
                "transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-[1.7px] active:bg-secondaryDull active:scale-[.97]"
            break
        default:
            buttonClass = ""
            interaction = ""
            break
    }

    return (
        <button
            {...props}
            className={twMerge(
                `w-fit box-border py-[1em] px-[1.5em] rounded-[60px] font-bold uppercase ${buttonClass} ${interaction}`,
                className
            )}
        >
            {children}
        </button>
    )
}

// Buttons: Paginated.jsx, CardRegular (addFav), Products, NavBar and SearchBar buttons, Detail,
// Links: Banner.jsx, CategoryContainer.jsx