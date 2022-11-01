import React from 'react';
import image from '../../../assets/images/empty_cart.png';

function EmptyTransactions() {
  return (
    <tr className="uppercase font-medium border-b-2 text-black [&>*]:px-2 [&>*]:py-20 text-center">
      <td colSpan="4" className="text-black font-bold">
        <img src={image} alt="empty cart" className="w-60 hh-60 mx-auto" />
        NO ONGOING TRANSACTION
      </td>
    </tr>
  );
}

export default EmptyTransactions;
