import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Add = ({ data }) => {
   const { addDataToPlanToWatch, planToWatch, completed } =
      useContext(GlobalContext);

   let storedData = planToWatch.find(o => o.mal_id === data.mal_id);
   let storedDataCompleted = completed.find(o => o.id === data.mal_id);

   const planToWatchDisabled = storedData
      ? true
      : storedDataCompleted
      ? true
      : false;

   return (
      <button
         className="text-sm text-white h-[37px] w-full flex items-center justify-center bg-[#e74538]"
         onClick={() => addDataToPlanToWatch(data)}
         disabled={planToWatchDisabled}
      >
         {planToWatchDisabled ? 'Watching' : 'Add to List'}
      </button>
   );
};

export default Add;
