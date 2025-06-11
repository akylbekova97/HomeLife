import { Outlet } from 'react-router-dom'

import '../../shared/style/global.scss'

export function RouterLayout() {
  return (
    <>
      {/* тут header  */}
      <main className="container">
        <Outlet />
      </main>
      {/* тут footer */}
    </>
  )
}
