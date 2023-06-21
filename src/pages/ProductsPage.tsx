import { useState } from 'react';
import { productApi } from '../services/ProductService';

import { AddProductForm } from '../components/AddProductForm';
import Modal from '../components/Modal/Modal';
import ProductItem from '../components/ProductItem';
import { IProduct } from '../models/IProduct';

export default function ProductsPage() {
  const {
    data: products,
    isLoading,
    // error,
  } = productApi.useFetchAllProductsQuery();

  const [deleteProduct, {}] = productApi.useDeleteProductMutation();

  const [showModal, setShowModal] = useState(false);

  const handleDelete = (product: IProduct) => {
    deleteProduct(product);
  };

  if (isLoading) {
    return (
      <div className="text-xl mt-10 mx-auto mt-5 text-center font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <button
        className="mt-5 h-10 px-6 font-semibold bg-black text-white block mx-auto"
        onClick={() => setShowModal((state) => !state)}
      >
        Add Product
      </button>

      <ul className="mt-14 max-w-7xl flex flex-wrap gap-10 ">
        {products ? (
          products.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
              deleteProduct={handleDelete}
            />
          ))
        ) : (
          <div className="text-center text-xl mt-5">
            There are no products yet.
          </div>
        )}
      </ul>

      <Modal active={showModal} setActive={setShowModal}>
        <AddProductForm setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}
