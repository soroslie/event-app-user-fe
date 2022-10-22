import React from 'react';
import StringHelper from '../../../helpers/stringHelper';

function MembershipItem({
  name, discount, price, isLoading,
}) {
  return (
    <div className="text-center shadow-md mx-8 sm:mx-0 rounded-xl md:shadow-md col-span-12 md:col-span-3 hover:scale-105 duration-300">
      {isLoading ? <div className=" bg-slate-200 rounded h-44" />
        : (
          <>
            <div className="font-bold text-3xl py-4 bg-secondary-grey capitalize">{name}</div>
            <div className="bg-white text-2xl">
              <div className="p-3 font-semibold text-green-500 add-percentage">{discount}</div>
              <div className="p-3 ">{price === 0 ? <p className="text-red-300">Free</p> : <p className="add-idr text-blue-300">{StringHelper.formatWithCommas(price)}</p> }</div>
            </div>
          </>
        )}
    </div>
  );
}

export default MembershipItem;
