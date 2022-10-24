import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import StringHelper from '../helpers/stringHelper';
import Form from '../components/input/Form';
import { useGetEventPaymentsQuery } from '../store/slices/apiSlice';
import PaymentSkeleton from '../components/pages/payments/PaymentSkeleton';

function Payments() {
  const { data, isFetching: loading, error } = useGetEventPaymentsQuery();

  return (
    <div>
      <PageHeader title="payments" />
      <h1>Events</h1>
      <Form>
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
              <tr key={item.id} className="uppercase font-medium border-b-2 text-black [&>*]:p-2">
                <td className="add-x">1</td>
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
                {!loading && !error && data.data === null && '0'}
              </td>
            </tr>
          </tfoot>
        </table>
      </Form>
    </div>
  );
}

export default Payments;
