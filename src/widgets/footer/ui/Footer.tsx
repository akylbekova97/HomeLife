import { Contacts } from 'entities/contacts'

import { Title } from 'shared/ui/Text'

import s from './footer.module.scss'

export function Footer() {
  return (
    <footer className={s.footer}>
      <Title size="lg-30">Наши контакты:</Title>
      <Contacts />
    </footer>
  )
}
