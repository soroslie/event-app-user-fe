import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProfileQuery, useAuthChangePasswordMutation } from '../store/slices/apiSlice';
import ErrorCard from '../components/cards/ErrorCard';
import PrimarryButton from '../components/input/PrimaryButton';
import PageHeader from '../components/layout/PageHeader';
import ProfileSkeleton from '../components/pages/profile/ProfileSkeleton';
import Input from '../components/input/Input';
import TertiaryButton from '../components/input/TertiaryButton';
import Form from '../components/input/Form';
import ConfirmationModal from '../components/modal/ConfirmationModal';
import SuccessModal from '../components/modal/SuccessModal';
import ErrorModal from '../components/modal/ErrorModal';
import StringHelper from '../helpers/stringHelper';

function Profile() {
  const navigate = useNavigate();
  const { data, error, isFetching: isLoading } = useGetProfileQuery();
  const [changePassword] = useAuthChangePasswordMutation();
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
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [inputError, setInputError] = useState({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!input.password) {
      return setInputError({
        amount: 'please input the password field',
      });
    }
    if (!input.newPassword) {
      return setInputError({
        amount: 'please input the new password field',
      });
    }
    if (!input.confirmNewPassword) {
      return setInputError({
        amount: 'please input the confirm new password field',
      });
    }
    setInputError({
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    });
    return setShowConfirmationModal(true);
  };

  const doChangePassword = () => {
    setButtonLoading(true);
    setShowConfirmationModal(false);
    return changePassword({
      password: input.password,
      newPassword: input.newPassword,
      confirmNewPassword: input.confirmNewPassword,
    })
      .unwrap()
      .then((reponse) => {
        setInput({
          password: '',
          newPassword: '',
          confirmNewPassword: '',
        });
        setSuccessModal({
          show: true,
          message: reponse.message,
        });
        setButtonLoading(false);
      })
      .catch((err) => {
        setErrorModal({
          show: true,
          message: err.error,
        });
        setButtonLoading(false);
      });
  };

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

  const toMembershipsPage = () => {
    navigate('/memberships');
  };

  return (
    <div>
      {' '}
      <PageHeader title="Profile" />
      {!error && isLoading && <ProfileSkeleton />}
      {!error && !isLoading && (
      <div className="p-6 bg-gray-50 shadow-xl mt-4 max-w-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0" />
          <div className="w-24 h-24 bg-gray-100 mx-auto rounded-full shadow-2xl  flex items-center justify-center text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10s"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="text-center mb-12 border-b pb-12 mt-4 md:mt-10">
          <div>
            <Input disabled value={data.data.email} title="email" />
            <p className="font-light text-green-600 mt-3 capitalize add-idr text-4xl">{StringHelper.formatWithCommas(data.data.balance)}</p>
            <div className="flex place-content-between">
              <p className="font-light text-gray-600 mt-5 capitalize text-left text-3xl">{data.data.membership_type}</p>
              {data.data.membership_type !== 'platinum' && <TertiaryButton title="UPGRADE*" onClick={toMembershipsPage} />}
            </div>
          </div>
        </div>
        <Form onSubmit={onHandleSubmit}>
          <Input error={inputError.password} value={input.password} name="password" title="password" onChange={handleChange} type="password" placholder="current password" />
          <Input error={inputError.newPassword} value={input.newPassword} name="newPassword" title="New Password" onChange={handleChange} type="password" placholder="new password" />
          <Input error={inputError.confirmNewPassword} value={input.confirmNewPassword} name="confirmNewPassword" title="Confirm New Password" onChange={handleChange} type="password" placholder="confirm new password" />
          <PrimarryButton title="edit" onClick={onHandleSubmit} isLoading={buttonLoading} />
        </Form>
      </div>
      )}
      {error && !isLoading && <ErrorCard message={error.error} />}
      <ConfirmationModal show={showConfirmationModal} onCloseModal={closeModal} onConfirmModal={doChangePassword} title="Confirm Change Password" message="Are you sure to change your password ?" />
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
    </div>
  );
}

export default Profile;
