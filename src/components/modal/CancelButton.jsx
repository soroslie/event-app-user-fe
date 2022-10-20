import React from 'react';

function CancelModalButton({ onClick, title }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-red-500 bg-white hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 w-full focus:z-10"
    >
      {title}
    </button>
  );
}

export default CancelModalButton;
