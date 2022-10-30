import React from 'react';

function MerchandiseListSkeleton() {
  const loopEventItms = () => {
    const content = [];
    for (let i = 0; i < 8; i += 1) {
      content.push(
        <div key={i} className="animate-pulse col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 max-w-sm bg-white rounded-md border border-gray-200 shadow-md hover:scale-105 duration-300">
          <div className="">
            <div className="shadow-lg min-w-[100%]">
              <div className="flex justify-center items-center w-full h-40 bg-gray-300 rounded">
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
            <div className="px-2 py-2">
              <div className="h-3 bg-gray-200 rounded-full w-48 mb-4" />
              <div className="h-4 bg-gray-200 rounded-full w-32 mb-4" />
              <p className="pt-2">
                <span className="h-2.5 bg-gray-200 rounded-full w-32 mb-4" />
              </p>
              <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-4" />
            </div>
          </div>
          <div className="h-6 bg-gray-200 rounded-full w-full mb-4" />
        </div>,
      );
    }

    return content;
  };

  return (
    <div className="grid grid-cols-12 gap-4 mx-auto px-5 ">
      {loopEventItms()}
    </div>
  );
}

export default MerchandiseListSkeleton;
