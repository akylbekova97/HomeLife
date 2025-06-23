import { AppButton } from 'shared/ui/AppButton/AppButton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Text, Title } from 'shared/ui/Text'

import s from './ErrorScreen.module.scss'

export function ErrorScreen() {
  return (
    <div className={s.container}>
      <Title size="xl-36">Ошибка 404</Title>
      <Text>
        Возможно, запрошенная страница временно недоступона или удалена
      </Text>
      <AppLink to="/">
        <AppButton variant="button">Перейти на главную</AppButton>
      </AppLink>
    </div>
  )
}
