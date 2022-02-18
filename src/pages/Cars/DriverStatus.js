import React from 'react';
import Parse from 'parse/dist/parse.min.js';

function DriverStatus() {
  return (
    <div className='home'>
      <h1>Your Car</h1>
      <h2>You have {} new requests </h2>
    </div>
  );
}

export default DriverStatus;