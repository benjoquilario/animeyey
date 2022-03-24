import React from 'react';
import '../../styles/style.css';

const PrevArrow = ({ className, style, onClick }) => {
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
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
         </svg>
      </div>
   );
};

export default PrevArrow;
