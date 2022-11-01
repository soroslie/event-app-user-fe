import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetEventQuery } from '../store/slices/apiSlice';
import EventDetailSkeleton from '../components/pages/eventDetail/EventDetailSkeleton';
import Event from '../components/pages/eventDetail/EventDetail';

function EventDetail() {
  const { id } = useParams();
  const { data, isFetching: loading, error } = useGetEventQuery({ id });

  return (
    <div>
      {loading && !error && (
        <EventDetailSkeleton />
      ) }
      {data && !error && !loading && (
      <Event data={data.data} />
      )}
    </div>
  );
}

export default EventDetail;
