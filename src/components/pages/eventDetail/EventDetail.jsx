import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { BsGiftFill } from 'react-icons/bs';
import { AiFillCalendar, AiOutlineFieldTime } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import BookMarkButton from '../event/BookMarkButton';
import { useLazyGetEventBookmarkQuery, useEventBookmarkMutation } from '../../../store/slices/apiSlice';
import APIConstatnt from '../../../constants/api';

function Event({ data }) {
  const { email } = useSelector((state) => state.profile);
  const [bookmarking] = useEventBookmarkMutation();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [bookMarked, setBookMarked] = useState(false);
  const [trigger, result, lastPromiseInfo] = useLazyGetEventBookmarkQuery();

  useEffect(() => {
    if (data.id) {
      trigger({ eventId: data.id }).unwrap().then((response) => {
        if (response.data === null) {
          setBookMarked(false);
        }
        if (response.data !== null) {
          setBookMarked(true);
        }
      });
    }
  }, []);

  const handleBookmark = (eventId) => {
    setButtonLoading(true);

    bookmarking({
      eventId,
      method: !bookMarked ? APIConstatnt.METHOD.post : APIConstatnt.METHOD.delete,
    })
      .unwrap()
      .then(() => {
        setButtonLoading(false);
        setBookMarked(!bookMarked);
      })
      .catch((error) => {
        setButtonLoading(false);
        setBookMarked(!bookMarked);
      });
  };

  return (
    <div className="relative mt-20">
      <div className="relative">
        <div className="bg-gray-100 flex rounded-lg sm:rounded-none min-h-[400px]">
          <img src={data.picture} className="m-auto  overflow-hidden" alt={`data.name ${data.name}`} />
          {email && <BookMarkButton marked={bookMarked} size="40" buttonPadding={6} onClick={() => handleBookmark(data.id)} loading={buttonLoading} />}
        </div>
      </div>
      <div className="px-6 absolute w-full mt-[-5%] sm:mt-2 sm:rounded-t-none rounded-t-3xl z-40 my-6 [&>*]:p-2 [&>*]:mt-4 bg-white sm:shadow-xl">
        <div>
          <h1 className="font-bold capitalize text-xl md:text-3xl">{data.name}</h1>
          <p className="text-xl">
            <span className="font-bold">{data.capacity}</span>
            <span className="text-gray-600"> People are joined this event</span>
          </p>
        </div>
        <div className="[&>h1]:text-gray-400 [&>h1]:font-semibold">
          <h1 className="text-lg md:text-xl">Description</h1>
          <p className="text-lg">
            {data.description}
          </p>
        </div>
        <div className="[&>*]:p-1 [&>span>p]:font-bold [&>span>p]:text-lg">
          <span className="align-baseline flex items-center">
            <button type="button" className="rounded-full p-3 bg-orange-100">
              <AiFillCalendar className="w-8 h-8 text-orange-600" />
            </button>
            <p className="ml-4">{moment(data.start_time).format('DD, MMMM YYYY')}</p>
          </span>
          <span className="align-baseline flex items-center ">
            <button type="button" className="rounded-full p-3 bg-orange-100">
              <AiOutlineFieldTime className="w-8 h-8 text-orange-600" />
            </button>
            <p className="ml-4">
              {moment(data.start_time).format('HH:MM')}
              {' '}
              -
              {' '}
              {moment(data.start_time).add(data.duration, 'm').format('HH:MM')}
              {' '}
              (
              {data.duration}
              )
              minutes
            </p>
          </span>
          <span className="align-baseline flex items-center ">
            <button type="button" className="rounded-full p-3 bg-orange-100">
              <BsGiftFill className="w-8 h-8 text-orange-600" />
            </button>
            <p className="ml-4">
              {data.merchandises && `${data.merchandises.length} pcs`}
              {!data.merchandises && 'No Merchandises Available'}
            </p>
          </span>
        </div>
        <div className="[&>h1]:text-gray-400 [&>h1]:font-semibold">
          <h1 className="mb-3 text-xl md:text-2xl">Maps</h1>
          <div className="bg-green-100 p-6 rounded-2xl">
            <iframe
              title="maps"
              className="w-full m-auto rounded-2xl"
              height="600"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Shopee%20Indonesia%20pcp&t=&z=17&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
