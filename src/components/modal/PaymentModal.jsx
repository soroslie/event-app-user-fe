import React from 'react';
import StringHelper from '../../helpers/stringHelper';
import CancelModalButton from './CancelButton';
import ConfirmModalButton from './ConfirmButton';
import ModalLayout from './ModalLayout';

function PaymentModal({
  show, title, message, onCloseModal, onConfirmModal, data,
}) {
  if (!show) {
    return null;
  }
  return (
    <ModalLayout title={title}>
      <div className="p-6 space-y-6">
        <table className="w-full text-sm text-left text-gray-500">
          <thead>
            <tr className="uppercase font-medium border-b-2 [&>*]:p-2">
              <th>quantity</th>
              <th>
                name
              </th>
              <th>
                price
              </th>
              <th>sub total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="uppercase font-medium border-b-2 text-black [&>*]:p-2">
              <td className="add-x">1</td>
              <td>{data.name}</td>
              <td className="add-idr">{StringHelper.formatWithCommas(data.price)}</td>
              <td className="add-idr">{StringHelper.formatWithCommas(data.price)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="[&>*]:p-2">
              <td className="font-bold uppercase" colSpan="3">Total</td>
              <td colSpan="1" className="add-idr text-black font-bold">{StringHelper.formatWithCommas(data.price)}</td>
            </tr>
          </tfoot>
        </table>
        {' '}
        <div className="text-center">
          are you sure to upgrade your membership to
          {' '}
          <span className=" capitalize text-bold text-orange-600">
            {message}
          </span>
          ?
        </div>
      </div>
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
        <CancelModalButton onClick={onCloseModal} title="cancel" />
        <ConfirmModalButton onClick={onConfirmModal} />
      </div>
    </ModalLayout>
  );
}

export default PaymentModal;
