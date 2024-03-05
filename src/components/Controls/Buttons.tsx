import React, { ButtonHTMLAttributes, Children, ReactNode } from "react";
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    variant: "primary" | "secondary" | "tertiary" | "danger",
    subVariant: "icon"
}

export function Button({ children, variant, subVariant, className, ...props }: ButtonProps) {
    let buttonClass: string;
    let interaction: string;

    switch (variant) {
        case "primary":
            buttonClass = "bg-primaryClear text-primaryVisible"
            interaction = "transition-focus ease-linear duration-100 hover:bg-primaryLight hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-[1.7px] active:bg-primaryDark active:scale-[.97]"
            break;
        case "secondary":
            buttonClass = "bg-bg border border-primaryClear text-primaryClear"
            interaction = "transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-[1.7px] active:bg-primaryDull active:scale-[.97]"
            break;
        case "tertiary":
            buttonClass = "underline text-accentClear"
            break;
        case "danger":
            buttonClass = "bg-bg border border-secondaryClear text-secondaryClear"
            interaction = "transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-[1.7px] active:bg-secondaryDull active:scale-[.97]"
            break;
        default:
            buttonClass = ""
            interaction = ""
            break
    }

    switch (subVariant) {
        case "icon":
            const numberOfChildren = Children.count(children);
            buttonClass = `${buttonClass} ${numberOfChildren === 1 ? "grid place-items-center p-0" : "flex items-center"}`;
            break;
        default:
            break;
    }

    return (
        <button {...props} className={twMerge(`w-fit box-border py-[1em] px-[1.5em] rounded-[60px] font-bold uppercase ${buttonClass} ${interaction}`, className)}>
            {children}
        </button>
    )
}