import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarItem({ path, title, active }) {
  return (
    <li className={`underline-under p-4 uppercase hover:text-orange-300 duration-300 ease-in-out ${active ? 'underline' : ''}`}>
      <NavLink to={path}>{title}</NavLink>
    </li>
  );
}

export default NavbarItem;
