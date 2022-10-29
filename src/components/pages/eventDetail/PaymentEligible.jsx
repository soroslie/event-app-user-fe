import React from 'react';

function PaymentEligible() {
  return (
    <div className="mb-6 mr-6 hover:cursor-pointer z-40 absolute bottom-0 right-0 rounded-full border p-3 border-orange-600 bg-gray-50 hover:scale-105 duration-300 ease-in-out">
      <div className="text-orange-600 uppercase font-semibold"><p>ELIGIBLE</p></div>
    </div>
  );
}

export default PaymentEligible;
