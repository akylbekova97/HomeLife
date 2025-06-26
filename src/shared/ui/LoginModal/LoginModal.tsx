import { useNavigate } from 'react-router-dom'

import { AppButton } from '../AppButton/AppButton'
import { Title } from '../Text'

import s from './LoginModal.module.scss'

export function LoginModal() {
  const navigate = useNavigate()
  return (
    <div className={s.login}>
      <Title size="md-28">Авторизация прошла успешно!</Title>
      <AppButton
        onClick={() => navigate('/')}
        variant="button"
      >
        Войти
      </AppButton>
    </div>
  )
}
