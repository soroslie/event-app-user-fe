import React from 'react';

function PaymentSkeleton() {
  const loopEventItms = () => {
    const content = [];
    for (let i = 0; i < 4; i += 1) {
      content.push(
        <tr key={i} className="uppercase font-medium border-b-2 text-black [&>*]:p-2">
          <td>
            <div className="h-6 bg-slate-200 rounded" />
          </td>
          <td>
            <div className="h-6 bg-slate-200 rounded" />
          </td>
          <td>
            <div className="h-6 bg-slate-200 rounded" />
          </td>
          <td>
            <div className="h-6 bg-slate-200 rounded" />
          </td>
        </tr>,
      );
    }

    return content;
  };
  return (
    loopEventItms()
  );
}

export default PaymentSkeleton;
