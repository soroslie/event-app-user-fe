/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import moment from 'moment';
import { BsCoin, BsPerson } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import StringHelper from '../../../helpers/stringHelper';

function EventItem({
  name,
  ticketPrice,
  capacity,
  maxXapacity,
  picture,
  startTime,
  duration,
  categories,
  onClick,
}) {
  return (
    <div onClick={onClick} className="hover:cursor-pointer col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md hover:scale-105 duration-300">
      <div className="p-3 relative">
        <div className="rounded-3xl shadow-lg min-w-[100%] min-h-[200px]  bg-gray-100 flex">
          <img className="m-auto  rounded-3xl w-[100%]" src={picture} alt={name} />
          {/* {enableBookmark && <BookMarkButton buttonPadding={2} />} */}
        </div>
      </div>
      <div className="px-4 py-2">
        <a href="/" className="relative">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="grid grid-cols-2">
          <div>
            <p className="mb-1 font-normal text-gray-600 text-xs align-baseline flex items-center">
              <AiOutlineCalendar className="mr-1 text-orange-600 w-4 h-6" />
              {moment(startTime).format('DD, MMM YYYY')}
            </p>
            <p className="mb-3 font-normal text-gray-600 text-sm align-baseline flex items-center">
              <span className="align-baseline flex items-center">
                <BsCoin className="mr-1 text-yellow-600" />
                {' '}
                {StringHelper.formatWithCommas(ticketPrice)}
              </span>
            </p>
          </div>
          <div>
            <p className="mb-1 font-normal text-gray-600 text-sm align-baseline flex items-center justify-end">
              {`${capacity}/${maxXapacity}`}
              <BsPerson className="text-orange-600" />
            </p>
            <p className="text-right mb-1 font-normal text-gray-600 text-sm">
              {duration}
              {' '}
              <span>minutes</span>
            </p>
          </div>
          <p className="uppercase text-bold text-center mb-1 p-1 font-normal text-orange-600 border rounded-full text-xs border-solid border-orange-600">
            {categories}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
