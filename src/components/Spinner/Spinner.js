import React from 'react';
import './Spinner.css';

const Spinner = ({ w, h }) => {
   return (
      <div className="spinner">
         <div className="lds-ring">
            <div style={{ width: w, height: h }}></div>
            <div style={{ width: w, height: h }}></div>
            <div style={{ width: w, height: h }}></div>
            <div style={{ width: w, height: h }}></div>
         </div>
      </div>
   );
};

export default Spinner;
