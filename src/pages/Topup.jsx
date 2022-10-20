import React, { useState } from 'react';
import Input from '../components/input/Input';
import PageHeader from '../components/layout/PageHeader';
import PrimarryButton from '../components/input/PrimaryButton';
import Form from '../components/input/Form';
import ConfirmationModal from '../components/modal/ConfirmationModal';
import { useTopUpMutation } from '../store/slices/apiSlice';
import SuccessModal from '../components/modal/SuccessModal';
import ErrorModal from '../components/modal/ErrorModal';

function Topup() {
  const [topup] = useTopUpMutation();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [successModal, setSuccessModal] = useState({
    message: '',
    show: false,
  });
  const [errorModal, setErrorModal] = useState({
    message: '',
    show: false,
  });

  const [input, setInput] = useState({
    amount: '',
  });

  const [inputError, setInputError] = useState({
    amount: '',
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!input.amount) {
      return setInputError({
        amount: 'please input the amount field',
      });
    }
    if (input.amount > 10000000 || input.amount < 10000) {
      return setInputError({
        amount: 'invalid amount, 10000-10000000',
      });
    }
    setInputError({ amount: '' });
    return setShowConfirmationModal(true);
  };

  const doTopUp = () => topup({
    amount: parseInt(input.amount, 10),
  })
    .unwrap()
    .then((data) => {
      setShowConfirmationModal(false);
      setInput({
        amount: '',
      });
      setSuccessModal({
        show: true,
        message: data.message,
      });
      setButtonLoading(false);
    })
    .catch((error) => {
      setShowConfirmationModal(false);
      setErrorModal({
        show: true,
        message: 'something went wrong',
      });
      setButtonLoading(false);
    });

  const closeModal = () => {
    setShowConfirmationModal(false);
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
      <PageHeader title="Top Up Balance" />
      <Form onSubmit={onHandleSubmit}>
        <Input type="number" error={inputError.amount} placholder="IDR 10000 - 10000000" value={input.amount} onChange={handleChange} name="amount" title="amount" />
        <PrimarryButton onClick={onHandleSubmit} title="confirm" isLoading={buttonLoading} />
      </Form>
      <ConfirmationModal show={showConfirmationModal} onCloseModal={closeModal} onConfirmModal={doTopUp} title="Confirm Topup" message={`Are you sure to top up IDR ${input.amount} to your balance?`} />
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
  );
}

export default Topup;
