import {
   addToPlanToWatch,
   removeFromPlanToWatch,
   addToCompleted,
   moveToPlanToWatch,
   removeFromCompleted,
} from './ActionTypes';

const AppReducer = (state, action) => {
   switch (action.type) {
      case addToPlanToWatch:
         return {
            ...state,
            planToWatch: [action.payload, ...state.planToWatch],
         };
      case removeFromPlanToWatch:
         return {
            ...state,
            planToWatch: state.planToWatch.filter(
               data => data.id !== action.payload
            ),
         };
      case addToCompleted:
         return {
            ...state,
            planToWatch: state.planToWatch.filter(
               data => data.id !== action.payload.id
            ),
            completed: [action.payload, ...state.complete],
         };
      case moveToPlanToWatch:
         return {
            ...state,
            complete: state.complete.filter(
               data => data.id !== action.payload.id
            ),
            planToWatch: [action.payload, ...state.watchlist],
         };
      case removeFromCompleted:
         return {
            ...state,
            complete: state.complete.filter(data => data.id !== action.payload),
         };
      default:
         return state;
   }
};

export default AppReducer;
