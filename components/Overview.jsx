import React from 'react';
import Container from './Container';

export default function Overview() {

  return (
    <div className='overview'>
      {[...(new Array(8))].map((widget, index) => (
        <Container key={index} index={index}>
          {`widget ${index}`}
        </Container>  
      ))}
    </div>
  );
}