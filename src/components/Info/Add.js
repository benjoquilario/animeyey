import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Add = ({ data }) => {
   const { addDataToWatchlist, watchlist, watched } = useContext(GlobalContext);

   let storedData = watchlist.find(o => o.mal_id === data.mal_id);
   let storedDataWatched = watched.find(o => o.id === data.mal_id);

   const watchListDisabled = storedData
      ? true
      : storedDataWatched
      ? true
      : false;

   return (
      <button
         className="text-sm text-white h-[37px] w-full flex items-center justify-center bg-[#e74538]"
         onClick={() => addDataToWatchlist(data)}
         disabled={watchListDisabled}
      >
         {watchListDisabled ? 'Watching' : 'Add to List'}
      </button>
   );
};

export default Add;
