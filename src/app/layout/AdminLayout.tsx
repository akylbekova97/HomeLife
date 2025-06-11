import { Outlet } from 'react-router-dom'

export function AdminLayout() {
  // Тут будет логика входа только для админов !

  return (
    <div>
      <Outlet />
    </div>
  )
}
