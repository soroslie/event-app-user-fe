import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorCard from '../../cards/ErrorCard';
import EventItem from './EventItem';
import EventListSkeleton from './EventListSkeleton';

function EventList({ data, loading, error }) {
  const { email } = useSelector((state) => state.profile);

  const navigate = useNavigate();
  return (
    <div className="flex">
      {!loading && !error && !data && <div className="text-center w-full text-xl text-orange-600 font-bold my-14 uppercase">no matching result</div>}
      {loading && !error && <EventListSkeleton />}
      {!loading && !error && data
      && (
      <div className="grid grid-cols-12 gap-4 mx-auto px-5">
        {(data.map((item) => (
          <EventItem
            key={item.id}
            ticketPrice={item.ticket_price}
            name={item.name}
            capacity={item.capacity}
            duration={item.duration}
            maxXapacity={item.max_capacity}
            startTime={item.start_time}
            onClick={() => navigate(`/events/${item.id}`)}
            picture={item.picture}
            categories={item.category_name}
            enableBookmark={email !== ''}
          />
        )))}
      </div>
      )}
      {error && (<ErrorCard message={error.error} />)}
    </div>
  );
}

export default EventList;
