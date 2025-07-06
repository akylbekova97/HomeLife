import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { AdminLayout } from 'app/layout/AdminLayout'
import { RouterLayout } from 'app/layout/RouterLayout'

import { ErrorScreen } from 'widgets/error-screen'

import { CommentForm } from 'features/commet-form'

import { ROUTES } from 'shared/model/navigation'

const Home = lazy(() => import('pages/home'))
const Catalog = lazy(() => import('pages/catalog'))
const ProductPage = lazy(() => import('pages/product-page'))
const Basket = lazy(() => import('pages/basket'))
const Order = lazy(() => import('pages/order'))
const SingIn = lazy(() => import('pages/sing-in'))
const SingUp = lazy(() => import('pages/sing-up'))
const Admin = lazy(() => import('pages/admin'))
const AddProduct = lazy(() => import('pages/add-product'))
const AddBrand = lazy(() => import('pages/add-brand-product'))
const AddCategories = lazy(() => import('pages/add-categories-product'))
const AllProducts = lazy(() => import('pages/all-products-admin'))
const Applications = lazy(() => import('pages/applications'))

export const router = createBrowserRouter([
  {
    path: ROUTES.Base,
    element: <RouterLayout />,
    children: [
      { path: ROUTES.Home, element: <Home /> },
      { path: ROUTES.Catalog, element: <Catalog /> },
      {
        path: ROUTES.CatalogItem,
        element: <ProductPage />,
        children: [{ path: `reviews`, element: <CommentForm /> }],
      },
      { path: ROUTES.Basket, element: <Basket /> },
      { path: ROUTES.Order, element: <Order /> },
      { path: ROUTES.SingIn, element: <SingIn /> },
      { path: ROUTES.SingUp, element: <SingUp /> },
    ],
  },

  {
    path: ROUTES.Admin,
    element: <AdminLayout />,
    children: [
      { path: ROUTES.Admin, element: <Admin /> },
      { path: ROUTES.AddProduct, element: <AddProduct /> },
      { path: ROUTES.AddBrand, element: <AddBrand /> },
      { path: ROUTES.AddCategories, element: <AddCategories /> },
      { path: ROUTES.AllProducts, element: <AllProducts /> },
      { path: ROUTES.Applications, element: <Applications /> },
    ],
  },

  { path: '*', element: <ErrorScreen /> },
])
