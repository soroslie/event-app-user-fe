import React from 'react';
import { useGetPurchasableMerchandisesQuery } from '../store/slices/apiSlice';
import picture from '../assets/images/merchandise.jpeg';
import PageHeader from '../components/layout/PageHeader';
import StringHelper from '../helpers/stringHelper';
import '../assets/styles/pages/merchandises.css';

function Merchandises() {
  const { data, isFetching: loading, error } = useGetPurchasableMerchandisesQuery();
  console.log(data);
  return (
    <>
      <PageHeader title="Merchandise" />
      {!loading && !error && data && (
        <div className="grid grid-cols-12 gap-4 mx-auto px-5 ">
          {data.data.map((item) => (
            <div key={item.merchandise_id} className="merchandise hover:border hover:border-orange-600 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 max-w-sm bg-white rounded-md border border-gray-200 shadow-md hover:scale-105 duration-300">
              <div className="">
                <div className="shadow-lg min-w-[100%]">
                  <img className="m-auto w-[100%]" src={picture} alt={item.event_name} />
                </div>
                <div className="px-2 py-2">
                  <h2 className="mb-2 text-md font-semibold tracking-tight text-gray-900">
                    {item.merchandise_name}
                  </h2>
                  <h3 className="add-idr text-orange-600 text-xl">{StringHelper.formatWithCommas(item.merchandise_price)}</h3>
                  <p className="pt-2">
                    <span>{item.merchandise_stock}</span>
                    {' '}
                    <span className="capitalize text-gray-500">stock left</span>
                  </p>
                  <h3 className="uppercase pt-2 text-gray-400">{item.event_name}</h3>
                </div>
              </div>
              <button type="button" className="uppercase w-full bg-orange-600 text-white mx-auto text-center merchandise-btn">add to cart</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Merchandises;
