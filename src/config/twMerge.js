import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            "outline-offset": ["outline-offset-focus"],
            "outline-w": ["outline-focus"]
        }
    }
});

export default twMerge;