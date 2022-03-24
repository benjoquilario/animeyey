import React from 'react';
import '../../styles/style.css';

const NextArrow = ({ className, style, onClick }) => {
   return (
      <div
         className={className}
         style={{
            ...style,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
         }}
         onClick={onClick}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white"
            fill="currentColor"
            stroke="currentColor"
         >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
         </svg>
      </div>
   );
};

export default NextArrow;
