import React from 'react';
import PageHeader from '../components/PageHeader';
import MembershipItem from '../components/pages/home/Membership/MembershipItem';
import SecondaryButton from '../components/input/SecondaryButton';

function Membership() {
  return (
    <>
      <PageHeader title="Our Price" />
      <div className="grid mx-4 grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-4">
        <MembershipItem price="100" discount="20" header="silver" />
        <MembershipItem price="100" discount="20" header="silver" />
        <MembershipItem price="100" discount="20" header="silver" />
        <MembershipItem price="100" discount="20" header="silver" />
      </div>
      <p className="sm:ml-10 mt-2 text-gray-400 text-center sm:text-left">*This membership apllied forever and bind to this account</p>
      <div className="my-10">
        <SecondaryButton title="upgrade now" />
      </div>
    </>
  );
}

export default Membership;
