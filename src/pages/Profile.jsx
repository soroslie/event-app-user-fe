import React, { useState } from 'react';
import ErrorCard from '../components/cards/ErrorCard';
import PrimarryButton from '../components/input/PrimaryButton';
import PageHeader from '../components/layout/PageHeader';
import ProfileSkeleton from '../components/pages/profile/ProfileSkeleton';
import { useGetProfileQuery } from '../store/slices/apiSlice';
import Input from '../components/input/Input';

function Profile() {
  const { data, error, isFetching: isLoading } = useGetProfileQuery();
  const [buttonLoading, setButtonLoading] = useState(false);

  const [input, setInput] = useState({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [inputError, setInputError] = useState({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
    formError: '',
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {' '}
      <PageHeader title="Profile" />
      {!error && isLoading && <ProfileSkeleton />}
      {!error && !isLoading && (
      <div className="p-8 bg-white shadow-xl mt-4 max-w-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0" />
          <div className="">
            <div className="w-24 h-24 bg-orange-100 mx-auto rounded-full shadow-2xl  flex items-center justify-center text-orange-500">
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
        </div>
        <div className="text-center border-b pb-12 mt-4 md:mt-10">
          <div>
            <Input disabled value={data.data.email} title="email" />
            <p className="font-light text-gray-600 mt-3 capitalize text-left">{data.data.membership_type}</p>
            <p className="font-light text-gray-600 mt-3 capitalize text-left">{data.data.balance}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-center">
          <Input disabled value={input.password} name="password" title="New" onChange={handleChange} type="password" placholder="current password" />
          <Input disabled value={input.newPassword} name="newPassword" title="New Password" onChange={handleChange} type="password" placholder="new password" />
          <Input disabled value={input.confirmNewPassword} name="confirmNewPassword" title="Confirm New Password" onChange={handleChange} type="password" placholder="confirm new password" />
          <PrimarryButton title="edit" isLoading={buttonLoading} />
        </div>
      </div>
      )}
      {error && !isLoading && <ErrorCard message={error.message} />}

    </div>
  );
}

export default Profile;
