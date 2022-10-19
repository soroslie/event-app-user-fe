import React from 'react';

function MembershipItem({
  name, discount, price, isLoading,
}) {
  return (
    <div className="shadow-md mx-8 sm:mx-0 rounded-xl md:shadow-md col-span-12 md:col-span-3 hover:scale-105">
      {isLoading ? <div className=" bg-slate-200 rounded h-44" />
        : (
          <>
            <div className="text-xlfont-bold text-3xl py-4 bg-secondary-grey capitalize">{name}</div>
            <div className="bg-white text-2xl font-semibold">
              <div className="p-3 text-green-500 add-percentage">{discount}</div>
              <div className="p-3 text-blue-300  add-idr ">{price}</div>
            </div>
          </>
        )}
    </div>
  );
}

export default MembershipItem;
