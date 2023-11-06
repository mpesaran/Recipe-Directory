import { createContext , useReducer } from "react";

export const ThemeContext = createContext() // theme context object

const themeReducer = (state , action) => { 
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}
        default: 
            return state
    }
}

export function ThemeProvider ({ children }) { //children prop represents any children components that this componentmight wrap, 
                                                //so we can render those children inside this component template.
    const [state , dispatch] =useReducer(themeReducer , { 
        color: '#58249c'
    })

    const changeColor = (color) => {
        dispatch({type : 'CHANGE_COLOR', payload: color }) //dipatch func. takes in an object as an argument which is  referred to as the dispatch action and on the action objest we
                    // can specify two properties: a type property and a payload propperty .
                    // type: basically describes the type of state change we want to make. 
                    //payload : is any data we want to base the state change on
    }

    return(
        <ThemeContext.Provider value={{...state , changeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}