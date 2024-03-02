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
            className={`w-fit py-[1em] px-[1.5em] box-border bg-transparent border border-primaryClear rounded-[60px] text-primaryClear font-bold uppercase ${interaction}`}
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

// Buttons: Banner.jsx, Paginated.jsx, CardRegular (addFav), Products, NavBar and SearchBar buttons, Detail,
// Links: Banner.jsx, CategoryContainer.jsx