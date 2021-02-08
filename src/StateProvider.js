import React, { useContext, useReducer } from 'react';


export const StateContext = useContext();
export const StateProvider = ({ reducer, initialState, children }) => (
   <StateProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
   </StateProvider.Provider>
);

export const useStateValue = () => useContext(StateContext);