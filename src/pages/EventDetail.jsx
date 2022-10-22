import React from 'react';
import { BsGiftFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import image from '../assets/images/event-example.jpg';
import { useGetEventQuery } from '../store/slices/apiSlice';

function EventDetail() {
  const { id } = useParams();
  const { data, loading, error } = useGetEventQuery({ id });

  return (
    <div>
      {data && !error && !loading && (
      <div>
        <img src={image} alt={`data.data.name ${image}`} />
        <div className="px-4 my-6 [&>*]:p-2 [&>*]:mt-4">
          <div>
            <h1 className="font-bold capitalize text-5xl">{data.data.name}</h1>
            <p className="text-xl">
              <span className="font-bold">{data.data.capacity}</span>
              <span className="text-gray-600"> People are joined this event</span>
            </p>
          </div>
          <div className="[&>h1]:text-gray-500 [&>h1]:text-3xl [&>h1]:font-bold">
            <h1 className="text-3xl text-gray-500">Description</h1>
            <p className="text-xl">
              {data.data.description}
            </p>
          </div>
          <div className="[&>*]:p-1 [&>span>p]:font-bold [&>span>p]:text-xl">
            <span className="align-baseline flex items-center">
              <button type="button" className="rounded-full p-3 bg-orange-100">
                <AiFillCalendar className="w-8 h-8 text-orange-600" />
              </button>
              <p className="ml-4">{moment(data.data.start_time).format('DD, MMMM YYYY')}</p>
            </span>
            <span className="align-baseline flex items-center ">
              <button type="button" className="rounded-full p-3 bg-orange-100">
                <BsGiftFill className="w-8 h-8 text-orange-600" />
              </button>
              <p className="ml-4">
                {data.data.merchandises && `${data.data.merchandises.length} pcs`}
                {!data.data.merchandises && 'No Merchandises Available'}
              </p>
            </span>
          </div>
          <div className="[&>h1]:text-gray-500 [&>h1]:text-3xl [&>h1]:font-bold">
            <h1>Maps</h1>
            <iframe
              title="maps"
              className="w-full m-auto"
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
      )}
    </div>
  );
}

export default EventDetail;
