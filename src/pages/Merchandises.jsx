import React from 'react';
import { useGetPurchasableMerchandisesQuery } from '../store/slices/apiSlice';
import PageHeader from '../components/layout/PageHeader';
import '../assets/styles/pages/merchandises.css';
import MerchandiseListSkeleton from '../components/pages/merchandises/MerchandiseListSkeleton';
import MerchandiseItem from '../components/pages/merchandises/MerchandiseItem';
import EmptyMerchandise from '../components/pages/merchandises/EmptyMerchandise';
import ErrorCard from '../components/cards/ErrorCard';

function Merchandises() {
  const { data, isFetching: loading, error } = useGetPurchasableMerchandisesQuery();
  return (
    <>
      <PageHeader title="Merchandise" />
      {loading && !error && <MerchandiseListSkeleton />}
      {!loading && error && <ErrorCard message={error.error} />}
      {!loading && !error && data.data == null && (
      <EmptyMerchandise />
      )}
      {!loading && !error && data.data != null && (
        <div className="grid grid-cols-12 gap-4 mx-auto px-5">
          {data.data.map((item) => (
            <MerchandiseItem
              key={item.merchandise_id}
              eventName={item.event_name}
              merchandiseId={item.merchandise_id}
              isOutofStock={item.merchandise_stock === 0}
              merchandiseName={item.merchandise_name}
              merchandisePrice={item.merchandise_price}
              merchandiseStock={item.merchandise_stock}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Merchandises;
