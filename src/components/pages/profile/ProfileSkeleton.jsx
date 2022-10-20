import React from 'react';

function ProfileSkeleton() {
  return (
    <div className="p-8 animate-pulse bg-white shadow-xl mt-4 max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0" />
        <div>
          <div className="flex justify-center items-center mx-auto shadow-2xl h-24 w-24 bg-gray-300 rounded-full">
            <svg
              className="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-center border-b pb-12 mt-4 md:mt-10">
        <div className="h-10 bg-slate-200 rounded" />
        <div className="h-8 bg-slate-200 rounded mt-3" />
        <div className="h-4 bg-slate-200 rounded mt-3" />
      </div>
      <div className="mt-12 flex flex-col justify-center">
        <div className="h-10 bg-slate-200 rounded mt-3" />
        <div className="h-10 bg-slate-200 rounded mt-3" />
        <div className="h-10 bg-slate-200 rounded mt-3" />
      </div>
    </div>
  );
}

export default ProfileSkeleton;
