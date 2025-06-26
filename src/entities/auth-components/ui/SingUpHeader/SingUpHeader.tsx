import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Text, Title } from 'shared/ui/Text'

import s from './SingUpHeader.module.scss'

export function SingUpHeader() {
  return (
    <div className={s.singUpHeader}>
      <Title
        className={s.title}
        size="md-28"
      >
        Зарегистрироваться
      </Title>
      <Text>
        У вас уже есть учетная запись?
        <AppLink
          to="/sing-in"
          size="sm-16"
          color="blue"
        >
          Войти
        </AppLink>
      </Text>
    </div>
  )
}
