import { Outlet } from 'react-router-dom'

import { Header } from 'widgets/header'

import { Space } from 'shared/ui/Space/Space'

import '../../shared/style/global.scss'

export function RouterLayout() {
  return (
    <>
      <Header />
      <Space h={50} />
      <main className="container">
        <Outlet />
      </main>
      <Space h={90} />
      {/* тут footer */}
    </>
  )
}
