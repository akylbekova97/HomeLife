import { AppLink } from 'shared/ui/AppLink/AppLink'

import s from './HomeLink.module.scss'

export function HomeLink() {
  return (
    <div className={s.link}>
      <AppLink size="sm-16">Телевизоры</AppLink>
      <AppLink size="sm-16">Бытовая техника</AppLink>
      <AppLink size="sm-16">Встраиваемая бытовая техника</AppLink>
      <AppLink size="sm-16">Мелкая бытовая техника</AppLink>
    </div>
  )
}
