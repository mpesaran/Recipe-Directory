import { createContext } from "react";

export const ThemeContext = createContext() // theme context object

export function ThemeProvider ({ children }) { //children prop represents any children components that this componentmight wrap, 
                                                //so we can render those children inside this component template.
    
                                                
    return(
        <ThemeContext.Provider value={{color : 'blue'}}>
            {children}
        </ThemeContext.Provider>
    )
}