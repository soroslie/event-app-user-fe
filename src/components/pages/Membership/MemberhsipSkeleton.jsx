import React from 'react';

function MemberhsipSkeleton() {
  return (
    <div className="grid mx-4 grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-4 max-w-[1240px] ">
      <div className="shadow-md mx-8 sm:mx-0 rounded-xl md:shadow-md col-span-12 md:col-span-3 hover:scale-105">
        <div className=" bg-slate-200 rounded h-44" />
      </div>
      <div className="shadow-md mx-8 sm:mx-0 rounded-xl md:shadow-md col-span-12 md:col-span-3 hover:scale-105">
        <div className=" bg-slate-200 rounded h-44" />
      </div>
      <div className="shadow-md mx-8 sm:mx-0 rounded-xl md:shadow-md col-span-12 md:col-span-3 hover:scale-105">
        <div className=" bg-slate-200 rounded h-44" />
      </div>
      <div className="shadow-md mx-8 sm:mx-0 rounded-xl md:shadow-md col-span-12 md:col-span-3 hover:scale-105">
        <div className=" bg-slate-200 rounded h-44" />
      </div>
    </div>
  );
}

export default MemberhsipSkeleton;
