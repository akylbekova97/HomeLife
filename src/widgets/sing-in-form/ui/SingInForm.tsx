import { type FormEvent, useState } from 'react'

import { SingInHeader } from 'entities/auth-components'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text'

import s from './SingInForm.module.scss'

interface Props {
  onSubmit: (data: { email: string; password: string }) => void
}

export function SingInForm({ onSubmit }: Props) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      setError('Неправильный логин или пароль.')
      return
    }

    setError(null)
    onSubmit?.({ email, password })

    setEmail('')
    setPassword('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={s.container}
    >
      <SingInHeader />

      {error && <Text color="red">{error}</Text>}

      <Input
        type="email"
        placeholder="Ваш Email *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Ваш пароль*"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <AppButton
        type="submit"
        variant="button"
      >
        Войти
      </AppButton>
    </form>
  )
}
