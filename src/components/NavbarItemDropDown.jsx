import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocalStorageConstant from '../constants/local_storage';

function NavbarItemDropDown({ active }) {
  const navigate = useNavigate();

  const doLogout = () => {
    localStorage.removeItem(LocalStorageConstant.tokenKey);
    navigate('/login');
  };

  return (
    <div className={`dropdown underline-under p-4 uppercase hover:text-orange-300 duration-300 ease-in-out ${active ? 'underline' : ''}`}>
      <button type="button" className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
        <button type="button" onClick={doLogout} href="/">Logout</button>
      </div>
    </div>

  );
}

export default NavbarItemDropDown;
