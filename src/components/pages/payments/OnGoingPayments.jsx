import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import StringHelper from '../../../helpers/stringHelper';
import Form from '../../input/Form';
import { useEventBookmarkMutation, useGetEventPaymentsQuery, usePatchEventPaymentMutation } from '../../../store/slices/apiSlice';
import PaymentSkeleton from './PaymentSkeleton';
import '../../../assets/styles/pages/payment.css';
import PrimarryButton from '../../input/PrimaryButton';
import APIConstatnt from '../../../constants/api';
import PaymentModal from '../../modal/PaymentModal';
import ConfirmationModal from '../../modal/ConfirmationModal';

function OnGoingPayments() {
  const { data, isFetching: loading, error } = useGetEventPaymentsQuery();
  const [unBookmarking] = useEventBookmarkMutation();
  const [pay] = usePatchEventPaymentMutation();
  const [confirmationUnbookmarkModal, setConfirmationUnbookmarkModal] = useState({
    show: false,
    message: '',
    eventId: '',
  });

  const [confirmationPayModal, setConfirmationPayModal] = useState({
    show: false,
    message1: '',
    dataPayments: [],
  });

  const handlerUnBookMark = (eventId, eventName) => {
    setConfirmationUnbookmarkModal({
      show: true,
      message: `are youre to delete payment for ticket to event ${eventName}`,
      eventId,
    });
  };

  const doUnBookmark = () => {
    unBookmarking({
      eventId: confirmationUnbookmarkModal.eventId,
      method: APIConstatnt.METHOD.delete,
    })
      .unwrap()
      .then(() => {
        setConfirmationUnbookmarkModal({ ...confirmationUnbookmarkModal, show: false });
      })
      .catch(() => {
      });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setConfirmationPayModal({
      show: true,
      message1: 'are youre to complete payment with total amount ',
      message2: data.data.reduce((acc, val) => acc + val.total_price, 0),
      data: data.data,
    });
  };

  const doPayment = () => {
    pay()
      .unwrap()
      .then(() => {
        setConfirmationUnbookmarkModal({ ...confirmationPayModal, show: false });
      })
      .catch(() => {
      });
  };

  const closeModalUnbookmarkConfiramation = () => {
    setConfirmationUnbookmarkModal({
      ...confirmationUnbookmarkModal, show: false,
    });
  };

  const closeModalPayConfiramation = () => {
    setConfirmationPayModal({
      ...confirmationPayModal, show: false,
    });
  };

  return (
    <div>
      <Form onSubmit={handlePayment}>
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
            {!error && loading && <PaymentSkeleton />}
            {!loading && !error && data.data === null && (
              <tr className="uppercase font-medium border-b-2 text-black [&>*]:px-2 [&>*]:py-20 text-center">
                <td colSpan="4" className="text-black font-bold">NO ONGOING TRANSACTION</td>
              </tr>
            )}
            {!loading && !error && data.data !== null && (data.data.map((item) => (
              <tr key={item.id} className="history-item uppercase font-medium border-b-2 text-black [&>*]:py-4 [&>*]:px-2 hover:bg-gray-100">
                <td className="flex justify-between items-center">
                  <button type="button" className="delete-icon p-3 shadow-lg rounded-full my-auto" onClick={() => handlerUnBookMark(item.event_bookmark_id, item.event_name)}>
                    <BsFillTrashFill className="text-red-600 w-5 h-5" />
                  </button>
                  <div className="ml-8 add-x left-side-overflow">1</div>
                </td>
                <td>{item.event_name}</td>
                <td className="add-idr">{StringHelper.formatWithCommas(item.total_price)}</td>
                <td className="add-idr">{StringHelper.formatWithCommas(item.total_price)}</td>
              </tr>
            )))}
          </tbody>
          <tfoot>
            <tr className="[&>*]:p-2">
              <td className="font-bold uppercase" colSpan="3">Total</td>
              <td colSpan="1" className="add-idr text-black font-bold">
                {!loading && !error && data.data ? `${StringHelper.formatWithCommas(`${data.data.reduce((acc, val) => acc + val.total_price, 0)}`)}` : '0' }
              </td>
            </tr>
          </tfoot>
        </table>
        <PrimarryButton title="submit" onClick={handlePayment} />
      </Form>
      <PaymentModal
        show={confirmationPayModal.show}
        onCloseModal={closeModalPayConfiramation}
        onConfirmModal={doPayment}
        title="Confirmation Payment"
        message1={confirmationPayModal.message1}
        message2={confirmationPayModal.message2}
        dataPayments={confirmationPayModal.data}
      />
      <ConfirmationModal
        show={confirmationUnbookmarkModal.show}
        onCloseModal={closeModalUnbookmarkConfiramation}
        onConfirmModal={doUnBookmark}
        title="Confirmation Payment Cancel"
        message={confirmationUnbookmarkModal.message}
      />
    </div>
  );
}

export default OnGoingPayments;
