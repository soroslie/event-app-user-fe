import React from 'react';
import StringHelper from '../../../helpers/stringHelper';
import picture from '../../../assets/images/merchandise.jpeg';

function MerchandiseItem({
  isOutofStock, merchandiseName, merchandiseStock, eventName, merchandisePrice,
}) {
  return (
    <div className={`hover:scale-105 duration-300 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 max-w-sm rounded-md border border-gray-200 shadow-md ${isOutofStock ? ' bg-white hover:border hover:bg-gray-300 hover:border-gray-600' : 'merchandise hover:border hover:border-orange-600 '}`}>
      <div className={isOutofStock ? 'cursor-not-allowed' : ''}>
        <div className="shadow-lg min-w-[100%]">
          <img className="m-auto w-[100%]" src={picture} alt={eventName} />
        </div>
        <div className="px-2 py-2">
          <h2 className="mb-2 text-md font-semibold tracking-tight text-gray-900">
            {merchandiseName}
          </h2>
          <h3 className="add-idr text-orange-600 text-xl">{StringHelper.formatWithCommas(merchandisePrice)}</h3>
          <p className="pt-2">
            {isOutofStock ? <span className="text-red-600">OUT OF STOCK</span> : (
              <>
                {' '}
                <span>{merchandiseStock}</span>
                {' '}
                <span className="capitalize text-gray-500">stock left</span>
              </>
            )}
          </p>
          <h3 className="uppercase pt-2 text-gray-400">{eventName}</h3>
        </div>
        {isOutofStock ? null : <button type="button" className="uppercase w-full hover:scale-105 hover:text-bold duration-300 ease-in-out bg-orange-600 text-white mx-auto text-center merchandise-btn">add to cart</button>}
      </div>
    </div>
  );
}

export default MerchandiseItem;
