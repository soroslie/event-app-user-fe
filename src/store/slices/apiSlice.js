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
        method: APIConstatnt.METHOD.post,
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
        method: APIConstatnt.METHOD.post,
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
        method: APIConstatnt.METHOD.patch,
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
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Membership'],
    }),
    topUp: builder.mutation({
      query: ({ amount }) => ({
        url: '/user/topup',
        method: APIConstatnt.METHOD.post,
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
        method: APIConstatnt.METHOD.patch,
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
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Profile'],
    }),
    getEvents: builder.query({
      query: () => ({
        url: '/events',
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Events'],
    }),
    getEvent: builder.query({
      query: ({ id }) => ({
        url: `/events/${id}`,
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Events'],
    }),
    eventBookmark: builder.mutation({
      query: ({ eventId, method }) => ({
        url: '/user/event-bookmark',
        method,
        body: {
          event_id: eventId,
        },
      }),
      providesTags: ['Event-Bookmark'],
    }),
    getEventBookmark: builder.query({
      query: ({ eventId }) => ({
        url: `/user/event-bookmark/${eventId}`,
      }),
      providesTags: ['Event-Bookmark'],
    }),
  }),
});

export const {
  useAuthLoginMutation,
  useAuthRegisterMutation,

  useGetProfileQuery,
  useAuthChangePasswordMutation,
  useTopUpMutation,
  useUpgradeMembershipMutation,

  useLazyGetEventBookmarkQuery,
  useEventBookmarkMutation,

  useGetEventMembershipsQuery,
  useGetEventsQuery,
  useGetEventQuery,

} = apiSlice;
