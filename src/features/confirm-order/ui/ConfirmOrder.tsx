import { type FormEvent, useState } from 'react'

import { TotalAmount } from 'features/total-amount'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Input } from 'shared/ui/Input/Input'
import { Space } from 'shared/ui/Space/Space'
import { Text, Title } from 'shared/ui/Text'

import s from './ConfirmOrder.module.scss'

export interface FormData {
  name: string
  address: string
  comment: string
  paymentMethod: 'cash' | 'card' | null
}

interface Props {
  onSubmit?: (data: FormData) => void
}

export function ConfirmOrder({ onSubmit }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    comment: '',
    paymentMethod: null,
  })

  const [error, setError] = useState<null | string>(null)

  const handleChange = (
    name: keyof Omit<FormData, 'paymentMethod'>,
    value: string,
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError(null)
  }

  const handlePaymentChange = (method: 'cash' | 'card') => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }))
    setError(null)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.name.trim() == '' || formData.address.trim() === '') {
      setError('Заполните поля')
      return
    } else if (formData.paymentMethod === null) {
      setError('Выберите способ оплаты')
      return
    }

    onSubmit?.(formData)

    setFormData({
      name: '',
      address: '',
      comment: '',
      paymentMethod: null,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={s.container}
    >
      <div className={s.content}>
        {error && <Text color="red">{error}</Text>}

        <Input
          placeholder="Ваше Имя*"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <Input
          placeholder="Адрес дома и название улицы*"
          value={formData.address}
          onChange={(e) => handleChange('address', e.target.value)}
        />
        <Input
          placeholder="Крыло, подъезд, этаж и тд (необязательно)"
          value={formData.comment}
          onChange={(e) => handleChange('comment', e.target.value)}
        />

        <Space h={10} />

        <Title size="md-20">Выберите способ оплаты:</Title>

        <label>
          <input
            type="radio"
            name="payment"
            checked={formData.paymentMethod === 'cash'}
            onChange={() => handlePaymentChange('cash')}
          />
          Наличными при получении
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            checked={formData.paymentMethod === 'card'}
            onChange={() => handlePaymentChange('card')}
          />
          Картой банка при получении
        </label>
      </div>

      <div className={s.sum}>
        <TotalAmount />
        <AppButton
          type="submit"
          variant="button"
        >
          Подтвердить заказ
        </AppButton>
      </div>
    </form>
  )
}
