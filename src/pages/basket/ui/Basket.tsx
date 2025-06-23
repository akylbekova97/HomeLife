import { BasketList } from 'widgets/basket-list'

import { OrderSummary } from 'features/order-summary'

import { Title } from 'shared/ui/Text'

import { basketData } from '../api'

import s from './Basket.module.scss'

export function Basket() {
  return (
    <div className={s.container}>
      <Title>Просмотр корзины</Title>
      <div className={s.flex}>
        <BasketList data={basketData} />
        <OrderSummary link="/order" />
      </div>
    </div>
  )
}
