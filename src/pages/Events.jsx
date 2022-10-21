import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import EventList from '../components/pages/event/EventList';
import { useGetEventsQuery } from '../store/slices/apiSlice';

function Events() {
  const {
    data,
    error,
    isFetching: loading,
  } = useGetEventsQuery();
  return (
    <div>
      <PageHeader title="browse all events" />
      <EventList
        data={!loading && !error ? data.data : []}
        loading={!!(loading && !error)}
        error={!loading && !error ? error : null}
      />
    </div>
  );
}

export default Events;
