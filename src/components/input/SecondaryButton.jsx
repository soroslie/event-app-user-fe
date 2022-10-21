import React from 'react';
import Spinner from '../Spinner';

function SecondaryButton({ title, onClick, isLoading }) {
  return (
    isLoading ? <Spinner /> : (
      <button
        onClick={onClick}
        type="button"
        className="uppercase font-bold text-white bg-orange-600 hover:bg-orange-400 duration-300 focus:outline-none focus:ring-1 focus:ring-orange-300 rounded-full text-sm px-10 py-3 text-center mr-2 mb-2"
      >
        {title}
      </button>
    )
  );
}

export default SecondaryButton;
