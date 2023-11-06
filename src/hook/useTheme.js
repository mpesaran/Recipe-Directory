import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
    const context = useContext(ThemeContext)
    
    if (context === undefined) { //context is going to be undefined if we trying to use context outside the scope of it
        throw new Error("useTheme() must be used inside a themeProvider")
    }

    return context
}