import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialstate = {
   watchlist: localStorage.getItem('watchlist')
      ? JSON.parse(localStorage.getItem('watchlist'))
      : [],
   watched: localStorage.getItem('watched')
      ? JSON.parse(localStorage.getItem('watched'))
      : [],
};

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = props => {
   const [state, dispatch] = useReducer(AppReducer, initialstate);

   useEffect(() => {
      localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
      localStorage.setItem('watched', JSON.stringify(state.watched));
   }, [state]);

   const addDataToWatchlist = data => {
      dispatch({ type: 'ADD_DATA_TO_WATCHLIST', payload: data });
   };

   const removeDataFromWatchlist = id => {
      dispatch({ type: 'REMOVE_DATA_FROM_WATCHLIST', payload: id });
   };

   const addDataToWatched = data => {
      dispatch({ type: 'ADD_DATA_TO_WATCHED', payload: data });
   };

   const moveToWatchlist = data => {
      dispatch({ type: 'MOVE_TO_WATCHLIST', payload: data });
   };

   const removeFromWatched = id => {
      dispatch({ type: 'REMOVE_FROM_WATCHED', payload: id });
   };

   return (
      <GlobalContext.Provider
         value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addDataToWatchlist,
            removeDataFromWatchlist,
            addDataToWatched,
            moveToWatchlist,
            removeFromWatched,
         }}
      >
         {props.children}
      </GlobalContext.Provider>
   );
};
