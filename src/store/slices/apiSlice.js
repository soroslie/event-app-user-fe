import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIConstatnt from '../../constants/api';
import setPrepareHeader from '../../helpers/apiHeader';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: APIConstatnt.baseUrl,
    prepareHeaders: setPrepareHeader,
  }),
  tagTypes: ['Auth', 'Membership'],
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      providesTags: ['Auth'],
    }),
    authRegister: builder.mutation({
      query: ({ email, password, confirmPassword }) => ({
        url: '/auth/register',
        method: 'POST',
        body: {
          email,
          password,
          confirm_password: confirmPassword,
        },
      }),
      providesTags: ['Auth'],
    }),
    getEventMemberships: builder.query({
      query: () => ({
        url: '/event/memberships',
        method: 'GET',
      }),
      providesTags: ['Membership'],
    }),
    topUp: builder.mutation({
      query: ({ amount }) => ({
        url: '/user/topup',
        method: 'POST',
        body: {
          amount,
        },
      }),
      providesTags: ['Payment'],
    }),
    getProfile: builder.query({
      query: () => ({
        url: '/user/profile',
        method: 'GET',
      }),
      providesTags: ['Profile'],
    }),
  }),
});

export const {
  useAuthLoginMutation,
  useAuthRegisterMutation,
  useGetEventMembershipsQuery,
  useTopUpMutation,
  useGetProfileQuery,
} = apiSlice;
