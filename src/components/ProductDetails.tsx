import React, { FC } from 'react';
import { IProduct } from '../models/IProduct';

interface ProductDetailsProps {
  product: IProduct;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const {
    name,
    imageUrl,
    count,
    weight,
    size: { height, width },
  } = product;

  const fieldStyle = `font-semibold text-left mt-5`;

  return (
    <div className="w-72 h-72 flex flex-col items-center">
      <img src={imageUrl} alt="" />
      <h2 className="text-center text-4xl	">{name}</h2>

      <div className="pt-8 text-zinc-600 text-2xl font-semibold">
        Informations
      </div>
      <ul className="w-32 mt-6">
        <li>
          <div className={fieldStyle}>Count</div>
          <div>{count}</div>
          <hr />
        </li>
        <li>
          <div className={fieldStyle}>Width</div>
          <div>{width}</div>
          <hr />
        </li>
        <li>
          <div className={fieldStyle}>Height</div>
          <div>{height}</div>
          <hr />
        </li>
        <li>
          <div className={fieldStyle}>Weight</div>
          <div>{weight}</div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default ProductDetails;
