/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

function BookMarkButton({ onClick, marked }) {
  return (
    <div className="mt-6 mr-6 absolute top-0 right-0 hover:scale-150 duration-200 ease-in-out bg-[rgba(0,0,0,0.5)] rounded-full  bg-gray-400">
      <button type="button" className="p-2" onClick={onClick}>
        {marked ? <BsBookmark className="text-orange-600" /> : <BsBookmarkFill className="text-orange-600" />}
      </button>
    </div>
  );
}

export default BookMarkButton;
