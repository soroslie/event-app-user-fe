import React from 'react';
import moment from 'moment';
import { BsCoin, BsPerson } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import BookMarkButton from './BookMarkButton';
import image from '../../../assets/images/event-example.jpg';
import StringHelper from '../../../helpers/stringHelper';

function EventItem({
  name,
  ticketPrice,
  capacity,
  maxXapacity,
  startTime,
  duration,
}) {
  return (
    <div className="hover:cursor-pointer col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-300">
      <div className="p-3 relative">
        <img className="rounded-3xl shadow-lg" src={image} alt="" />
        <BookMarkButton />
      </div>
      <div className="px-4 pb-4">
        <a href="/" className="relative">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="grid grid-cols-2">
          <div>
            <p className="mb-1 font-normal text-gray-600 text-xs align-baseline flex items-center">
              <AiOutlineCalendar className="mr-1 text-orange-600" />
              {moment(startTime).format('DD MMM YYYY')}
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
            <p className="text-right mb-3 font-normal text-gray-600 text-sm">
              {duration}
              {' '}
              <span>minutes</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
