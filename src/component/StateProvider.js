import React, { createContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext();

//Building a provider
export const StateProvider = ( { reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//How it is used in a component
export const useStateValue = () => useContext(StateContext);

