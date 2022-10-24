/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import Spinner from '../../Spinner';

function BookMarkButton({
  onClick, marked, size, buttonPadding, loading,
}) {
  return (
    <div className="mt-6 mr-6 z-40 absolute top-0 right-0 hover:scale-150 duration-200 ease-in-out bg-[rgba(0,0,0,0.5)] rounded-full  bg-gray-400">
      {loading && <Spinner />}
      {!loading && (
      <button type="button" className={`p-${buttonPadding}`} onClick={onClick}>
        {marked ? <BsBookmark widths={size} size={size || ''} className="text-orange-600" /> : <BsBookmarkFill widths={size} size={size || ''} className="text-orange-600" />}
      </button>
      )}
    </div>
  );
}

export default BookMarkButton;
