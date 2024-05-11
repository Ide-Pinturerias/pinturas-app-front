import { Link } from "react-router-dom";

export function ButtonLink({ children, path, styles }) {
    const interaction = 'transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-primaryDull active:scale-[.97]';
    return (
        <Link
            className={`w-fit p-4 box-border bg-transparent border border-primaryClear rounded-[60px] font-bold font-primary text-primaryClear ${interaction}`}
            style={styles}
            to={path}
        >
            {children}
        </Link>
    )
}

export function PlainNavLink({ children, path, styles }) {
    const interaction = 'outline-offset-[1.5px] focus:outline-focus focus:outline focus-visible:outline-focus focus-visible:outline';
    const link = 'cursor-pointer hover:underline hover:text-primaryVisible active:no-underline';
    return (
        <Link
            className={`${link} ${interaction}`}
            style={styles}
            to={path}
        >
            {children}
        </Link>
    )
}

export function PlainExternalLink({ children, path, styles, icon }) {
    const interaction = 'outline-offset-[1.5px] focus:outline-focus focus:outline focus-visible:outline-focus focus-visible:outline';
    const textStyle = 'cursor-pointer hover:underline hover:text-primaryVisible active:no-underline';
    const iconStyle = `w-7 h-7 flex items-center justify-center fill-clear hover:fill-primaryVisible rounded-sm cursor-pointer transition-[fill] duration-300`;
    return (
        <a
            className={`${icon ? iconStyle : textStyle} ${interaction}`}
            style={styles}
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to external site"
        >
            {children}
        </a>
    )
}
