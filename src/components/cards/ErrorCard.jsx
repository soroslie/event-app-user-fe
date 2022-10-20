import React from 'react';
import image from '../../assets/images/warning.png';

function ErrorCard({ message }) {
  return (
    <div className="my-3 mx-auto">
      <img src={image} alt="error" className="text-center mx-auto items-center" />
      <p className="text-center text-red-600 text-xl md:text-2xl">{message}</p>
    </div>
  );
}

export default ErrorCard;
