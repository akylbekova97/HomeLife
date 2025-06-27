import { Outlet } from 'react-router-dom'

import { AdminSidebar } from 'widgets/admin-sidebar'

export function AdminLayout() {
  // Тут будет логика входа только для админов !

  return (
    <div id="admin">
      <AdminSidebar />
      <Outlet />
    </div>
  )
}
