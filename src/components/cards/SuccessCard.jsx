import React from 'react';
import image from '../../assets/images/success.png';

function SuccessCard({ message }) {
  return (
    <div className="my-3">
      <img src={image} alt="error table" />
      <p className="text-center text-green-600 text-xl md:text-2xl">{message}</p>
    </div>
  );
}

export default SuccessCard;
