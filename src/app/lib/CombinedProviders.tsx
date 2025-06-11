import { RouterProvider } from 'react-router-dom'

import { router } from '../router/router'

export function CombinedProvider() {
  return (
    <>
      {/* <Provider store={store}> */}
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
      {/* </Provider> */}
    </>
  )
}
