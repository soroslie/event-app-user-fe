import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo({ color }) {
  return (
    <NavLink to="/">
      <h1 style={{ color: `${color}` }} className="font-bold text-4xl ">
        Event App
      </h1>
    </NavLink>
  );
}

export default Logo;
