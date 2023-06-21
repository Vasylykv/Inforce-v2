import { useForm } from 'react-hook-form';
import { ValidationError } from '../ValidationError';
import { useAddProductMutation } from '../services/ProductService';
import { IProduct } from '../models/IProduct';
import { useEffect } from 'react';

interface IFormInput {
  name: string;
  count: number;
  imageUrl: string;
  size: {
    width: number;
    height: number;
  };
  weight: string;
}

interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddProductForm({ setShowModal }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<IFormInput>();

  const [createProduct, {}] = useAddProductMutation();

  // useForm Options
  // {
  //   mode: 'onBlur',
  //   reValidateMode: 'onBlur',
  // }

  const fieldStyle = 'flex flex-col mb-2';

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  async function onSubmit(product: IFormInput) {
    await createProduct(product as IProduct);
    setShowModal(false);
  }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline">Add a new product</h2>
      <p className="mb-3">Please enter product details</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Product name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register('name', { required: 'You must enter product name' })}
          />
          <ValidationError fieldError={errors.name} />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="count">Count</label>
          <input
            type="number"
            id="count"
            placeholder="e.g. 25"
            min="0"
            {...register('count', {
              required: 'You must enter product count',
              min: {
                value: 18,
                message: 'There must be at least one product count',
              },
            })}
          />
          <ValidationError fieldError={errors.count} />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            {...register('imageUrl', {
              required: 'You must provide product image url',
            })}
          />
          <ValidationError fieldError={errors.imageUrl} />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="width">Width</label>
          <input
            type="number"
            id="width"
            min="0"
            {...register('size.width', {
              required: "You must enter product's width",
            })}
          />
          <ValidationError fieldError={errors.size?.width} />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="height">Height</label>
          <input
            type="number"
            id="heigh"
            min="0"
            {...register('size.height', {
              required: "You must enter product's height",
            })}
          />
          <ValidationError fieldError={errors.size?.height} />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            id="weight"
            placeholder="e.g. 200g"
            {...register('weight', {
              required: "You must enter product's weight",
            })}
          />
          <ValidationError fieldError={errors.weight} />
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            type="submit"
            className=" h-10 px-6 font-semibold bg-black text-white"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="h-10 mx-0 px-6 font-semibold bg-black text-white block"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
