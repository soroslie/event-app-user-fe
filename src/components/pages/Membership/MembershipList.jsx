import React from 'react';
import ErrorCard from '../../cards/ErrorCard';
import MemberhsipListSkeleton from './MemberhsipListSkeleton';
import MembershipItem from './MembershipItem';

function MembershipList({ data, loading, error }) {
  return (
    <div>
      <div className="grid mx-4 grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-4 ">
        {!loading && !error && (data.map((item) => (
          <MembershipItem
            key={item.id}
            discount={item.discount}
            name={item.name}
            price={item.price}
          />
        )))}
      </div>
      {loading && (<MemberhsipListSkeleton />)}
      { error && (<ErrorCard message={error.error} />)}
    </div>
  );
}

export default MembershipList;
