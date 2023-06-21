import React from 'react';
import { useParams } from 'react-router-dom';
import { productApi } from '../services/ProductService';
import { commentApi } from '../services/CommentService';
import { ErrorPage } from '../components/ErrorPage';
import ProductDetails from '../components/ProductDetails';
import { Link } from 'react-router-dom';

import CommentsList from '../components/CommentsList';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isFetching,
    isError,
  } = productApi.useFetchProductByIdQuery(parseInt(id!));

  const {
    data: comments,
    isFetching: commentsFetching,
    isError: isCommentsFetchingError,
  } = commentApi.useFetchAssociatedCommentsQuery(parseInt(id!));

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className="max-w-full mx-auto flex items-center justify-center gap-x-64 relative py-10">
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <p>Sorry, there are no details about this product</p>
      )}

      <CommentsList
        comments={comments}
        isFetching={commentsFetching}
        isError={isCommentsFetchingError}
        productId={product?.id}
      />

      <Link to="/products" className="absolute top-3 left-3">
        <button className="h-10 mx-0 px-6 font-semibold bg-black text-white ">
          Go back
        </button>
      </Link>
    </div>
  );
};

export default ProductPage;
