import { useNavigate } from 'react-router-dom'

import { basketData } from 'pages/basket/api'

import { TotalAmount } from 'features/total-amount'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Text, Title } from 'shared/ui/Text'

import s from './OrderSummary.module.scss'

interface Props {
  link?: string
}

export function OrderSummary({ link }: Props) {
  const navigate = useNavigate()

  return (
    <div className={s.container}>
      <Title size="md-20">Сумма заказов</Title>
      <Text>товары: {basketData.length}</Text>

      <hr />

      <TotalAmount />

      <AppButton
        type="submit"
        onClick={() => link && navigate(link)}
        variant="button"
      >
        Подтвердить заказа
      </AppButton>
    </div>
  )
}
