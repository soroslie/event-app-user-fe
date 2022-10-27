import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LocalStorageConstant from '../../constants/local_storage';
import { useGetProfileQuery } from '../../store/slices/apiSlice';
import Spinner from '../Spinner';
import { setProfile } from '../../store/slices/profileSlice';
import StringHelper from '../../helpers/stringHelper';

function NavbarItemDropDown() {
  const token = localStorage.getItem(LocalStorageConstant.TOKEN_KEY);

  if (!token) {
    return (
      <li className="underline-under mx-auto my-auto px-3 py-1 uppercase text-orange-600 duration-300 hover:bg-orange-600 hover:text-white ease-in-out bg-white rounded-full">
        <NavLink to="/login">login</NavLink>
      </li>
    );
  }

  const navigate = useNavigate();

  const doLogout = () => {
    localStorage.removeItem(LocalStorageConstant.TOKEN_KEY);
    navigate('/login');
  };
  const dispatch = useDispatch();

  const { data, error, isFetching: isLoading } = useGetProfileQuery();
  useEffect(() => {
    if (data && !error && !isLoading) {
      dispatch(setProfile({
        membershipType: data.data.membership_type,
        email: data.data.email,
        balance: data.data.balance,
      }));
    }
  }, [data]);

  return (
    <>
      { !error && !isLoading
      && (
      <div className="uppercase dropdown underline-under my-auto">
        <div className=" dropbtn w-12 h-12 bg-white mx-auto rounded-full  flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-orange-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="dropdown-content text-center">
          <p className="dropdown-content-item">
            <NavLink to="/profile" className="flex-col">
              <p>{data.data.email}</p>
              <p>{data.data.membership_type}</p>
              <p className="add-idr">{StringHelper.formatWithCommas(data.data.balance)}</p>
            </NavLink>
          </p>
          <p><NavLink className="dropdown-content-item underline-under p-4 uppercase  duration-300 ease-in-out text-orange-600" to="/topup">toptup</NavLink></p>
          <p><button type="button" className="text-orange-600 mx-auto" onClick={doLogout}>LOGOUT</button></p>
        </div>
      </div>
      )}
      {isLoading && !error && <Spinner />}
    </>
  );
}

export default NavbarItemDropDown;
