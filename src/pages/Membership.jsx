import React from 'react';
import PageHeader from '../components/PageHeader';
import MembershipItem from '../components/pages/home/Membership/MembershipItem';

function Membership() {
  return (
    <>
      <PageHeader title="Our Price" />
      <div className="grid grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-4">
        <MembershipItem price="100" discount="20" header="silver" />
        <MembershipItem price="100" discount="20" header="silver" />
        <MembershipItem price="100" discount="20" header="silver" />
        <MembershipItem price="100" discount="20" header="silver" />
      </div>
      <p className="ml-10 text-left mt-2 text-gray-400">*This membership apllied forever and bind th this account</p>
    </>
  );
}

export default Membership;
