import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import MembershipItem from '../components/pages/Membership/MembershipItem';
import SecondaryButton from '../components/input/SecondaryButton';
import { useGetEventMembershipsQuery } from '../store/slices/apiSlice';
import MemberhsipItemSkeleton from '../components/pages/Membership/MemberhsipSkeleton';

function Membership() {
  const {
    data,
    error,
    isFetching: loading,
  } = useGetEventMembershipsQuery();
  return (
    <div>
      <PageHeader title="Our Price" />
      <div className="grid mx-4 grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-4 ">
        {!loading && !error && (data.data.map((item) => (
          <MembershipItem
            key={item.id}
            discount={item.discount}
            name={item.name}
            price={item.price}
          />
        )))}

      </div>
      {loading && !error && (<MemberhsipItemSkeleton />)}
      <p className="max-w-[1240px]  sm:ml-10 mt-2 text-gray-400 text-center sm:text-left">*This membership apllied forever and bind to this account</p>

      <div className="my-10 justify-center items-center text-center">
        <SecondaryButton title="upgrade now" />
      </div>
    </div>
  );
}

export default Membership;
