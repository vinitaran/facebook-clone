import React, {createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// higher order component
// wraps the complete app inside stateProvider
export const StateProvider = ( { reducer, initialState, children } ) =>
(
    <StateContext.Provider value = { useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//whenever we want to pull data from the app use "useStateValue"

export const useStateValue = () => useContext(StateContext);