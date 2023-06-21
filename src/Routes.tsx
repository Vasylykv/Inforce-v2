import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import { ErrorPage } from './components/ErrorPage';
import { AddProductForm } from './components/AddProductForm';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="products" />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
