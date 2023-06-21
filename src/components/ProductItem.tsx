import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../models/IProduct';

interface ProductItemProps {
  product: IProduct;
  deleteProduct: (product: IProduct) => void;
}

const ProductItem: FC<ProductItemProps> = ({ product, deleteProduct }) => {
  const { id, name, imageUrl } = product;

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this product?'))
      deleteProduct(product);
  };

  return (
    <li className="relative w-56 border border-black p-2 text-center">
      <Link to={`/product/${id}`}>
        <img src={imageUrl} alt="Product" className="w-36 h-36 block mx-auto" />
        <div className="font-semibold">{name}</div>
        <button
          onClick={handleDelete}
          className="absolute top-1 right-3 text-red-700 text-xl font-bold"
        >
          X
        </button>
      </Link>
    </li>
  );
};

export default ProductItem;
