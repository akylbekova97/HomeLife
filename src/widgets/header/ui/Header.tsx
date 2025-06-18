import { BurgerMenu } from 'features/burger-menu'
import { PersonalNavigation } from 'features/personal-navigation'
import { Search } from 'features/search'

import logo from 'shared/assets/logo.svg'

import s from './Header.module.scss'

export function Header() {
  return (
    <header className={s.container}>
      <img
        src={logo}
        alt="logo"
      />

      <Search />

      <PersonalNavigation />

      <BurgerMenu />
    </header>
  )
}
