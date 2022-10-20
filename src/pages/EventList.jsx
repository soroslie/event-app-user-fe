import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import EventItem from '../components/pages/event/EventItem';
import EventItemSkeleton from '../components/pages/event/EventItemSkeleton';
import { useGetEventsQuery } from '../store/slices/apiSlice';

function EventList() {
  const {
    data,
    error,
    isFetching: loading,
  } = useGetEventsQuery();
  return (
    <div>
      <PageHeader title="browse all events" />
      <div className="grid grid-cols-12 gap-4">
        {!loading && !error
      && (data.data.map((item) => (
        <EventItem
          key={item.id}
          ticketPrice={item.ticket_price}
          name={item.name}
          capacity={item.capacity}
          duration={item.duration}
          maxXapacity={item.max_capacity}
          startTime={item.start_time}
        />
      )))}
        {loading && !error && <EventItemSkeleton />}
      </div>
    </div>
  );
}

export default EventList;
