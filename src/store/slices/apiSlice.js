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
        headers: (headers) => setPrepareHeader(headers),
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
      query: ({ email, password }) => ({
        headers: (headers) => setPrepareHeader(headers),
        url: '/auth/register',
        method: 'POST',
        body: {
          email,
          password,
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
  }),
});

export const {
  useAuthLoginMutation,
  useGetEventMembershipsQuery,
} = apiSlice;
