import { Outlet } from 'react-router-dom'

import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'

import { Space } from 'shared/ui/Space/Space'

import '../../shared/style/global.scss'

export function RouterLayout() {
  return (
    <>
      <Header />
      <Space h={30} />

      <main className="container">
        <Outlet />
      </main>

      <Space h={90} />
      <Footer />
      <Space h={80} />
    </>
  )
}
