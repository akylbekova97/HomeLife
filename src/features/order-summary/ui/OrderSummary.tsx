import { basketData } from 'pages/basket/api'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Text, Title } from 'shared/ui/Text'

import s from './OrderSummary.module.scss'

export function OrderSummary() {
  const totalPrice = basketData.reduce((acc, item) => {
    const price = parseInt(item.price, 10) || 0
    return acc + price
  }, 0)

  return (
    <div className={s.container}>
      <Title size="md-20">Сумма заказов</Title>
      <Text>товары: {basketData.length}</Text>

      <hr />

      <Title size="sm-18">Итого: {totalPrice.toLocaleString()} сом</Title>

      <AppButton variant="button">Подтвердить заказа</AppButton>
    </div>
  )
}
