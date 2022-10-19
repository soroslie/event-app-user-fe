import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button type="button" className="w-14 h-14 bg-orange-400 rounded-full animate-bounce b-0 r-0 border-none">
      <FaArrowCircleUp
        onClick={scrollToTop}
        size={40}
        color="white"
        className="m-auto"
      />
    </button>
  );
}

export default ScrollButton;
