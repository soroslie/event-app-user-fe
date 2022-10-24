import React, { useState } from 'react';
import moment from 'moment';
import { BsGiftFill } from 'react-icons/bs';
import { AiFillCalendar, AiOutlineFieldTime } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import BookMarkButton from '../event/BookMarkButton';
import image from '../../../assets/images/event-example.jpg';
import { usePostCreateEventBookmarkMutation } from '../../../store/slices/apiSlice';

function Event({ data }) {
  const { email } = useSelector((state) => state.profile);
  const [bookmark] = usePostCreateEventBookmarkMutation();
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleBookmark = (eventId) => {
    setButtonLoading(true);

    bookmark({
      eventId,
    })
      .unwrap()
      .then(() => {
        setButtonLoading(false);
      })
      .catch((error) => {
        setButtonLoading(false);
      });
  };

  return (
    <div className="relative mt-20">
      <div className="relative">
        <img src={image} className="rounded-lg sm:rounded-none overflow-hidden" alt={`data.name ${image}`} />
        {email && <BookMarkButton size="40" buttonPadding={6} onClick={() => handleBookmark(data.id)} loading={buttonLoading} />}
      </div>
      <div className="px-6 absolute w-full mt-[-5%] sm:mt-2 sm:rounded-t-none rounded-t-3xl z-40 my-6 [&>*]:p-2 [&>*]:mt-4 bg-white sm:shadow-xl">
        <div>
          <h1 className="font-bold capitalize text-3xl md:text-5xl">{data.name}</h1>
          <p className="text-xl">
            <span className="font-bold">{data.capacity}</span>
            <span className="text-gray-600"> People are joined this event</span>
          </p>
        </div>
        <div className="[&>h1]:text-gray-400 [&>h1]:font-semibold">
          <h1 className="text-2xl md:text-3xl">Description</h1>
          <p className="text-xl">
            {data.description}
          </p>
        </div>
        <div className="[&>*]:p-1 [&>span>p]:font-bold [&>span>p]:text-xl">
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
          <h1 className="mb-3 text-2xl md:text-3xl">Maps</h1>
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
