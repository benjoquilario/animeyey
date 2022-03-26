import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

import {
   addToPlanToWatch,
   removeFromPlanToWatch,
   addToCompleted,
   moveToPlanToWatch,
   removeFromCompleted,
} from './ActionTypes';

const initialstate = {
   planToWatch: localStorage.getItem('planToWatch')
      ? JSON.parse(localStorage.getItem('planToWatch'))
      : [],
   completed: localStorage.getItem('completed')
      ? JSON.parse(localStorage.getItem('completed'))
      : [],
};

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = props => {
   const [state, dispatch] = useReducer(AppReducer, initialstate);

   useEffect(() => {
      localStorage.setItem('planToWatch', JSON.stringify(state.planToWatch));
      localStorage.setItem('completed', JSON.stringify(state.completed));
   }, [state]);

   const addDataToPlanToWatch = data => {
      dispatch({ type: addToPlanToWatch, payload: data });
   };

   const removeDataFromPlanToWatch = id => {
      dispatch({ type: removeFromPlanToWatch, payload: id });
   };

   const addDataToCompleted = data => {
      dispatch({ type: addToCompleted, payload: data });
   };

   const moveDataToPlanToWatch = data => {
      dispatch({ type: moveToPlanToWatch, payload: data });
   };

   const removeDataFromCompleted = id => {
      dispatch({ type: removeFromCompleted, payload: id });
   };

   return (
      <GlobalContext.Provider
         value={{
            planToWatch: state.planToWatch,
            completed: state.completed,
            addDataToPlanToWatch,
            removeDataFromPlanToWatch,
            addDataToCompleted,
            moveDataToPlanToWatch,
            removeDataFromCompleted,
         }}
      >
         {props.children}
      </GlobalContext.Provider>
   );
};
