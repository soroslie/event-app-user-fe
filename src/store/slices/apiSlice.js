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
  tagTypes: ['Auth', 'Membership', 'Bookmarks', 'Events', 'Profile'],
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
      query: ({
        search, limit, sort, sortBy, bookmark,
      }) => ({
        url: `${bookmark ? '/user/event-bookmarks' : '/events'}?search=${search}&limit=${limit}&sortBy=${sortBy}&sort=${sort}`,
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Events', 'Bookmarks'],
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
        url: `/user/event-bookmark/${eventId}`,
        method,
        body: {
          event_id: eventId,
        },
      }),
      providesTags: ['Event-Bookmark'],
      invalidatesTags: (result, error, arg) => (!error && result ? ['Payments', 'Events', 'Bookmarks'] : []),
    }),
    getEventBookmark: builder.query({
      query: ({ eventId }) => ({
        url: `/user/event-bookmark/${eventId}`,
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Event-Bookmark'],
      invalidatesTags: (result, error, arg) => (!error && result ? ['Payments'] : []),
    }),
    getEventPayments: builder.query({
      query: () => ({
        url: '/payments',
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Payments'],
    }),
    patchEventPayment: builder.mutation({
      query: () => ({
        url: '/payment',
        method: APIConstatnt.METHOD.patch,
      }),
      providesTags: ['Payments'],
      invalidatesTags: ['Payments', 'Profile'],
    }),
    getHistoryEventPayment: builder.query({
      query: () => ({
        url: '/user/history-payments',
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Payments'],
    }),
    getPurchasableMerchandises: builder.query({
      query: () => ({
        url: '/user/event-merchandises',
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Merchandise'],
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

  useGetEventPaymentsQuery,
  usePatchEventPaymentMutation,
  useGetHistoryEventPaymentQuery,

  useGetPurchasableMerchandisesQuery,
} = apiSlice;
