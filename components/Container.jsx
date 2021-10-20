import React from 'react';

export default function Container({children, index}) {

  return (
    <div className={`container widget--${index}`}> 
      {children}
    </div>  
  )
}