import React from 'react';

const SkeletonElement = ({ type }) => {
   const classes = `${type}`;
   return <div className={classes}></div>;
};

export default SkeletonElement;
