import { AppButton } from 'shared/ui/AppButton/AppButton'
import { AppLink } from 'shared/ui/AppLink/AppLink'

import s from './PersonalNavigarion.module.scss'

export function PersonalNavigation() {
  return (
    <nav className={s.container}>
      <AppLink to="/">Главная</AppLink>
      <AppLink to="catalog">Продукты</AppLink>
      <AppLink to="#">Корзина</AppLink>
      <AppLink to="#">
        <AppButton variant="button">Зарегистрироваться</AppButton>{' '}
      </AppLink>
    </nav>
  )
}
