import React from 'react';

function TertiaryButton({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="uppercase my-auto border-1 font-bold text-orange-600 hover:text-white bg-white duration-300 border-orange-600 border-solid hover:bg-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-300 rounded-full text-sm px-5 py-1 text-center mb-2"
    >
      {title}
    </button>
  );
}

export default TertiaryButton;
