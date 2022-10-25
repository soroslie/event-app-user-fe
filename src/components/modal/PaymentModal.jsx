import React from 'react';
import StringHelper from '../../helpers/stringHelper';
import CancelModalButton from './CancelButton';
import ConfirmModalButton from './ConfirmButton';
import ModalLayout from './ModalLayout';

function PaymentModal({
  show, title, message1, message2, onCloseModal, onConfirmModal, dataMembership, dataPayments,
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
            {dataMembership && (
            <tr className="uppercase font-medium border-b-2 text-black [&>*]:p-2">
              <td>1X</td>
              <td>{dataMembership.name}</td>
              <td className="add-idr">{StringHelper.formatWithCommas(dataMembership.price)}</td>
              <td className="add-idr">{StringHelper.formatWithCommas(dataMembership.price)}</td>
            </tr>
            )}
            {dataPayments && (dataPayments.map((item) => (
              <tr key={item.id} className="history-item uppercase font-medium border-b-2 text-black [&>*]:py-4 [&>*]:px-2 hover:bg-gray-100">
                <td className="add-x flex justify-between items-center">
                  1
                </td>
                <td>{item.event_name}</td>
                <td className="add-idr">{StringHelper.formatWithCommas(item.total_price)}</td>
                <td className="add-idr">{StringHelper.formatWithCommas(item.total_price)}</td>
              </tr>
            )))}
          </tbody>
          <tfoot>
            {dataMembership && (
            <tr className="[&>*]:p-2">
              <td className="font-bold uppercase" colSpan="3">Total</td>
              <td colSpan="1" className="add-idr text-black font-bold">{StringHelper.formatWithCommas(dataMembership.price)}</td>
            </tr>
            )}
            {dataPayments && (
            <tr className="[&>*]:p-2">
              <td className="font-bold uppercase" colSpan="3">Total</td>
              <td colSpan="1" className="add-idr text-black font-bold">
                {dataPayments ? `${StringHelper.formatWithCommas(`${dataPayments.reduce((acc, val) => acc + val.total_price, 0)}`)}` : '0' }
              </td>
            </tr>
            )}
          </tfoot>
        </table>
        {' '}
        <div className="text-center">
          {message1}
          {' '}
          <span className=" capitalize text-bold text-orange-600">
            {message2}
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
