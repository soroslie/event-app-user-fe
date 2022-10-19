import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [nav, setnav] = useState(false);
  // nav styling state
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
          <li className="p-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/memberships">Memberships</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/work">Work</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/contact">Contact</NavLink>
          </li>
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
            <button type="button" onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <NavLink to="/">Home</NavLink>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
