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
    authChangePassword: builder.mutation({
      query: ({ password, newPassword, confirmNewPassword }) => ({
        url: '/user/change-password',
        method: 'PATCH',
        body: {
          password,
          new_password: newPassword,
          confirm_new_password: confirmNewPassword,
        },
      }),
      providesTags: ['Profile'],
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
      invalidatesTags: (result, error, arg) => (!error && result ? ['Profile'] : []),
    }),
    upgradeMembership: builder.mutation({
      query: ({ membershipId }) => ({
        url: '/user/membership',
        method: 'PATCH',
        body: {
          membership_id: membershipId,
        },
      }),
      providesTags: ['Payment'],
      invalidatesTags: (result, error, arg) => (!error && result ? ['Profile'] : []),
    }),
    getProfile: builder.query({
      query: () => ({
        url: '/user/profile',
        method: 'GET',
      }),
      providesTags: ['Profile'],
    }),
    getEvents: builder.query({
      query: () => ({
        url: '/events',
        method: 'GET',
      }),
      providesTags: ['Events'],
    }),
    getEvent: builder.query({
      query: ({ id }) => ({
        url: `/events/${id}`,
        method: 'GET',
      }),
      providesTags: ['Events'],
    }),
  }),
});

export const {
  useAuthLoginMutation,
  useAuthRegisterMutation,
  useAuthChangePasswordMutation,
  useGetEventMembershipsQuery,
  useTopUpMutation,
  useUpgradeMembershipMutation,
  useGetProfileQuery,
  useGetEventsQuery,
  useGetEventQuery,
} = apiSlice;
