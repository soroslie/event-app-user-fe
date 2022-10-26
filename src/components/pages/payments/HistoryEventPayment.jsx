import React from 'react';
import moment from 'moment';
import Form from '../../input/Form';
import { useGetHistoryEventPaymentQuery } from '../../../store/slices/apiSlice';
import PaymentSkeleton from './PaymentSkeleton';
import StringHelper from '../../../helpers/stringHelper';

function HistoryEventPayment() {
  const { data, isFetching: loading, error } = useGetHistoryEventPaymentQuery();

  return (
    <div>
      HistoryEventPayment
      <Form>
        <table className="w-full text-sm text-left text-gray-500">
          <thead>
            <tr className="uppercase font-medium border-b-2 [&>*]:p-2">
              <th>date</th>
              <th>
                quantity
              </th>
              <th>
                name
              </th>
              <th>price</th>
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
              <tr key={item.id} className="history-item capitalize font-medium border-b-2 text-black [&>*]:py-4 [&>*]:px-2 hover:bg-gray-100">
                <td>
                  {moment(item.date).format('DD, MMM YYYY, HH:MM')}
                </td>
                <td className="text-center">1x</td>
                <td>
                  ticket
                  {' '}
                  {item.event_name}
                </td>
                <td>{item.price}</td>
              </tr>
            )))}
          </tbody>
          {/* <tfoot>
            <tr className="[&>*]:p-2">
              <td className="font-bold uppercase" colSpan="3">Total</td>
              <td colSpan="1" className="add-idr text-black font-bold">
                {!loading && !error && data.data ?
                    `${StringHelper.formatWithCommas(`${data.data.reduce((acc, val) =>
                        acc + val.price, 0)}`)}` : '0' }
              </td>
            </tr>
          </tfoot> */}
        </table>
      </Form>
    </div>
  );
}

export default HistoryEventPayment;
