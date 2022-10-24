import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import StringHelper from '../helpers/stringHelper';
import Form from '../components/input/Form';

function Payments() {
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
            <tr className="uppercase font-medium border-b-2 text-black [&>*]:p-2">
              <td className="add-x">1</td>
              <td>Event Name</td>
              <td className="add-idr">{StringHelper.formatWithCommas(10000)}</td>
              <td className="add-idr">{StringHelper.formatWithCommas(20000)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="[&>*]:p-2">
              <td className="font-bold uppercase" colSpan="3">Total</td>
              <td colSpan="1" className="add-idr text-black font-bold">{StringHelper.formatWithCommas(20000)}</td>
            </tr>
          </tfoot>
        </table>
      </Form>
    </div>
  );
}

export default Payments;
