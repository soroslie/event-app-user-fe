import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../../assets/images/empty.png';

function EmptyMerchandise() {
  return (
    <div className="text-center my-32 font-bold">
      <img src={image} alt="not available" className="mx-auto w-60 h-60" />
      <h1 className="mb-32">NO AVAILABLE MERCHANDISE </h1>
      <NavLink className="text-white bg-orange-600 p-3 rounded-full" to="/events">JOIN EVENT</NavLink>
    </div>
  );
}

export default EmptyMerchandise;
