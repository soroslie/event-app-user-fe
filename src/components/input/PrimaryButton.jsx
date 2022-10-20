import React from 'react';
import Spinner from '../Spinner';

function PrimarryButton({
  title, onClick, isLoading, disabled,
}) {
  return (
    isLoading ? <Spinner /> : (
      <button
        disabled={disabled ? true : ''}
        onClick={onClick}
        type="submit"
        className={`inline-block rounded-md px-7 py-3 text-white font-medium text-sm leading-snug uppercase shadow-md transition duration-150 ease-in-out w-full my-4 ${disabled ? 'cursor-not-allowed bg-gray-400' : 'bg-orange-600 hover:bg-orange-400 hover:shadow-lg focus:bg-orange-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg '}`}
      >
        {title}
      </button>
    )

  );
}

export default PrimarryButton;
