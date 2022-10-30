import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGetPurchasableMerchandisesQuery } from '../store/slices/apiSlice';
import PageHeader from '../components/layout/PageHeader';
import StringHelper from '../helpers/stringHelper';
import '../assets/styles/pages/merchandises.css';
import MerchandiseListSkeleton from '../components/pages/merchandises/MerchandiseListSkeleton';
import MerchandiseItem from '../components/pages/merchandises/MerchandiseItem';

function Merchandises() {
  const { data, isFetching: loading, error } = useGetPurchasableMerchandisesQuery();
  return (
    <>
      <PageHeader title="Merchandise" />
      {loading && !error && <MerchandiseListSkeleton />}
      {!loading && !error && data == null && (
      <div className="text-center my-32 font-bold">
        <h1 className="mb-3">NO AVAILABLE MERCHANDISE </h1>
        <NavLink className="text-white bg-orange-600 p-3 rounded-full" to="/events">JOIN EVENT</NavLink>
      </div>
      )}
      {!loading && !error && data && (
        <div className="grid grid-cols-12 gap-4 mx-auto px-5 ">
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
