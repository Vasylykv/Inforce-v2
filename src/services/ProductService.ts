import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IProduct } from '../models/IProduct';

export const productApi = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Products', 'Product'],
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], void>({
      query: () => ({
        url: '/products',
      }),
      providesTags: (result) => ['Products'],
    }),
    fetchProductById: build.query<IProduct, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: (result) => ['Product'],
    }),
    addProduct: build.mutation<IProduct, IProduct>({
      query: (post) => ({
        url: '/products',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: build.mutation<IProduct, IProduct>({
      query: (post) => ({
        url: `/products/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: build.mutation<IProduct, IProduct>({
      query: (post) => ({
        url: `/products/${post.id}`,
        method: 'DELETE',
        body: post,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useAddProductMutation } = productApi;
