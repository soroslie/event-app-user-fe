import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import navigationConstant from '../constants/navigation';
import Logo from './Logo';
import NavbarItem from './NavbarItem';
import NavbarItemMobile from './NavbarItemMobile';
import NavbarItemDropDown from './NavbarItemDropDown';

export default function Navbar() {
  const { pathname } = useLocation();

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
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Logo color={textColor} />
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          {navigationConstant.nav.map((item) => (
            <NavbarItem
              key={item.key}
              path={item.path}
              title={item.title}
              active={pathname === item.path}
            />
          ))}
          <NavbarItem
            path="/profile"
            title="profile"
            active={pathname === '/profile'}
          />
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
          </ul>
        </div>
      </div>

    </div>
  );
}
