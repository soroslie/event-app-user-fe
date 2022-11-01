import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimarryButton from '../components/input/PrimaryButton';
import Logo from '../components/Logo';
import LocalStorageConstant from '../constants/local_storage';
import { useAuthLoginMutation, useAuthRegisterMutation } from '../store/slices/apiSlice';
import InputAuth from '../components/input/InputAuth';

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageConstant.TOKEN_KEY);
    if (token) {
      navigate('/');
    }
  }, []);

  const [login] = useAuthLoginMutation();
  const [register] = useAuthRegisterMutation();

  const [isLogin, setIsLogin] = useState(true);

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [inputError, setInputError] = useState({
    email: '',
    password: '',
    formError: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const resetFormInput = () => {
    setInputError({
      ...inputError,
      email: '',
      password: '',
      formError: '',
    });
  };

  const changeFormState = () => {
    resetFormInput();
    setIsLogin(!isLogin);
  };

  const doLogin = () => {
    login({
      email: input.email,
      password: input.password,
    })
      .unwrap()
      .then((data) => {
        localStorage.setItem(LocalStorageConstant.TOKEN_KEY, data.data.id_token);
        navigate('/');
      })
      .catch((error) => {
        if (error.data.message) {
          setInputError({
            ...inputError,
            formError: error.data.message,
          });
        } else {
          setInputError({
            ...inputError,
            formError: 'something went wrong',
          });
        }
        setButtonLoading(false);
      });
  };

  const doRegister = () => {
    register({
      email: input.email,
      password: input.password,
      confirmPassword: input.confirmPassword,
    })
      .unwrap()
      .then(() => {
        setIsLogin(true);
        setInput({
          email: '',
          password: '',
          confirmPassword: '',
        });
        resetFormInput();
        setButtonLoading(false);
      })
      .catch((error) => {
        if (!error.data) {
          setInputError({
            ...inputError,
            formError: 'something went wrong',
          });
        } else {
          setInputError({
            ...inputError,
            formError: error.data.message,
          });
        }
        setButtonLoading(false);
      });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    resetFormInput();
    if (!input.email) {
      return setInputError({
        ...inputError,
        email: 'Please fill the email field',
      });
    }
    if (!input.password) {
      return setInputError({
        ...inputError,
        password: 'Please fill the password field',
      });
    }

    setButtonLoading(true);
    if (isLogin) {
      doLogin();
    } else {
      doRegister();
    }

    return resetFormInput();
  };

  useEffect(() => {
    if (isLogin) {
      if (input.email !== '' && input.password !== '') {
        setButtonDisabled(false);
      }
      if (input.email === '' && input.password === '') {
        setButtonDisabled(true);
      }
    } else {
      if (input.email !== '' && input.password !== '' && input.confirmPassword !== '') {
        setButtonDisabled(false);
      }
      if (input.email === '' && input.password === '' && input.confirmPassword === '') {
        setButtonDisabled(true);
      }
    }
  }, [input]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4 flex flex-col w-[30rem]">
        <div className="my-6">
          <Logo color="#FF6600" />
        </div>

        <form onSubmit={onHandleSubmit}>
          <div className="mb-4">
            <InputAuth placeholder="Email" type="text" onChange={handleChange} name="email" error={inputError.email} value={input.email} />
            <InputAuth placeholder="Pasword" type="password" onChange={handleChange} name="password" error={inputError.password} value={input.password} />
            {!isLogin && <InputAuth placeholder="Confirm Pasword" type="password" onChange={handleChange} name="confirmPassword" error={inputError.confirmPassword} value={input.confirmPassword} />}
            <p className={`${inputError.formError ? 'visible' : 'invisible'} text-center mt-1 text-red-500`}>{!inputError.formError ? '-' : inputError.formError}</p>

            <p className="mt-3 text-gray-500 text-sm">
              {!isLogin ? 'Doesnt have an account?' : 'already have an account ?'}
              {' '}
              <button className="text-orange-600 text-md font-bold uppercase" type="button" onClick={changeFormState}>{!isLogin ? 'login' : 'register'}</button>
            </p>
            {' '}
          </div>

          <div className="flex items-center justify-between">
            <PrimarryButton disabled={buttonDisabled} onClick={onHandleSubmit} isLoading={buttonLoading} title={isLogin ? 'signin' : 'signup'} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
