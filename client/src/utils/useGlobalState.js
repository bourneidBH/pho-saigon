import React from 'react';
import { createContext, useReducer, useContext } from 'react';
// import API from "./API";

// Action types
const GET_MENU = 'GET_MENU';

// Define conext and reducer for updating context
const GlobalStateContext = createContext();

const initialState = {
    menu: []
};

const globalStateReducer = (state, action) => {
    switch (action.type) {
        case 'GET_MENU': 
            return {
                ...state,
                menu: {...action.payload},
            };
            default:
                return state
    };
};

// Export a component to provide context to children. Wrap app top level componnent in this.
export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);

    return (
        <GlobalStateContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalStateContext.Provider>
    );
};

const useGlobalState = () => {
    const [state, dispatch] = useContext(GlobalStateContext);

    const setMenu = ({})
}
