import { type FormEvent, useState } from 'react'

import { FormInput, SingUpHeader } from 'entities/auth-components'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import type { ErrorTypes, SignUpDatatypes, SingUpTypes } from '../types'

import s from './SingUpForm.module.scss'

export function SingUpForm({ onSubmit }: SingUpTypes) {
  const [formData, setFormData] = useState<SignUpDatatypes>({
    userName: '',
    email: '',
    phone: '',
    password: '',
    wholesale: false,
  })

  const [error, setError] = useState<ErrorTypes>({
    nameError: null,
    emailError: null,
    phoneError: null,
    passwordError: null,
  })

  const handleChange = (name: keyof SignUpDatatypes) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = name === 'wholesale' ? e.target.checked : e.target.value
      setFormData((prev) => ({ ...prev, [name]: value }))
      setError({
        nameError: null,
        emailError: null,
        phoneError: null,
        passwordError: null,
      })
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.userName.trim() === '') {
      setError((prev) => ({ ...prev, nameError: 'заполните полю' }))
      return
    } else if (formData.email.trim() === '') {
      setError((prev) => ({ ...prev, emailError: 'заполните полю' }))
      return
    } else if (formData.phone.length === 0) {
      setError((prev) => ({ ...prev, phoneError: 'заполните полю' }))
      return
    } else if (formData.password.length < 6) {
      setError((prev) => ({
        ...prev,
        passwordError: 'Пароль должен быть не менее 6 символов',
      }))
      return
    }

    onSubmit(formData)

    setFormData({
      userName: '',
      email: '',
      phone: '',
      password: '',
      wholesale: false,
    })

    setError({
      nameError: null,
      emailError: null,
      phoneError: null,
      passwordError: null,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={s.container}
    >
      <SingUpHeader />

      <FormInput
        error={error.nameError}
        placeholder="Имя пользователя*"
        value={formData.userName}
        onChange={handleChange('userName')}
      />

      <FormInput
        error={error.emailError}
        placeholder="Ваш Email*"
        type="email"
        value={formData.email}
        onChange={handleChange('email')}
      />

      <FormInput
        error={error.phoneError}
        placeholder="Ваш номер*"
        type="number"
        value={formData.phone}
        onChange={handleChange('phone')}
      />

      <FormInput
        error={error.passwordError}
        placeholder="Ваш пароль*"
        type="password"
        value={formData.password}
        onChange={handleChange('password')}
      />

      <div className={s.checkbox}>
        <FormInput
          type="checkbox"
          checked={formData.wholesale}
          onChange={handleChange('wholesale')}
        />
        <label> Я оптовый покупатель</label>
      </div>

      <AppButton
        type="submit"
        variant="button"
      >
        Зарегистрироваться
      </AppButton>
    </form>
  )
}
