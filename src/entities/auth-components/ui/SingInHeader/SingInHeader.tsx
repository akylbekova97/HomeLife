import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Text, Title } from 'shared/ui/Text'

import s from './SingInHeader.module.scss'

export function SingInHeader() {
  return (
    <div className={s.singInHeader}>
      <Title size="md-28">Войти</Title>
      <Text>
        У вас нет учетной записи?
        <AppLink
          to="/sing-up"
          size="sm-16"
          color="blue"
        >
          Создать здесь
        </AppLink>
      </Text>
    </div>
  )
}
