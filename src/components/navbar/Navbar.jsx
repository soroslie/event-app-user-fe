import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import navigationConstant from '../../constants/navigation';
import Logo from '../Logo';
import NavbarItem from './NavbarItem';
import NavbarItemMobile from './NavbarItemMobile';
import NavbarItemDropDown from './NavbarItemDropDown';
import StringHelper from '../../helpers/stringHelper';
import LocalStorageConstant from '../../constants/local_storage';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem(LocalStorageConstant.TOKEN_KEY);

  const { pathname } = useLocation();

  const doLogout = () => {
    localStorage.removeItem(LocalStorageConstant.TOKEN_KEY);
    navigate('/auth');
  };

  const [nav, setnav] = useState(false);
  const [color, setColor] = useState('black');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setColor('black');
    setTextColor('white');
    setnav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#FF6600');
        setTextColor('white');
      } else {
        setColor('black');
        setTextColor('#white');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-50 ease-in duration-300 shadow-lg"
    >
      <Helmet>
        <title>{StringHelper.pathNameToTitle(pathname)}</title>
        <meta name="description" content="Event app" />
      </Helmet>
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Logo color={textColor} />
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          {navigationConstant.nav.map((item) => (
            <NavbarItem
              key={item.id}
              path={item.path}
              title={item.title}
              active={pathname === item.path}
            />
          ))}
          <NavbarItemDropDown />
        </ul>
        {/* Mobile Buton */}
        <button type="button" className="block sm:hidden z-10" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose style={{ color: `${textColor}` }} size={20} />
          ) : (
            <AiOutlineMenu style={{ color: `${textColor}` }} size={20} />
          )}
        </button>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            {navigationConstant.nav.map((item) => (
              <NavbarItemMobile
                key={item.id}
                path={item.path}
                title={item.title}
                active={pathname === item.path}
                onClick={handleNav}
              />
            ))}
            {!token && (
            <li className="underline-under mx-auto my-auto px-3 py-3 uppercase text-orange-600 duration-300 hover:bg-orange-600 hover:text-white ease-in-out bg-white rounded-full">
              <NavLink to="/auth">login</NavLink>
            </li>
            )}
            {token && (
              <div>
                <NavbarItemMobile
                  path="/profile"
                  title="profile"
                  active={pathname === 'profile'}
                  onClick={handleNav}
                />
                <NavbarItemMobile
                  path="/topup"
                  title="topup"
                  active={pathname === 'topup'}
                  onClick={handleNav}
                />
                <li className="underline-under mx-auto my-auto px-3 py-3 uppercase text-orange-600 duration-300 hover:bg-orange-600 hover:text-white ease-in-out bg-white rounded-full">
                  <p className="dropdown-content-item "><button type="button" className="p-4text-orange-600 mx-auto" onClick={doLogout}>LOGOUT</button></p>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>

    </div>
  );
}
