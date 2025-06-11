import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { RouterLayout } from 'app/layout/RouterLayout'

import { ROUTES } from 'shared/model/navigation'

const Home = lazy(() => import('../../pages/home'))

export const router = createBrowserRouter([
  {
    path: ROUTES.Base,
    element: <RouterLayout />,
    children: [{ path: ROUTES.Home, element: <Home /> }],
  },
])
