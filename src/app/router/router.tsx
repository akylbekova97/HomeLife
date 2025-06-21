import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { RouterLayout } from 'app/layout/RouterLayout'

import { CommentForm } from 'features/commet-form'

import { ROUTES } from 'shared/model/navigation'

const Home = lazy(() => import('pages/home'))
const Catalog = lazy(() => import('pages/catalog'))
const ProductPage = lazy(() => import('pages/product-page'))
const Basket = lazy(() => import('pages/basket'))

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
    ],
  },
])
