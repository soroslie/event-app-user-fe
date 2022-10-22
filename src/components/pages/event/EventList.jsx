import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorCard from '../../cards/ErrorCard';
import EventItem from './EventItem';
import EventListSkeleton from './EventListSkeleton';

function EventList({ data, loading, error }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {!loading && !error
      && (data.map((item) => (
        <EventItem
          key={item.id}
          ticketPrice={item.ticket_price}
          name={item.name}
          capacity={item.capacity}
          duration={item.duration}
          maxXapacity={item.max_capacity}
          startTime={item.start_time}
          onClick={() => navigate(`/events/${item.id}`)}
        />
      )))}
        {loading && <EventListSkeleton />}
      </div>
      {error && (<ErrorCard message={error.error} />)}
    </div>
  );
}

export default EventList;
