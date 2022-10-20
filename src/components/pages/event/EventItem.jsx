import React from 'react';
import moment from 'moment';
import { BsCoin, BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import image from '../../../assets/images/event-example.jpg';

function EventItem() {
  return (
    <div className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-300">
      <div className="p-3">
        <img className="rounded-3xl shadow-lg" src={image} alt="" />
      </div>
      <div className="px-4 pb-4">
        <a href="/">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Event Name</h5>
        </a>
        <div className="grid grid-cols-2">
          <div>
            <p className="mb-1 font-normal text-gray-600 text-sm align-baseline flex items-center">
              <AiOutlineCalendar className="mr-1 text-orange-600" />
              {moment(new Date()).format('DD MMMM YYYY')}
            </p>
            <p className="mb-3 font-normal text-gray-600 text-sm align-baseline flex items-center">
              <span className="align-baseline flex items-center">
                <GrLocation className="text-orange-600 mr-1" />
                {' '}
                Lokasi
              </span>
              {' '}
              <span className="mx-1">|</span>
              {' '}
              <span className="align-baseline flex items-center">
                <BsCoin className="mr-1 text-yellow-600" />
                {' '}
                price
              </span>
            </p>
          </div>
          <div>
            <p className="mb-1 font-normal text-gray-600 text-sm align-baseline flex items-center justify-end">
              10/100
              <BsFillPersonFill className="text-orange-600" />
            </p>
            <p className="text-right mb-3 font-normal text-gray-600 text-sm">
              90
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
