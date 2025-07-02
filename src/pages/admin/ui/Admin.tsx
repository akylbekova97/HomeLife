import icon from 'shared/assets/icons/admin.png'

import s from './Admin.module.scss'

export function Admin() {
  return (
    <section className={s.container}>
      <h1>ADMIN</h1>
      <i>
        Добро пожаловать в сердце управления
        <br /> платформой 📌{' '}
      </i>
      <img
        src={icon}
        alt="admin icon"
      />
    </section>
  )
}
