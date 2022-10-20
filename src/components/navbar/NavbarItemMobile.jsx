/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarItemMobile({
  onClick, title, path, active,
}) {
  return (
    <li onClick={onClick} className={`underline-under p-4 text-4xl capitalize hover:text-gray-500 ${active ? 'underline' : ''}`}>
      <NavLink to={path}>{title}</NavLink>
    </li>
  );
}

export default NavbarItemMobile;
