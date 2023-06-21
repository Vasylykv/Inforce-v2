import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IComment } from '../models/IComment';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Comments'],
  endpoints: (build) => ({
    fetchAssociatedComments: build.query<IComment[], number>({
      query: (productId) => ({
        url: `/comments`,
        params: {
          productId,
        },
      }),
      providesTags: (result) => ['Comments'],
    }),
    addComment: build.mutation<IComment, IComment>({
      query: (comment) => ({
        url: '/comments',
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: ['Comments'],
    }),
    deleteComment: build.mutation<IComment, IComment>({
      query: (comment) => ({
        url: `/comments/${comment.id}`,
        method: 'DELETE',
        body: comment,
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});
