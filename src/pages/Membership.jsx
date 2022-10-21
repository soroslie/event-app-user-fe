import React from 'react';
import { useSelector } from 'react-redux';
import Select from '../components/input/Select';
import Form from '../components/input/Form';
import PrimarryButton from '../components/input/PrimaryButton';
import PageHeader from '../components/layout/PageHeader';
import SecondaryButton from '../components/input/SecondaryButton';
import MembershipList from '../components/pages/Membership/MembershipList';
import { useGetEventMembershipsQuery } from '../store/slices/apiSlice';

function Membership() {
  const { membershipType } = useSelector((state) => state.profile);
  const {
    data,
    error,
    isFetching: loading,
  } = useGetEventMembershipsQuery();

  return (
    <>
      <PageHeader title="Our Price" />
      <MembershipList
        data={!loading && !error ? data.data : []}
        loading={!!(loading && !error)}
        error={!loading && !error ? error : null}
      />
      <p className="max-w-[1240px] sm:ml-10 mt-2 text-gray-400 text-center sm:text-left">*This membership apllied lifetime and bind to this account</p>
      <div className="my-10 justify-center items-center text-center">
        <SecondaryButton title="upgrade now" isLoading={loading} />
      </div>
      <div className="shadow-lg max-w-2xl mx-auto px-4 py-6 rounded-lg bg-slate-100">
        <Form>
          <Select isLoading={loading} data={!loading && !error ? data.data : []} title="select membership type" defaultValue={membershipType} />
          <PrimarryButton title="CONFIRM" />
        </Form>
      </div>
    </>
  );
}

export default Membership;
