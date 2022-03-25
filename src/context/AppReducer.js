const AppReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_DATA_TO_WATCHLIST':
         return {
            ...state,
            watchlist: [action.payload, ...state.watchlist],
         };
      case 'REMOVE_DATA_FROM_WATCHLIST':
         return {
            ...state,
            watchlist: state.watchlist.filter(
               data => data.id !== action.payload
            ),
         };
      case 'ADD_DATA_TO_WATCHED':
         return {
            ...state,
            watchlist: state.watchlist.filter(
               data => data.id !== action.payload.id
            ),
            watched: [action.payload, ...state.watched],
         };
      case 'MOVE_TO_WATCHLIST':
         return {
            ...state,
            watched: state.watched.filter(
               data => data.id !== action.payload.id
            ),
            watchlist: [action.payload, ...state.watchlist],
         };
      case 'REMOVE_FROM_WATCHED':
         return {
            ...state,
            watched: state.watched.filter(data => data.id !== action.payload),
         };
      default:
         return state;
   }
};

export default AppReducer;
