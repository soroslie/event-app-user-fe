import React from 'react';

function SecondaryButton({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="uppercase font-bold text-white bg-orange-600 hover:bg-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-300 rounded-full text-sm px-10 py-3 text-center mr-2 mb-2"
    >
      {title}
    </button>
  );
}

export default SecondaryButton;
