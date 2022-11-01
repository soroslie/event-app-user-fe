import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from '../components/input/Select';
import Form from '../components/input/Form';
import PrimarryButton from '../components/input/PrimaryButton';
import PageHeader from '../components/layout/PageHeader';
import SecondaryButton from '../components/input/SecondaryButton';
import MembershipList from '../components/pages/Membership/MembershipList';
import { useGetEventMembershipsQuery, useUpgradeMembershipMutation } from '../store/slices/apiSlice';
import SuccessModal from '../components/modal/SuccessModal';
import ErrorModal from '../components/modal/ErrorModal';
import PaymentModal from '../components/modal/PaymentModal';

function Membership() {
  const [upgradeMembership] = useUpgradeMembershipMutation();
  const {
    data,
    error,
    isFetching: loading,
  } = useGetEventMembershipsQuery();

  const [hideForm, setHideForm] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [successModal, setSuccessModal] = useState({
    message: '',
    show: false,
  });
  const [errorModal, setErrorModal] = useState({
    message: '',
    show: false,
  });
  const [confirmationModal, setConfirmationModal] = useState({
    message1: '',
    message2: '',
    show: false,
    data: '',
  });

  const { membershipType } = useSelector((state) => state.profile);
  const [newMembershipType, setNewMembershipType] = useState(0);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    return setConfirmationModal({ ...confirmationModal, show: true });
  };

  const onChangeHandler = (e) => {
    setButtonDisabled(false);
    setConfirmationModal({
      message2: e.target.options[e.target.selectedIndex].text,
      message1: 'are you sure to upgrade your membership to',
      data: data.data[e.target.value - 1],
    });
    setNewMembershipType(e.target.value);
  };

  const doUpdateMembership = () => upgradeMembership({
    membershipId: parseInt(newMembershipType, 10),
  })
    .unwrap()
    .then((reponse) => {
      setConfirmationModal({ ...confirmationModal, show: false });
      setSuccessModal({
        show: true,
        message: reponse.message,
      });
    })
    .catch((err) => {
      setConfirmationModal({ ...confirmationModal, show: false });
      if (!err.data) {
        setErrorModal({
          show: true,
          message: 'something went wrong',
        });
      } else {
        setErrorModal({
          show: true,
          message: err.data.message,
        });
      }
    });

  const closeModal = () => {
    setConfirmationModal({
      ...confirmationModal, show: false,
    });
  };

  const closeSuccesModal = () => {
    setSuccessModal({
      show: false,
    });
  };

  const closeErrorModal = () => {
    setErrorModal({
      show: false,
    });
  };

  return (
    <>
      <PageHeader title="Our Price" />
      <MembershipList
        data={!loading && !error ? data.data : []}
        loading={!!(loading && !error)}
        error={!loading && error ? error : null}
      />
      <p className="max-w-[1240px] sm:ml-10 mt-2 text-gray-400 text-center sm:text-left">*This membership apllied lifetime and bind to this account</p>
      {membershipType && (
      <div className="my-10 justify-center items-center text-center">
        <SecondaryButton title="upgrade now" isLoading={loading} onClick={() => { setHideForm(false); }} />
      </div>
      )}
      {!hideForm && (
      <>
        <Form onSubmit={onHandleSubmit}>
          <p className="text-center font-semibold">Current Level</p>
          <p className="capitalize text-center font-bold text-orange-400 text-2xl">{membershipType}</p>
          <Select isLoading={loading} data={!loading && !error ? data.data : []} name="memberships" onChange={onChangeHandler} title="select membership type" defaultValue={membershipType} />
          <PrimarryButton title="CONFIRM" onClick={onHandleSubmit} disabled={buttonDisabled} />
        </Form>
        <PaymentModal
          show={confirmationModal.show}
          onCloseModal={closeModal}
          onConfirmModal={doUpdateMembership}
          title="Confirmation Payment"
          message1={confirmationModal.message1}
          message2={confirmationModal.message2}
          dataMembership={confirmationModal.data}
        />
        {successModal.show && (
        <SuccessModal
          show={successModal.show}
          onCloseModal={closeSuccesModal}
          message={successModal.message}
        />
        )}
        {errorModal.show && (
        <ErrorModal
          show={errorModal.show}
          onCloseModal={closeErrorModal}
          message={errorModal.message}
        />
        )}
      </>
      ) }
    </>
  );
}

export default Membership;
