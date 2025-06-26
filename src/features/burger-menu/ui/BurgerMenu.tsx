import clsx from 'clsx'

import { useState } from 'react'

import { AppLink } from 'shared/ui/AppLink/AppLink'

import s from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <>
      <button
        className={clsx(s.burger, isOpen && s.open)}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={clsx(s.menu, isOpen && s.menuOpen)}>
        <AppLink
          type="bold"
          to="/"
          onClick={toggleMenu}
        >
          Главная
        </AppLink>

        <AppLink
          type="bold"
          to="/catalog"
          onClick={toggleMenu}
        >
          Продукты
        </AppLink>

        <AppLink
          type="bold"
          to="/basket"
          onClick={toggleMenu}
        >
          Корзина
        </AppLink>

        <AppLink
          type="bold"
          to="/sing-up"
          onClick={toggleMenu}
        >
          Войти
        </AppLink>
      </nav>
    </>
  )
}
