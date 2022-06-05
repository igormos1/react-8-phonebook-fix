
import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
    async ({ url, method, data, params }) => {
      try {
        const result = await axios({ url: baseUrl + url, method, data, params })
        return { data: result.data }
      } catch (axiosError) {
        let err = axiosError
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        }
      }
    };

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
    }),
     keepUnusedDataFor: 5,
        tagTypes: ['Contact'],
        endpoints: builder => ({
            getContacts: builder.query({
                query: () => ({
                    url: '/contacts',
                    method: 'GET',
                    // keepUnusedDataFor:5,
                }),
                providesTags: ['Contact']
            }),
           addContact: builder.mutation({
            query: (values) => ({
                url: '/contacts',
                method: 'POST',
                data: values,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        updateContact: builder.mutation({
            query: (fields) => ({
                url: `/contacts/${fields.id}`,
                method: 'PATCH',
                data: {
                    name: fields.name,
                    number: fields.number
                },
            }),
            invalidatesTags: ['Contact'],
        }),
    })
})

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
    useUpdateContactMutation,
} = contactsApi;



// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//     reducerPath: 'contacts',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://connections-api.herokuapp.com',
//     }),
//         tagTypes: ['Contact'],
//         endpoints: builder => ({
//             getContacts: builder.query({
//                 query: () => ({
//                     url: '/contacts',
//                 }),
//                 providesTags: ['Contact'],
//             }),
//            addContact: builder.mutation({
//             query: (values) => ({
//                 url: '/contacts',
//                 method: 'POST',
//                 body: values,
//             }),
//             invalidatesTags: ['Contact'],
//         }),
//         deleteContact: builder.mutation({
//             query: (id) => ({
//                 url: `/contacts/${id}`,
//                 method: 'DELETE',
//             }),
//             invalidatesTags: ['Contact'],
//         }),
//         updateContact: builder.mutation({
//             query: (fields) => ({
//                 url: `/contacts/${fields.id}`,
//                 method: 'PATCH',
//                 body: fields,
//             }),
//             invalidatesTags: ['Contact'],
//         }),
//     })
// })

// export const {
//     useGetContactsQuery,
//     useAddContactMutation,
//     useDeleteContactMutation,
//     useUpdateContactMutation,
// } = contactsApi;


//  getContactById: builder.query({
//                 query: (id) => ({ url: `/contacts${id}`, method: 'GET' }),
//                 providesTags: ['Contact']
//             }),