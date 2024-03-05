export const afterPseudo = `
    after:content-[""] after:absolute after:opacity-0 after:-inset-2 
    after:rounded-lg after:shadow-main after:bg-bgFocus 
    after:border after:border-hightlight 
    after:transition-focus after:ease-linear after:duration-100 

    hover:after:opacity-100
    focus:after:opacity-100

    focus:after:outline focus:after:outline-focus focus:after:outline-offset-focus 
    focus:after:bg-duller focus:after:border-clear focus:after:shadow-main
    after:mix-blend-multiply

    after:pointer-events-none
`